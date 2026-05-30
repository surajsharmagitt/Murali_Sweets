import { Link } from 'react-router-dom';
import { shopByCategory } from '../../data/collections';

export default function CategoryCards() {
  return (
    <section className="section" style={{ background: 'var(--cream-base)' }}>
      <div className="container">
        <div className="section-header">
          <p className="section-subtitle">Explore Our Range</p>
          <h2 className="section-title">Shop by Category</h2>
          <div className="ornate-divider">
            <div className="ornate-diamond" />
          </div>
        </div>
        <div className="category-cards-grid">
          {shopByCategory.map((cat) => (
            <Link to={cat.link} key={cat.name} className="category-card">
              <div className="category-card-image">
                <img src={cat.image} alt={cat.name} loading="lazy" />
              </div>
              <span className="category-card-name">{cat.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
