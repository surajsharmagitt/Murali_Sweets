import { useState, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'
import AdminLayout from '../../components/admin/AdminLayout'
import { useToast } from '../../components/admin/Toast'
import { adminFetch } from '../../lib/admin-auth'

const ITEMS_PER_PAGE = 20

/**
 * Admin Dashboard — /admin/dashboard
 * - Product table with search/filter, pagination
 * - Edit and Delete actions per row
 * - Delete confirmation modal
 * - Loading skeletons, empty state, error handling
 */
function DashboardContent() {
  const { showToast } = useToast()
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [search, setSearch] = useState('')
  const [page, setPage] = useState(1)

  // Delete modal state
  const [deleteTarget, setDeleteTarget] = useState(null)
  const [deleting, setDeleting] = useState(false)

  // Fetch all products
  const fetchProducts = useCallback(async () => {
    setLoading(true)
    setError(null)
    try {
      const res = await adminFetch('/api/admin/products')
      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        throw new Error(data.error || 'Failed to fetch products')
      }
      const data = await res.json()
      setProducts(data.products || [])
    } catch (err) {
      console.error('Fetch error:', err)
      if (err.message === 'Session expired' || err.message === 'Not authenticated') return
      setError(err.message || 'Connection error — check your internet')
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchProducts()
  }, [fetchProducts])

  // Filter products by search term
  const filtered = products.filter(p => {
    const q = search.toLowerCase()
    return (
      p.name?.toLowerCase().includes(q) ||
      p.category?.toLowerCase().includes(q)
    )
  })

  // Pagination
  const totalPages = Math.max(1, Math.ceil(filtered.length / ITEMS_PER_PAGE))
  const currentPage = Math.min(page, totalPages)
  const paginated = filtered.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  )

  // Reset page when search changes
  useEffect(() => {
    setPage(1)
  }, [search])

  // Handle delete
  const handleDelete = async () => {
    if (!deleteTarget) return
    setDeleting(true)
    try {
      const res = await adminFetch(`/api/admin/products/${deleteTarget.id}`, {
        method: 'DELETE',
      })
      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        throw new Error(data.error || 'Failed to delete product')
      }
      showToast(`"${deleteTarget.name}" has been hidden from the shop`, 'success')
      setDeleteTarget(null)
      fetchProducts()
    } catch (err) {
      console.error('Delete error:', err)
      showToast(err.message || 'Failed to delete product', 'error')
    } finally {
      setDeleting(false)
    }
  }

  // Handle restore (re-activate)
  const handleRestore = async (product) => {
    try {
      const res = await adminFetch(`/api/admin/products/${product.id}`, {
        method: 'PUT',
        body: JSON.stringify({ is_active: true }),
      })
      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        throw new Error(data.error || 'Failed to restore product')
      }
      showToast(`"${product.name}" is now visible on the shop`, 'success')
      fetchProducts()
    } catch (err) {
      showToast(err.message || 'Failed to restore product', 'error')
    }
  }

  return (
    <>
      {/* Toolbar */}
      <div className="admin-toolbar">
        <div className="admin-search-wrapper">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
          <input
            className="admin-search"
            type="text"
            placeholder="Search by name or category..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <Link to="/admin/dashboard/add" className="admin-add-btn">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
          Add Product
        </Link>
      </div>

      {/* Error state */}
      {error && (
        <div className="admin-error-banner">
          <span className="admin-error-icon">⚠️</span>
          <div className="admin-error-content">
            <div className="admin-error-title">Error loading products</div>
            <div className="admin-error-text">{error}</div>
          </div>
          <button className="admin-retry-btn" onClick={fetchProducts}>
            Retry
          </button>
        </div>
      )}

      {/* Loading skeletons */}
      {loading && !error && (
        <div className="admin-table-container">
          <table className="admin-table">
            <thead>
              <tr>
                <th style={{ width: 60 }}>Image</th>
                <th>Name</th>
                <th>Category</th>
                <th>Price</th>
                <th>Badge</th>
                <th>Status</th>
                <th style={{ width: 160 }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {Array.from({ length: 8 }).map((_, i) => (
                <tr key={i}>
                  <td><div className="admin-skeleton admin-skeleton-image" /></td>
                  <td><div className="admin-skeleton admin-skeleton-text wide" /></td>
                  <td><div className="admin-skeleton admin-skeleton-text medium" /></td>
                  <td><div className="admin-skeleton admin-skeleton-text short" /></td>
                  <td><div className="admin-skeleton admin-skeleton-text short" /></td>
                  <td><div className="admin-skeleton admin-skeleton-text short" /></td>
                  <td><div className="admin-skeleton admin-skeleton-text medium" /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Empty state */}
      {!loading && !error && products.length === 0 && (
        <div className="admin-table-container">
          <div className="admin-empty-state">
            <div className="admin-empty-icon">🍬</div>
            <h3 className="admin-empty-title">No products yet</h3>
            <p className="admin-empty-text">
              Start adding your sweets and namkeen to the catalog.
            </p>
            <Link to="/admin/dashboard/add" className="admin-add-btn">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
              Add Your First Product
            </Link>
          </div>
        </div>
      )}

      {/* No search results */}
      {!loading && !error && products.length > 0 && filtered.length === 0 && (
        <div className="admin-table-container">
          <div className="admin-empty-state">
            <div className="admin-empty-icon">🔍</div>
            <h3 className="admin-empty-title">No results for "{search}"</h3>
            <p className="admin-empty-text">Try a different search term.</p>
          </div>
        </div>
      )}

      {/* Product table */}
      {!loading && !error && paginated.length > 0 && (
        <>
          <div className="admin-table-container">
            <table className="admin-table">
              <thead>
                <tr>
                  <th style={{ width: 60 }}>Image</th>
                  <th>Name</th>
                  <th>Category</th>
                  <th>Price</th>
                  <th>Badge</th>
                  <th>Status</th>
                  <th style={{ width: 180 }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {paginated.map(product => (
                  <tr key={product.id}>
                    <td>
                      {product.image_url ? (
                        <img
                          className="admin-table-image"
                          src={product.image_url}
                          alt={product.name}
                          onError={(e) => {
                            e.target.src = ''
                            e.target.style.background = '#f0ece8'
                          }}
                        />
                      ) : (
                        <div className="admin-table-image" style={{ background: '#f0ece8', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18 }}>
                          🍬
                        </div>
                      )}
                    </td>
                    <td>
                      <div className="admin-table-name">{product.name}</div>
                    </td>
                    <td>
                      <span className="admin-table-category">{product.category}</span>
                    </td>
                    <td>
                      <span className="admin-table-price">₹{product.base_price}</span>
                    </td>
                    <td>
                      {product.badge ? (
                        <span className={`admin-badge admin-badge-${product.badge.toLowerCase()}`}>
                          {product.badge}
                        </span>
                      ) : (
                        <span style={{ color: '#ccc', fontSize: 12 }}>—</span>
                      )}
                    </td>
                    <td>
                      <div className="admin-status">
                        <span className={`admin-status-dot ${product.is_active ? 'active' : 'inactive'}`} />
                        {product.is_active ? 'Active' : 'Hidden'}
                      </div>
                    </td>
                    <td>
                      <div className="admin-actions">
                        <Link
                          to={`/admin/dashboard/edit/${product.id}`}
                          className="admin-action-btn"
                        >
                          ✏️ Edit
                        </Link>
                        {product.is_active ? (
                          <button
                            className="admin-action-btn delete"
                            onClick={() => setDeleteTarget(product)}
                          >
                            🗑️ Delete
                          </button>
                        ) : (
                          <button
                            className="admin-action-btn restore"
                            onClick={() => handleRestore(product)}
                          >
                            ♻️ Restore
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="admin-pagination">
              <button
                className="admin-page-btn"
                disabled={currentPage === 1}
                onClick={() => setPage(p => p - 1)}
              >
                ‹
              </button>
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  className={`admin-page-btn ${currentPage === i + 1 ? 'active' : ''}`}
                  onClick={() => setPage(i + 1)}
                >
                  {i + 1}
                </button>
              ))}
              <button
                className="admin-page-btn"
                disabled={currentPage === totalPages}
                onClick={() => setPage(p => p + 1)}
              >
                ›
              </button>
              <span className="admin-page-info">
                {filtered.length} product{filtered.length !== 1 ? 's' : ''}
              </span>
            </div>
          )}
        </>
      )}

      {/* Delete confirmation modal */}
      {deleteTarget && (
        <div className="admin-modal-overlay" onClick={() => !deleting && setDeleteTarget(null)}>
          <div className="admin-modal" onClick={e => e.stopPropagation()}>
            <div className="admin-modal-icon">🗑️</div>
            <h3 className="admin-modal-title">Delete "{deleteTarget.name}"?</h3>
            <p className="admin-modal-body">
              This will <strong>hide it from the shop</strong>. The product data is preserved — you can restore it later from this dashboard.
            </p>
            <div className="admin-modal-actions">
              <button
                className="admin-modal-cancel"
                onClick={() => setDeleteTarget(null)}
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
    </>
  )
}

export default function AdminDashboard() {
  return (
    <AdminLayout title="Products">
      <DashboardContent />
    </AdminLayout>
  )
}
