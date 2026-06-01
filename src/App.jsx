import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { SettingsProvider, useSettings } from './context/SettingsContext';
import { useEffect } from 'react';
import AnnouncementBar from './components/layout/AnnouncementBar';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import CartDrawer from './components/product/CartDrawer';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import GiftingPage from './pages/GiftingPage';
import StoresPage from './pages/StoresPage';
import { IoLogoWhatsapp } from 'react-icons/io5';

// Admin pages
import AdminLogin from './pages/admin/AdminLogin';
import AdminDashboard from './pages/admin/AdminDashboard';
import AdminAddProduct from './pages/admin/AdminAddProduct';
import AdminEditProduct from './pages/admin/AdminEditProduct';
import AdminSettings from './pages/admin/AdminSettings';
import AdminReviews from './pages/admin/AdminReviews';
import AdminHistory from './pages/admin/AdminHistory';


function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function Layout() {
  const { settings } = useSettings();
  return (
    <>
      <ScrollToTop />
      <AnnouncementBar />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/gifting" element={<GiftingPage />} />
          <Route path="/stores" element={<StoresPage />} />
        </Routes>
      </main>
      <Footer />
      <CartDrawer />

      {/* Floating WhatsApp — Global */}
      <a
        href={`https://wa.me/${settings.contacts?.whatsapp || '919985650303'}`}
        target="_blank"
        rel="noopener noreferrer"
        className="floating-whatsapp"
        aria-label="Order on WhatsApp"
      >
        <IoLogoWhatsapp size={28} />
      </a>
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <SettingsProvider>
        <CartProvider>
          <Routes>
            {/* Admin routes — render WITHOUT the public site layout */}
            <Route path="/admin" element={<AdminLogin />} />
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
            <Route path="/admin/dashboard/add" element={<AdminAddProduct />} />
            <Route path="/admin/dashboard/edit/:id" element={<AdminEditProduct />} />
            <Route path="/admin/dashboard/settings" element={<AdminSettings />} />
            <Route path="/admin/dashboard/reviews" element={<AdminReviews />} />
            <Route path="/admin/dashboard/logs" element={<AdminHistory />} />

            {/* Public routes — render WITH the main site layout */}
            <Route path="/*" element={<Layout />} />
          </Routes>
        </CartProvider>
      </SettingsProvider>
    </BrowserRouter>
  );
}


