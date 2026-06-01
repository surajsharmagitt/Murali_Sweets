import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { useState, useEffect } from 'react';
import { products as staticProducts, getImage } from '../../data/products';
import { fetchPublicProducts } from '../../lib/supabase';
import ProductCard from '../product/ProductCard';
import 'swiper/css';
import 'swiper/css/navigation';

export default function FeaturedProducts({ onQuickView }) {
  const [products, setProducts] = useState(staticProducts);

  useEffect(() => {
    fetchPublicProducts()
      .then(data => {
        if (data && data.length > 0) {
          setProducts(data);
        }
      })
      .catch(err => {
        console.error('Failed to fetch featured products from Supabase, using static fallback:', err);
      });
  }, []);

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
