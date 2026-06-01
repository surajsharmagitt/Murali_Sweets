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

  if (req.method !== 'POST' && req.method !== 'PUT') {
    res.setHeader('Allow', 'POST, PUT');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { key, value } = req.body || {};

    if (!key) {
      return res.status(400).json({ error: 'Settings key is required' });
    }

    const supabase = await getAdminClient();

    // Update site_settings key/value
    const { data, error } = await supabase
      .from('site_settings')
      .upsert({ key, value, updated_at: new Date() })
      .select()
      .single();

    if (error) {
      console.error('Settings update error:', error);
      return res.status(500).json({ error: 'Failed to update settings' });
    }

    // Log this activity
    try {
      const displayKey = key.replace(/_/g, ' ').toUpperCase();
      await supabase.from('activity_logs').insert({
        action: 'UPDATE_SETTINGS',
        details: `Updated website settings section: "${displayKey}"`,
        performed_by: 'Admin'
      });
    } catch (logErr) {
      console.error('Failed to write activity log:', logErr.message);
    }

    return res.status(200).json({ success: true, settings: data });
  } catch (err) {
    console.error('Admin settings API error:', err);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
