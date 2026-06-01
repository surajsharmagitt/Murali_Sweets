-- ═══════════════════════════════════════════════════════════
-- MURALI SWEETS — Supabase Database Schema
-- Run this in the Supabase SQL Editor (Dashboard → SQL Editor)
-- ═══════════════════════════════════════════════════════════

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- Products table
CREATE TABLE products (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  slug TEXT UNIQUE,
  description TEXT,
  category TEXT NOT NULL,
  subcategory TEXT,
  price_250g INTEGER,
  price_500g INTEGER,
  price_1kg INTEGER,
  base_price INTEGER NOT NULL,
  image_url TEXT,
  badge TEXT CHECK (badge IN ('Bestseller', 'New', 'Hot', NULL)),
  is_active BOOLEAN DEFAULT true,
  ingredients TEXT[] DEFAULT '{}',
  tradition_text TEXT,
  display_order INTEGER DEFAULT 0,
  -- Extra columns to match the existing product data shape
  variants JSONB DEFAULT '[]',
  reviews JSONB DEFAULT '[]',
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- Auto-update updated_at timestamp on any row change
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER products_updated_at
BEFORE UPDATE ON products
FOR EACH ROW EXECUTE FUNCTION update_updated_at();

-- ── Row Level Security ──
-- Public users (anon key) can only READ active products
-- The service_role key bypasses RLS entirely

ALTER TABLE products ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public can read active products"
ON products FOR SELECT
USING (is_active = true);

CREATE POLICY "Service role has full access"
ON products FOR ALL
USING (true);


-- ═══════════════════════════════════════════════════════════
-- SITE SETTINGS & ACTIVITY LOGS (UPGRADE)
-- ═══════════════════════════════════════════════════════════

-- Website Settings table
CREATE TABLE IF NOT EXISTS site_settings (
  key TEXT PRIMARY KEY,
  value JSONB DEFAULT '{}'::jsonb,
  updated_at TIMESTAMPTZ DEFAULT now()
);

-- Auto-update updated_at on site_settings
CREATE TRIGGER site_settings_updated_at
BEFORE UPDATE ON site_settings
FOR EACH ROW EXECUTE FUNCTION update_updated_at();

-- Activity Logs (Audit log history)
CREATE TABLE IF NOT EXISTS activity_logs (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  action TEXT NOT NULL,
  details TEXT NOT NULL,
  performed_by TEXT DEFAULT 'Admin',
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Enable RLS
ALTER TABLE site_settings ENABLE ROW LEVEL SECURITY;
ALTER TABLE activity_logs ENABLE ROW LEVEL SECURITY;

-- Policies for site_settings
CREATE POLICY "Public can read site settings"
ON site_settings FOR SELECT
USING (true);

CREATE POLICY "Service role has full access to settings"
ON site_settings FOR ALL
USING (true);

-- Policies for activity_logs
CREATE POLICY "Service role has full access to logs"
ON activity_logs FOR ALL
USING (true);

