import { Link } from 'react-router-dom';
import { useSettings } from '../../context/SettingsContext';

export default function StorySection() {
  const { settings } = useSettings();
  const storySettings = settings.story || {
    heritage_subtitle: "Our Heritage",
    heritage_title: "A Legacy of Pure Sweetness",
    heritage_text_1: "At Murali Sweets, every piece is made with a devotion that goes beyond recipes. Named after Krishna's beloved bansuri, the flute that filled Vrindavan with melody, our sweets carry that same spirit: pure, soulful, and crafted with love.",
    heritage_text_2: "Nestled in the heart of Kothapeta, Guntur, Murali Sweets has been a trusted name for generations. Every sweet that leaves our kitchen carries forward a tradition of uncompromising quality and authentic taste.",
    heritage_text_3: "We use only the finest ingredients: pure desi ghee, fresh milk, premium dry fruits, and hand-ground spices. Our artisans wake before dawn to prepare over 100 varieties fresh each morning, ensuring every bite delivers the same rich, authentic flavour that our families have cherished for decades.",
    heritage_image: "/images/krishna-logo.jpg"
  };

  return (
    <section className="section story-section">
      <div className="container">
        <div className="story-grid">
          <div className="story-image">
            <img src={storySettings.heritage_image || "/images/krishna-logo.jpg"} alt="Murali Sweets, Handcrafted with love" loading="lazy" />
            <div className="story-image-border" />
          </div>
          <div className="story-text">
            <p className="section-subtitle" style={{ textAlign: 'left' }}>{storySettings.heritage_subtitle || "Our Heritage"}</p>
            <h2>{storySettings.heritage_title || "A Legacy of Pure Sweetness"}</h2>
            <div className="ornate-divider" style={{ justifyContent: 'flex-start', margin: '16px 0 24px' }}>
              <div className="ornate-diamond" />
            </div>
            {storySettings.heritage_text_1 && <p>{storySettings.heritage_text_1}</p>}
            {storySettings.heritage_text_2 && <p>{storySettings.heritage_text_2}</p>}
            {storySettings.heritage_text_3 && <p>{storySettings.heritage_text_3}</p>}
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

