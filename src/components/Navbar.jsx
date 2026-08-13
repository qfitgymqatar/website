import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Dumbbell, Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path) => {
    return location.pathname === path ? 'active-link' : '';
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <Link to="/" className="logo-custom">
          <img src="/logo.png" alt="QFit Gym Logo" className="logo-img" />
        </Link>
        
        <div className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
          <Link to="/" className={isActive('/')} onClick={() => setMobileMenuOpen(false)}>Home</Link>
          <Link to="/services" className={isActive('/services')} onClick={() => setMobileMenuOpen(false)}>Services</Link>
          <Link to="/packages" className={isActive('/packages')} onClick={() => setMobileMenuOpen(false)}>Packages</Link>
          <Link to="/gallery" className={isActive('/gallery')} onClick={() => setMobileMenuOpen(false)}>Gallery</Link>
          <Link to="/trainers" className={isActive('/trainers')} onClick={() => setMobileMenuOpen(false)}>Trainers</Link>
          <Link to="/careers" className={isActive('/careers')} onClick={() => setMobileMenuOpen(false)}>Careers</Link>
          <Link to="/blogs" className={isActive('/blogs')} onClick={() => setMobileMenuOpen(false)}>Blogs</Link>
          <Link to="/contact" className={isActive('/contact')} onClick={() => setMobileMenuOpen(false)}>Contact</Link>
          <Link to="/booking" className="btn-primary join-btn" onClick={() => setMobileMenuOpen(false)}>Join Now</Link>
        </div>

        <button className="mobile-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
