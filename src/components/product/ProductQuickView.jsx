import { useState } from 'react';
import { getImage } from '../../data/products';
import { useCart } from '../../context/CartContext';
import { IoLogoWhatsapp } from 'react-icons/io5';
import { RiHistoryLine, RiLeafLine, RiStarLine, RiStarFill } from 'react-icons/ri';

const parseWeightToGrams = (weightStr) => {
  const match = weightStr.toLowerCase().match(/^(\d+(?:\.\d+)?)\s*(g|gm|gms|kg|kgs)$/);
  if (!match) return 250;
  const val = parseFloat(match[1]);
  const unit = match[2];
  if (unit.startsWith('k')) {
    return val * 1000;
  }
  return val;
};

export default function ProductQuickView({ product, isOpen, onClose }) {
  const [selectedVariant, setSelectedVariant] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isCustomQty, setIsCustomQty] = useState(false);
  const [customValue, setCustomValue] = useState('250');
  const [customUnit, setCustomUnit] = useState('gm'); // 'gm' or 'kg'
  const { addItem } = useCart();

  if (!isOpen || !product) return null;

  const image = product.image_url || getImage(product.name, product.category);

  const variants = product.variants && product.variants.length > 0
    ? product.variants
    : [
        { weight: '250g', price: product.price_250g || product.base_price || 0 },
        { weight: '500g', price: product.price_500g || (product.base_price ? product.base_price * 2 : 0) },
        { weight: '1kg', price: product.price_1kg || (product.base_price ? product.base_price * 4 : 0) }
      ];

  // Find the smallest variant base price
  const smallestVariant = variants.reduce((smallest, current) => {
    return parseWeightToGrams(current.weight) < parseWeightToGrams(smallest.weight) ? current : smallest;
  }, variants[0]);

  const baseGrams = parseWeightToGrams(smallestVariant.weight);
  const pricePerGram = smallestVariant.price / baseGrams;

  const customValNum = parseFloat(customValue) || 0;
  const calculatedCustomPrice = Math.round(pricePerGram * (customUnit === 'kg' ? customValNum * 1000 : customValNum));

  const variant = isCustomQty ? {
    weight: `${customValue} ${customUnit}`,
    price: calculatedCustomPrice
  } : (variants[selectedVariant] || variants[0]);

  const badgeClass = product.badge === 'Bestseller' ? 'badge-bestseller'
    : product.badge === 'Hot' ? 'badge-hot'
    : product.badge === 'New' ? 'badge-new'
    : '';

  const handleClose = () => {
    setIsCustomQty(false);
    setQuantity(1);
    setSelectedVariant(0);
    setCustomValue('250');
    setCustomUnit('gm');
    onClose();
  };

  const handleAdd = () => {
    addItem(product, variant, quantity);
    handleClose();
  };

  const isAddDisabled = isCustomQty && (!customValue || parseFloat(customValue) <= 0);

  const whatsappMsg = encodeURIComponent(
    `Hi Murali Sweets! I'd like to order:\n\n${product.name} (${variant.weight}) × ${quantity} = ₹${variant.price * quantity}\n\nPlease confirm availability.`
  );

  return (
    <div className="quickview-overlay" onClick={handleClose}>
      <div className="quickview-modal" onClick={e => e.stopPropagation()}>
        <button className="quickview-close" onClick={handleClose} aria-label="Close">✕</button>
        
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
                {variants.map((v, i) => (
                  <button
                    key={i}
                    className={`variant-btn ${!isCustomQty && selectedVariant === i ? 'selected' : ''}`}
                    onClick={() => { setIsCustomQty(false); setSelectedVariant(i); }}
                  >
                    {v.weight}: ₹{v.price}
                  </button>
                ))}
                <button
                  className={`variant-btn ${isCustomQty ? 'selected' : ''}`}
                  onClick={() => setIsCustomQty(true)}
                >
                  Custom Qty
                </button>
              </div>
            </div>

            {isCustomQty && (
              <div className="custom-qty-container" style={{ marginTop: '14px', marginBottom: '14px' }}>
                <label style={{ fontSize: '11px', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block', marginBottom: '8px', color: 'var(--maroon-primary)' }}>
                  Custom Amount
                </label>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <input
                    type="number"
                    min="1"
                    className="custom-qty-input"
                    value={customValue}
                    onChange={(e) => {
                      const val = e.target.value;
                      if (val === '') {
                        setCustomValue('');
                      } else {
                        const parsed = parseFloat(val);
                        setCustomValue(isNaN(parsed) ? '' : Math.max(1, parsed));
                      }
                    }}
                    placeholder="Enter quantity"
                  />
                  {/* AM/PM Switcher styled toggle */}
                  <div className="custom-qty-toggle">
                    <button
                      type="button"
                      className={`toggle-btn ${customUnit === 'gm' ? 'active' : ''}`}
                      onClick={() => setCustomUnit('gm')}
                    >
                      gm
                    </button>
                    <button
                      type="button"
                      className={`toggle-btn ${customUnit === 'kg' ? 'active' : ''}`}
                      onClick={() => setCustomUnit('kg')}
                    >
                      kg
                    </button>
                  </div>
                </div>
                <div className="custom-qty-price-calc">
                  Price: <span style={{ color: 'var(--maroon-primary)', fontWeight: '700' }}>₹{calculatedCustomPrice}</span> <span style={{ fontSize: '11px', color: 'var(--text-muted)' }}>(calculated at base rate)</span>
                </div>
              </div>
            )}

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
              <button className="btn btn-primary btn-lg" onClick={handleAdd} disabled={isAddDisabled} style={{ width: '100%' }}>
                Add to Cart: ₹{variant.price * quantity}
              </button>
              <a
                href={isAddDisabled ? '#' : `https://wa.me/919985650303?text=${whatsappMsg}`}
                target={isAddDisabled ? '_self' : '_blank'}
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
                style={{ width: '100%', pointerEvents: isAddDisabled ? 'none' : 'auto', opacity: isAddDisabled ? 0.6 : 1 }}
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
            {(product.tradition || product.tradition_text) && (
              <div className="quickview-tradition">
                <div className="quickview-tradition-header">
                  <RiHistoryLine size={18} />
                  <span>In Indian Tradition</span>
                </div>
                <p className="quickview-tradition-text">{product.tradition || product.tradition_text}</p>
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
