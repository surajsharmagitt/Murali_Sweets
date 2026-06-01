/**
 * One-time migration script: Copy hardcoded products to Supabase.
 *
 * Usage:
 *   1. Set environment variables (or create a .env file):
 *      export VITE_SUPABASE_URL=https://your-project.supabase.co
 *      export SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
 *
 *   2. Run: node scripts/migrate-products.js
 *
 * This script reads the product data from src/data/products.js,
 * resolves images using the getImage() function, maps fields
 * to match the Supabase schema, and inserts them in batches.
 */

import { createClient } from '@supabase/supabase-js'
import { products, categories } from '../src/data/products.js'
import { getImage } from '../src/data/products.js'

// Polyfill WebSocket for Node.js environments (required by supabase-js in Node < 22)
if (typeof global !== 'undefined' && !global.WebSocket) {
  global.WebSocket = class {};
}

const SUPABASE_URL = process.env.VITE_SUPABASE_URL
const SERVICE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY

if (!SUPABASE_URL || !SERVICE_KEY) {
  console.error('❌ Missing environment variables!')
  console.error('   Set VITE_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY')
  process.exit(1)
}

const supabase = createClient(SUPABASE_URL, SERVICE_KEY)

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
}

async function migrate() {
  console.log(`\n🍬 Migrating ${products.length} products to Supabase...\n`)

  // Transform products to Supabase schema
  const rows = products.map((p, index) => {
    // Resolve image
    const imageUrl = getImage(p.name, p.category)

    // Extract variant prices
    let price250 = null, price500 = null, price1kg = null, basePrice = 0
    if (p.variants && p.variants.length > 0) {
      for (const v of p.variants) {
        const w = v.weight?.toLowerCase()
        if (w === '250g') price250 = v.price
        if (w === '500g') price500 = v.price
        if (w === '1kg') price1kg = v.price
      }
      // Base price = smallest variant or first variant
      basePrice = price250 || p.variants[0]?.price || 0
    }

    return {
      name: p.name,
      slug: slugify(p.name),
      description: p.description || null,
      category: p.category,
      subcategory: null,
      base_price: basePrice,
      price_250g: price250,
      price_500g: price500,
      price_1kg: price1kg,
      image_url: imageUrl,
      badge: p.badge || null,
      is_active: true,
      ingredients: p.ingredients || [],
      tradition_text: p.tradition || null,
      display_order: index,
      variants: p.variants || [],
      reviews: p.reviews || [],
    }
  })

  // Insert in batches of 50
  const BATCH_SIZE = 50
  let inserted = 0
  let errors = 0

  for (let i = 0; i < rows.length; i += BATCH_SIZE) {
    const batch = rows.slice(i, i + BATCH_SIZE)
    const { data, error } = await supabase
      .from('products')
      .upsert(batch, { onConflict: 'slug' })
      .select()

    if (error) {
      console.error(`❌ Batch ${Math.floor(i / BATCH_SIZE) + 1} failed:`, error.message)
      errors += batch.length

      // Try inserting one by one to identify the problem
      for (const row of batch) {
        const { error: singleErr } = await supabase
          .from('products')
          .upsert(row, { onConflict: 'slug' })

        if (singleErr) {
          console.error(`   ❌ Failed: ${row.name} — ${singleErr.message}`)
          errors++
        } else {
          inserted++
        }
      }
    } else {
      inserted += data?.length || batch.length
      console.log(`   ✅ Batch ${Math.floor(i / BATCH_SIZE) + 1}: ${batch.length} products`)
    }
  }

  console.log(`\n${'═'.repeat(50)}`)
  console.log(`✅ Migrated: ${inserted} products`)
  if (errors > 0) console.log(`❌ Errors: ${errors}`)
  console.log(`${'═'.repeat(50)}\n`)

  // Verify count
  const { count } = await supabase
    .from('products')
    .select('*', { count: 'exact', head: true })

  console.log(`📊 Total products in Supabase: ${count}\n`)
}

migrate().catch(err => {
  console.error('Migration failed:', err)
  process.exit(1)
})
