import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, Users, Briefcase, Dumbbell, Image as ImageIcon, FileText, LogOut, Menu, X, Bell } from 'lucide-react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
  const [unreadBookings, setUnreadBookings] = useState(0);
  const location = useLocation();

  useEffect(() => {
    // Reset unread count if we visit the bookings page
    if (location.pathname === '/admin/bookings') {
      setUnreadBookings(0);
    }
  }, [location.pathname]);

  useEffect(() => {
    const handleNewBooking = (e) => {
      const newBooking = e.detail;
      
      // Show Toast Notification
      toast.info(`New Booking: ${newBooking.email} (${newBooking.mobile})`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
      });

      // Increment badge if we are not currently on the bookings page
      if (window.location.pathname !== '/admin/bookings') {
        setUnreadBookings(prev => prev + 1);
      }
    };

    window.addEventListener('new-booking', handleNewBooking);
    return () => window.removeEventListener('new-booking', handleNewBooking);
  }, []);

  const navItems = [
    { path: '/admin', icon: <LayoutDashboard size={20} />, label: 'Dashboard' },
    { path: '/admin/gallery', icon: <ImageIcon size={20} />, label: 'Gallery' },
    { path: '/admin/trainers', icon: <Users size={20} />, label: 'Trainers' },
    { path: '/admin/services', icon: <Dumbbell size={20} />, label: 'Services' },
    { path: '/admin/careers', icon: <Briefcase size={20} />, label: 'Careers' },
    { path: '/admin/blogs', icon: <FileText size={20} />, label: 'Blogs' },
    { path: '/admin/bookings', icon: <div style={{position: 'relative'}}><FileText size={20} />{unreadBookings > 0 && <span style={{position: 'absolute', top: '-5px', right: '-8px', background: 'red', color: 'white', fontSize: '0.65rem', padding: '2px 5px', borderRadius: '10px', fontWeight: 'bold'}}>{unreadBookings}</span>}</div>, label: 'Bookings' },
  ];

  return (
    <div className="admin-layout">
      <ToastContainer />
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
