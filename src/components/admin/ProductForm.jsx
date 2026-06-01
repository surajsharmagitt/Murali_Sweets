import { useState, useEffect, useCallback } from 'react'

/**
 * Reusable product form for Add and Edit.
 * - Full validation with inline error messages
 * - Auto-saves to sessionStorage on change
 * - Ingredient tag input with Enter to add, × to remove
 * - Active toggle switch
 * - Loading state on submit
 */

const CATEGORIES = [
  'Kaju Sweets', 'Kalakand', 'Kova Sweets', 'Mysurpak',
  'Peda & Burfi', 'Laddu', 'Bengali Sweets', 'Halwa',
  'Ariselu', 'Malpuri', 'Jangiri', 'Bobbatlu', 'Badusha',
  'Kaja & Kajikai', 'Chikki', 'Boondi', 'Papidi',
  'Special', 'Hot & Savory', 'Mixtures', 'Pakodi',
  'Chekkalu & Chakralu', 'Snacks',
]

const BADGES = [
  { value: '', label: 'None' },
  { value: 'Bestseller', label: 'Bestseller' },
  { value: 'New', label: 'New' },
  { value: 'Hot', label: 'Hot' },
]

const STORAGE_KEY = 'admin_product_form_draft'

const defaultValues = {
  name: '',
  category: '',
  description: '',
  base_price: '',
  price_250g: '',
  price_500g: '',
  price_1kg: '',
  image_url: '',
  badge: '',
  ingredients: [],
  tradition_text: '',
  is_active: true,
  display_order: '0',
}

