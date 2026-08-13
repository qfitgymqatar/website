import React from 'react';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, Globe } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3 className="gradient-text">QFIT GYM</h3>
          <p>The ultimate fitness destination in Qatar. Premium equipment, expert trainers, and separate facilities for gents and ladies.</p>
          <div className="social-icons">
            <a href="#">IG</a>
            <a href="#">FB</a>
            <a href="#">X</a>
          </div>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/trainers">Our Trainers</a></li>
            <li><a href="/careers">Careers</a></li>
            <li><a href="#">Membership</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact Info</h3>
          <ul className="footer-contact">
            <li><MapPin size={18} style={{minWidth: '18px'}} /> <span style={{lineHeight: '1.4'}}>Buzwair Building, Building no:57, 1st Floor, St. No:330, Near Al Meera, Mansoura, Doha-Qatar</span></li>
            <li><Phone size={18} /> <span>Gents GYM: +974 3327 9451</span></li>
            <li><Phone size={18} /> <span>Ladies GYM: +974 5035 0222</span></li>
            <li><Mail size={18} /> <span>info@qfitgymqatar.com</span></li>
            <li><Globe size={18} /> <span>www.qfitgymqatar.com</span></li>
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
