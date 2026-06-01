import { useCart } from '../../context/CartContext';
import { useSettings } from '../../context/SettingsContext';
import { getImage } from '../../data/products';
import { RiCloseLine } from 'react-icons/ri';
import { IoLogoWhatsapp } from 'react-icons/io5';

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, itemCount, total, getWhatsAppMessage } = useCart();
  const { settings } = useSettings();

  return (
    <>
      <div className={`cart-overlay ${isOpen ? 'open' : ''}`} onClick={closeCart} />
      <div className={`cart-drawer ${isOpen ? 'open' : ''}`}>
        <div className="cart-drawer-header">
          <h3 className="cart-drawer-title">Cart ({itemCount})</h3>
          <button onClick={closeCart} aria-label="Close cart">
            <RiCloseLine size={24} />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="cart-empty">
            <div className="cart-empty-icon">🛒</div>
            <p>Your cart is empty</p>
            <button className="btn btn-primary" onClick={closeCart} style={{ marginTop: 16 }}>
              Continue Shopping
            </button>
          </div>
        ) : (
          <>
            <div className="cart-items">
              {items.map(item => (
                <div key={item.key} className="cart-item">
                  <div className="cart-item-image">
                    <img src={item.product.image_url || getImage(item.product.name, item.product.category)} alt={item.product.name} />
                  </div>
                  <div className="cart-item-info">
                    <p className="cart-item-name">{item.product.name}</p>
                    <p className="cart-item-variant">{item.variant.weight}</p>
                    <div className="cart-item-bottom">
                      <div className="quantity-control" style={{ transform: 'scale(0.85)', transformOrigin: 'left' }}>
                        <button onClick={() => updateQuantity(item.key, item.quantity - 1)}>−</button>
                        <span>{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.key, item.quantity + 1)}>+</button>
                      </div>
                      <span className="cart-item-price">₹{item.variant.price * item.quantity}</span>
                    </div>
                    <button className="cart-item-remove" onClick={() => removeItem(item.key)}>Remove</button>
                  </div>
                </div>
              ))}
            </div>

            <div className="cart-drawer-footer">
              <div className="cart-total">
                <span>Subtotal</span>
                <span>₹{total}</span>
              </div>
              <div className="cart-footer-actions">
                <a
                  href={`https://wa.me/${settings.contacts?.whatsapp || '919985650303'}?text=${getWhatsAppMessage()}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp"
                  style={{ width: '100%' }}
                >
                  <IoLogoWhatsapp size={18} /> Checkout via WhatsApp
                </a>
                <button className="btn btn-outline btn-sm" onClick={closeCart} style={{ width: '100%' }}>
                  Continue Shopping
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}

