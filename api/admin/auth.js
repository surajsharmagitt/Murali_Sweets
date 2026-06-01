import crypto from 'crypto'

/**
 * POST /api/admin/auth
 * Verifies the admin password and returns a signed session token.
 * Rate-limited: 5 failed attempts per 10 minutes per IP.
 */

// In-memory rate limiter (resets when serverless function cold-starts)
const failedAttempts = new Map()
const MAX_ATTEMPTS = 5
const WINDOW_MS = 10 * 60 * 1000 // 10 minutes

function getClientIP(req) {
  return (
    req.headers['x-forwarded-for']?.split(',')[0]?.trim() ||
    req.headers['x-real-ip'] ||
    'unknown'
  )
}

function isRateLimited(ip) {
  const record = failedAttempts.get(ip)
  if (!record) return false
  if (Date.now() > record.resetAt) {
    failedAttempts.delete(ip)
    return false
  }
  return record.count >= MAX_ATTEMPTS
}

function recordFailure(ip) {
  const record = failedAttempts.get(ip)
  if (!record || Date.now() > record.resetAt) {
    failedAttempts.set(ip, { count: 1, resetAt: Date.now() + WINDOW_MS })
  } else {
    record.count++
  }
}

export default function handler(req, res) {
  // Only POST allowed
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const ip = getClientIP(req)

    // Check rate limit
    if (isRateLimited(ip)) {
      return res.status(429).json({
        error: 'Too many failed attempts. Please try again in 10 minutes.',
      })
    }

    const { password } = req.body || {}

    if (!password) {
      return res.status(400).json({ error: 'Password is required' })
    }

    // Validate environment
    const adminPassword = process.env.ADMIN_PASSWORD
    const secret = process.env.ADMIN_SESSION_SECRET

    if (!adminPassword || !secret) {
      console.error('Missing ADMIN_PASSWORD or ADMIN_SESSION_SECRET env vars')
      return res.status(500).json({ error: 'Server configuration error' })
    }

    // Check password
    if (password !== adminPassword) {
      recordFailure(ip)
      return res.status(401).json({ success: false, message: 'Incorrect password' })
    }

    // Password correct — generate HMAC token with 7-day expiry
    const payload = {
      exp: Date.now() + 7 * 24 * 60 * 60 * 1000,
      iat: Date.now(),
    }

    const payloadB64 = Buffer.from(JSON.stringify(payload)).toString('base64')
    const signature = crypto
      .createHmac('sha256', secret)
      .update(payloadB64)
      .digest('hex')

    const token = `${payloadB64}.${signature}`

    // Clear failed attempts for this IP
    failedAttempts.delete(ip)

    return res.status(200).json({ success: true, token })
  } catch (err) {
    console.error('Auth error:', err)
    return res.status(500).json({ error: 'Internal server error' })
  }
}
