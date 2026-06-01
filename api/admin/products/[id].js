// Polyfill WebSocket for Node.js environments (required by supabase-js in Node < 22)
if (typeof global !== 'undefined' && !global.WebSocket) {
  global.WebSocket = class {};
}

import { requireAdmin } from '../../lib/verify-admin.js'

/**
 * GET    /api/admin/products/:id  — Fetch single product
 * PUT    /api/admin/products/:id  — Update a product
 * DELETE /api/admin/products/:id  — Soft-delete (set is_active = false)
 * All require valid admin session.
 */

async function getAdminClient() {
  const { createClient } = await import('@supabase/supabase-js')
  return createClient(
    process.env.VITE_SUPABASE_URL,
    process.env.SUPABASE_SERVICE_ROLE_KEY
  )
}

export default async function handler(req, res) {
  if (!requireAdmin(req, res)) return

  const { id } = req.query

  if (!id) {
    return res.status(400).json({ error: 'Product ID is required' })
  }

  const supabase = await getAdminClient()

  try {
    // ─── GET: Single product ───
    if (req.method === 'GET') {
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .eq('id', id)
        .single()

      if (error) {
        console.error('Supabase fetch error:', error)
        return res.status(404).json({ error: 'Product not found' })
      }

      return res.status(200).json({ product: data })
    }

    // ─── PUT: Update product ───
    if (req.method === 'PUT') {
      const body = req.body || {}

      // Validate provided fields
      if (body.name !== undefined && (!body.name || !body.name.trim())) {
        return res.status(400).json({ error: 'Product name cannot be empty' })
      }
      if (body.name && body.name.length > 100) {
        return res.status(400).json({ error: 'Product name must be under 100 characters' })
      }
      if (body.base_price !== undefined && parseInt(body.base_price) < 10) {
        return res.status(400).json({ error: 'Base price must be at least ₹10' })
      }
      if (body.image_url && !body.image_url.startsWith('http') && !body.image_url.startsWith('/')) {
        return res.status(400).json({ error: 'Image URL must start with http or /' })
      }

      // Build update object — only include fields that were provided
      const updateData = {}
      const allowedFields = [
        'name', 'description', 'category', 'subcategory', 'base_price',
        'price_250g', 'price_500g', 'price_1kg', 'image_url', 'badge',
        'is_active', 'ingredients', 'tradition_text', 'display_order',
        'variants', 'reviews',
      ]

      for (const field of allowedFields) {
        if (body[field] !== undefined) {
          updateData[field] = body[field]
        }
      }

      // Re-generate slug if name changed
      if (body.name) {
        updateData.slug = body.name
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, '-')
          .replace(/^-|-$/g, '')
      }

      if (Object.keys(updateData).length === 0) {
        return res.status(400).json({ error: 'No fields to update' })
      }

      const { data, error } = await supabase
        .from('products')
        .update(updateData)
        .eq('id', id)
        .select()
        .single()

      if (error) {
        console.error('Supabase update error:', error)
        if (error.code === 'PGRST116') {
          return res.status(404).json({ error: 'Product not found' })
        }
        if (error.code === '23505') {
          return res.status(400).json({ error: 'A product with this name already exists' })
        }
        return res.status(500).json({ error: 'Failed to update product' })
      }

      // Log this update
      try {
        let action = 'UPDATE_PRODUCT';
        let details = `Updated product: "${data.name}"`;
        if (updateData.is_active === true) {
          action = 'RESTORE_PRODUCT';
          details = `Restored product: "${data.name}"`;
        } else if (updateData.is_active === false) {
          action = 'DELETE_PRODUCT';
          details = `Soft-deleted product: "${data.name}"`;
        }
        await supabase.from('activity_logs').insert({
          action,
          details,
          performed_by: 'Admin'
        });
      } catch (logErr) {
        console.error('Failed to log product update:', logErr.message);
      }

      return res.status(200).json({ product: data })
    }

    // ─── DELETE: Soft-delete ───
    if (req.method === 'DELETE') {
      const { data, error } = await supabase
        .from('products')
        .update({ is_active: false })
        .eq('id', id)
        .select()
        .single()

      if (error) {
        console.error('Supabase delete error:', error)
        if (error.code === 'PGRST116') {
          return res.status(404).json({ error: 'Product not found' })
        }
        return res.status(500).json({ error: 'Failed to delete product' })
      }

      // Log this deletion
      try {
        await supabase.from('activity_logs').insert({
          action: 'DELETE_PRODUCT',
          details: `Soft-deleted product: "${data.name}"`,
          performed_by: 'Admin'
        });
      } catch (logErr) {
        console.error('Failed to log product deletion:', logErr.message);
      }

      return res.status(200).json({ success: true, product: data })
    }

    res.setHeader('Allow', 'GET, PUT, DELETE')
    return res.status(405).json({ error: 'Method not allowed' })
  } catch (err) {
    console.error('Product API error:', err)
    return res.status(500).json({ error: 'Internal server error' })
  }
}
