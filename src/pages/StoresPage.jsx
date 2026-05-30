import { Link } from 'react-router-dom';
import { RiMapPinLine, RiPhoneLine, RiTimeLine, RiWhatsappLine } from 'react-icons/ri';
import { useStoreStatus } from '../utils/time';

export default function StoresPage() {
  const isOpen = useStoreStatus();

  return (
    <div style={{ minHeight: '100vh', background: 'var(--cream-base)' }}>
      <div className="shop-header">
        <div className="container">
          <div className="breadcrumb">
            <Link to="/">Home</Link> / <span style={{ color: 'var(--cream-base)' }}>Our Store</span>
          </div>
          <h1>Visit Our Store</h1>
          <p className="product-count">Kothapeta, Guntur</p>
        </div>
      </div>

      <div className="container section">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40, alignItems: 'start' }}>
          {/* Store Info */}
          <div className="store-card">
            <h3 style={{ fontSize: 24 }}>Murali Sweets, Kothapeta</h3>
            <div className="ornate-divider" style={{ justifyContent: 'flex-start', margin: '12px 0 24px' }}>
              <div className="ornate-diamond" />
            </div>

            <div className="store-info-row">
              <RiMapPinLine size={18} />
              <div>
                <strong>Address</strong><br />
                Opposite Shivalayam Temple,<br />
                Main Road, Kothapeta,<br />
                Guntur, Andhra Pradesh, India
              </div>
            </div>

            <div className="store-info-row">
              <RiPhoneLine size={18} />
              <div>
                <strong>Phone</strong><br />
                9985650303 · 9000036461
              </div>
            </div>

            <div className="store-info-row">
              <RiTimeLine size={18} />
              <div>
                <strong>Hours</strong><br />
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 4 }}>
                  <span>10:00 AM – 10:00 PM (Open Daily)</span>
                  <span className={`live-status-badge ${isOpen ? 'open' : 'closed'}`}>
                    <span className="dot"></span>
                    {isOpen ? 'Open Now' : 'Closed'}
                  </span>
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', gap: 12, marginTop: 24, flexWrap: 'wrap' }}>
              <a
                href="https://wa.me/919985650303"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
              >
                <RiWhatsappLine size={16} /> WhatsApp Us
              </a>
              <a
                href="https://maps.app.goo.gl/JZ1nnMhZv7jbMeGQ9"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                📍 Get Directions
              </a>
            </div>
          </div>

          {/* Map */}
          <div style={{ borderRadius: 'var(--radius-card)', overflow: 'hidden', border: '1px solid var(--cream-deep)' }}>
            <iframe
              title="Murali Sweets Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3829.8!2d80.44!3d16.3!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sKothapeta%2C+Guntur!5e0!3m2!1sen!2sin!4v1"
              width="100%"
              height="420"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        {/* Order Options */}
        <div style={{ marginTop: 48, textAlign: 'center' }}>
          <h3 style={{ marginBottom: 24 }}>How to Order</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20, maxWidth: 700, margin: '0 auto' }}>
            <div style={{ background: 'var(--cream-warm)', padding: 24, borderRadius: 'var(--radius-card)' }}>
              <div style={{ fontSize: 32, marginBottom: 8 }}>💬</div>
              <h4 style={{ fontSize: 15, marginBottom: 6 }}>WhatsApp</h4>
              <p style={{ fontSize: 12, color: 'var(--text-secondary)' }}>Order directly via WhatsApp for home delivery in Guntur</p>
            </div>
            <div style={{ background: 'var(--cream-warm)', padding: 24, borderRadius: 'var(--radius-card)' }}>
              <div style={{ fontSize: 32, marginBottom: 8 }}>🍽️</div>
              <h4 style={{ fontSize: 15, marginBottom: 6 }}>Swiggy</h4>
              <p style={{ fontSize: 12, color: 'var(--text-secondary)' }}>Find us on Swiggy for quick delivery within Guntur</p>
            </div>
            <div style={{ background: 'var(--cream-warm)', padding: 24, borderRadius: 'var(--radius-card)' }}>
              <div style={{ fontSize: 32, marginBottom: 8 }}>🍕</div>
              <h4 style={{ fontSize: 15, marginBottom: 6 }}>Zomato</h4>
              <p style={{ fontSize: 12, color: 'var(--text-secondary)' }}>Order your favourites through Zomato</p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .container .section > div:first-child { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
