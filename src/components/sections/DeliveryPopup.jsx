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
        
        {/* Top zigzag */}
        <div className="popup-zigzag" />

        <div className="popup-content">
          <h2 className="popup-title">Choose How You'd Like to Order</h2>
          
          <div className="popup-grid">
            {/* Left — WhatsApp */}
            <div className="popup-option">
              <h3>Delivery in Guntur</h3>
              <p>Get fresh sweets delivered from our outlet in Kothapeta, Guntur</p>
              <a
                href="https://wa.me/919985650303?text=Hi%20Murali%20Sweets!%20I'd%20like%20to%20place%20an%20order%20for%20delivery%20in%20Guntur."
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
                style={{ width: '100%' }}
              >
                <IoLogoWhatsapp size={18} />
                Order Now On WhatsApp
              </a>
              <p className="delivery-note">Delivery within hours</p>
            </div>

            {/* Right — Swiggy/Zomato */}
            <div className="popup-option">
              <h3>Order via Swiggy / Zomato</h3>
              <p>Order through your favourite food delivery app for quick delivery</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                <a
                  href="https://www.swiggy.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-swiggy"
                  style={{ width: '100%' }}
                >
                  🍽️ Order on Swiggy
                </a>
                <a
                  href="https://www.zomato.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-zomato"
                  style={{ width: '100%' }}
                >
                  🍕 Order on Zomato
                </a>
              </div>
              <p className="delivery-note">Available in Guntur only</p>
            </div>
          </div>
        </div>

        {/* Bottom zigzag */}
        <div className="popup-zigzag" style={{ transform: 'rotate(180deg)' }} />
      </div>
    </div>
  );
}
