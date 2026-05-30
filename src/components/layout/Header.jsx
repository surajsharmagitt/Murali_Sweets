import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { RiSearchLine, RiShoppingBag3Line, RiMenuLine, RiCloseLine, RiInstagramLine, RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri';
import { useCart } from '../../context/CartContext';
import { navCategories } from '../../data/products';
import { useStoreStatus } from '../../utils/time';

const ChevronDown = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 4.5L6 7.5L9 4.5" />
  </svg>
);

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const { toggleCart, itemCount } = useCart();
  const location = useLocation();
  const isOpen = useStoreStatus();

  const [expandedGroups, setExpandedGroups] = useState({
    sweets: false,
    andhra: false,
    snacks: false
  });

  const toggleGroup = (group) => {
    setExpandedGroups(prev => ({
      ...prev,
      [group]: !prev[group]
    }));
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setMobileOpen(false); setSearchOpen(false); }, [location]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <>
      <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
        <div className="header-inner">
          {/* Mobile Menu Button */}
          <button className="mobile-menu-btn header-icon-btn" onClick={() => setMobileOpen(true)} aria-label="Menu">
            <RiMenuLine size={22} />
          </button>

          {/* Logo & Live Status */}
          <div className="header-logo-wrapper" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <Link to="/" className="header-logo">
              <div className="header-logo-icon">
                <span>श्री</span>
              </div>
              <div className="header-logo-text">
                <span className="header-logo-name">MURALI SWEETS</span>
                <span className="header-logo-tagline">Har Bite Pure Delight</span>
              </div>
            </Link>
            <div className={`live-status-badge ${isOpen ? 'open' : 'closed'}`}>
              <span className="dot"></span>
              {isOpen ? 'Open Now' : 'Closed'}
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="header-nav">
            <div className="nav-item">
              <Link to="/shop?category=Kaju+Sweets" className="nav-link">
                Sweets <ChevronDown />
              </Link>
              <div className="nav-dropdown">
                {navCategories.sweets.map(cat => (
                  <Link key={cat} to={`/shop?category=${encodeURIComponent(cat)}`}>{cat}</Link>
                ))}
              </div>
            </div>

            <div className="nav-item">
              <Link to="/shop?category=Hot%20%26%20Savory" className="nav-link">
                Snacks & More <ChevronDown />
              </Link>
              <div className="nav-dropdown">
                {navCategories.snacks.map(cat => (
                  <Link key={cat} to={`/shop?category=${encodeURIComponent(cat)}`}>{cat}</Link>
                ))}
              </div>
            </div>

            <div className="nav-item">
              <Link to="/shop?category=Ariselu" className="nav-link">
                Andhra Specials <ChevronDown />
              </Link>
              <div className="nav-dropdown">
                {navCategories.andhra.map(cat => (
                  <Link key={cat} to={`/shop?category=${encodeURIComponent(cat)}`}>{cat}</Link>
                ))}
              </div>
            </div>

            <div className="nav-item">
              <Link to="/gifting" className="nav-link">Gifting</Link>
            </div>

            <div className="nav-item">
              <Link to="/stores" className="nav-link">Our Store</Link>
            </div>
          </nav>

          {/* Right Icons */}
          <div className="header-icons">
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="header-icon-btn" aria-label="Instagram" style={{ display: 'none' }}>
              <RiInstagramLine size={20} />
            </a>
            <button className="header-icon-btn" onClick={() => setSearchOpen(!searchOpen)} aria-label="Search">
              <RiSearchLine size={20} />
            </button>
            <button className="header-icon-btn" onClick={toggleCart} aria-label="Cart">
              <RiShoppingBag3Line size={20} />
              {itemCount > 0 && <span className="cart-count">{itemCount}</span>}
            </button>
          </div>
        </div>
      </header>

      {/* Search Overlay */}
      {searchOpen && <SearchOverlay onClose={() => setSearchOpen(false)} />}

      {/* Mobile Menu */}
      <div className={`mobile-menu-overlay ${mobileOpen ? 'open' : ''}`} onClick={() => setMobileOpen(false)} />
      <div className={`mobile-menu ${mobileOpen ? 'open' : ''}`}>
        <div className="mobile-menu-header">
          <span style={{ fontFamily: 'var(--font-heading)', fontSize: 18, fontWeight: 600 }}>Menu</span>
          <button onClick={() => setMobileOpen(false)} aria-label="Close"><RiCloseLine size={24} /></button>
        </div>
        <div className="mobile-menu-nav">
          <Link to="/" className="mobile-nav-link">Home</Link>
          <Link to="/shop" className="mobile-nav-link">Shop All</Link>

          {/* Sweets Dropdown */}
          <div className="mobile-nav-group-header" onClick={() => toggleGroup('sweets')}>
            <span>Sweets</span>
            {expandedGroups.sweets ? <RiArrowUpSLine size={20} className="mobile-nav-arrow" /> : <RiArrowDownSLine size={20} className="mobile-nav-arrow" />}
          </div>
          {expandedGroups.sweets && (
            <div className="mobile-nav-subcategories">
              {navCategories.sweets.map(cat => (
                <Link key={cat} to={`/shop?category=${encodeURIComponent(cat)}`} className="mobile-nav-link subcategory-link">
                  {cat}
                </Link>
              ))}
            </div>
          )}

          {/* Andhra Specials Dropdown */}
          <div className="mobile-nav-group-header" onClick={() => toggleGroup('andhra')}>
            <span>Andhra Specials</span>
            {expandedGroups.andhra ? <RiArrowUpSLine size={20} className="mobile-nav-arrow" /> : <RiArrowDownSLine size={20} className="mobile-nav-arrow" />}
          </div>
          {expandedGroups.andhra && (
            <div className="mobile-nav-subcategories">
              {navCategories.andhra.map(cat => (
                <Link key={cat} to={`/shop?category=${encodeURIComponent(cat)}`} className="mobile-nav-link subcategory-link">
                  {cat}
                </Link>
              ))}
            </div>
          )}

          {/* Snacks & More Dropdown */}
          <div className="mobile-nav-group-header" onClick={() => toggleGroup('snacks')}>
            <span>Snacks & More</span>
            {expandedGroups.snacks ? <RiArrowUpSLine size={20} className="mobile-nav-arrow" /> : <RiArrowDownSLine size={20} className="mobile-nav-arrow" />}
          </div>
          {expandedGroups.snacks && (
            <div className="mobile-nav-subcategories">
              {navCategories.snacks.map(cat => (
                <Link key={cat} to={`/shop?category=${encodeURIComponent(cat)}`} className="mobile-nav-link subcategory-link">
                  {cat}
                </Link>
              ))}
            </div>
          )}

          <Link to="/gifting" className="mobile-nav-link">Gifting</Link>
          <Link to="/stores" className="mobile-nav-link">Our Store</Link>
        </div>
        <div className="mobile-menu-footer">
          <a href="https://wa.me/919985650303" target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp" style={{ width: '100%' }}>
            💬 Order on WhatsApp
          </a>
          <p style={{ textAlign: 'center', fontSize: 12, color: 'var(--text-muted)', marginTop: 12 }}>
            📞 <a href="tel:+919985650303" className="tel-link">9985650303</a> · <a href="tel:+919000036461" className="tel-link">9000036461</a>
          </p>
        </div>
      </div>
    </>
  );
}

function SearchOverlay({ onClose }) {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/shop?search=${encodeURIComponent(query.trim())}`);
      onClose();
    }
  };

  return (
    <div className="search-overlay" onClick={onClose}>
      <div className="search-container" onClick={e => e.stopPropagation()}>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Search sweets, namkeen, halwa..."
            value={query}
            onChange={e => setQuery(e.target.value)}
            autoFocus
          />
        </form>
        <p style={{ fontSize: 12, color: 'var(--text-muted)', marginTop: 12, textAlign: 'center' }}>
          Press Enter to search or click outside to close
        </p>
      </div>
    </div>
  );
}
