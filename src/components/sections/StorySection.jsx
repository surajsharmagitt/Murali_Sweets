import { Link } from 'react-router-dom';

export default function StorySection() {
  return (
    <section className="section story-section">
      <div className="container">
        <div className="story-grid">
          <div className="story-image">
            <img src="/images/krishna-logo.jpg" alt="Murali Sweets, Handcrafted with love" loading="lazy" />
            <div className="story-image-border" />
          </div>
          <div className="story-text">
            <p className="section-subtitle" style={{ textAlign: 'left' }}>Our Heritage</p>
            <h2>A Legacy of Pure Sweetness</h2>
            <div className="ornate-divider" style={{ justifyContent: 'flex-start', margin: '16px 0 24px' }}>
              <div className="ornate-diamond" />
            </div>
            <p>
              At Murali Sweets, every piece is made with a devotion that goes beyond recipes. Named after Krishna's beloved bansuri, the flute that filled Vrindavan with melody, our sweets carry that same spirit: pure, soulful, and crafted with love.
            </p>
            <p>
              Nestled in the heart of Kothapeta, Guntur, Murali Sweets has been a trusted name for generations. 
              Every sweet that leaves our kitchen carries forward a tradition of uncompromising quality and authentic taste.
            </p>
            <p>
              We use only the finest ingredients: pure desi ghee, fresh milk, premium dry fruits, and hand-ground spices. 
              Our artisans wake before dawn to prepare over 100 varieties fresh each morning, ensuring every bite delivers 
              the same rich, authentic flavour that our families have cherished for decades.
            </p>
            <div style={{ display: 'flex', gap: 12, marginTop: 28, flexWrap: 'wrap' }}>
              <Link to="/shop" className="btn btn-primary">Explore Our Collection</Link>
              <Link to="/stores" className="btn btn-outline">Visit Our Store</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
