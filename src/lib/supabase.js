import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

// Public client — read-only, respects Row Level Security
// Safe to use in client-side React components
export const supabase = createClient(supabaseUrl, supabaseAnonKey)
