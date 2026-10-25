"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';;
import HeroSection from '@/components/HeroSection';

import { supabase } from '@/supabaseClient';
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
    "Open 24 Hours a Day (Friday 4 PM - 10 PM)",
    "Top of the line Equipment",
    "Luxuries & Safe atmosphere",
    "Private Ladies Section",
    "Certified Personal Trainers",
    "Professional & Supportive Staff"
  ];

  return (
    <div className="home-page">
      
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
            <h2>
              EXPERIENCE THE{' '}
              <span className="brand-title-wrap">
                <span className="brand-title-qfit">
                  <span className="brand-title-new">NEW</span>
                  Q FIT
                </span>{' '}
                <span className="brand-title-gym">GYM</span>
              </span>{' '}
              DIFFERENCE
            </h2>
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
          <p style={{color: 'var(--text-muted)', marginBottom: '50px', maxWidth: '600px', margin: '0 auto 50px'}}>Train hard. Build skill. Get stronger. Elevate your fitness journey with our specialized programs designed for maximum results.</p>
          
          <div className="grid-standard">
             <div className="service-teaser">
                <div className="teaser-icon"><Users size={40} /></div>
                <h3>Personal Training</h3>
                <p>1-on-1 coaching from single sessions up to 20 sessions + exclusive Qatar Airways rates.</p>
             </div>
             <div className="service-teaser">
                <div className="teaser-icon"><Activity size={40} /></div>
                <h3>Group Classes</h3>
                <p>High-energy Boxing, Muay Thai, HIIT & Brazilian Jiu-Jitsu (BJJ) sessions.</p>
             </div>
             <div className="service-teaser">
                <div className="teaser-icon"><Heart size={40} /></div>
                <h3>Combat & Conditioning</h3>
                <p>Real self-defense skills, heavy bags, boxing ring & dedicated fight gear.</p>
             </div>
          </div>
          <Link href="/services" className="btn-secondary mt-4" style={{display: 'inline-flex', alignItems: 'center', gap: '10px'}}>
             View All Services <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="cta-section">
        <div className="cta-overlay"></div>
        <div className="cta-content">
          <h2>Ready To Transform <span className="gradient-text">Your Life?</span></h2>
          <p>Train hard. Build skill. Get stronger. Join the best fitness community in Mansoura, Qatar today.</p>
          <Link href="/packages" className="btn-primary">View Memberships & Training Rates</Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
