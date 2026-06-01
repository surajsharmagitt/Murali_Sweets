import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import AdminLayout from '../../components/admin/AdminLayout'
import ProductForm from '../../components/admin/ProductForm'
import { useToast } from '../../components/admin/Toast'
import { adminFetch } from '../../lib/admin-auth'

/**
 * Edit Product page — /admin/dashboard/edit/:id
 * Fetches existing product data and pre-fills the form.
 */
function EditProductContent() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { showToast } = useToast()
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  // Fetch product data
  useEffect(() => {
    async function fetchProduct() {
      setLoading(true)
      setError(null)
      try {
        const res = await adminFetch(`/api/admin/products/${id}`)
        if (!res.ok) {
          const data = await res.json().catch(() => ({}))
          throw new Error(data.error || 'Product not found')
        }
        const data = await res.json()
        setProduct(data.product)
      } catch (err) {
        console.error('Fetch error:', err)
        if (err.message === 'Session expired' || err.message === 'Not authenticated') return
        setError(err.message || 'Failed to load product')
      } finally {
        setLoading(false)
      }
    }
    fetchProduct()
  }, [id])

  const handleSubmit = async (data) => {
    try {
      const res = await adminFetch(`/api/admin/products/${id}`, {
        method: 'PUT',
        body: JSON.stringify(data),
      })

      const result = await res.json()

      if (!res.ok) {
        throw new Error(result.error || 'Failed to update product')
      }

      showToast(`"${data.name}" updated successfully!`, 'success')
      navigate('/admin/dashboard')
    } catch (err) {
      console.error('Update error:', err)
      showToast(err.message || 'Failed to update product', 'error')
      throw err
    }
  }

  // Loading state
  if (loading) {
    return (
      <div className="admin-form" style={{ maxWidth: 780 }}>
        <div className="admin-form-section">
          <div className="admin-skeleton admin-skeleton-text wide" style={{ height: 20, marginBottom: 24 }} />
          <div className="admin-skeleton admin-skeleton-text" style={{ width: '100%', height: 44, marginBottom: 20 }} />
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
            <div className="admin-skeleton admin-skeleton-text" style={{ width: '100%', height: 44 }} />
            <div className="admin-skeleton admin-skeleton-text" style={{ width: '100%', height: 44 }} />
          </div>
        </div>
      </div>
    )
  }

  // Error state
  if (error) {
    return (
      <div className="admin-error-banner">
        <span className="admin-error-icon">⚠️</span>
        <div className="admin-error-content">
          <div className="admin-error-title">Error loading product</div>
          <div className="admin-error-text">{error}</div>
        </div>
        <button className="admin-retry-btn" onClick={() => window.location.reload()}>
          Retry
        </button>
      </div>
    )
  }

  if (!product) return null

  return (
    <ProductForm
      initialData={product}
      onSubmit={handleSubmit}
      isEditing
    />
  )
}

export default function AdminEditProduct() {
  return (
    <AdminLayout title="Edit Product">
      <EditProductContent />
    </AdminLayout>
  )
}
