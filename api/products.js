// Polyfill WebSocket for Node.js environments (required by supabase-js in Node < 22)
if (typeof global !== 'undefined' && !global.WebSocket) {
  global.WebSocket = class {};
}

/**
 * GET /api/products — Public endpoint (no auth required)
 * Returns only active products. Respects Supabase RLS.
 * Optional query: ?category=Kalakand
 * Cached for 60 seconds on Vercel edge.
 */
export default async function handler(req, res) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET')
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const { createClient } = await import('@supabase/supabase-js')
    const supabase = createClient(
      process.env.VITE_SUPABASE_URL,
      process.env.VITE_SUPABASE_ANON_KEY
    )

    let query = supabase
      .from('products')
      .select('*')
      .eq('is_active', true)
      .order('display_order', { ascending: true })
      .order('name', { ascending: true })

    const { category } = req.query || {}
    if (category && category !== 'All') {
      query = query.eq('category', category)
    }

    const { data, error } = await query

    if (error) {
      console.error('Supabase fetch error:', error)
      return res.status(500).json({ error: 'Failed to fetch products' })
    }

    // Disable caching to ensure instant updates when products are added/edited/deleted
    res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate')
    return res.status(200).json({ products: data || [] })
  } catch (err) {
    console.error('Products API error:', err)
    return res.status(500).json({ error: 'Internal server error', message: err.message, stack: err.stack })
  }
}
