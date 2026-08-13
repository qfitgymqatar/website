import React from 'react';
import { useAdmin } from '../context/AdminContext';
import PageBanner from '../components/PageBanner';
import './Services.css';

const Services = () => {
  const { data } = useAdmin();

  return (
    <div className="page-container">
      <PageBanner 
        title="Our Services" 
        subtitle="Discover premium fitness services tailored for your goals." 
        bgImage="/hero-sports.jpg" 
      />
      
      <div className="content-wrapper">
        <div className="services-grid">
          {data.services.map((service) => (
            <div key={service.id} className="service-card" style={{ backgroundImage: `url(${service.img || '/hero-energetic.jpg'})` }}>
              <div className="service-card-overlay"></div>
              <div className="service-content">
                <h3 className="service-title">{service.title}</h3>
                <p className="service-desc">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
