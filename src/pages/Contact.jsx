import React from 'react';
import { MapPin, Phone, Mail, Send, Globe } from 'lucide-react';
import PageBanner from '../components/PageBanner';
import './Contact.css';

const Contact = () => {
  return (
    <div className="page-container">
      <PageBanner 
        title="Contact Us" 
        subtitle="We'd love to hear from you. Reach out for any inquiries." 
        bgImage="/hero-architectural.jpg" 
      />

      <div className="content-wrapper">
        <div className="contact-grid">
          
          <div className="contact-info-section">
            <h2>Get In Touch</h2>
            <div className="contact-details">
              
              <div className="contact-item">
                <div className="contact-icon">
                   <MapPin size={24} />
                </div>
                <div>
                  <h4>Location</h4>
                  <p>Buzwair Building, Building no:57, 1st Floor, St. No:330, Near Al Meera, Mansoura, Doha-Qatar</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                   <Phone size={24} />
                </div>
                <div>
                  <h4>Call Us</h4>
                  <p>Gents GYM: +974 3327 9451</p>
                  <p>Ladies GYM: +974 5035 0222</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                   <Mail size={24} />
                </div>
                <div>
                  <h4>Email Us</h4>
                  <p>info@qfitgymqatar.com</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">
                   <Globe size={24} />
                </div>
                <div>
                  <h4>Website</h4>
                  <p>www.qfitgymqatar.com</p>
                </div>
              </div>
              
            </div>
          </div>

          <form className="contact-form">
            <div className="form-group">
              <input type="text" placeholder="Your Name" />
            </div>
            <div className="form-group">
              <input type="email" placeholder="Your Email" />
            </div>
            <div className="form-group">
              <textarea placeholder="Your Message" rows="5"></textarea>
            </div>
            <button type="button" className="btn-primary form-btn">
              Send Message <Send size={18} />
            </button>
          </form>

        </div>
        
        {/* Google Map Embedding */}
        <div className="map-container" style={{ marginTop: '50px', width: '100%', height: '450px', borderRadius: '15px', overflow: 'hidden' }}>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14431.545892015093!2d51.5286551!3d25.2741913!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e45c534af10fc5b%3A0xc665b1191a38db60!2sAl%20Mansoura%2C%20Doha%2C%20Qatar!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus" 
            width="100%" 
            height="100%" 
            style={{border:0}} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade">
          </iframe>
        </div>

      </div>
    </div>
  );
};

export default Contact;
