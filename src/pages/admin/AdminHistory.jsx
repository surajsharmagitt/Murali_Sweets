import { useState, useEffect, useCallback } from 'react';
import AdminLayout from '../../components/admin/AdminLayout';
import { useToast } from '../../components/admin/Toast';
import { adminFetch } from '../../lib/admin-auth';

function HistoryContent() {
  const { showToast } = useToast();
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState('');
  const [actionFilter, setActionFilter] = useState('ALL');
  const [page, setPage] = useState(1);
  const itemsPerPage = 20;

  const fetchLogs = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await adminFetch('/api/admin/logs');
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || 'Failed to fetch logs');
      }
      const data = await res.json();
      setLogs(data.logs || []);
    } catch (err) {
      console.error('Audit logs fetch error:', err);
      if (err.message === 'Session expired' || err.message === 'Not authenticated') return;
      setError(err.message || 'Connection error — check your internet');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchLogs();
  }, [fetchLogs]);

  // Filter logs by search & action type
  const filtered = logs.filter(log => {
    const q = search.toLowerCase();
    const matchesSearch = log.details?.toLowerCase().includes(q) || log.action?.toLowerCase().includes(q);
    const matchesAction = actionFilter === 'ALL' || log.action === actionFilter;
    return matchesSearch && matchesAction;
  });

  // Unique action types for filtering options
  const actionTypes = ['ALL', ...new Set(logs.map(log => log.action))];

  // Pagination
  const totalPages = Math.max(1, Math.ceil(filtered.length / itemsPerPage));
  const currentPage = Math.min(page, totalPages);
  const paginated = filtered.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Helper to format date
  const formatDate = (isoString) => {
    try {
      const date = new Date(isoString);
      return date.toLocaleDateString('en-IN', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      });
    } catch (e) {
      return isoString;
    }
  };

  // Badge class helper
  const getActionBadgeClass = (action) => {
    switch (action) {
      case 'CREATE_PRODUCT': return 'admin-badge-success';
      case 'UPDATE_PRODUCT': return 'admin-badge-info';
      case 'DELETE_PRODUCT': return 'admin-badge-danger';
      case 'RESTORE_PRODUCT': return 'admin-badge-warning';
      case 'UPDATE_SETTINGS': return 'admin-badge-primary';
      default: return 'admin-badge-secondary';
    }
  };

  return (
    <>
      {/* Search & Filter Toolbar */}
      <div className="admin-toolbar" style={{ gap: '16px', flexWrap: 'wrap' }}>
        <div className="admin-search-wrapper" style={{ flex: 1, minWidth: '240px' }}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
          </svg>
          <input
            className="admin-search"
            type="text"
            placeholder="Search details or actions..."
            value={search}
            onChange={(e) => { setSearch(e.target.value); setPage(1); }}
          />
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <label style={{ fontSize: '13px', fontWeight: '600', color: 'var(--text-muted)' }}>Action Type:</label>
          <select
            value={actionFilter}
            onChange={(e) => { setActionFilter(e.target.value); setPage(1); }}
            style={{
              padding: '8px 12px',
              borderRadius: '8px',
              border: '1px solid var(--cream-deep)',
              background: '#fff',
              fontSize: '13px',
              color: '#333',
              outline: 'none',
              cursor: 'pointer'
            }}
          >
            {actionTypes.map(type => (
              <option key={type} value={type}>
                {type.replace(/_/g, ' ')}
              </option>
            ))}
          </select>
        </div>

        <button 
          className="admin-retry-btn" 
          onClick={fetchLogs} 
          style={{ height: '38px', whiteSpace: 'nowrap' }}
          title="Refresh logs"
        >
          🔄 Refresh
        </button>
      </div>

      {/* Error state */}
      {error && (
        <div className="admin-error-banner">
          <span className="admin-error-icon">⚠️</span>
          <div className="admin-error-content">
            <div className="admin-error-title">Error loading logs</div>
            <div className="admin-error-text">{error}</div>
          </div>
          <button className="admin-retry-btn" onClick={fetchLogs}>
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
                <th style={{ width: 180 }}>Time</th>
                <th style={{ width: 180 }}>Action</th>
                <th>Details</th>
                <th style={{ width: 120 }}>User</th>
              </tr>
            </thead>
            <tbody>
              {Array.from({ length: 8 }).map((_, i) => (
                <tr key={i}>
                  <td><div className="admin-skeleton admin-skeleton-text medium" /></td>
                  <td><div className="admin-skeleton admin-skeleton-text short" /></td>
                  <td><div className="admin-skeleton admin-skeleton-text wide" /></td>
                  <td><div className="admin-skeleton admin-skeleton-text short" /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Empty state */}
      {!loading && !error && logs.length === 0 && (
        <div className="admin-table-container">
          <div className="admin-empty-state">
            <div className="admin-empty-icon">📜</div>
            <h3 className="admin-empty-title">No logs yet</h3>
            <p className="admin-empty-text">
              Activity history will be populated automatically when changes are made.
            </p>
          </div>
        </div>
      )}

      {/* No search results */}
      {!loading && !error && logs.length > 0 && filtered.length === 0 && (
        <div className="admin-table-container">
          <div className="admin-empty-state">
            <div className="admin-empty-icon">🔍</div>
            <h3 className="admin-empty-title">No matching logs found</h3>
            <p className="admin-empty-text">Try resetting filters or search query.</p>
          </div>
        </div>
      )}

      {/* Audit logs table */}
      {!loading && !error && paginated.length > 0 && (
        <>
          <div className="admin-table-container">
            <table className="admin-table">
              <thead>
                <tr>
                  <th style={{ width: 180 }}>Time</th>
                  <th style={{ width: 180 }}>Action</th>
                  <th>Details</th>
                  <th style={{ width: 120 }}>User</th>
                </tr>
              </thead>
              <tbody>
                {paginated.map(log => (
                  <tr key={log.id}>
                    <td>
                      <span style={{ fontSize: '13px', color: 'var(--text-muted)', whiteSpace: 'nowrap' }}>
                        {formatDate(log.created_at)}
                      </span>
                    </td>
                    <td>
                      <span className={`admin-badge ${getActionBadgeClass(log.action)}`}>
                        {log.action?.replace(/_/g, ' ')}
                      </span>
                    </td>
                    <td>
                      <div style={{ fontSize: '14px', color: '#1a0808', fontWeight: '500', lineHeight: 1.4 }}>
                        {log.details}
                      </div>
                    </td>
                    <td>
                      <span style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>
                        {log.performed_by || 'Admin'}
                      </span>
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
                {filtered.length} log entry{filtered.length !== 1 ? 'ies' : ''}
              </span>
            </div>
          )}
        </>
      )}

      {/* Scoped styles for colors on different badges */}
      <style>{`
        .admin-badge-success { background-color: #E2F9EB; color: #0E6233; font-weight: 600; padding: 4px 8px; border-radius: 6px; font-size: 11px; }
        .admin-badge-info { background-color: #E6F2FF; color: #0056B3; font-weight: 600; padding: 4px 8px; border-radius: 6px; font-size: 11px; }
        .admin-badge-danger { background-color: #FFF0F0; color: #CC3333; font-weight: 600; padding: 4px 8px; border-radius: 6px; font-size: 11px; }
        .admin-badge-warning { background-color: #FFF9E6; color: #B38600; font-weight: 600; padding: 4px 8px; border-radius: 6px; font-size: 11px; }
        .admin-badge-primary { background-color: #F0E6FF; color: #6F00FF; font-weight: 600; padding: 4px 8px; border-radius: 6px; font-size: 11px; }
        .admin-badge-secondary { background-color: #F0ECE8; color: #555555; font-weight: 600; padding: 4px 8px; border-radius: 6px; font-size: 11px; }
      `}</style>
    </>
  );
}

export default function AdminHistory() {
  return (
    <AdminLayout title="Audit Logs">
      <HistoryContent />
    </AdminLayout>
  );
}
