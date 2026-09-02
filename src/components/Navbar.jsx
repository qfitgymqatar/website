"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';;
import { Dumbbell, Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path) => {
    return pathname === path ? 'active-link' : '';
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <Link href="/" className="logo-custom">
          <img src="/logo.png" alt="QFit Gym Logo" className="logo-img" />
        </Link>
        
        <div className={`nav-links ${mobileMenuOpen ? 'active' : ''}`}>
          <Link href="/" className={isActive('/')} onClick={() => setMobileMenuOpen(false)}>Home</Link>
          <Link href="/services" className={isActive('/services')} onClick={() => setMobileMenuOpen(false)}>Services</Link>
          <Link href="/packages" className={isActive('/packages')} onClick={() => setMobileMenuOpen(false)}>Packages</Link>
          <Link href="/gallery" className={isActive('/gallery')} onClick={() => setMobileMenuOpen(false)}>Gallery</Link>
          <Link href="/trainers" className={isActive('/trainers')} onClick={() => setMobileMenuOpen(false)}>Trainers</Link>
          <Link href="/careers" className={isActive('/careers')} onClick={() => setMobileMenuOpen(false)}>Careers</Link>
          <Link href="/blogs" className={isActive('/blogs')} onClick={() => setMobileMenuOpen(false)}>Blogs</Link>
          <Link href="/contact" className={isActive('/contact')} onClick={() => setMobileMenuOpen(false)}>Contact</Link>
          <Link href="/booking" className="btn-primary join-btn" onClick={() => setMobileMenuOpen(false)}>Join Now</Link>
        </div>

        <button className="mobile-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
