import { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { banners as defaultBanners, testimonials as defaultTestimonials } from '../data/collections.js';

const SettingsContext = createContext();

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

export function SettingsProvider({ children }) {
  const [settings, setSettings] = useState(DEFAULT_SETTINGS);
  const [loading, setLoading] = useState(true);

  const fetchSettings = useCallback(async () => {
    try {
      // Use timestamp query param to avoid cache
      const response = await fetch(`/api/settings?t=${Date.now()}`);
      if (response.ok) {
        const data = await response.json();
        if (data && data.settings) {
          setSettings(data.settings);
        }
      }
    } catch (err) {
      console.warn('Failed to fetch site settings, using defaults:', err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchSettings();
  }, [fetchSettings]);

  return (
    <SettingsContext.Provider value={{ settings, loading, reloadSettings: fetchSettings }}>
      {children}
    </SettingsContext.Provider>
  );
}

export function useSettings() {
  const ctx = useContext(SettingsContext);
  if (!ctx) throw new Error('useSettings must be used within SettingsProvider');
  return ctx;
}
