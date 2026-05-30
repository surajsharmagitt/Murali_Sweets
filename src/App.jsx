import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
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

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function Layout() {
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
        href="https://wa.me/919985650303"
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
      <CartProvider>
        <Layout />
      </CartProvider>
    </BrowserRouter>
  );
}
