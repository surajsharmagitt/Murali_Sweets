import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { products, getImage } from '../../data/products';
import ProductCard from '../product/ProductCard';
import 'swiper/css';
import 'swiper/css/navigation';

export default function FeaturedProducts({ onQuickView }) {
  const featuredNames = [
    'Badam Katli',
    'Jug Kalakand',
    'Carrot Halwa',
    'Laddu',
    'Honey Mysurpak',
    'Kala Jamun',
    'Rasmalai',
    'Jaangiri',
    'Potarekulu',
    'Delhi Mixture'
  ];

  const featured = featuredNames
    .map(name => products.find(p => p.name.toLowerCase() === name.toLowerCase()))
    .filter(Boolean);

  return (
    <section className="section" style={{ background: 'var(--cream-warm)' }}>
      <div className="container">
        <div className="section-header">
          <p className="section-subtitle">Handpicked For You</p>
          <h2 className="section-title">Our Bestsellers</h2>
          <div className="ornate-divider">
            <div className="ornate-diamond" />
          </div>
        </div>

        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={16}
          slidesPerView={2}
          breakpoints={{
            640: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
            1280: { slidesPerView: 5 },
          }}
          className="featured-swiper"
        >
          {featured.map(product => (
            <SwiperSlide key={product.id}>
              <ProductCard product={product} onQuickView={onQuickView} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
