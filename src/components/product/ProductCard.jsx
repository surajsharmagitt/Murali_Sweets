import { getImage } from '../../data/products';
import { useCart } from '../../context/CartContext';
import { RiEyeLine, RiShoppingBag3Line } from 'react-icons/ri';

export default function ProductCard({ product, onQuickView }) {
  const { addItem } = useCart();
  const image = product.image_url || getImage(product.name, product.category);

  const badgeClass = product.badge === 'Bestseller' ? 'badge-bestseller'
    : product.badge === 'Hot' ? 'badge-hot'
    : product.badge === 'New' ? 'badge-new'
    : '';

  return (
    <div
      className="product-card"
      id={`product-${product.id}`}
      onClick={() => onQuickView && onQuickView(product)}
      style={{ cursor: 'pointer' }}
    >
      <div className="product-card-image">
        <img src={image} alt={product.name} loading="lazy" />
        {product.badge && (
          <span className={`product-card-badge ${badgeClass}`}>{product.badge}</span>
        )}
        <div className="product-card-actions">
          <button
            className="btn btn-primary btn-sm"
            style={{ flex: 1, fontSize: 11, padding: '8px 12px' }}
            onClick={(e) => {
              e.stopPropagation();
              onQuickView && onQuickView(product);
            }}
          >
            <RiEyeLine size={14} /> Quick View
          </button>
          <button
            className="btn btn-primary btn-sm"
            style={{ padding: '8px 12px' }}
            onClick={(e) => {
              e.stopPropagation();
              addItem(product, product.variants[0]);
            }}
            aria-label="Add to cart"
          >
            <RiShoppingBag3Line size={14} />
          </button>
        </div>
      </div>
      <div className="product-card-body">
        <h3 className="product-card-name">{product.name}</h3>
        <p className="product-card-price">Rs.{product.variants[0].price}.00</p>
      </div>
    </div>
  );
}
