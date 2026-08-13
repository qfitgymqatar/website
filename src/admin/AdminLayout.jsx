import React, { useState } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, Users, Briefcase, Dumbbell, Image as ImageIcon, FileText, LogOut, Menu, X } from 'lucide-react';
import AdminDashboard from './AdminDashboard';
import AdminGallery from './AdminGallery';
import AdminTrainers from './AdminTrainers';
import AdminCareers from './AdminCareers';
import AdminServices from './AdminServices';
import AdminBlogs from './AdminBlogs';
import AdminBookings from './AdminBookings';
import './AdminLayout.css';

const AdminLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/admin', icon: <LayoutDashboard size={20} />, label: 'Dashboard' },
    { path: '/admin/gallery', icon: <ImageIcon size={20} />, label: 'Gallery' },
    { path: '/admin/trainers', icon: <Users size={20} />, label: 'Trainers' },
    { path: '/admin/services', icon: <Dumbbell size={20} />, label: 'Services' },
    { path: '/admin/careers', icon: <Briefcase size={20} />, label: 'Careers' },
    { path: '/admin/blogs', icon: <FileText size={20} />, label: 'Blogs' },
    { path: '/admin/bookings', icon: <FileText size={20} />, label: 'Bookings' },
  ];

  return (
    <div className="admin-layout">
      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && <div className="admin-overlay" onClick={() => setSidebarOpen(false)}></div>}

      {/* Sidebar */}
      <aside className={`admin-sidebar ${sidebarOpen ? 'open' : ''}`}>
        <div className="admin-brand">
          <img src="/logo.png" alt="QFit Admin" />
          <span>Admin Portal</span>
        </div>
        
        <nav className="admin-nav">
          {navItems.map(item => (
            <Link 
              key={item.path} 
              to={item.path} 
              className={`admin-nav-link ${location.pathname === item.path ? 'active' : ''}`}
              onClick={() => setSidebarOpen(false)}
            >
              {item.icon}
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>

        <div className="admin-logout">
          <Link to="/">
            <LogOut size={20} />
            <span>Exit to Website</span>
          </Link>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="admin-main">
        <header className="admin-header">
          <button className="mobile-toggle-btn" onClick={() => setSidebarOpen(true)}>
            <Menu size={24} />
          </button>
          <h2>{navItems.find(item => item.path === location.pathname)?.label || 'Admin Panel'}</h2>
        </header>

        <div className="admin-content-scroll">
          <Routes>
            <Route path="/" element={<AdminDashboard />} />
            <Route path="/gallery" element={<AdminGallery />} />
            <Route path="/trainers" element={<AdminTrainers />} />
            <Route path="/services" element={<AdminServices />} />
            <Route path="/careers" element={<AdminCareers />} />
            <Route path="/blogs" element={<AdminBlogs />} />
            <Route path="/bookings" element={<AdminBookings />} />
          </Routes>
        </div>
      </main>
    </div>
  );
};

export default AdminLayout;
