import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

// Public client — read-only, respects Row Level Security
// Safe to use in client-side React components
export const supabase = createClient(supabaseUrl, supabaseAnonKey)

/**
 * Fetch all active products.
 * Tries the serverless edge-cached API route first (/api/products).
 * Falls back to direct Supabase query if the API route is unavailable (e.g. during local dev server run).
 */
export async function fetchPublicProducts() {
  try {
    const res = await fetch('/api/products')
    const contentType = res.headers.get('content-type') || ''
    
    // If it's HTML, the request was probably rewritten to index.html by Vite's SPA router.
    if (res.ok && contentType.includes('application/json')) {
      const data = await res.json()
      if (data && Array.isArray(data.products)) {
        return data.products
      }
    }
  } catch (err) {
    console.warn('API route /api/products failed or returned non-JSON, falling back to direct Supabase query:', err)
  }

  // Fallback: Query Supabase directly
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .eq('is_active', true)
    .order('display_order', { ascending: true })
    .order('name', { ascending: true })

  if (error) {
    throw error
  }
  return data || []
}

