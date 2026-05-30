import { useState } from 'react';
import { getImage } from '../../data/products';
import { useCart } from '../../context/CartContext';
import { IoLogoWhatsapp } from 'react-icons/io5';
import { RiHistoryLine, RiLeafLine, RiStarLine, RiStarFill } from 'react-icons/ri';

export default function ProductQuickView({ product, isOpen, onClose }) {
  const [selectedVariant, setSelectedVariant] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const { addItem } = useCart();

  if (!isOpen || !product) return null;

  const image = getImage(product.name, product.category);
  const variant = product.variants[selectedVariant];

  const badgeClass = product.badge === 'Bestseller' ? 'badge-bestseller'
    : product.badge === 'Hot' ? 'badge-hot'
    : product.badge === 'New' ? 'badge-new'
    : '';

  const handleAdd = () => {
    addItem(product, variant, quantity);
    onClose();
    setQuantity(1);
    setSelectedVariant(0);
  };

  const whatsappMsg = encodeURIComponent(
    `Hi Murali Sweets! I'd like to order:\n\n${product.name} (${variant.weight}) × ${quantity} = ₹${variant.price * quantity}\n\nPlease confirm availability.`
  );

  return (
    <div className="quickview-overlay" onClick={onClose}>
      <div className="quickview-modal" onClick={e => e.stopPropagation()}>
        <button className="quickview-close" onClick={onClose} aria-label="Close">✕</button>
        
        <div className="quickview-grid">
          <div className="quickview-image">
            <img src={image} alt={product.name} />
          </div>
          
          <div className="quickview-info">
            <div style={{ display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '8px', flexWrap: 'wrap' }}>
              {product.category && (
                <span className="quickview-badge" style={{ background: 'var(--cream-deep)', color: 'var(--maroon-primary)', marginBottom: 0 }}>
                  {product.category}
                </span>
              )}
              {product.badge && (
                <span className={`quickview-badge ${badgeClass}`} style={{ marginBottom: 0 }}>
                  {product.badge}
                </span>
              )}
            </div>
            
            <h2 className="quickview-title">{product.name}</h2>
            <p className="quickview-price">Rs.{variant.price}.00</p>
            <p className="quickview-desc">{product.description}</p>

            {/* Weight Variants */}
            <div className="quickview-variants">
              <label>Weight / Quantity</label>
              <div className="variant-options">
                {product.variants.map((v, i) => (
                  <button
                    key={i}
                    className={`variant-btn ${selectedVariant === i ? 'selected' : ''}`}
                    onClick={() => { setSelectedVariant(i); }}
                  >
                    {v.weight}: ₹{v.price}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="quickview-quantity">
              <label style={{ fontSize: 12, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Qty</label>
              <div className="quantity-control">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>−</button>
                <span>{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)}>+</button>
              </div>
            </div>

            {/* Actions */}
            <div className="quickview-actions" style={{ marginBottom: '24px' }}>
              <button className="btn btn-primary btn-lg" onClick={handleAdd} style={{ width: '100%' }}>
                Add to Cart: ₹{variant.price * quantity}
              </button>
              <a
                href={`https://wa.me/919985650303?text=${whatsappMsg}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
                style={{ width: '100%' }}
              >
                <IoLogoWhatsapp size={18} /> Order on WhatsApp
              </a>
              <div style={{ display: 'flex', gap: '8px' }}>
                <a
                  href="https://www.swiggy.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-swiggy"
                  style={{ flex: 1, padding: '10px 14px', fontSize: '12px' }}
                >
                  Order on Swiggy
                </a>
                <a
                  href="https://www.zomato.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-zomato"
                  style={{ flex: 1, padding: '10px 14px', fontSize: '12px' }}
                >
                  Order on Zomato
                </a>
              </div>
            </div>

            {/* Tradition Section (In Indian Tradition) */}
            {product.tradition && (
              <div className="quickview-tradition">
                <div className="quickview-tradition-header">
                  <RiHistoryLine size={18} />
                  <span>In Indian Tradition</span>
                </div>
                <p className="quickview-tradition-text">{product.tradition}</p>
              </div>
            )}

            {/* Ingredients Section */}
            {product.ingredients && product.ingredients.length > 0 && (
              <div style={{ marginBottom: '20px' }}>
                <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', fontWeight: '600', color: 'var(--maroon-primary)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '8px' }}>
                  <RiLeafLine size={16} style={{ color: '#1e7e34' }} />
                  Ingredients
                </h4>
                <div className="quickview-ingredients-pills">
                  {product.ingredients.map((ing, i) => (
                    <span key={i} className="quickview-ingredient-pill">
                      {ing}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Reviews Section */}
            {product.reviews && product.reviews.length > 0 && (
              <div className="quickview-reviews-section">
                <div className="quickview-reviews-header">
                  <RiStarFill size={18} style={{ color: 'var(--gold-primary)' }} />
                  <span>Customer Reviews</span>
                </div>
                <div className="quickview-reviews-list">
                  {product.reviews.map((rev, i) => (
                    <div key={i} className="quickview-review-card">
                      <div className="quickview-review-meta">
                        <span className="quickview-review-author">
                          {rev.name} {rev.location ? `(${rev.location})` : ''}
                        </span>
                        <span className="quickview-review-stars">
                          {Array.from({ length: 5 }, (_, idx) => (
                            idx < rev.stars ? <RiStarFill key={idx} style={{ color: 'var(--gold-primary)' }} /> : <RiStarLine key={idx} style={{ color: 'var(--gold-primary)' }} />
                          ))}
                        </span>
                      </div>
                      <p className="quickview-review-text">"{rev.text}"</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Review Link */}
            <a
              href="https://share.google/OED84N1iqFOomLzmv"
              target="_blank"
              rel="noopener noreferrer"
              className="quickview-review-link"
            >
              ✍️ Write a review for this product
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
