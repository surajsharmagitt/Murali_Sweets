import { useState, useEffect } from 'react';
import { IoLogoWhatsapp } from 'react-icons/io5';
import { useSettings } from '../../context/SettingsContext';

export default function DeliveryPopup() {
  const { settings } = useSettings();
  const [show, setShow] = useState(false);

  const popupSettings = settings.popup || {
    show: true,
    title: "Choose How You'd Like to Order",
    description: "Get fresh sweets delivered from our outlet in Kothapeta, Guntur",
    free_delivery_limit: 999
  };

  useEffect(() => {
    if (!popupSettings.show) {
      setShow(false);
      return;
    }

    // Read local storage to avoid showing popup too frequently if dismissed
    const dismissed = localStorage.getItem('delivery_popup_dismissed');
    const dismissedTime = dismissed ? parseInt(dismissed) : 0;
    const now = Date.now();

    // Show popup if not dismissed or dismissed more than 1 day ago
    if (now - dismissedTime > 24 * 60 * 60 * 1000) {
      const timer = setTimeout(() => setShow(true), 1500);
      return () => clearTimeout(timer);
    }
  }, [popupSettings.show]);

  const handleClose = () => {
    setShow(false);
    localStorage.setItem('delivery_popup_dismissed', Date.now().toString());
  };

  if (!show || !popupSettings.show) return null;

  return (
    <div className="popup-overlay" onClick={handleClose}>
      <div className="popup-container" onClick={e => e.stopPropagation()}>
        <button className="popup-close" onClick={handleClose} aria-label="Close">✕</button>
        
        {/* Top decorative garland */}
        <div className="popup-zigzag" />

        <div className="popup-content">
          <h2 className="popup-title">{popupSettings.title}</h2>
          
          <div className="popup-grid">
            {/* Left Column — WhatsApp */}
            <div className="popup-option">
              <h3>Delivery in Guntur</h3>
              <p>{popupSettings.description}</p>
              <a
                href={`https://wa.me/${settings.contacts?.whatsapp || '919985650303'}?text=${encodeURIComponent("Hi Murali Sweets! I'd like to place an order for delivery in Guntur.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp-pill"
              >
                <IoLogoWhatsapp size={18} />
                Order Now On WhatsApp
              </a>
              <p className="delivery-note">Free delivery for orders above ₹{popupSettings.free_delivery_limit}</p>
            </div>

            {/* Right Column — Swiggy / Zomato */}
            <div className="popup-option">
              <h3>Order via Apps</h3>
              <p>Order through your favourite food delivery app for quick delivery</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12, width: '100%' }}>
                <a
                  href={settings.contacts?.swiggy || "https://www.swiggy.com/"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-swiggy-pill"
                >
                  <img src="/images/swiggy.png" alt="Swiggy" />
                  Order on Swiggy
                </a>
                <a
                  href={settings.contacts?.zomato || "https://www.zomato.com/"}
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


