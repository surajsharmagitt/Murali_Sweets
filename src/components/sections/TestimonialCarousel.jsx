import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import { useSettings } from '../../context/SettingsContext';
import 'swiper/css';
import 'swiper/css/navigation';

export default function TestimonialCarousel() {
  const { settings } = useSettings();
  const activeTestimonials = settings.testimonials || [];

  return (
    <section className="section" style={{ background: 'var(--cream-base)' }}>
      <div className="container">
        <div className="section-header">
          <p className="section-subtitle">Customer Love</p>
          <h2 className="section-title">What Our Customers Say</h2>
          <div className="ornate-divider">
            <div className="ornate-diamond" />
          </div>
        </div>

        <Swiper
          modules={[Autoplay, Navigation]}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          navigation
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="featured-swiper"
        >
          {activeTestimonials.map(t => (
            <SwiperSlide key={t.id || t.name}>
              <div className="testimonial-card">
                <div className="testimonial-stars">
                  {t.stars ? '★'.repeat(Math.max(1, Math.min(5, t.stars))) : '★★★★★'}
                </div>
                <p className="testimonial-text">"{t.text}"</p>
                <p className="testimonial-author">{t.name}</p>
                <p className="testimonial-location">{t.location}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div style={{ textAlign: 'center', marginTop: 32 }}>
          <a
            href="https://share.google/OED84N1iqFOomLzmv"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
          >
            ✍️ Write a Review
          </a>
        </div>
      </div>
    </section>
  );
}

