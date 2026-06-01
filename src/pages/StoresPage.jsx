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
        <div className="stores-grid">
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
                <a href="https://maps.app.goo.gl/JZ1nnMhZv7jbMeGQ9" target="_blank" rel="noopener noreferrer" className="address-link">
                  Opposite Shivalayam Temple,<br />
                  Main Road, Kothapeta,<br />
                  Guntur, Andhra Pradesh, India
                </a>
              </div>
            </div>

            <div className="store-info-row">
              <RiPhoneLine size={18} />
              <div>
                <strong>Phone</strong><br />
                <a href="tel:+919985650303" className="tel-link">9985650303</a> · <a href="tel:+919000036461" className="tel-link">9000036461</a>
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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3829.824250221376!2d80.4477142!3d16.2998483!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4a75d04f54a7c3%3A0x86781a3589a434a5!2sMURALI%20SWEETS!5e0!3m2!1sen!2sin!4v1"
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
          <div className="how-to-order-grid">
            <div style={{ background: 'var(--cream-warm)', padding: 24, borderRadius: 'var(--radius-card)', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div style={{
                width: 48,
                height: 48,
                borderRadius: '50%',
                background: '#25D366',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 4px 10px rgba(37, 211, 102, 0.25)',
                marginBottom: 16
              }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" fill="white" />
                </svg>
              </div>
              <h4 style={{ fontSize: 15, marginBottom: 6 }}>WhatsApp</h4>
              <p style={{ fontSize: 12, color: 'var(--text-secondary)' }}>Order directly via WhatsApp for home delivery in Guntur</p>
            </div>
            <div style={{ background: 'var(--cream-warm)', padding: 24, borderRadius: 'var(--radius-card)', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div style={{
                width: 48,
                height: 48,
                borderRadius: '50%',
                background: '#FC8019',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 4px 10px rgba(252, 128, 25, 0.25)',
                marginBottom: 16,
                overflow: 'hidden'
              }}>
                <img src="/images/swiggy.png" alt="Swiggy" style={{ width: '60%', height: '60%', objectFit: 'contain', filter: 'brightness(0) invert(1)' }} />
              </div>
              <h4 style={{ fontSize: 15, marginBottom: 6 }}>Swiggy</h4>
              <p style={{ fontSize: 12, color: 'var(--text-secondary)' }}>Find us on Swiggy for quick delivery within Guntur</p>
            </div>
            <div style={{ background: 'var(--cream-warm)', padding: 24, borderRadius: 'var(--radius-card)', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div style={{
                width: 48,
                height: 48,
                borderRadius: '50%',
                background: '#CB202D',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 4px 10px rgba(203, 32, 45, 0.25)',
                marginBottom: 16,
                overflow: 'hidden'
              }}>
                <img src="/images/zomato.png" alt="Zomato" style={{ width: '80%', height: '80%', objectFit: 'contain' }} />
              </div>
              <h4 style={{ fontSize: 15, marginBottom: 6 }}>Zomato</h4>
              <p style={{ fontSize: 12, color: 'var(--text-secondary)' }}>Order your favourites through Zomato</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
