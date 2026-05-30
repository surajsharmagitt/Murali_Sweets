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
        {/* Close Button */}
        <button className="popup-close" onClick={handleClose} aria-label="Close">✕</button>
        
        {/* Decorative Top Garland (Toran) */}
        <div className="popup-garland-border popup-garland-top" />

        {/* Floating Sweets & Fruits (Absolute positioning, overlapping edges) */}
        <img
          src="/images/popup_sweets_left.png"
          alt="Traditional Sweets"
          className="popup-float-image popup-float-left"
        />
        <img
          src="/images/popup_sweets_right.png"
          alt="Sweets Gift Box"
          className="popup-float-image popup-float-right"
        />
        <img
          src="/images/popup_nuts_bottom.png"
          alt="Dry Fruits Bowl"
          className="popup-float-image popup-float-bottom"
        />

        {/* Main Content */}
        <div className="popup-content">
          <h2 className="popup-title">Choose How You'd Like to Order</h2>
          
          <div className="popup-grid-wrapper">
            <div className="popup-grid">
              {/* Left Column — WhatsApp Delivery */}
              <div className="popup-column">
                <h3 className="popup-column-title">Delivery in Guntur</h3>
                <p className="popup-column-desc">
                  Get fresh sweets delivered from our outlets in Guntur. Free delivery on orders above ₹999!
                </p>
                <a
                  href="https://wa.me/919985650303?text=Hi%20Murali%20Sweets!%20I'd%20like%20to%20place%20an%20order%20for%20delivery%20in%20Guntur."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-popup-maroon-pill"
                >
                  <IoLogoWhatsapp size={20} />
                  Order Now On WhatsApp
                </a>
                <p className="popup-delivery-note">Delivery within hours</p>
              </div>

              {/* Vertical Separator Line */}
              <div className="popup-vertical-divider" />

              {/* Right Column — Swiggy / Zomato */}
              <div className="popup-column">
                <h3 className="popup-column-title">Order via Apps</h3>
                <p className="popup-column-desc">
                  Order through your favourite food delivery app for instant delivery at your doorstep.
                </p>
                
                <div className="popup-app-buttons">
                  <a
                    href="https://www.swiggy.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-popup-app btn-popup-swiggy"
                  >
                    <img src="/images/swiggy.png" alt="Swiggy" className="popup-btn-logo" />
                    Order on Swiggy
                  </a>
                  <a
                    href="https://www.zomato.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-popup-app btn-popup-zomato"
                  >
                    <img src="/images/zomato.png" alt="Zomato" className="popup-btn-logo" />
                    Order on Zomato
                  </a>
                </div>
                
                <p className="popup-delivery-note">Available in Guntur only</p>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Bottom Garland (Toran, rotated 180deg) */}
        <div className="popup-garland-border popup-garland-bottom" />
      </div>
    </div>
  );
}
