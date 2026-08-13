import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import SEO from '../components/SEO';
import { supabase } from '../supabaseClient';
import { Building2, Users, Trophy, Target, ArrowRight, Dumbbell, Activity, Heart } from 'lucide-react';
import './Home.css';

const Home = () => {
  const [trainers, setTrainers] = useState([]);

  useEffect(() => {
    fetchTrainers();
  }, []);

  const fetchTrainers = async () => {
    const { data } = await supabase.from('trainers').select('*').limit(3);
    if (data) setTrainers(data);
  };

  const whyJoinFeatures = [
    "Open 19 hours per day",
    "Top of the line Equipment",
    "Luxuries & Safe atmosphere",
    "Private Ladies Section",
    "Certified Personal Trainers",
    "Professional & Supportive Staff"
  ];

  return (
    <div className="home-page">
      <SEO 
        title="Home"
        description="Join QFit Gym in Mansoura, Qatar. Premium fitness center featuring state-of-the-art equipment, certified personal trainers, and dedicated ladies & gents sections."
        url="/"
      />
      <HeroSection />

      {/* WHY JOIN SECTION */}
      <section className="why-join-section">
        <div className="why-join-container">
          <div className="why-join-image-wrapper">
             <div className="angled-image">
               <img src="/hero-bg.jpg" alt="Gym Equipment" />
             </div>
             <div className="angled-bg"></div>
          </div>
          
          <div className="why-join-content">
            <h2>WHY JOIN <span className="text-blue">QFIT</span> <span className="text-red">GYM?</span></h2>
            <div className="features-list">
              {whyJoinFeatures.map((feature, idx) => (
                <div className="feature-item" key={idx}>
                  <div className="feature-text">
                    <Dumbbell size={20} style={{marginRight: '15px'}} className="mobile-icon" />
                    <span>{feature}</span>
                  </div>
                  <div className="feature-accent"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* QUICK SERVICES PREVIEW */}
      <section className="home-services-section">
        <div className="content-wrapper text-center">
          <h2 style={{fontSize: '2.5rem', marginBottom: '15px'}}>Our <span className="gradient-text">Expertise</span></h2>
          <p style={{color: 'var(--text-muted)', marginBottom: '50px', maxWidth: '600px', margin: '0 auto 50px'}}>Elevate your fitness journey with our specialized programs designed for maximum results.</p>
          
          <div className="grid-standard">
             <div className="service-teaser">
                <div className="teaser-icon"><Users size={40} /></div>
                <h3>Personal Training</h3>
                <p>1-on-1 coaching with certified professionals.</p>
             </div>
             <div className="service-teaser">
                <div className="teaser-icon"><Activity size={40} /></div>
                <h3>Group Classes</h3>
                <p>High-energy HIIT, Yoga, and Spin sessions.</p>
             </div>
             <div className="service-teaser">
                <div className="teaser-icon"><Heart size={40} /></div>
                <h3>Nutrition</h3>
                <p>Custom meal plans for holistic wellness.</p>
             </div>
          </div>
          <Link to="/services" className="btn-secondary mt-4" style={{display: 'inline-flex', alignItems: 'center', gap: '10px'}}>
             View All Services <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="cta-section">
        <div className="cta-overlay"></div>
        <div className="cta-content">
          <h2>Ready To Transform <span className="gradient-text">Your Life?</span></h2>
          <p>Join the best fitness community in Mansoura, Qatar today.</p>
          <Link to="/packages" className="btn-primary">View Memberships</Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
