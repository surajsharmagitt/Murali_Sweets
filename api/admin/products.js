// Polyfill WebSocket for Node.js environments (required by supabase-js in Node < 22)
if (typeof global !== 'undefined' && !global.WebSocket) {
  global.WebSocket = class {};
}

import { requireAdmin } from '../lib/verify-admin.js'

/**
 * GET  /api/admin/products  — Fetch ALL products (including inactive)
 * POST /api/admin/products  — Create a new product
 * Both require valid admin session.
 */

async function getAdminClient() {
  const { createClient } = await import('@supabase/supabase-js')
  return createClient(
    process.env.VITE_SUPABASE_URL,
    process.env.SUPABASE_SERVICE_ROLE_KEY
  )
}

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
}

export default async function handler(req, res) {
  // Auth check
  if (!requireAdmin(req, res)) return

  const supabase = await getAdminClient()

  try {
    // ─── GET: List all products ───
    if (req.method === 'GET') {
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .order('display_order', { ascending: true })
        .order('created_at', { ascending: false })

      if (error) {
        console.error('Supabase fetch error:', error)
        return res.status(500).json({ error: 'Failed to fetch products' })
      }

      return res.status(200).json({ products: data || [] })
    }

    // ─── POST: Create new product ───
    if (req.method === 'POST') {
      const body = req.body || {}

      // Validate required fields
      if (!body.name || !body.name.trim()) {
        return res.status(400).json({ error: 'Product name is required' })
      }
      if (body.name.length > 100) {
        return res.status(400).json({ error: 'Product name must be under 100 characters' })
      }
      if (!body.category || !body.category.trim()) {
        return res.status(400).json({ error: 'Category is required' })
      }
      if (!body.base_price || parseInt(body.base_price) < 10) {
        return res.status(400).json({ error: 'Base price is required (minimum ₹10)' })
      }
      if (parseInt(body.base_price) > 100000) {
        return res.status(400).json({ error: 'Base price cannot exceed ₹1,00,000' })
      }
      if (body.image_url && !body.image_url.startsWith('http') && !body.image_url.startsWith('/')) {
        return res.status(400).json({ error: 'Image URL must start with http or /' })
      }

      const basePrice = parseInt(body.base_price)

      const productData = {
        name: body.name.trim(),
        slug: slugify(body.name),
        description: body.description?.trim() || null,
        category: body.category.trim(),
        subcategory: body.subcategory?.trim() || null,
        base_price: basePrice,
        price_250g: body.price_250g ? parseInt(body.price_250g) : basePrice,
        price_500g: body.price_500g ? parseInt(body.price_500g) : basePrice * 2,
        price_1kg: body.price_1kg ? parseInt(body.price_1kg) : basePrice * 4,
        image_url: body.image_url?.trim() || null,
        badge: body.badge || null,
        is_active: body.is_active !== undefined ? body.is_active : true,
        ingredients: Array.isArray(body.ingredients) ? body.ingredients : [],
        tradition_text: body.tradition_text?.trim() || null,
        display_order: body.display_order ? parseInt(body.display_order) : 0,
        variants: Array.isArray(body.variants) ? body.variants : [],
        reviews: Array.isArray(body.reviews) ? body.reviews : [],
      }

      const { data, error } = await supabase
        .from('products')
        .insert(productData)
        .select()
        .single()

      if (error) {
        console.error('Supabase insert error:', error)
        if (error.code === '23505') {
          return res.status(400).json({ error: 'A product with this name already exists' })
        }
        return res.status(500).json({ error: 'Failed to create product' })
      }

      // Log this creation
      try {
        await supabase.from('activity_logs').insert({
          action: 'CREATE_PRODUCT',
          details: `Created new product: "${productData.name}" (Category: ${productData.category})`,
          performed_by: 'Admin'
        });
      } catch (logErr) {
        console.error('Failed to log product creation:', logErr.message);
      }

      return res.status(201).json({ product: data })
    }

    res.setHeader('Allow', 'GET, POST')
    return res.status(405).json({ error: 'Method not allowed' })
  } catch (err) {
    console.error('Products API error:', err)
    return res.status(500).json({ error: 'Internal server error' })
  }
}
