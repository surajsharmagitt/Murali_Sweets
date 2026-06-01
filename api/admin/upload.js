// Polyfill WebSocket for Node.js environments (required by supabase-js in Node < 22)
if (typeof global !== 'undefined' && !global.WebSocket) {
  global.WebSocket = class {};
}

import { requireAdmin } from '../lib/verify-admin.js'

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

  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const { fileData, fileName, fileType } = req.body || {}

    if (!fileData || !fileName || !fileType) {
      return res.status(400).json({ error: 'Missing fileData, fileName, or fileType' })
    }

    // Decode Base64
    const buffer = Buffer.from(fileData, 'base64')

    // Create Admin client
    const supabase = await getAdminClient()

    // Self-healing: Check and create public products bucket if not exists
    const { data: buckets, error: bucketError } = await supabase.storage.listBuckets()
    if (bucketError) {
      console.error('Bucket list error:', bucketError)
      return res.status(500).json({ error: 'Failed to access storage buckets' })
    }

    if (!buckets?.find(b => b.name === 'products')) {
      const { error: createBucketError } = await supabase.storage.createBucket('products', {
        public: true,
        fileSizeLimit: 5242880, // 5MB
      })
      if (createBucketError) {
        console.error('Bucket creation failed:', createBucketError)
        return res.status(500).json({ error: 'Failed to initialize storage bucket' })
      }
    }

    // Generate unique filename
    const cleanName = slugify(fileName.substring(0, fileName.lastIndexOf('.')) || fileName)
    const ext = fileName.substring(fileName.lastIndexOf('.')) || '.jpg'
    const filePath = `uploads/${Date.now()}-${cleanName}${ext}`

    // Upload to Supabase Storage
    const { data, error: uploadError } = await supabase.storage
      .from('products')
      .upload(filePath, buffer, {
        contentType: fileType,
        upsert: true
      })

    if (uploadError) {
      console.error('File upload error:', uploadError)
      return res.status(500).json({ error: 'Failed to upload file to storage' })
    }

    // Retrieve public URL
    const { data: { publicUrl } } = supabase.storage
      .from('products')
      .getPublicUrl(filePath)

    return res.status(200).json({ success: true, url: publicUrl })
  } catch (err) {
    console.error('Upload API Error:', err)
    return res.status(500).json({ error: 'Internal server error during upload' })
  }
}
