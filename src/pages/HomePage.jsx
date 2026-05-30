import { useState } from 'react';
import DeliveryPopup from '../components/sections/DeliveryPopup';
import HeroSlideshow from '../components/sections/HeroSlideshow';
import CategoryCards from '../components/sections/CategoryCards';
import FeaturedProducts from '../components/sections/FeaturedProducts';
import TrustBadges from '../components/sections/TrustBadges';
import StorySection from '../components/sections/StorySection';
import TestimonialCarousel from '../components/sections/TestimonialCarousel';
import InstagramFeed from '../components/sections/InstagramFeed';
import ProductQuickView from '../components/product/ProductQuickView';

export default function HomePage() {
  const [quickViewProduct, setQuickViewProduct] = useState(null);

  return (
    <>
      <DeliveryPopup />
      <HeroSlideshow />
      <CategoryCards />
      <FeaturedProducts onQuickView={setQuickViewProduct} />
      <TrustBadges />
      <StorySection />
      <TestimonialCarousel />
      <InstagramFeed />
      <ProductQuickView
        product={quickViewProduct}
        isOpen={!!quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
      />
    </>
  );
}
