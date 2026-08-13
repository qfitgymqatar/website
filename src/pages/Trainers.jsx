import React from 'react';
import { useAdmin } from '../context/AdminContext';
import PageBanner from '../components/PageBanner';
import './Trainers.css';

const Trainers = () => {
  const { data } = useAdmin();

  return (
    <div className="page-container">
      <PageBanner 
        title="Our Elite Trainers" 
        subtitle="Meet the experts dedicated to pushing your limits." 
        bgImage="/hero-energetic.jpg" 
      />
      <div className="content-wrapper">
        <div className="trainers-grid">
          {data.trainers.map((trainer) => (
            <div key={trainer.id} className="trainer-card">
              <div className="trainer-img-wrapper">
                <img src={trainer.img || '/logo.png'} alt={trainer.name} className="trainer-img" />
                <div className="trainer-glow"></div>
              </div>
              <div className="trainer-info">
                <h3>{trainer.name}</h3>
                <h4 className="trainer-role">{trainer.role}</h4>
                <div className="trainer-stats">
                  <div className="stat">
                    <span className="stat-label">Experience</span>
                    <span className="stat-value">{trainer.exp}</span>
                  </div>
                  <div className="stat">
                    <span className="stat-label">Qualification</span>
                    <span className="stat-value">{trainer.qual}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Trainers;
