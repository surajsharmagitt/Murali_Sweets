import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function GiftingPage() {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', occasion: '', budget: '', message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const msg = encodeURIComponent(
      `🎁 Gifting Inquiry\n\nName: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nOccasion: ${formData.occasion}\nBudget: ${formData.budget}\nMessage: ${formData.message}`
    );
    window.open(`https://wa.me/919985650303?text=${msg}`, '_blank');
    setSubmitted(true);
  };

  return (
    <div style={{ minHeight: '100vh', background: 'var(--cream-base)' }}>
      <div className="shop-header">
        <div className="container">
          <div className="breadcrumb">
            <Link to="/">Home</Link> / <span style={{ color: 'var(--cream-base)' }}>Gifting</span>
          </div>
          <h1>Corporate & Festival Gifting</h1>
          <p className="product-count">Sweet boxes for every occasion</p>
        </div>
      </div>

      <div className="container section">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'start' }}>
          {/* Left — Info */}
          <div>
            <p className="section-subtitle" style={{ textAlign: 'left' }}>Custom Gift Boxes</p>
            <h2 style={{ marginBottom: 12 }}>Make Every Occasion Sweet</h2>
            <div className="ornate-divider" style={{ justifyContent: 'flex-start', margin: '16px 0 24px' }}>
              <div className="ornate-diamond" />
            </div>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: 16 }}>
              Whether it's a wedding, Diwali celebration, corporate event, or housewarming, 
              our custom gift boxes are crafted to leave a lasting impression. Choose from our wide range 
              of premium sweets and namkeen, beautifully packaged for gifting.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginTop: 24 }}>
              {[
                { title: 'Wedding Gifting', desc: 'Elegant sweet boxes for mehndi, wedding & reception' },
                { title: 'Festival Gifting', desc: 'Diwali, Sankranti, Ugadi & more' },
                { title: 'Corporate Gifting', desc: 'Branded boxes for employees & clients' },
                { title: 'Housewarming', desc: 'Welcome gifts with traditional sweets' },
              ].map((item, i) => (
                <div key={i} style={{ background: 'var(--cream-warm)', padding: 20, borderRadius: 'var(--radius-card)' }}>
                  <h4 style={{ fontSize: 15, marginBottom: 6 }}>{item.title}</h4>
                  <p style={{ fontSize: 12, color: 'var(--text-secondary)', lineHeight: 1.5 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Form */}
          <div style={{ background: 'var(--cream-white)', padding: 32, borderRadius: 'var(--radius-md)', border: '1px solid var(--cream-deep)' }}>
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '40px 0' }}>
                <div style={{ fontSize: 48, marginBottom: 16 }}>🎉</div>
                <h3>Thank you!</h3>
                <p style={{ color: 'var(--text-secondary)', marginTop: 8 }}>
                  Your gifting inquiry has been sent via WhatsApp. We'll respond shortly!
                </p>
                <button className="btn btn-primary" onClick={() => setSubmitted(false)} style={{ marginTop: 20 }}>
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="gifting-form">
                <h3 style={{ marginBottom: 24 }}>Gifting Inquiry</h3>
                <div className="form-group">
                  <label>Full Name *</label>
                  <input name="name" value={formData.name} onChange={handleChange} required placeholder="Your name" />
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                  <div className="form-group">
                    <label>Email</label>
                    <input name="email" type="email" value={formData.email} onChange={handleChange} placeholder="email@example.com" />
                  </div>
                  <div className="form-group">
                    <label>Phone *</label>
                    <input name="phone" value={formData.phone} onChange={handleChange} required placeholder="9XXXXXXXXX" />
                  </div>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                  <div className="form-group">
                    <label>Occasion</label>
                    <select name="occasion" value={formData.occasion} onChange={handleChange}>
                      <option value="">Select occasion</option>
                      <option>Wedding</option>
                      <option>Diwali</option>
                      <option>Sankranti</option>
                      <option>Ugadi</option>
                      <option>Corporate Event</option>
                      <option>Housewarming</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Budget Range</label>
                    <select name="budget" value={formData.budget} onChange={handleChange}>
                      <option value="">Select budget</option>
                      <option>₹500 – ₹1,000</option>
                      <option>₹1,000 – ₹2,500</option>
                      <option>₹2,500 – ₹5,000</option>
                      <option>₹5,000+</option>
                    </select>
                  </div>
                </div>
                <div className="form-group">
                  <label>Additional Details</label>
                  <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Tell us about your requirements, quantity, delivery date, etc." />
                </div>
                <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                  Submit via WhatsApp
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .container .section > div { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
