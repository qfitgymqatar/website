import React from 'react';
import { useAdmin } from '../context/AdminContext';
import { Link } from 'react-router-dom';
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
            <Link to={`/trainer/${trainer.id}`} key={trainer.id} className="trainer-card" style={{textDecoration: 'none'}}>
              <div className="trainer-img-wrapper">
                <img src={trainer.img || '/trainer.jpg'} alt={trainer.name} className="trainer-img" />
                <div className="trainer-glow"></div>
              </div>
              <div className="trainer-info" style={{padding: '25px 20px', textAlign: 'center'}}>
                <h3 style={{marginBottom: '5px', fontSize: '1.4rem', color: '#fff'}}>{trainer.name}</h3>
                <h4 className="trainer-role" style={{fontSize: '0.95rem'}}>{trainer.role}</h4>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Trainers;
