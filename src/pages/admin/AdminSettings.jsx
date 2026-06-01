import { useState, useEffect, useCallback } from 'react';
import AdminLayout from '../../components/admin/AdminLayout';
import { useToast } from '../../components/admin/Toast';
import { adminFetch } from '../../lib/admin-auth';

function SettingsContent() {
  const { showToast } = useToast();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState('contacts'); // 'contacts', 'slideshow', 'popup', 'story'

  // Settings State matching DEFAULT_SETTINGS structure
  const [contacts, setContacts] = useState({
    phone_1: '', phone_2: '', whatsapp: '', swiggy: '', zomato: '', instagram: '', facebook: ''
  });
  const [popup, setPopup] = useState({
    show: true, title: '', description: '', free_delivery_limit: 999
  });
  const [announcements, setAnnouncements] = useState([]);
  const [banners, setBanners] = useState([]);
  const [story, setStory] = useState({
    tradition_title: '', tradition_text: '',
    heritage_subtitle: '', heritage_title: '',
    heritage_text_1: '', heritage_text_2: '', heritage_text_3: '', heritage_image: ''
  });
  const [gifting, setGifting] = useState({ title: '', description: '' });

  // Save states
  const [saving, setSaving] = useState(false);

  const fetchSettings = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`/api/settings?t=${Date.now()}`);
      if (!res.ok) {
        throw new Error('Failed to load website settings');
      }
      const data = await res.json();
      const s = data.settings || {};
      
      if (s.contacts) setContacts(s.contacts);
      if (s.popup) setPopup(s.popup);
      if (s.announcements) setAnnouncements(s.announcements);
      if (s.banners) setBanners(s.banners);
      if (s.story) setStory(s.story);
      if (s.gifting) setGifting(s.gifting);
    } catch (err) {
      console.error(err);
      setError(err.message || 'Error loading settings');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchSettings();
  }, [fetchSettings]);

  // Handle updates for simple inputs
  const handleContactChange = (e) => {
    const { name, value } = e.target;
    setContacts(prev => ({ ...prev, [name]: value }));
  };

  const handlePopupChange = (e) => {
    const { name, value, type, checked } = e.target;
    setPopup(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : (name === 'free_delivery_limit' ? parseInt(value) || 0 : value)
    }));
  };

  const handleStoryChange = (e) => {
    const { name, value } = e.target;
    setStory(prev => ({ ...prev, [name]: value }));
  };

  const handleGiftingChange = (e) => {
    const { name, value } = e.target;
    setGifting(prev => ({ ...prev, [name]: value }));
  };

  // Image Upload helper
  const handleImageUpload = (e, callback) => {
    const file = e.target.files[0];
    if (!file) return;
    
    // Warn if file > 1.5MB to save Supabase storage space
    if (file.size > 1.5 * 1024 * 1024) {
      showToast('Image size should be less than 1.5MB for better performance.', 'error');
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      callback(event.target.result);
    };
    reader.readAsDataURL(file);
  };

  // Announcement Bar Actions
  const handleAnnouncementTextChange = (index, value) => {
    const updated = [...announcements];
    updated[index] = value;
    setAnnouncements(updated);
  };

  const addAnnouncement = () => {
    setAnnouncements(prev => [...prev, '']);
  };

  const removeAnnouncement = (index) => {
    setAnnouncements(prev => prev.filter((_, i) => i !== index));
  };

  // Banner Slideshow Actions
  const handleBannerFieldChange = (index, field, value) => {
    const updated = [...banners];
    updated[index] = { ...updated[index], [field]: value };
    setBanners(updated);
  };

  const addBanner = () => {
    setBanners(prev => [
      ...prev,
      {
        id: Date.now(),
        title: 'New Delicious Sweet',
        subtitle: 'Special Delicacy',
        description: 'Describe this mouth-watering sweet and why customers love it.',
        cta: 'Order Now',
        ctaLink: '/shop',
        bgColor: '#4A0D0D',
        image: ''
      }
    ]);
  };

  const removeBanner = (index) => {
    setBanners(prev => prev.filter((_, i) => i !== index));
  };

  // Generic Save Handler to API
  const saveSectionSettings = async (key, value, sectionName) => {
    setSaving(true);
    try {
      const res = await adminFetch('/api/admin/settings', {
        method: 'POST',
        body: JSON.stringify({ key, value })
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || 'Failed to save settings');
      }

      showToast(`Successfully updated ${sectionName}!`, 'success');
    } catch (err) {
      console.error(err);
      showToast(err.message || `Failed to save ${sectionName}`, 'error');
    } finally {
      setSaving(false);
    }
  };

  return (
    <>
      {/* Sub tabs header */}
      <div className="admin-settings-tabs">
        <button className={`tab-btn ${activeTab === 'contacts' ? 'active' : ''}`} onClick={() => setActiveTab('contacts')}>
          📞 Contacts & Socials
        </button>
        <button className={`tab-btn ${activeTab === 'popup' ? 'active' : ''}`} onClick={() => setActiveTab('popup')}>
          📢 Alerts & Popups
        </button>
        <button className={`tab-btn ${activeTab === 'slideshow' ? 'active' : ''}`} onClick={() => setActiveTab('slideshow')}>
          🎠 Hero Slideshow Banners
        </button>
        <button className={`tab-btn ${activeTab === 'story' ? 'active' : ''}`} onClick={() => setActiveTab('story')}>
          📖 Heritage, Gifting & Story
        </button>
      </div>

      {error && (
        <div className="admin-error-banner">
          <span className="admin-error-icon">⚠️</span>
          <div className="admin-error-content">
            <div className="admin-error-title">Error loading settings</div>
            <div className="admin-error-text">{error}</div>
          </div>
          <button className="admin-retry-btn" onClick={fetchSettings}>
            Retry
          </button>
        </div>
      )}

      {loading && !error && (
        <div className="admin-settings-card" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div className="admin-skeleton admin-skeleton-text wide" style={{ height: '30px' }} />
          <div className="admin-skeleton admin-skeleton-text medium" />
          <div className="admin-skeleton admin-skeleton-text wide" style={{ height: '80px' }} />
          <div className="admin-skeleton admin-skeleton-text short" />
        </div>
      )}

      {!loading && !error && (
        <div className="admin-settings-container">
          {/* TAB 1: CONTACTS & APPS */}
          {activeTab === 'contacts' && (
            <div className="admin-settings-card">
              <h3 className="section-title-sub">Contact Numbers & WhatsApp</h3>
              <div className="admin-settings-grid">
                <div className="admin-login-field">
                  <label>Primary Phone Number</label>
                  <input type="text" name="phone_1" value={contacts.phone_1} onChange={handleContactChange} placeholder="e.g. 9985650303" />
                </div>
                <div className="admin-login-field">
                  <label>Secondary Phone Number</label>
                  <input type="text" name="phone_2" value={contacts.phone_2} onChange={handleContactChange} placeholder="e.g. 9000036461" />
                </div>
                <div className="admin-login-field">
                  <label>WhatsApp Contact Number (No spaces/special chars, starts with country code)</label>
                  <input type="text" name="whatsapp" value={contacts.whatsapp} onChange={handleContactChange} placeholder="e.g. 919985650303" />
                </div>
              </div>

              <h3 className="section-title-sub" style={{ marginTop: '24px' }}>Food Delivery App Links</h3>
              <div className="admin-settings-grid">
                <div className="admin-login-field">
                  <label>Swiggy Link</label>
                  <input type="text" name="swiggy" value={contacts.swiggy} onChange={handleContactChange} placeholder="https://www.swiggy.com/..." />
                </div>
                <div className="admin-login-field">
                  <label>Zomato Link</label>
                  <input type="text" name="zomato" value={contacts.zomato} onChange={handleContactChange} placeholder="https://www.zomato.com/..." />
                </div>
              </div>

              <h3 className="section-title-sub" style={{ marginTop: '24px' }}>Social Media Links</h3>
              <div className="admin-settings-grid">
                <div className="admin-login-field">
                  <label>Instagram Page Link</label>
                  <input type="text" name="instagram" value={contacts.instagram} onChange={handleContactChange} placeholder="https://instagram.com/..." />
                </div>
                <div className="admin-login-field">
                  <label>Facebook Page Link</label>
                  <input type="text" name="facebook" value={contacts.facebook} onChange={handleContactChange} placeholder="https://facebook.com/..." />
                </div>
              </div>

              <div className="admin-settings-actions">
                <button
                  className="admin-save-btn"
                  onClick={() => saveSectionSettings('contacts', contacts, 'Contact Details')}
                  disabled={saving}
                >
                  {saving ? 'Saving...' : '💾 Save Contact Details'}
                </button>
              </div>
            </div>
          )}

          {/* TAB 2: ALERTS & POPUPS */}
          {activeTab === 'popup' && (
            <div className="admin-settings-card">
              <h3 className="section-title-sub">Delivery Information Popup</h3>
              <div className="admin-login-field checkbox-field" style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
                <input
                  type="checkbox"
                  name="show"
                  id="show-popup-chk"
                  checked={popup.show}
                  onChange={handlePopupChange}
                  style={{ width: '18px', height: '18px', cursor: 'pointer' }}
                />
                <label htmlFor="show-popup-chk" style={{ marginBottom: '0', cursor: 'pointer', fontSize: '14px', fontWeight: '600' }}>
                  Enable Delivery Option Popup Alert
                </label>
              </div>

              <div className="admin-login-field">
                <label>Popup Title</label>
                <input type="text" name="title" value={popup.title} onChange={handlePopupChange} placeholder="Choose How You'd Like to Order" />
              </div>

              <div className="admin-login-field">
                <label>Popup Description</label>
                <textarea
                  name="description"
                  value={popup.description}
                  onChange={handlePopupChange}
                  placeholder="Get fresh sweets delivered from our outlet in Kothapeta, Guntur"
                  rows={2}
                  style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid var(--cream-deep)', fontSize: '14px' }}
                />
              </div>

              <div className="admin-login-field" style={{ maxWidth: '300px' }}>
                <label>Free Delivery Threshold Amount (₹)</label>
                <input type="number" name="free_delivery_limit" value={popup.free_delivery_limit} onChange={handlePopupChange} />
              </div>

              <div className="admin-settings-actions" style={{ marginBottom: '32px' }}>
                <button
                  className="admin-save-btn"
                  onClick={() => saveSectionSettings('popup', popup, 'Popup Banner Settings')}
                  disabled={saving}
                >
                  {saving ? 'Saving...' : '💾 Save Popup Settings'}
                </button>
              </div>

              <h3 className="section-title-sub" style={{ borderTop: '1px solid var(--cream-deep)', paddingTop: '24px' }}>
                Top Announcement Bar Scrolling Texts
              </h3>
              <p style={{ fontSize: '13px', color: 'var(--text-secondary)', marginBottom: '16px' }}>
                Add items to display in the marquee bar running across the top of the homepage.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '24px' }}>
                {announcements.map((text, idx) => (
                  <div key={idx} style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                    <input
                      type="text"
                      value={text}
                      onChange={(e) => handleAnnouncementTextChange(idx, e.target.value)}
                      placeholder="e.g. MADE FRESH DAILY WITH 100% PURE GHEE"
                      style={{ flex: 1 }}
                    />
                    <button
                      className="admin-action-btn delete"
                      onClick={() => removeAnnouncement(idx)}
                      style={{ padding: '10px 14px', borderRadius: '8px', height: '40px' }}
                    >
                      ✕
                    </button>
                  </div>
                ))}
                <div>
                  <button className="admin-action-btn restore" onClick={addAnnouncement} style={{ fontSize: '13px' }}>
                    ➕ Add Announcement Line
                  </button>
                </div>
              </div>

              <div className="admin-settings-actions">
                <button
                  className="admin-save-btn"
                  onClick={() => saveSectionSettings('announcements', announcements, 'Announcements list')}
                  disabled={saving}
                >
                  {saving ? 'Saving...' : '💾 Save Announcements'}
                </button>
              </div>
            </div>
          )}

          {/* TAB 3: HOMEPAGE SLIDESHOW BANNERS */}
          {activeTab === 'slideshow' && (
            <div className="admin-settings-card">
              <div style={{ display: 'flex', justifyItems: 'center', justifyContent: 'space-between', marginBottom: '20px', flexWrap: 'wrap', gap: '12px' }}>
                <div>
                  <h3 className="section-title-sub" style={{ marginBottom: '4px' }}>Hero Slideshow Banners</h3>
                  <p style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>
                    Add, edit, or remove slides in the main homepage hero section.
                  </p>
                </div>
                <button className="admin-action-btn restore" onClick={addBanner} style={{ height: '36px', alignSelf: 'center' }}>
                  ➕ Add Slide
                </button>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                {banners.map((banner, idx) => (
                  <div 
                    key={banner.id || idx} 
                    style={{ 
                      background: 'var(--cream-warm)', 
                      padding: '24px', 
                      borderRadius: '12px', 
                      border: '1px solid var(--cream-deep)', 
                      position: 'relative' 
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px' }}>
                      <span style={{ fontSize: '14px', fontWeight: '700', color: 'var(--maroon-primary)' }}>
                        Slide #{idx + 1}
                      </span>
                      <button 
                        className="admin-action-btn delete" 
                        onClick={() => removeBanner(idx)}
                        style={{ padding: '6px 12px', fontSize: '12px' }}
                      >
                        ✕ Remove Slide
                      </button>
                    </div>

                    <div className="admin-settings-grid">
                      <div className="admin-login-field">
                        <label>Sub-title (Small header)</label>
                        <input 
                          type="text" 
                          value={banner.subtitle} 
                          onChange={(e) => handleBannerFieldChange(idx, 'subtitle', e.target.value)} 
                          placeholder="Murali's Special Delicacy" 
                        />
                      </div>
                      <div className="admin-login-field">
                        <label>Main Slide Title</label>
                        <input 
                          type="text" 
                          value={banner.title} 
                          onChange={(e) => handleBannerFieldChange(idx, 'title', e.target.value)} 
                          placeholder="Ajmer Kalakand" 
                        />
                      </div>
                    </div>

                    <div className="admin-login-field">
                      <label>Slide Description</label>
                      <textarea
                        value={banner.description}
                        onChange={(e) => handleBannerFieldChange(idx, 'description', e.target.value)}
                        placeholder="Grainy, slow-cooked milk cake infused with cardamom..."
                        rows={2}
                        style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid var(--cream-deep)', fontSize: '14px' }}
                      />
                    </div>

                    <div className="admin-settings-grid">
                      <div className="admin-login-field">
                        <label>CTA Button Label</label>
                        <input 
                          type="text" 
                          value={banner.cta} 
                          onChange={(e) => handleBannerFieldChange(idx, 'cta', e.target.value)} 
                          placeholder="Shop Now" 
                        />
                      </div>
                      <div className="admin-login-field">
                        <label>CTA Redirect Link</label>
                        <input 
                          type="text" 
                          value={banner.ctaLink} 
                          onChange={(e) => handleBannerFieldChange(idx, 'ctaLink', e.target.value)} 
                          placeholder="/shop?category=Kalakand" 
                        />
                      </div>
                      <div className="admin-login-field">
                        <label>Background Color (Hex Code)</label>
                        <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                          <input 
                            type="text" 
                            value={banner.bgColor} 
                            onChange={(e) => handleBannerFieldChange(idx, 'bgColor', e.target.value)} 
                            placeholder="#4A0D0D" 
                            style={{ flex: 1 }}
                          />
                          <input 
                            type="color" 
                            value={banner.bgColor?.startsWith('#') ? banner.bgColor : '#4A0D0D'}
                            onChange={(e) => handleBannerFieldChange(idx, 'bgColor', e.target.value)}
                            style={{ width: '38px', height: '38px', border: '0', cursor: 'pointer', background: 'transparent' }}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="admin-login-field" style={{ marginTop: '10px' }}>
                      <label>Banner Slide Image</label>
                      <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start', flexWrap: 'wrap' }}>
                        {banner.image ? (
                          <img 
                            src={banner.image} 
                            alt="Banner Preview" 
                            style={{ 
                              width: '180px', 
                              height: '110px', 
                              objectFit: 'cover', 
                              borderRadius: '8px', 
                              border: '1px solid var(--cream-deep)', 
                              background: '#fff' 
                            }} 
                          />
                        ) : (
                          <div 
                            style={{ 
                              width: '180px', 
                              height: '110px', 
                              borderRadius: '8px', 
                              background: '#fff', 
                              border: '2px dashed var(--cream-deep)', 
                              display: 'flex', 
                              alignItems: 'center', 
                              justifyContent: 'center', 
                              fontSize: '12px', 
                              color: 'var(--text-muted)' 
                            }}
                          >
                            No Image Selected
                          </div>
                        )}
                        <div style={{ flex: 1, minWidth: '200px' }}>
                          <input 
                            type="file" 
                            accept="image/*" 
                            onChange={(e) => handleImageUpload(e, (base64) => handleBannerFieldChange(idx, 'image', base64))}
                            style={{ fontSize: '13px', border: '0', background: 'transparent', padding: '0', margin: '0 0 10px' }}
                          />
                          <p style={{ fontSize: '11px', color: 'var(--text-muted)', lineHeight: '1.4' }}>
                            Upload image directly from your local computer files. For best rendering, use a widescreen landscape image (e.g. 800x500px) less than 1MB.
                          </p>
                          <div style={{ marginTop: '8px' }}>
                            <span style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>Or enter external image URL:</span>
                            <input 
                              type="text" 
                              value={banner.image || ''} 
                              onChange={(e) => handleBannerFieldChange(idx, 'image', e.target.value)} 
                              placeholder="https://myimage.host/path.jpg"
                              style={{ width: '100%', padding: '6px 10px', marginTop: '4px', fontSize: '13px' }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {banners.length === 0 && (
                <div style={{ padding: '32px', textAlign: 'center', color: 'var(--text-muted)', border: '1px dashed var(--cream-deep)', borderRadius: '8px' }}>
                  No slideshow slides configured. Click "Add Slide" to insert one.
                </div>
              )}

              <div className="admin-settings-actions" style={{ marginTop: '32px' }}>
                <button
                  className="admin-save-btn"
                  onClick={() => saveSectionSettings('banners', banners, 'Slideshow Banners')}
                  disabled={saving}
                >
                  {saving ? 'Saving...' : '💾 Save Slideshow Banners'}
                </button>
              </div>
            </div>
          )}

          {/* TAB 4: HERITAGE, STORY & GIFTING */}
          {activeTab === 'story' && (
            <div className="admin-settings-card">
              <h3 className="section-title-sub">Brand Heritage (Our Story Section)</h3>
              <p style={{ fontSize: '13px', color: 'var(--text-secondary)', marginBottom: '20px' }}>
                Configure the heritage text block on the homepage detailing the legacy of Murali Sweets.
              </p>

              <div className="admin-settings-grid">
                <div className="admin-login-field">
                  <label>Section Subtitle</label>
                  <input type="text" name="heritage_subtitle" value={story.heritage_subtitle} onChange={handleStoryChange} placeholder="Our Heritage" />
                </div>
                <div className="admin-login-field">
                  <label>Section Title</label>
                  <input type="text" name="heritage_title" value={story.heritage_title} onChange={handleStoryChange} placeholder="A Legacy of Pure Sweetness" />
                </div>
              </div>

              <div className="admin-login-field">
                <label>Story Paragraph 1</label>
                <textarea
                  name="heritage_text_1"
                  value={story.heritage_text_1}
                  onChange={handleStoryChange}
                  placeholder="First paragraph of history details..."
                  rows={3}
                  style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid var(--cream-deep)', fontSize: '14px', fontFamily: 'inherit' }}
                />
              </div>

              <div className="admin-login-field">
                <label>Story Paragraph 2</label>
                <textarea
                  name="heritage_text_2"
                  value={story.heritage_text_2}
                  onChange={handleStoryChange}
                  placeholder="Second paragraph..."
                  rows={3}
                  style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid var(--cream-deep)', fontSize: '14px', fontFamily: 'inherit' }}
                />
              </div>

              <div className="admin-login-field">
                <label>Story Paragraph 3</label>
                <textarea
                  name="heritage_text_3"
                  value={story.heritage_text_3}
                  onChange={handleStoryChange}
                  placeholder="Third paragraph..."
                  rows={3}
                  style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid var(--cream-deep)', fontSize: '14px', fontFamily: 'inherit' }}
                />
              </div>

              <div className="admin-login-field" style={{ marginBottom: '32px' }}>
                <label>Story Section Main Image</label>
                <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start', flexWrap: 'wrap' }}>
                  {story.heritage_image ? (
                    <img 
                      src={story.heritage_image} 
                      alt="Heritage Preview" 
                      style={{ 
                        width: '140px', 
                        height: '140px', 
                        objectFit: 'cover', 
                        borderRadius: '8px', 
                        border: '1px solid var(--cream-deep)', 
                        background: '#fff' 
                      }} 
                    />
                  ) : (
                    <div 
                      style={{ 
                        width: '140px', 
                        height: '140px', 
                        borderRadius: '8px', 
                        background: '#fff', 
                        border: '2px dashed var(--cream-deep)', 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center', 
                        fontSize: '12px', 
                        color: 'var(--text-muted)' 
                      }}
                    >
                      No Image selected
                    </div>
                  )}
                  <div style={{ flex: 1, minWidth: '200px' }}>
                    <input 
                      type="file" 
                      accept="image/*" 
                      onChange={(e) => handleImageUpload(e, (base64) => setStory(prev => ({ ...prev, heritage_image: base64 })))}
                      style={{ fontSize: '13px', border: '0', background: 'transparent', padding: '0', margin: '0 0 10px' }}
                    />
                    <p style={{ fontSize: '11px', color: 'var(--text-muted)', lineHeight: '1.4' }}>
                      Upload story heritage image from your files. Use square ratio if possible (e.g. 500x500px).
                    </p>
                    <div style={{ marginTop: '8px' }}>
                      <span style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>Or enter external image URL:</span>
                      <input 
                        type="text" 
                        name="heritage_image"
                        value={story.heritage_image || ''} 
                        onChange={handleStoryChange} 
                        placeholder="https://myimage.host/path.jpg"
                        style={{ width: '100%', padding: '6px 10px', marginTop: '4px', fontSize: '13px' }}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <h3 className="section-title-sub" style={{ borderTop: '1px solid var(--cream-deep)', paddingTop: '24px' }}>
                Kaju Sweet Story (Product Quick View Box)
              </h3>
              <div className="admin-login-field">
                <label>Tradition Title</label>
                <input type="text" name="tradition_title" value={story.tradition_title} onChange={handleStoryChange} placeholder="In Indian Tradition" />
              </div>
              <div className="admin-login-field">
                <label>Tradition Description Text</label>
                <textarea
                  name="tradition_text"
                  value={story.tradition_text}
                  onChange={handleStoryChange}
                  placeholder="e.g. Cashews and pure ghee have always been symbols of prosperity..."
                  rows={3}
                  style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid var(--cream-deep)', fontSize: '14px', fontFamily: 'inherit' }}
                />
              </div>

              <div className="admin-settings-actions" style={{ marginBottom: '40px' }}>
                <button
                  className="admin-save-btn"
                  onClick={() => saveSectionSettings('story', story, 'Heritage & Tradition Story')}
                  disabled={saving}
                >
                  {saving ? 'Saving...' : '💾 Save Story Details'}
                </button>
              </div>

              <h3 className="section-title-sub" style={{ borderTop: '1px solid var(--cream-deep)', paddingTop: '24px' }}>
                Corporate & Festival Gifting Details
              </h3>
              <div className="admin-login-field">
                <label>Gifting Page Header Title</label>
                <input type="text" name="title" value={gifting.title} onChange={handleGiftingChange} placeholder="Premium Handcrafted Gift Boxes" />
              </div>
              <div className="admin-login-field">
                <label>Gifting Page Description Text</label>
                <textarea
                  name="description"
                  value={gifting.description}
                  onChange={handleGiftingChange}
                  placeholder="Make your celebrations extra special..."
                  rows={3}
                  style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid var(--cream-deep)', fontSize: '14px', fontFamily: 'inherit' }}
                />
              </div>

              <div className="admin-settings-actions">
                <button
                  className="admin-save-btn"
                  onClick={() => saveSectionSettings('gifting', gifting, 'Gifting details')}
                  disabled={saving}
                >
                  {saving ? 'Saving...' : '💾 Save Gifting Settings'}
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Embedded Styles for Settings Panels */}
      <style>{`
        .admin-settings-tabs {
          display: flex;
          gap: 8px;
          margin-bottom: 24px;
          border-bottom: 1px solid var(--cream-deep);
          padding-bottom: 12px;
          flex-wrap: wrap;
        }
        .admin-settings-tabs .tab-btn {
          padding: 10px 16px;
          border-radius: 8px;
          border: 1px solid transparent;
          background: transparent;
          font-family: inherit;
          font-size: 13px;
          font-weight: 600;
          color: var(--text-secondary);
          cursor: pointer;
          transition: all 0.2s ease;
        }
        .admin-settings-tabs .tab-btn:hover {
          background: var(--cream-warm);
          color: var(--maroon-primary);
        }
        .admin-settings-tabs .tab-btn.active {
          background: var(--maroon-primary);
          color: #fff;
          border-color: var(--maroon-primary);
        }
        .admin-settings-card {
          background: #fff;
          border-radius: 12px;
          border: 1px solid var(--cream-deep);
          padding: 32px;
          box-shadow: 0 2px 12px rgba(26, 8, 8, 0.04);
        }
        .section-title-sub {
          font-size: 16px;
          font-weight: 700;
          color: var(--maroon-primary);
          margin-bottom: 16px;
          letter-spacing: 0.02em;
        }
        .admin-settings-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 16px 20px;
        }
        .admin-settings-actions {
          display: flex;
          justify-content: flex-end;
          margin-top: 20px;
        }
        .admin-save-btn {
          background: var(--gold-primary, #C8882A);
          color: #fff;
          border: 0;
          border-radius: 8px;
          padding: 12px 24px;
          font-size: 13px;
          font-weight: 700;
          cursor: pointer;
          transition: background-color 0.2s ease;
        }
        .admin-save-btn:hover:not(:disabled) {
          background: #b27620;
        }
        .admin-save-btn:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }
        input, select {
          width: 100%;
          padding: 10px 12px;
          border-radius: 8px;
          border: 1px solid var(--cream-deep);
          background: #fff;
          font-family: inherit;
          font-size: 14px;
          outline: none;
          color: #333;
        }
        input:focus {
          border-color: var(--maroon-primary);
        }
      `}</style>
    </>
  );
}

export default function AdminSettings() {
  return (
    <AdminLayout title="Website Settings">
      <SettingsContent />
    </AdminLayout>
  );
}
