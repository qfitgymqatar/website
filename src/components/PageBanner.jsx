import React from 'react';
import './PageBanner.css';

const PageBanner = ({ title, subtitle, bgImage }) => {
  return (
    <div className="page-banner" style={{ backgroundImage: `url(${bgImage})` }}>
      <div className="banner-overlay"></div>
      <div className="banner-content animate-fade-in">
        <h1>{title}</h1>
        {subtitle && <p>{subtitle}</p>}
      </div>
    </div>
  );
};

export default PageBanner;
