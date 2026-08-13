import React from 'react';
import { useAdmin } from '../context/AdminContext';
import PageBanner from '../components/PageBanner';
import './Gallery.css';

const Gallery = () => {
  const { data } = useAdmin();

  return (
    <div className="page-container">
      <PageBanner 
        title="Our Gallery" 
        subtitle="Take a tour of our state-of-the-art facilities and equipment." 
        bgImage="/hero-premium.jpg" 
      />
      <div className="content-wrapper">
        <div className="gallery-grid">
          {data.gallery.map((img) => (
            <div key={img.id} className="gallery-item">
              <img src={img.url} alt={img.title || "QFit Gallery"} loading="lazy" />
              <div className="gallery-overlay">
                {img.title && <h3 className="gallery-title" style={{color: 'white', position: 'absolute', bottom: '20px', left: '20px', margin: 0, textShadow: '0 2px 10px rgba(0,0,0,0.8)'}}>{img.title}</h3>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
