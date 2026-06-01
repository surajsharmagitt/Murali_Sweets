/**
 * Client-side admin auth utilities.
 * Token format: base64(payload).hmac_signature
 * Payload: { exp: timestamp, iat: timestamp }
 */

const STORAGE_KEY = 'admin_session'

/** Get the admin session token from localStorage */
export function getAdminToken() {
  try {
    return localStorage.getItem(STORAGE_KEY)
  } catch {
    return null
  }
}

/** Store the admin session token in localStorage */
export function setAdminToken(token) {
  localStorage.setItem(STORAGE_KEY, token)
}

/** Clear the admin session (logout) */
export function clearAdminSession() {
  localStorage.removeItem(STORAGE_KEY)
}

/** Check if a token is valid (not expired) — client-side only */
export function isSessionValid(token) {
  if (!token) return false
  try {
    const parts = token.split('.')
    if (parts.length !== 2) return false
    const payload = JSON.parse(atob(parts[0]))
    return payload.exp && payload.exp > Date.now()
  } catch {
    return false
  }
}

/** Check if the user is currently logged in */
export function isLoggedIn() {
  return isSessionValid(getAdminToken())
}

/**
 * Make an authenticated admin API request.
 * Automatically attaches the Bearer token header.
 */
export async function adminFetch(url, options = {}) {
  const token = getAdminToken()
  if (!token) throw new Error('Not authenticated')

  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`,
    ...(options.headers || {}),
  }

  const res = await fetch(url, { ...options, headers })

  if (res.status === 401) {
    clearAdminSession()
    window.location.href = '/admin'
    throw new Error('Session expired')
  }

  return res
}
