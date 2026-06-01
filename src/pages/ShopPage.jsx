import { useState, useMemo, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { RiSearchLine, RiGridLine, RiLayoutLine } from 'react-icons/ri';
import { IoLogoWhatsapp } from 'react-icons/io5';
import { products as staticProducts, categories as staticCategories, navCategories } from '../data/products';
import { fetchPublicProducts } from '../lib/supabase';
import ProductCard from '../components/product/ProductCard';
import ProductQuickView from '../components/product/ProductQuickView';

const sortOptions = [
  { label: 'Featured', value: 'featured' },
  { label: 'Price: Low → High', value: 'price-asc' },
  { label: 'Price: High → Low', value: 'price-desc' },
  { label: 'A → Z', value: 'name-asc' },
];

// Group categories for sidebar
const sidebarGroups = [
  { title: 'Sweets', cats: navCategories.sweets },
  { title: 'Andhra Specials', cats: navCategories.andhra },
  { title: 'Snacks & Namkeen', cats: navCategories.snacks },
];

export default function ShopPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [sortBy, setSortBy] = useState('featured');
  const [searchQuery, setSearchQuery] = useState(searchParams.get('search') || '');
  const [gridCols, setGridCols] = useState(4);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const activeCategory = searchParams.get('category') || 'All';

  useEffect(() => {
    fetchPublicProducts()
      .then(data => {
        if (data && data.length > 0) {
          setProducts(data);
        } else {
          setProducts(staticProducts);
        }
      })
      .catch(err => {
        console.error('Failed to fetch products from Supabase, falling back to static products:', err);
        setProducts(staticProducts);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  // Dynamically derive categories from current products to ensure new/removed categories update correctly
  const categories = useMemo(() => {
    const list = products.length > 0 ? products : staticProducts;
    const uniqueCats = new Set(list.map(p => p.category));
    const orderedCats = staticCategories.filter(cat => cat === 'All' || uniqueCats.has(cat));
    for (const cat of uniqueCats) {
      if (!orderedCats.includes(cat)) {
        orderedCats.push(cat);
      }
    }
    return orderedCats;
  }, [products]);

  useEffect(() => {
    setSearchQuery(searchParams.get('search') || '');
  }, [searchParams]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeCategory]);

  const setCategory = (cat) => {
    const params = new URLSearchParams(searchParams);
    if (cat === 'All') {
      params.delete('category');
    } else {
      params.set('category', cat);
    }
    params.delete('search');
    setSearchQuery('');
    setSearchParams(params);
  };

  const handleSearchChange = (val) => {
    setSearchQuery(val);
    const params = new URLSearchParams(searchParams);
    if (val.trim()) {
      params.set('search', val);
    } else {
      params.delete('search');
    }
    setSearchParams(params, { replace: true });
  };

  const filtered = useMemo(() => {
    let items = [...products];
    if (activeCategory !== 'All') {
      if (activeCategory === 'Hot & Savory') {
        const snackCats = ['Hot & Savory', 'Mixtures', 'Pakodi', 'Chekkalu & Chakralu', 'Snacks'];
        items = items.filter((p) => snackCats.includes(p.category));
      } else {
        items = items.filter((p) => p.category === activeCategory);
      }
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      items = items.filter((p) =>
        p.name.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.description?.toLowerCase().includes(q)
      );
    }
    switch (sortBy) {
      case 'price-asc':
        items.sort((a, b) => {
          const priceA = a.variants && a.variants[0] ? a.variants[0].price : (a.base_price || 0);
          const priceB = b.variants && b.variants[0] ? b.variants[0].price : (b.base_price || 0);
          return priceA - priceB;
        });
        break;
      case 'price-desc':
        items.sort((a, b) => {
          const priceA = a.variants && a.variants[0] ? a.variants[0].price : (a.base_price || 0);
          const priceB = b.variants && b.variants[0] ? b.variants[0].price : (b.base_price || 0);
          return priceB - priceA;
        });
        break;
      case 'name-asc': items.sort((a, b) => a.name.localeCompare(b.name)); break;
      default:
        items.sort((a, b) => {
          const order = { Bestseller: 0, Hot: 1, New: 2 };
          return (order[a.badge] ?? 3) - (order[b.badge] ?? 3);
        });
    }
    return items;
  }, [products, activeCategory, searchQuery, sortBy]);

  const recommendations = useMemo(() => {
    const list = products.length > 0 ? products : staticProducts;
    return list.filter(p => p.badge === 'Bestseller').slice(0, 4);
  }, [products]);

  return (
    <div style={{ minHeight: '100vh', background: 'var(--cream-base)' }}>
      {/* Shop Header */}
      <div className="shop-header">
        <div className="container">
          <div className="breadcrumb">
            <Link to="/">Home</Link> / <span style={{ color: 'var(--cream-base)' }}>{activeCategory === 'All' ? 'All Products' : activeCategory}</span>
          </div>
          <h1>{activeCategory === 'All' ? 'All Products' : activeCategory}</h1>
          <p className="product-count">
            Showing {filtered.length} {filtered.length === 1 ? 'product' : 'products'}
          </p>
        </div>
      </div>

      <div className="container">
        <div className="shop-layout">
          {/* Sidebar — Desktop */}
          <aside className="shop-sidebar">
            <h3 className="sidebar-heading">Filters</h3>
            
            <button
              className={`sidebar-link ${activeCategory === 'All' ? 'active' : ''}`}
              onClick={() => setCategory('All')}
              style={{ fontWeight: activeCategory === 'All' ? 600 : 400 }}
            >
              All Products ({products.length > 0 ? products.length : staticProducts.length})
            </button>

            {sidebarGroups.map(group => (
              <div key={group.title}>
                <div className="sidebar-group-title">{group.title}</div>
                {group.cats.map(cat => {
                  const countSource = products.length > 0 ? products : staticProducts;
                  const count = cat === 'Hot & Savory'
                    ? countSource.filter(p => ['Hot & Savory', 'Mixtures', 'Pakodi', 'Chekkalu & Chakralu', 'Snacks'].includes(p.category)).length
                    : countSource.filter(p => p.category === cat).length;
                  return (
                    <button
                      key={cat}
                      className={`sidebar-link ${activeCategory === cat ? 'active' : ''}`}
                      onClick={() => setCategory(cat)}
                    >
                      {cat} ({count})
                    </button>
                  );
                })}
              </div>
            ))}
          </aside>

          {/* Main Content */}
          <main>
            {/* Toolbar */}
            <div className="shop-toolbar">
              <div className="shop-search">
                <RiSearchLine size={16} />
                <input
                  type="text"
                  placeholder="Search sweets, namkeen..."
                  value={searchQuery}
                  onChange={(e) => handleSearchChange(e.target.value)}
                />
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <div className="shop-sort">
                  <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                    {sortOptions.map(opt => (
                      <option key={opt.value} value={opt.value}>{opt.label}</option>
                    ))}
                  </select>
                </div>
                <div className="shop-grid-toggle" style={{ display: 'none' }}>
                  <button className={gridCols === 3 ? 'active' : ''} onClick={() => setGridCols(3)}>
                    <RiLayoutLine size={16} />
                  </button>
                  <button className={gridCols === 4 ? 'active' : ''} onClick={() => setGridCols(4)}>
                    <RiGridLine size={16} />
                  </button>
                </div>
              </div>
            </div>

            {/* Mobile Category Chips */}
            <div className="category-chips" style={{ display: 'none' }}>
              {categories.map(cat => (
                <button
                  key={cat}
                  className={`category-chip ${activeCategory === cat ? 'active' : ''}`}
                  onClick={() => setCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Product Grid */}
            {loading ? (
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '60px 20px', minHeight: 300, width: '100%' }}>
                <div className="shop-loading-spinner" />
                <p style={{ marginTop: 16, color: 'var(--text-secondary)', fontFamily: 'var(--font-heading)', fontSize: 16 }}>Loading fresh products...</p>
              </div>
            ) : filtered.length > 0 ? (
              <div className={`product-grid cols-${gridCols}`}>
                {filtered.map(product => (
                  <ProductCard key={product.id} product={product} onQuickView={setQuickViewProduct} />
                ))}
              </div>
            ) : (
              <div className="empty-state-wrapper">
                <div className="empty-state" style={{ marginBottom: 48 }}>
                  <div className="empty-state-icon">🔍</div>
                  <h3 style={{ color: 'var(--text-primary)', fontSize: 22, fontFamily: 'var(--font-heading)', fontWeight: 600 }}>No matches found</h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: 14, marginTop: 8, maxWidth: 440, margin: '8px auto 20px', lineHeight: 1.6 }}>
                    We couldn't find any products matching "{searchQuery}". Try adjusting your keywords, exploring other categories, or check out our bestsellers below.
                  </p>
                  <button className="btn btn-primary btn-sm" onClick={() => { setCategory('All'); setSearchQuery(''); }}>
                    Browse All Products
                  </button>
                </div>
                
                <div className="recommendations-section" style={{ borderTop: '1px solid var(--cream-deep)', paddingTop: 40 }}>
                  <h4 className="recommendations-title" style={{ 
                    fontFamily: 'var(--font-heading)', 
                    fontSize: 20, 
                    color: 'var(--maroon-primary)', 
                    marginBottom: 24, 
                    textAlign: 'center',
                    fontWeight: 600
                  }}>
                    Recommended For You
                  </h4>
                  <div className={`product-grid cols-${gridCols}`}>
                    {recommendations.map(product => (
                      <ProductCard key={product.id} product={product} onQuickView={setQuickViewProduct} />
                    ))}
                  </div>
                </div>
              </div>
            )}
          </main>
        </div>
      </div>

      {/* Floating WhatsApp */}
      <a
        href="https://wa.me/919985650303"
        target="_blank"
        rel="noopener noreferrer"
        className="floating-whatsapp"
        aria-label="WhatsApp"
      >
        <IoLogoWhatsapp size={28} />
      </a>

      <ProductQuickView
        product={quickViewProduct}
        isOpen={!!quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
      />

      <style>{`
        @media (max-width: 1024px) {
          .category-chips { display: flex !important; }
          .shop-grid-toggle { display: none !important; }
        }
      `}</style>
    </div>
  );
}
