"use client";

import React from 'react';
import { useAdmin } from '@/context/AdminContext';
import PageBanner from '@/components/PageBanner';
import './Packages.css';

const Packages = () => {
  const { data } = useAdmin();
  const gallery = data?.gallery || [];

  // Helper to find a gallery image by title keyword, or by index fallback
  const getGalleryImage = (keyword, fallbackIndex, defaultPath) => {
    if (gallery.length > 0) {
      if (keyword) {
        const found = gallery.find(g => g.title && g.title.toLowerCase().includes(keyword.toLowerCase()));
        if (found?.url) return found.url;
      }
      if (gallery[fallbackIndex]?.url) return gallery[fallbackIndex].url;
    }
    return defaultPath;
  };

  const memberships = [
    { 
      title: '1 Month', 
      price: 'QAR 250', 
      features: ['Full Gym Access', 'Locker & Shower Usage', 'State-of-the-art Cardio Zone', 'Free Weights Area'], 
      img: getGalleryImage('cardio', 0, '/hero-gym.jpg') 
    },
    { 
      title: '3 Month', 
      price: 'QAR 650', 
      features: ['Full Gym Access', 'Unlimited Group Classes', 'Locker & Shower Usage', 'Premium Fitness Assessment'], 
      img: getGalleryImage('functional', 1, '/service-group.jpg') 
    },
    { 
      title: '6 Month', 
      price: 'QAR 1200', 
      features: ['Full Gym Access', 'Unlimited Group Classes', 'Advanced Body Composition', '30 Days Membership Freezing'], 
      highlighted: true, 
      img: getGalleryImage('free weight', 2, '/service-weights.jpg') 
    },
    { 
      title: '1 Year', 
      price: 'QAR 2100', 
      features: ['Full Gym Access', 'All-Inclusive Amenities', 'Priority Class Booking', '45 Days Membership Freezing'], 
      img: getGalleryImage('kickboxing', 3, '/hero-gym.jpg') 
    },
    { 
      title: 'Lifetime Member', 
      price: 'QAR 15000', 
      features: ['Free Access to all Gym Facilities', 'Lifetime Privileged Member Status', 'Complimentary Guest Passes', 'VIP Locker & Towel Service'], 
      img: getGalleryImage('bjj', 4, '/hero-gym.jpg') 
    }
  ];

  const ptPackages = [
    { 
      title: '15 Days', 
      price: 'QAR 700', 
      features: ['1-on-1 Certified Coach', 'Customized Workout Routine', 'Form & Technique Correction'], 
      img: getGalleryImage('', 5, '/hero-gym.jpg') 
    },
    { 
      title: '1 Month', 
      price: 'QAR 1000', 
      features: ['1-on-1 Certified Coach', 'Customized Workout Routine', 'Personalized Diet Plan', 'Weekly Progress Tracking'], 
      highlighted: true, 
      img: getGalleryImage('', 6, '/service-pt.jpg') 
    },
    { 
      title: '2 Months', 
      price: 'QAR 1650', 
      features: ['1-on-1 Certified Coach', 'Customized Workout Routine', 'Personalized Diet Plan', 'Priority Booking & VIP Access'], 
      img: getGalleryImage('', 7, '/hero-gym.jpg') 
    }
  ];

  const renderCard = (pkg, idx) => (
    <div key={idx} className={`pkg-img-card ${pkg.highlighted ? 'highlighted' : ''} ${pkg.wide ? 'wide-card' : ''}`} style={{ backgroundImage: `url(${pkg.img})` }}>
      <div className="pkg-overlay"></div>
      <div className="pkg-content">
        <h3 className="pkg-title">{pkg.title}</h3>
        <h2 className="pkg-price">{pkg.price}</h2>
        <ul className="pkg-features">
          {pkg.features.map((feature, fIdx) => (
            <li key={fIdx}>
              <span className="pkg-icon">✓</span>
              {feature}
            </li>
          ))}
        </ul>
        <button className="btn-primary pkg-btn" onClick={() => window.location.href = '/booking'}>Select Plan</button>
      </div>
    </div>
  );

  return (
    <div className="page-container">
      <PageBanner 
        title="Membership Rates" 
        subtitle="Choose the perfect membership package for your fitness journey." 
        bgImage="/hero-gym.jpg" 
      />
      <div className="content-wrapper">
        <div className="registration-notice">
          <p>A One-Time Registration Fee of <strong>QAR 50</strong> applies to all new memberships.</p>
        </div>
        
        <h2 className="section-title text-center" style={{marginTop: '40px', marginBottom: '30px'}}>General Membership</h2>
        <div className="packages-grid">
          {memberships.map(renderCard)}
        </div>

        <h2 className="section-title text-center" style={{marginTop: '60px', marginBottom: '30px'}}>Personal Training</h2>
        <div className="packages-grid">
          {ptPackages.map(renderCard)}
        </div>
      </div>
    </div>
  );
};

export default Packages;
