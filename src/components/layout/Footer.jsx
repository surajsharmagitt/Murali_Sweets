import { Link } from 'react-router-dom';
import { RiInstagramLine, RiPhoneLine, RiMapPinLine, RiTimeLine, RiMailLine } from 'react-icons/ri';
import { useStoreStatus } from '../../utils/time';

export default function Footer() {
  const isOpen = useStoreStatus();

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          {/* Logo & About */}
          <div className="footer-logo-section">
            <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: 12 }}>
              <div className="header-logo-icon">
                <span>श्री</span>
              </div>
              <div>
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: 18, fontWeight: 700, color: 'var(--cream-base)' }}>
                  MURALI SWEETS
                </div>
                <div style={{ fontSize: 9, fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold-primary)' }}>
                  Har Bite Pure Delight
                </div>
              </div>
            </Link>
            <p className="footer-about">
              Guntur's trusted traditional sweet shop in Kothapeta. Handcrafted with pure ghee and premium ingredients since generations. 
              100+ varieties of sweets and namkeen made fresh daily.
            </p>
            <div className="footer-social">
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <RiInstagramLine size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="footer-heading">Our Collection</h4>
            <div className="footer-links">
              <Link to="/shop?category=Kaju+Sweets">Kaju Sweets</Link>
              <Link to="/shop?category=Kalakand">Kalakand</Link>
              <Link to="/shop?category=Mysurpak">Mysurpak</Link>
              <Link to="/shop?category=Bengali+Sweets">Bengali Sweets</Link>
              <Link to="/shop?category=Halwa">Halwa & Laddu</Link>
              <Link to="/shop?category=Hot%20%26%20Savory">Mixtures & Snacks</Link>
              <Link to="/shop?category=Ariselu">Andhra Specials</Link>
            </div>
          </div>

          {/* Help */}
          <div>
            <h4 className="footer-heading">Quick Links</h4>
            <div className="footer-links">
              <Link to="/shop">Shop All</Link>
              <Link to="/gifting">Gifting</Link>
              <Link to="/stores">Our Store</Link>
              <a href="https://share.google/OED84N1iqFOomLzmv" target="_blank" rel="noopener noreferrer">Write a Review</a>
              <a href="https://wa.me/919985650303" target="_blank" rel="noopener noreferrer">Order on WhatsApp</a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="footer-heading">Contact Us</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 13, color: 'rgba(255,250,245,0.6)' }}>
                <RiMapPinLine size={16} style={{ flexShrink: 0, marginTop: 2, color: 'var(--gold-primary)' }} />
                <a href="https://maps.app.goo.gl/JZ1nnMhZv7jbMeGQ9" target="_blank" rel="noopener noreferrer" className="address-link">
                  Opposite Shivalayam Temple,<br />Main Road, Kothapeta,<br />Guntur, Andhra Pradesh, India
                </a>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 13, color: 'rgba(255,250,245,0.6)' }}>
                <RiPhoneLine size={16} style={{ flexShrink: 0, color: 'var(--gold-primary)' }} />
                <span>
                  <a href="tel:+919985650303" className="tel-link">9985650303</a> · <a href="tel:+919000036461" className="tel-link">9000036461</a>
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 13, color: 'rgba(255,250,245,0.6)' }}>
                <RiTimeLine size={16} style={{ flexShrink: 0, color: 'var(--gold-primary)' }} />
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
                  <span>10:00 AM – 10:00 PM Everyday</span>
                  <span className={`live-status-badge ${isOpen ? 'open' : 'closed'}`} style={{ transform: 'scale(0.9)', transformOrigin: 'left' }}>
                    <span className="dot"></span>
                    {isOpen ? 'Open Now' : 'Closed'}
                  </span>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 13, color: 'rgba(255,250,245,0.6)' }}>
                <RiMailLine size={16} style={{ flexShrink: 0, color: 'var(--gold-primary)' }} />
                <span>muralisweets@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Murali Sweets. All Rights Reserved. Made with ❤️ in Guntur.</p>
        </div>
      </div>
    </footer>
  );
}
