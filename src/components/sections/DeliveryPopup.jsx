import { useState, useEffect } from 'react';
import { IoLogoWhatsapp } from 'react-icons/io5';

export default function DeliveryPopup() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="popup-overlay" onClick={handleClose}>
      <div className="popup-container" onClick={e => e.stopPropagation()}>
        <button className="popup-close" onClick={handleClose} aria-label="Close">✕</button>
        
        {/* Top decorative garland */}
        <div className="popup-zigzag" />

        {/* Overlapping sweets and nuts illustrations */}
        <img src="/images/popup_sweets_left.png" className="popup-decor-left" alt="Traditional Sweets" />
        <img src="/images/popup_sweets_right.png" className="popup-decor-right" alt="Murali Sweets Box" />
        <img src="/images/popup_nuts_bottom.png" className="popup-decor-bottom" alt="Dry Fruits" />

        <div className="popup-content">
          <h2 className="popup-title">Choose How You'd Like to Order</h2>
          
          <div className="popup-grid">
            {/* Left Column — WhatsApp */}
            <div className="popup-option">
              <h3>Delivery in Guntur</h3>
              <p>Get fresh sweets delivered from our outlet in Kothapeta, Guntur</p>
              <a
                href="https://wa.me/919985650303?text=Hi%20Murali%20Sweets!%20I'd%20like%20to%20place%20an%20order%20for%20delivery%20in%20Guntur."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp-pill"
              >
                <IoLogoWhatsapp size={18} />
                Order Now On WhatsApp
              </a>
              <p className="delivery-note">Free delivery for orders above ₹999</p>
            </div>

            {/* Right Column — Swiggy / Zomato */}
            <div className="popup-option">
              <h3>Order via Apps</h3>
              <p>Order through your favourite food delivery app for quick delivery</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12, width: '100%' }}>
                <a
                  href="https://www.swiggy.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-swiggy-pill"
                >
                  <img src="/images/swiggy.png" alt="Swiggy" />
                  Order on Swiggy
                </a>
                <a
                  href="https://www.zomato.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-zomato-pill"
                >
                  <img src="/images/zomato.png" alt="Zomato" />
                  Order on Zomato
                </a>
              </div>
              <p className="delivery-note">Available in Guntur only</p>
            </div>
          </div>
        </div>

        {/* Bottom decorative garland */}
        <div className="popup-zigzag" style={{ transform: 'rotate(180deg)' }} />
      </div>
    </div>
  );
}

