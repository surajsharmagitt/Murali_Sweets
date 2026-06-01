import { useNavigate } from 'react-router-dom'
import AdminLayout from '../../components/admin/AdminLayout'
import ProductForm from '../../components/admin/ProductForm'
import { useToast } from '../../components/admin/Toast'
import { adminFetch } from '../../lib/admin-auth'

/**
 * Add Product page — /admin/dashboard/add
 * Uses the reusable ProductForm component.
 */
function AddProductContent() {
  const navigate = useNavigate()
  const { showToast } = useToast()

  const handleSubmit = async (data) => {
    try {
      const res = await adminFetch('/api/admin/products', {
        method: 'POST',
        body: JSON.stringify(data),
      })

      const result = await res.json()

      if (!res.ok) {
        throw new Error(result.error || 'Failed to create product')
      }

      showToast(`"${data.name}" created successfully!`, 'success')
      navigate('/admin/dashboard')
    } catch (err) {
      console.error('Create error:', err)
      showToast(err.message || 'Failed to create product', 'error')
      throw err // Re-throw so ProductForm knows submit failed
    }
  }

  return <ProductForm onSubmit={handleSubmit} />
}

export default function AdminAddProduct() {
  return (
    <AdminLayout title="Add Product">
      <AddProductContent />
    </AdminLayout>
  )
}
