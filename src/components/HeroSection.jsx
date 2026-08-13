import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <div className="hero-container">
      <div className="hero-bg">
        <img src="/hero-bg.jpg" alt="QFit Gym Interior" className="hero-img" />
        <div className="hero-overlay"></div>
      </div>
      <div className="hero-content animate-fade-in">
        <h1>UNLEASH YOUR <br/><span className="text-blue">POTEN</span><span className="text-red">TIAL</span></h1>
        <p>Experience the ultimate fitness journey in Mansoura, Qatar. State-of-the-art equipment, expert trainers, and dedicated spaces for everyone.</p>
        <div className="hero-btns">
          <button className="btn-primary">Start Free Trial</button>
          <button className="btn-secondary">Explore Facilities</button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
