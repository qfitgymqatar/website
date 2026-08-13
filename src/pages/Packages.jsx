import React from 'react';
import { Check } from 'lucide-react';
import PageBanner from '../components/PageBanner';
import './Packages.css';

const Packages = () => {
  const memberships = [
    { title: '1 Month', price: 'QAR 250', features: ['Full Gym Access', 'Locker & Shower Usage', 'State-of-the-art Cardio Zone', 'Free Weights Area'], img: '/service-cardio.jpg' },
    { title: '3 Month', price: 'QAR 650', features: ['Full Gym Access', 'Unlimited Group Classes', 'Locker & Shower Usage', 'Premium Fitness Assessment'], img: '/service-group.jpg' },
    { title: '6 Month', price: 'QAR 1200', features: ['Full Gym Access', 'Unlimited Group Classes', 'Advanced Body Composition', '30 Days Membership Freezing'], highlighted: true, img: '/service-weights.jpg' },
    { title: '1 Year', price: 'QAR 2100', features: ['Full Gym Access', 'All-Inclusive Amenities', 'Priority Class Booking', '45 Days Membership Freezing'], img: '/hero-premium.jpg' },
    { title: 'Lifetime Member', price: 'QAR 15000', features: ['Free Access to all Gym Facilities', 'Lifetime Privileged Member Status', 'Complimentary Guest Passes', 'VIP Locker & Towel Service'], img: '/hero-architectural.jpg', wide: true }
  ];

  const ptPackages = [
    { title: '15 Days', price: 'QAR 700', features: ['1-on-1 Certified Coach', 'Customized Workout Routine', 'Form & Technique Correction'], img: '/hero-energetic.jpg' },
    { title: '1 Month', price: 'QAR 1000', features: ['1-on-1 Certified Coach', 'Customized Workout Routine', 'Personalized Diet Plan', 'Weekly Progress Tracking'], highlighted: true, img: '/service-pt.jpg' },
    { title: '2 Months', price: 'QAR 1650', features: ['1-on-1 Certified Coach', 'Customized Workout Routine', 'Personalized Diet Plan', 'Priority Booking & VIP Access'], img: '/hero-sports.jpg' }
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
        <button className="btn-primary pkg-btn">Select Plan</button>
      </div>
    </div>
  );

  return (
    <div className="page-container">
      <PageBanner 
        title="Membership Rates" 
        subtitle="Choose the perfect membership package for your fitness journey." 
        bgImage="/hero-premium.jpg" 
      />
      <div className="content-wrapper">
        <div className="registration-notice">
          <p>A One-Time Registration Fee of <strong>QAR 30</strong> applies to all new memberships.</p>
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
