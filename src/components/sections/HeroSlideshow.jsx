import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';
import { banners } from '../../data/collections';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function HeroSlideshow() {
  return (
    <section className="hero-section">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation
        loop
        slidesPerView={1}
        className="hero-swiper"
      >
        {banners.map((banner) => (
          <SwiperSlide key={banner.id}>
            <div className="hero-slide" style={{ background: banner.bgColor }}>
              <div className="hero-slide-flex">
                <div className="hero-slide-text-side" style={{ background: banner.bgColor }}>
                  <img src="/images/krishna-logo.jpg" alt="Krishna Logo" className="hero-slide-logo" />
                  <p className="hero-slide-subtitle">{banner.subtitle}</p>
                  <h1 className="hero-slide-title">{banner.title}</h1>
                  <p className="hero-slide-desc">{banner.description}</p>
                  <Link to={banner.ctaLink} className="btn btn-primary" style={{ background: '#FFFAF5', color: '#1A0808', borderColor: '#FFFAF5' }}>
                    {banner.cta}
                  </Link>
                </div>
                <div className="hero-slide-image-side">
                  <img src={banner.image} alt={banner.title} loading="lazy" />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
