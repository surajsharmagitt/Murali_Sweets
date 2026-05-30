import { RiInstagramLine } from 'react-icons/ri';
import { instagramImages } from '../../data/collections';

export default function InstagramFeed() {
  return (
    <section style={{ background: 'var(--cream-warm)', padding: '48px 0 0' }}>
      <div className="section-header">
        <p className="section-subtitle">Follow Us</p>
        <h2 className="section-title">@muralisweets</h2>
      </div>
      <div className="instagram-grid">
        {instagramImages.slice(0, 6).map((img, i) => (
          <div key={i} className="instagram-item">
            <img src={img} alt={`Murali Sweets ${i + 1}`} loading="lazy" />
            <div className="instagram-item-overlay">
              <RiInstagramLine size={28} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
