// Polyfill WebSocket for Node.js environments (required by supabase-js in Node < 22)
if (typeof global !== 'undefined' && !global.WebSocket) {
  global.WebSocket = class {};
}

import { banners as defaultBanners, testimonials as defaultTestimonials } from '../src/data/collections.js';

const DEFAULT_SETTINGS = {
  contacts: {
    phone_1: '9985650303',
    phone_2: '9000036461',
    whatsapp: '919985650303',
    swiggy: 'https://www.swiggy.com/',
    zomato: 'https://www.zomato.com/',
    instagram: 'https://instagram.com',
    facebook: 'https://facebook.com'
  },
  banners: defaultBanners,
  testimonials: defaultTestimonials,
  popup: {
    show: true,
    title: "Choose How You'd Like to Order",
    description: "Get fresh sweets delivered from our outlet in Kothapeta, Guntur",
    free_delivery_limit: 999
  },
  announcements: [
    "FREE DELIVERY IN GUNTUR ON ORDERS ABOVE \u20b9999",
    "MADE FRESH DAILY WITH 100% PURE GHEE",
    "100+ VARIETIES OF SWEETS & NAMKEEN"
  ],
  story: {
    tradition_title: "In Indian Tradition",
    tradition_text: "Cashews and pure ghee have always been symbols of prosperity and celebratory feast in Indian kitchens. Our Kaju Sweets are prepared following traditional recipes passed down through generations.",
    heritage_subtitle: "Our Heritage",
    heritage_title: "A Legacy of Pure Sweetness",
    heritage_text_1: "At Murali Sweets, every piece is made with a devotion that goes beyond recipes. Named after Krishna's beloved bansuri, the flute that filled Vrindavan with melody, our sweets carry that same spirit: pure, soulful, and crafted with love.",
    heritage_text_2: "Nestled in the heart of Kothapeta, Guntur, Murali Sweets has been a trusted name for generations. Every sweet that leaves our kitchen carries forward a tradition of uncompromising quality and authentic taste.",
    heritage_text_3: "We use only the finest ingredients: pure desi ghee, fresh milk, premium dry fruits, and hand-ground spices. Our artisans wake before dawn to prepare over 100 varieties fresh each morning, ensuring every bite delivers the same rich, authentic flavour that our families have cherished for decades.",
    heritage_image: "/images/krishna-logo.jpg"
  },
  gifting: {
    title: "Premium Handcrafted Gift Boxes",
    description: "Make your celebrations extra special with our premium handcrafted gift boxes. Select from our wide range of traditional sweets, rich dry fruits, and crunchy savories."
  }
};

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
    const { createClient } = await import('@supabase/supabase-js');
    const supabase = createClient(
      process.env.VITE_SUPABASE_URL,
      process.env.VITE_SUPABASE_ANON_KEY
    );

    // Fetch settings from Supabase
    const { data, error } = await supabase
      .from('site_settings')
      .select('*');

    if (error) {
      // If table doesn't exist yet or other query error, return default settings gracefully
      console.warn('Supabase site_settings fetch error, using defaults:', error.message);
      return res.status(200).json({ settings: DEFAULT_SETTINGS, source: 'code_defaults' });
    }

    const settings = { ...DEFAULT_SETTINGS };
    
    // Map database settings onto defaults
    if (data && data.length > 0) {
      data.forEach(item => {
        settings[item.key] = item.value;
      });
      return res.status(200).json({ settings, source: 'database' });
    }

    // Self-healing: if database settings table is empty, auto-seed defaults using the admin service role client
    try {
      const adminClient = createClient(
        process.env.VITE_SUPABASE_URL,
        process.env.SUPABASE_SERVICE_ROLE_KEY
      );
      
      const seedData = Object.keys(DEFAULT_SETTINGS).map(key => ({
        key,
        value: DEFAULT_SETTINGS[key]
      }));

      await adminClient.from('site_settings').upsert(seedData);
      console.log('Successfully seeded default website settings to Supabase');
    } catch (seedErr) {
      console.error('Failed to auto-seed website settings:', seedErr.message);
    }

    return res.status(200).json({ settings: DEFAULT_SETTINGS, source: 'code_defaults_seeded' });
  } catch (err) {
    console.error('Settings API error:', err);
    return res.status(200).json({ settings: DEFAULT_SETTINGS, error: err.message, source: 'fallback_error' });
  }
}
