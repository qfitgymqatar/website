import React from 'react';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';
import PageBanner from '../components/PageBanner';

const NotFound = () => {
  return (
    <div className="page-container" style={{ textAlign: 'center', paddingBottom: '100px' }}>
      <PageBanner 
        title="404" 
        subtitle="Oops! The page you're looking for doesn't exist." 
        bgImage="/hero-cinematic.jpg" 
      />
      <div className="content-wrapper">
        <h2 style={{ fontSize: '2rem', marginBottom: '20px' }}>Lost your way?</h2>
        <p style={{ color: 'var(--text-muted)', marginBottom: '40px' }}>Let's get you back on track to your fitness goals.</p>
        <Link to="/" className="btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px' }}>
          <Home size={20} /> Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
