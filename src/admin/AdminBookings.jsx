import React, { useState, useMemo } from 'react';
import { useAdmin } from '../context/AdminContext';
import { Download, Filter, Calendar } from 'lucide-react';

const AdminBookings = () => {
  const { data } = useAdmin();
  const [timeRange, setTimeRange] = useState('All Time');

  // Time Range Filter Logic
  const filteredBookings = useMemo(() => {
    if (!data.bookings) return [];
    
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);
    const last7Days = new Date(today);
    last7Days.setDate(last7Days.getDate() - 7);
    const firstDayThisMonth = new Date(now.getFullYear(), now.getMonth(), 1);
    const firstDayLastMonth = new Date(now.getFullYear(), now.getMonth() - 1, 1);
    const lastDayLastMonth = new Date(now.getFullYear(), now.getMonth(), 0, 23, 59, 59);

    return data.bookings.filter(b => {
      if (!b.created_at) return true;
      const bDate = new Date(b.created_at);
      
      switch (timeRange) {
        case 'Today':
          return bDate >= today;
        case 'Yesterday':
          return bDate >= yesterday && bDate < today;
        case 'Last 7 Days':
          return bDate >= last7Days;
        case 'This Month':
          return bDate >= firstDayThisMonth;
        case 'Last Month':
          return bDate >= firstDayLastMonth && bDate <= lastDayLastMonth;
        case 'All Time':
        default:
          return true;
      }
    });
  }, [data.bookings, timeRange]);

  // Excel / CSV Export Logic
  const exportToCSV = () => {
    if (filteredBookings.length === 0) {
      alert("No data to export for this time range.");
      return;
    }

    // CSV Headers
    const headers = ['Date', 'Email', 'Mobile', 'Membership Number', 'QID Number'];
    
    // Escape quotes and commas in CSV cells
    const escapeCSV = (str) => {
      if (str === null || str === undefined) return '';
      const stringified = String(str);
      if (stringified.includes(',') || stringified.includes('"') || stringified.includes('\n')) {
        return `"${stringified.replace(/"/g, '""')}"`;
      }
      return stringified;
    };

    const rows = filteredBookings.map(b => [
      new Date(b.created_at).toLocaleString(),
      escapeCSV(b.email),
      escapeCSV(b.mobile),
      escapeCSV(b.membership || 'N/A'),
      escapeCSV(b.qid || 'N/A')
    ]);

    const csvContent = [
      headers.join(','),
      ...rows.map(r => r.join(','))
    ].join('\n');

    // Create a Blob and trigger download
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    
    link.setAttribute('href', url);
    link.setAttribute('download', `QFit_Bookings_${timeRange.replace(/\s+/g, '_')}_${new Date().toISOString().split('T')[0]}.csv`);
    link.style.visibility = 'hidden';
    
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div>
      <div className="admin-card" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', flexWrap: 'wrap', gap: '15px' }}>
        <div>
          <h3 style={{ margin: 0 }}>Booking Leads Analytics</h3>
          <p style={{ margin: '5px 0 0', color: '#aaa', fontSize: '0.9rem' }}>View and manage customer appointment requests.</p>
        </div>
        
        <div style={{ display: 'flex', gap: '15px', alignItems: 'center', flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', background: 'rgba(255,255,255,0.05)', padding: '5px 15px', borderRadius: '8px' }}>
            <Filter size={16} color="#0066cc" />
            <select 
              value={timeRange} 
              onChange={(e) => setTimeRange(e.target.value)}
              style={{ background: 'transparent', border: 'none', color: '#fff', outline: 'none', fontSize: '0.95rem', cursor: 'pointer', padding: '5px' }}
            >
              <option style={{background: '#111'}}>All Time</option>
              <option style={{background: '#111'}}>Today</option>
              <option style={{background: '#111'}}>Yesterday</option>
              <option style={{background: '#111'}}>Last 7 Days</option>
              <option style={{background: '#111'}}>This Month</option>
              <option style={{background: '#111'}}>Last Month</option>
            </select>
          </div>
          
          <button className="admin-btn" style={{ display: 'flex', alignItems: 'center', gap: '8px' }} onClick={exportToCSV}>
            <Download size={18} /> Export Excel (CSV)
          </button>
        </div>
      </div>

      <div className="admin-card" style={{ padding: '0', overflow: 'hidden' }}>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
            <thead>
              <tr style={{ background: 'rgba(255,255,255,0.05)' }}>
                <th style={{ padding: '15px 20px', color: 'var(--primary-cyan)', fontWeight: '600' }}>Date</th>
                <th style={{ padding: '15px 20px', color: 'var(--primary-cyan)', fontWeight: '600' }}>Email</th>
                <th style={{ padding: '15px 20px', color: 'var(--primary-cyan)', fontWeight: '600' }}>Mobile</th>
                <th style={{ padding: '15px 20px', color: 'var(--primary-cyan)', fontWeight: '600' }}>Membership #</th>
                <th style={{ padding: '15px 20px', color: 'var(--primary-cyan)', fontWeight: '600' }}>QID #</th>
              </tr>
            </thead>
            <tbody>
              {filteredBookings.length > 0 ? (
                filteredBookings.map((b, index) => (
                  <tr key={b.id || index} style={{ borderTop: '1px solid rgba(255,255,255,0.05)', transition: 'background 0.2s ease' }} onMouseOver={e => e.currentTarget.style.background = 'rgba(255,255,255,0.02)'} onMouseOut={e => e.currentTarget.style.background = 'transparent'}>
                    <td style={{ padding: '15px 20px', color: '#aaa', fontSize: '0.9rem' }}>
                      {b.created_at ? new Date(b.created_at).toLocaleString([], { dateStyle: 'medium', timeStyle: 'short' }) : 'Unknown'}
                    </td>
                    <td style={{ padding: '15px 20px' }}>{b.email}</td>
                    <td style={{ padding: '15px 20px' }}>{b.mobile}</td>
                    <td style={{ padding: '15px 20px', color: '#888' }}>{b.membership || '—'}</td>
                    <td style={{ padding: '15px 20px', color: '#888' }}>{b.qid || '—'}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" style={{ padding: '40px', textAlign: 'center', color: '#666' }}>
                    <Calendar size={48} style={{ marginBottom: '15px', opacity: 0.5 }} />
                    <p>No bookings found for "{timeRange}".</p>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminBookings;
