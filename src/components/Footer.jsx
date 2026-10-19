"use client";

import React from 'react';
import Link from 'next/link';
import { MapPin, Phone, Mail, Globe } from 'lucide-react';
import { 
  InstagramIcon, 
  FacebookIcon, 
  XIcon, 
  WhatsAppIcon, 
  TikTokIcon, 
  YouTubeIcon 
} from './SocialIcons';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3 className="gradient-text">QFIT GYM</h3>
          <p>The ultimate fitness destination in Qatar. Premium equipment, expert trainers, and separate facilities for gents and ladies.</p>
          <div className="social-icons">
            <a 
              href="https://www.instagram.com/qfitgymqatar" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Instagram"
              className="social-btn instagram"
            >
              <InstagramIcon size={20} />
            </a>
            <a 
              href="https://www.facebook.com/qfitgymqatar" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Facebook"
              className="social-btn facebook"
            >
              <FacebookIcon size={20} />
            </a>
            <a 
              href="https://x.com/qfitgymqatar" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="X (Twitter)"
              className="social-btn twitter-x"
            >
              <XIcon size={18} />
            </a>
            <a 
              href="https://wa.me/97433279451?text=Hello,%20I%20am%20interested%20in%20joining%20QFit%20Gym!" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="WhatsApp"
              className="social-btn whatsapp"
            >
              <WhatsAppIcon size={20} />
            </a>
            <a 
              href="https://www.tiktok.com/@qfitgymqatar" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="TikTok"
              className="social-btn tiktok"
            >
              <TikTokIcon size={20} />
            </a>
            <a 
              href="https://www.youtube.com/@qfitgymqatar" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="YouTube"
              className="social-btn youtube"
            >
              <YouTubeIcon size={20} />
            </a>
          </div>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/packages">Membership Packages</Link></li>
            <li><Link href="/gallery">Gallery</Link></li>
            <li><Link href="/trainers">Our Trainers</Link></li>
            <li><Link href="/careers">Careers</Link></li>
            <li><Link href="/contact">Contact Us</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact Info</h3>
          <ul className="footer-contact">
            <li>
              <MapPin size={18} style={{minWidth: '18px'}} /> 
              <span style={{lineHeight: '1.4'}}>Buzwair Building, Building no:57, 1st Floor, St. No:330, Near Al Meera, Mansoura, Doha-Qatar</span>
            </li>
            <li>
              <Phone size={18} /> 
              <a href="tel:+97433279451" style={{color: 'inherit'}}>Gents GYM: +974 3327 9451</a>
            </li>
            <li>
              <Phone size={18} /> 
              <a href="tel:+97450350222" style={{color: 'inherit'}}>Ladies GYM: +974 5035 0222</a>
            </li>
            <li>
              <Mail size={18} /> 
              <a href="mailto:info@qfitgymqatar.com" style={{color: 'inherit'}}>info@qfitgymqatar.com</a>
            </li>
            <li>
              <Globe size={18} /> 
              <a href="https://www.qfitgymqatar.com" style={{color: 'inherit'}}>www.qfitgymqatar.com</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} QFit Gym. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
