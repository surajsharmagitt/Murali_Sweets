import crypto from 'crypto'

/**
 * Server-side admin token verification.
 * Used by all /api/admin/* serverless functions.
 * Token format: base64(payload).hmac_sha256_signature
 */

/** Verify a token's signature and expiry */
export function verifyAdminToken(token) {
  if (!token) return false
  try {
    const secret = process.env.ADMIN_SESSION_SECRET
    if (!secret) return false

    const parts = token.split('.')
    if (parts.length !== 2) return false

    const [payloadB64, signature] = parts

    // Verify HMAC signature
    const expectedSig = crypto
      .createHmac('sha256', secret)
      .update(payloadB64)
      .digest('hex')

    if (signature !== expectedSig) return false

    // Check expiry
    const payload = JSON.parse(Buffer.from(payloadB64, 'base64').toString())
    return payload.exp && payload.exp > Date.now()
  } catch {
    return false
  }
}

/** Extract token from Authorization header or cookies */
export function getTokenFromRequest(req) {
  const authHeader = req.headers.authorization || req.headers['Authorization']
  if (authHeader && authHeader.startsWith('Bearer ')) {
    return authHeader.slice(7)
  }
  const cookies = req.headers.cookie || ''
  const match = cookies.match(/admin_session=([^;]+)/)
  return match ? match[1] : null
}

/**
 * Auth guard for admin API routes.
 * Call at the top of every /api/admin/* handler.
 * Returns false and sends 401 if not authenticated.
 */
export function requireAdmin(req, res) {
  const token = getTokenFromRequest(req)
  if (!verifyAdminToken(token)) {
    res.status(401).json({ error: 'Unauthorized — invalid or expired session' })
    return false
  }
  return true
}
