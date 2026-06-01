// Polyfill WebSocket for Node.js environments (required by supabase-js in Node < 22)
if (typeof global !== 'undefined' && !global.WebSocket) {
  global.WebSocket = class {};
}

import { requireAdmin } from '../lib/verify-admin.js';

async function getAdminClient() {
  const { createClient } = await import('@supabase/supabase-js');
  return createClient(
    process.env.VITE_SUPABASE_URL,
    process.env.SUPABASE_SERVICE_ROLE_KEY
  );
}

export default async function handler(req, res) {
  if (!requireAdmin(req, res)) return;

  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const supabase = await getAdminClient();

    // Fetch last 100 activity logs, ordered by newest first
    const { data, error } = await supabase
      .from('activity_logs')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(100);

    if (error) {
      console.error('Audit logs fetch error:', error);
      // If table doesn't exist, return empty logs array gracefully instead of throwing 500
      if (error.code === 'PGRST116' || error.message.includes('relation "activity_logs" does not exist')) {
        return res.status(200).json({ logs: [] });
      }
      return res.status(500).json({ error: 'Failed to fetch activity logs' });
    }

    return res.status(200).json({ logs: data || [] });
  } catch (err) {
    console.error('Logs API error:', err);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
