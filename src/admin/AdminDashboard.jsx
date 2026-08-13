import React from 'react';
import { useAdmin } from '../context/AdminContext';

const AdminDashboard = () => {
  const { data } = useAdmin();

  const stats = [
    { label: 'Gallery Images', value: data.gallery.length },
    { label: 'Trainers', value: data.trainers.length },
    { label: 'Services', value: data.services.length },
    { label: 'Careers', value: data.careers.length },
    { label: 'Blog Posts', value: data.blogs.length },
  ];

  return (
    <div>
      <div className="admin-card">
        <h3 style={{marginBottom: '10px'}}>Welcome to QFit Admin Portal</h3>
        <p style={{color: '#aaa'}}>Manage your website content dynamically from here. Changes are saved locally.</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
        {stats.map(stat => (
          <div key={stat.label} className="admin-card" style={{ textAlign: 'center', padding: '30px' }}>
            <h1 style={{ fontSize: '3rem', color: 'var(--primary-cyan)', marginBottom: '10px' }}>{stat.value}</h1>
            <h4 style={{ color: '#aaa', textTransform: 'uppercase', letterSpacing: '1px' }}>{stat.label}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;
