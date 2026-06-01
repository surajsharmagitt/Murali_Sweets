import { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { isLoggedIn, clearAdminSession } from '../../lib/admin-auth'
import { ToastProvider } from './Toast'
import '../../admin.css'

/**
 * Admin layout wrapper with:
 * - Auth guard (redirects to /admin if not logged in)
 * - Responsive sidebar with navigation
 * - Top bar with page title
 * - Toast notifications
 */
export default function AdminLayout({ children, title = 'Dashboard' }) {
  const navigate = useNavigate()
  const location = useLocation()
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [authChecked, setAuthChecked] = useState(false)

  // Auth guard — redirect to login if not authenticated
  useEffect(() => {
    if (!isLoggedIn()) {
      navigate('/admin', { replace: true })
    } else {
      setAuthChecked(true)
    }
  }, [navigate])

  const handleLogout = () => {
    clearAdminSession()
    navigate('/admin', { replace: true })
  }

  // Don't render anything until auth is verified
  if (!authChecked) {
    return (
      <div className="admin-login-page">
        <div className="admin-spinner" style={{ width: 32, height: 32 }} />
      </div>
    )
  }

  const isActive = (path) => location.pathname === path

  return (
    <ToastProvider>
      <div className="admin-layout">
        {/* Mobile overlay */}
        <div
          className={`admin-sidebar-overlay ${sidebarOpen ? 'visible' : ''}`}
          onClick={() => setSidebarOpen(false)}
        />

        {/* Sidebar */}
        <aside className={`admin-sidebar ${sidebarOpen ? 'open' : ''}`}>
          <div className="admin-sidebar-header">
            <div className="admin-sidebar-logo">
              <span>श्री</span>
            </div>
            <div className="admin-sidebar-brand">
              <div className="admin-sidebar-brand-name">Murali Sweets</div>
              <div className="admin-sidebar-brand-label">Admin Panel</div>
            </div>
          </div>

          <nav className="admin-sidebar-nav">
            <Link
              to="/admin/dashboard"
              className={`admin-sidebar-link ${isActive('/admin/dashboard') ? 'active' : ''}`}
              onClick={() => setSidebarOpen(false)}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
              Products
            </Link>
            <Link
              to="/admin/dashboard/add"
              className={`admin-sidebar-link ${isActive('/admin/dashboard/add') ? 'active' : ''}`}
              onClick={() => setSidebarOpen(false)}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/></svg>
              Add Product
            </Link>
          </nav>

          <div className="admin-sidebar-footer">
            <button className="admin-logout-btn" onClick={handleLogout}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>
              Logout
            </button>
          </div>
        </aside>

        {/* Main content */}
        <div className="admin-main">
          <header className="admin-topbar">
            <button
              className="admin-mobile-toggle"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
            </button>
            <h1 className="admin-topbar-title">{title}</h1>
            <div style={{ width: 40 }} /> {/* Spacer for alignment */}
          </header>

          <div className="admin-content">
            {children}
          </div>
        </div>
      </div>
    </ToastProvider>
  )
}
