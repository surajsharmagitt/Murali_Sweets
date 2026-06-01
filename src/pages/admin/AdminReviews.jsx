import { useState, useEffect, useCallback } from 'react';
import AdminLayout from '../../components/admin/AdminLayout';
import { useToast } from '../../components/admin/Toast';
import { adminFetch } from '../../lib/admin-auth';

export default function AdminReviews() {
  const { showToast } = useToast();
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Modal states
  const [modalOpen, setModalOpen] = useState(false);
  const [editingIndex, setEditingIndex] = useState(null); // null for adding, index number for editing
  const [formData, setFormData] = useState({ name: '', location: '', stars: 5, text: '' });
  const [saving, setSaving] = useState(false);

  // Delete states
  const [deleteIndex, setDeleteIndex] = useState(null);
  const [deleting, setDeleting] = useState(false);

  const fetchReviews = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`/api/settings?t=${Date.now()}`);
      if (!res.ok) {
        throw new Error('Failed to fetch testimonials');
      }
      const data = await res.json();
      setReviews(data.settings?.testimonials || []);
    } catch (err) {
      console.error(err);
      setError(err.message || 'Error loading testimonials');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchReviews();
  }, [fetchReviews]);

  // Open modal for add
  const handleOpenAdd = () => {
    setEditingIndex(null);
    setFormData({ name: '', location: '', stars: 5, text: '' });
    setModalOpen(true);
  };

  // Open modal for edit
  const handleOpenEdit = (review, index) => {
    setEditingIndex(index);
    setFormData({
      name: review.name || '',
      location: review.location || '',
      stars: review.stars || 5,
      text: review.text || ''
    });
    setModalOpen(true);
  };

  // Handle Form Change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'stars' ? parseInt(value) : value
    }));
  };

  // Save Review (Add / Edit)
  const handleSave = async (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.text.trim()) {
      showToast('Name and Review text are required', 'error');
      return;
    }

    setSaving(true);
    try {
      let updatedReviews = [...reviews];
      if (editingIndex !== null) {
        // Edit mode
        updatedReviews[editingIndex] = {
          ...updatedReviews[editingIndex],
          ...formData
        };
      } else {
        // Add mode (assign a pseudo unique ID)
        updatedReviews.unshift({
          id: Date.now(),
          ...formData
        });
      }

      const res = await adminFetch('/api/admin/settings', {
        method: 'POST',
        body: JSON.stringify({
          key: 'testimonials',
          value: updatedReviews
        })
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || 'Failed to save testimonials');
      }

      showToast(editingIndex !== null ? 'Review updated successfully' : 'New review added successfully', 'success');
      setReviews(updatedReviews);
      setModalOpen(false);
    } catch (err) {
      console.error(err);
      showToast(err.message || 'Failed to save settings', 'error');
    } finally {
      setSaving(false);
    }
  };

  // Delete review
  const handleDelete = async () => {
    if (deleteIndex === null) return;
    setDeleting(true);
    try {
      const updatedReviews = reviews.filter((_, idx) => idx !== deleteIndex);
      
      const res = await adminFetch('/api/admin/settings', {
        method: 'POST',
        body: JSON.stringify({
          key: 'testimonials',
          value: updatedReviews
        })
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || 'Failed to delete review');
      }

      showToast('Review deleted successfully', 'success');
      setReviews(updatedReviews);
      setDeleteIndex(null);
    } catch (err) {
      console.error(err);
      showToast(err.message || 'Failed to delete review', 'error');
    } finally {
      setDeleting(false);
    }
  };

  return (
    <AdminLayout title="Customer Reviews">
      <div className="admin-toolbar">
        <div style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>
          Manage customer testimonials displayed on the homepage slider.
        </div>
        <button className="admin-add-btn" onClick={handleOpenAdd}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
          Add Review
        </button>
      </div>

      {/* Error state */}
      {error && (
        <div className="admin-error-banner">
          <span className="admin-error-icon">⚠️</span>
          <div className="admin-error-content">
            <div className="admin-error-title">Error loading reviews</div>
            <div className="admin-error-text">{error}</div>
          </div>
          <button className="admin-retry-btn" onClick={fetchReviews}>
            Retry
          </button>
        </div>
      )}

      {/* Loading Skeletons */}
      {loading && !error && (
        <div className="admin-table-container">
          <table className="admin-table">
            <thead>
              <tr>
                <th style={{ width: 150 }}>Name</th>
                <th style={{ width: 150 }}>Location</th>
                <th style={{ width: 120 }}>Stars</th>
                <th>Review Text</th>
                <th style={{ width: 150 }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {Array.from({ length: 5 }).map((_, i) => (
                <tr key={i}>
                  <td><div className="admin-skeleton admin-skeleton-text short" /></td>
                  <td><div className="admin-skeleton admin-skeleton-text short" /></td>
                  <td><div className="admin-skeleton admin-skeleton-text short" /></td>
                  <td><div className="admin-skeleton admin-skeleton-text wide" /></td>
                  <td><div className="admin-skeleton admin-skeleton-text medium" /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Empty State */}
      {!loading && !error && reviews.length === 0 && (
        <div className="admin-table-container">
          <div className="admin-empty-state">
            <div className="admin-empty-icon">💬</div>
            <h3 className="admin-empty-title">No reviews yet</h3>
            <p className="admin-empty-text">
              Add some positive customer feedback to showcase on your store page!
            </p>
            <button className="admin-add-btn" onClick={handleOpenAdd} style={{ marginTop: '16px' }}>
              Add Your First Review
            </button>
          </div>
        </div>
      )}

      {/* Reviews Table */}
      {!loading && !error && reviews.length > 0 && (
        <div className="admin-table-container">
          <table className="admin-table">
            <thead>
              <tr>
                <th style={{ width: 150 }}>Name</th>
                <th style={{ width: 150 }}>Location</th>
                <th style={{ width: 120 }}>Stars</th>
                <th>Review Text</th>
                <th style={{ width: 160 }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {reviews.map((review, idx) => (
                <tr key={review.id || idx}>
                  <td>
                    <strong style={{ fontSize: '14px', color: '#1a0808' }}>{review.name}</strong>
                  </td>
                  <td>
                    <span style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>{review.location || 'Guntur'}</span>
                  </td>
                  <td>
                    <span style={{ color: '#D4AF37', fontSize: '14px', letterSpacing: '2px' }}>
                      {'★'.repeat(review.stars || 5)}
                    </span>
                  </td>
                  <td>
                    <div style={{ fontSize: '13px', color: '#555', lineHeight: '1.5', maxWidth: '480px' }}>
                      "{review.text}"
                    </div>
                  </td>
                  <td>
                    <div className="admin-actions">
                      <button
                        onClick={() => handleOpenEdit(review, idx)}
                        className="admin-action-btn"
                      >
                        ✏️ Edit
                      </button>
                      <button
                        onClick={() => setDeleteIndex(idx)}
                        className="admin-action-btn delete"
                      >
                        🗑️ Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Add/Edit Modal */}
      {modalOpen && (
        <div className="admin-modal-overlay" onClick={() => !saving && setModalOpen(false)}>
          <div className="admin-modal" style={{ maxWidth: '500px', width: '100%', padding: '24px' }} onClick={e => e.stopPropagation()}>
            <h3 className="admin-modal-title" style={{ textAlign: 'left', marginBottom: '20px' }}>
              {editingIndex !== null ? '✏️ Edit Review' : '💬 Add New Review'}
            </h3>
            
            <form onSubmit={handleSave}>
              <div className="admin-login-field" style={{ marginBottom: '16px' }}>
                <label style={{ display: 'block', marginBottom: '6px', fontSize: '13px', fontWeight: '600' }}>Customer Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="e.g. Priyanjali R."
                  style={{
                    width: '100%',
                    padding: '10px 12px',
                    borderRadius: '8px',
                    border: '1px solid var(--cream-deep)',
                    outline: 'none',
                    fontSize: '14px'
                  }}
                />
              </div>

              <div className="admin-login-field" style={{ marginBottom: '16px' }}>
                <label style={{ display: 'block', marginBottom: '6px', fontSize: '13px', fontWeight: '600' }}>Location / Sub-label</label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="e.g. Brodipet, Guntur"
                  style={{
                    width: '100%',
                    padding: '10px 12px',
                    borderRadius: '8px',
                    border: '1px solid var(--cream-deep)',
                    outline: 'none',
                    fontSize: '14px'
                  }}
                />
              </div>

              <div className="admin-login-field" style={{ marginBottom: '16px' }}>
                <label style={{ display: 'block', marginBottom: '6px', fontSize: '13px', fontWeight: '600' }}>Rating (Stars) *</label>
                <select
                  name="stars"
                  value={formData.stars}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '10px 12px',
                    borderRadius: '8px',
                    border: '1px solid var(--cream-deep)',
                    outline: 'none',
                    fontSize: '14px',
                    background: '#fff'
                  }}
                >
                  <option value={5}>5 Stars ★★★★★</option>
                  <option value={4}>4 Stars ★★★★☆</option>
                  <option value={3}>3 Stars ★★★☆☆</option>
                  <option value={2}>2 Stars ★★☆☆☆</option>
                  <option value={1}>1 Star ★☆☆☆☆</option>
                </select>
              </div>

              <div className="admin-login-field" style={{ marginBottom: '24px' }}>
                <label style={{ display: 'block', marginBottom: '6px', fontSize: '13px', fontWeight: '600' }}>Review Text *</label>
                <textarea
                  name="text"
                  value={formData.text}
                  onChange={handleChange}
                  required
                  placeholder="What did the customer say about Murali Sweets?"
                  rows={4}
                  style={{
                    width: '100%',
                    padding: '10px 12px',
                    borderRadius: '8px',
                    border: '1px solid var(--cream-deep)',
                    outline: 'none',
                    fontSize: '14px',
                    resize: 'vertical',
                    fontFamily: 'inherit'
                  }}
                />
              </div>

              <div className="admin-modal-actions" style={{ marginTop: '0' }}>
                <button
                  type="button"
                  className="admin-modal-cancel"
                  onClick={() => setModalOpen(false)}
                  disabled={saving}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="admin-modal-confirm"
                  style={{ background: 'var(--maroon-primary)' }}
                  disabled={saving}
                >
                  {saving ? 'Saving...' : 'Save Review'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {deleteIndex !== null && (
        <div className="admin-modal-overlay" onClick={() => !deleting && setDeleteIndex(null)}>
          <div className="admin-modal" onClick={e => e.stopPropagation()}>
            <div className="admin-modal-icon">🗑️</div>
            <h3 className="admin-modal-title">Delete this testimonial?</h3>
            <p className="admin-modal-body">
              Are you sure you want to delete this customer review? This will remove it from the home page.
            </p>
            <div className="admin-modal-actions">
              <button
                className="admin-modal-cancel"
                onClick={() => setDeleteIndex(null)}
                disabled={deleting}
              >
                Cancel
              </button>
              <button
                className="admin-modal-confirm"
                onClick={handleDelete}
                disabled={deleting}
              >
                {deleting ? 'Deleting...' : 'Delete'}
              </button>
            </div>
          </div>
        </div>
      )}
    </AdminLayout>
  );
}