export default function ProductForm({ initialData, onSubmit, isEditing = false }) {
  const [form, setForm] = useState(() => {
    // On mount: use initialData (for edit) or restore draft (for add)
    if (initialData) {
      return {
        name: initialData.name || '',
        category: initialData.category || '',
        description: initialData.description || '',
        base_price: initialData.base_price?.toString() || '',
        price_250g: initialData.price_250g?.toString() || '',
        price_500g: initialData.price_500g?.toString() || '',
        price_1kg: initialData.price_1kg?.toString() || '',
        image_url: initialData.image_url || '',
        badge: initialData.badge || '',
        ingredients: initialData.ingredients || [],
        tradition_text: initialData.tradition_text || '',
        is_active: initialData.is_active !== false,
        display_order: initialData.display_order?.toString() || '0',
      }
    }

    // Try restoring draft from sessionStorage
    try {
      const saved = sessionStorage.getItem(STORAGE_KEY)
      if (saved) return JSON.parse(saved)
    } catch { /* ignore */ }

    return { ...defaultValues }
  })

  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})
  const [loading, setLoading] = useState(false)
  const [ingredientInput, setIngredientInput] = useState('')

  // Auto-save draft to sessionStorage (only for new products)
  useEffect(() => {
    if (!isEditing) {
      try {
        sessionStorage.setItem(STORAGE_KEY, JSON.stringify(form))
      } catch { /* ignore */ }
    }
  }, [form, isEditing])

  // Validation
  const validate = useCallback((data) => {
    const errs = {}

    if (!data.name.trim()) {
      errs.name = 'Product name is required'
    } else if (data.name.length > 100) {
      errs.name = 'Name must be under 100 characters'
    }

    if (!data.category) {
      errs.category = 'Category is required'
    } else if (!CATEGORIES.includes(data.category)) {
      errs.category = 'Invalid category'
    }

    if (!data.base_price) {
      errs.base_price = 'Base price is required'
    } else if (isNaN(data.base_price) || parseInt(data.base_price) < 10) {
      errs.base_price = 'Minimum ₹10'
    } else if (parseInt(data.base_price) > 100000) {
      errs.base_price = 'Maximum ₹1,00,000'
    }

    if (data.price_250g && (isNaN(data.price_250g) || parseInt(data.price_250g) < 1)) {
      errs.price_250g = 'Must be a positive number'
    }
    if (data.price_500g && (isNaN(data.price_500g) || parseInt(data.price_500g) < 1)) {
      errs.price_500g = 'Must be a positive number'
    }
    if (data.price_1kg && (isNaN(data.price_1kg) || parseInt(data.price_1kg) < 1)) {
      errs.price_1kg = 'Must be a positive number'
    }

    if (data.image_url && !data.image_url.startsWith('http') && !data.image_url.startsWith('/')) {
      errs.image_url = 'Must start with http:// or https:// or /'
    }

    if (data.display_order && isNaN(data.display_order)) {
      errs.display_order = 'Must be a number'
    }

    return errs
  }, [])

  // Run validation when form changes
  useEffect(() => {
    setErrors(validate(form))
  }, [form, validate])

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setForm(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  const handleBlur = (e) => {
    setTouched(prev => ({ ...prev, [e.target.name]: true }))
  }

  // Tag input handlers
  const handleIngredientKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      const val = ingredientInput.trim()
      if (val && !form.ingredients.includes(val)) {
        setForm(prev => ({
          ...prev,
          ingredients: [...prev.ingredients, val],
        }))
      }
      setIngredientInput('')
    }
  }

  const removeIngredient = (ingredient) => {
    setForm(prev => ({
      ...prev,
      ingredients: prev.ingredients.filter(i => i !== ingredient),
    }))
  }

  const hasErrors = Object.keys(errors).length > 0

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Touch all fields to show errors
    const allTouched = {}
    Object.keys(form).forEach(k => { allTouched[k] = true })
    setTouched(allTouched)

    const errs = validate(form)
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }

    setLoading(true)
    try {
      // Build payload
      const payload = {
        ...form,
        base_price: parseInt(form.base_price),
        price_250g: form.price_250g ? parseInt(form.price_250g) : null,
        price_500g: form.price_500g ? parseInt(form.price_500g) : null,
        price_1kg: form.price_1kg ? parseInt(form.price_1kg) : null,
        display_order: parseInt(form.display_order) || 0,
        badge: form.badge || null,
      }

      await onSubmit(payload)

      // Clear draft on successful submit (add mode only)
      if (!isEditing) {
        try { sessionStorage.removeItem(STORAGE_KEY) } catch { /* ignore */ }
      }
    } finally {
      setLoading(false)
    }
  }

  const showError = (field) => touched[field] && errors[field]

  return (
    <form className="admin-form" onSubmit={handleSubmit}>
      {/* ── Basic Info ── */}
      <div className="admin-form-section">
        <h3 className="admin-form-section-title">Basic Information</h3>

        <div className="admin-form-group">
          <label className="admin-form-label">
            Product Name <span className="required">*</span>
          </label>
          <input
            className={`admin-form-input ${showError('name') ? 'error' : ''}`}
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="e.g. Kaju Katli"
            maxLength={100}
          />
          {showError('name') && (
            <div className="admin-form-error-text">{errors.name}</div>
          )}
        </div>

        <div className="admin-form-row">
          <div className="admin-form-group">
            <label className="admin-form-label">
              Category <span className="required">*</span>
            </label>
            <select
              className={`admin-form-select ${showError('category') ? 'error' : ''}`}
              name="category"
              value={form.category}
              onChange={handleChange}
              onBlur={handleBlur}
            >
              <option value="">Select category</option>
              {CATEGORIES.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
            {showError('category') && (
              <div className="admin-form-error-text">{errors.category}</div>
            )}
          </div>

          <div className="admin-form-group">
            <label className="admin-form-label">Badge</label>
            <select
              className="admin-form-select"
              name="badge"
              value={form.badge}
              onChange={handleChange}
            >
              {BADGES.map(b => (
                <option key={b.value} value={b.value}>{b.label}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="admin-form-group">
          <label className="admin-form-label">Short Description</label>
          <textarea
            className="admin-form-textarea"
            name="description"
            value={form.description}
            onChange={handleChange}
            placeholder="A one-line description of this sweet"
            rows={2}
            style={{ minHeight: 70 }}
          />
        </div>
      </div>

      {/* ── Pricing ── */}
      <div className="admin-form-section">
        <h3 className="admin-form-section-title">Pricing</h3>

        <div className="admin-form-row">
          <div className="admin-form-group">
            <label className="admin-form-label">
              Base Price (250g) ₹ <span className="required">*</span>
            </label>
            <input
              className={`admin-form-input ${showError('base_price') ? 'error' : ''}`}
              type="number"
              name="base_price"
              value={form.base_price}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="250"
              min={10}
              max={100000}
            />
            {showError('base_price') && (
              <div className="admin-form-error-text">{errors.base_price}</div>
            )}
          </div>

          <div className="admin-form-group">
            <label className="admin-form-label">Price for 250g ₹</label>
            <input
              className={`admin-form-input ${showError('price_250g') ? 'error' : ''}`}
              type="number"
              name="price_250g"
              value={form.price_250g}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder={form.base_price || 'Same as base'}
            />
            <div className="admin-form-hint">Defaults to base price if empty</div>
          </div>
        </div>

        <div className="admin-form-row">
          <div className="admin-form-group">
            <label className="admin-form-label">Price for 500g ₹</label>
            <input
              className={`admin-form-input ${showError('price_500g') ? 'error' : ''}`}
              type="number"
              name="price_500g"
              value={form.price_500g}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder={form.base_price ? `${parseInt(form.base_price) * 2}` : 'Auto: base × 2'}
            />
            <div className="admin-form-hint">Defaults to base × 2 if empty</div>
          </div>

          <div className="admin-form-group">
            <label className="admin-form-label">Price for 1kg ₹</label>
            <input
              className={`admin-form-input ${showError('price_1kg') ? 'error' : ''}`}
              type="number"
              name="price_1kg"
              value={form.price_1kg}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder={form.base_price ? `${parseInt(form.base_price) * 4}` : 'Auto: base × 4'}
            />
            <div className="admin-form-hint">Defaults to base × 4 if empty</div>
          </div>
        </div>
      </div>

      {/* ── Media & Details ── */}
      <div className="admin-form-section">
        <h3 className="admin-form-section-title">Media & Details</h3>

        <div className="admin-form-group">
          <label className="admin-form-label">Image URL</label>
          <input
            className={`admin-form-input ${showError('image_url') ? 'error' : ''}`}
            type="text"
            name="image_url"
            value={form.image_url}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="https://... or /images/sweets/..."
          />
          {showError('image_url') && (
            <div className="admin-form-error-text">{errors.image_url}</div>
          )}
          <div className="admin-form-hint">Paste an image URL or a path from /images/</div>
          {form.image_url && (form.image_url.startsWith('http') || form.image_url.startsWith('/')) && (
            <div style={{ marginTop: 10 }}>
              <img
                src={form.image_url}
                alt="Preview"
                style={{
                  width: 80, height: 80, objectFit: 'cover',
                  borderRadius: 8, border: '1px solid #e0dbd5',
                }}
                onError={(e) => { e.target.style.display = 'none' }}
              />
            </div>
          )}
        </div>

        <div className="admin-form-group">
          <label className="admin-form-label">Ingredients</label>
          <div
            className="admin-tag-input-container"
            onClick={() => document.getElementById('ingredient-input')?.focus()}
          >
            {form.ingredients.map((ing, i) => (
              <span key={i} className="admin-tag">
                {ing}
                <button
                  type="button"
                  className="admin-tag-remove"
                  onClick={() => removeIngredient(ing)}
                >
                  ×
                </button>
              </span>
            ))}
            <input
              id="ingredient-input"
              className="admin-tag-input"
              type="text"
              value={ingredientInput}
              onChange={(e) => setIngredientInput(e.target.value)}
              onKeyDown={handleIngredientKeyDown}
              placeholder={form.ingredients.length ? '' : 'Type and press Enter to add'}
            />
          </div>
          <div className="admin-form-hint">Press Enter to add each ingredient</div>
        </div>

        <div className="admin-form-group">
          <label className="admin-form-label">Tradition / Cultural Story</label>
          <textarea
            className="admin-form-textarea"
            name="tradition_text"
            value={form.tradition_text}
            onChange={handleChange}
            placeholder="The cultural history or significance of this sweet..."
            rows={3}
          />
        </div>
      </div>

      {/* ── Settings ── */}
      <div className="admin-form-section">
        <h3 className="admin-form-section-title">Settings</h3>

        <div className="admin-form-row">
          <div className="admin-form-group">
            <label className="admin-form-label">Display Order</label>
            <input
              className={`admin-form-input ${showError('display_order') ? 'error' : ''}`}
              type="number"
              name="display_order"
              value={form.display_order}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="0"
            />
            <div className="admin-form-hint">Lower number = shown first</div>
          </div>

          <div className="admin-form-group">
            <label className="admin-form-label">Active Status</label>
            <div className="admin-toggle" style={{ marginTop: 6 }}>
              <label className="admin-toggle-switch">
                <input
                  type="checkbox"
                  name="is_active"
                  checked={form.is_active}
                  onChange={handleChange}
                />
                <span className="admin-toggle-slider" />
              </label>
              <span className="admin-toggle-label">
                {form.is_active ? 'Visible on shop' : 'Hidden from shop'}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ── Form Actions ── */}
      <div className="admin-form-actions">
        <button
          type="submit"
          className="admin-submit-btn"
          disabled={loading || hasErrors}
        >
          {loading && <span className="admin-spinner" />}
          {loading
            ? (isEditing ? 'Saving...' : 'Creating...')
            : (isEditing ? 'Save Changes' : 'Create Product')
          }
        </button>
        <a href="/admin/dashboard" className="admin-cancel-btn">
          Cancel
        </a>
      </div>
    </form>
  )
}
