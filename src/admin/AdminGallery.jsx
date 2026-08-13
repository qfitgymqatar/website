import React, { useState } from 'react';
import { useAdmin } from '../context/AdminContext';
import { Trash2 } from 'lucide-react';

const AdminGallery = () => {
  const { data, addGalleryImage, removeGalleryImage } = useAdmin();
  const [url, setUrl] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!url) return;
    addGalleryImage(url);
    setUrl('');
  };

  return (
    <div>
      <div className="admin-card">
        <h3 style={{marginBottom: '20px'}}>Add Gallery Image</h3>
        <form onSubmit={handleSubmit} style={{display: 'flex', gap: '15px', alignItems: 'flex-end'}}>
          <div className="admin-form-group" style={{flex: 1, marginBottom: 0}}>
            <label>Image URL (Local path like /hero-sports.jpg or external http link)</label>
            <input className="admin-input" value={url} onChange={e => setUrl(e.target.value)} required />
          </div>
          <button type="submit" className="admin-btn">Add Image</button>
        </form>
      </div>

      <div className="admin-card">
        <h3 style={{marginBottom: '20px'}}>Gallery Preview</h3>
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))', gap: '20px'}}>
          {data.gallery.map((img) => (
            <div key={img.id} style={{position: 'relative', height: '150px', borderRadius: '10px', overflow: 'hidden'}}>
              <img src={img.url} alt="Gallery" style={{width: '100%', height: '100%', objectFit: 'cover'}} />
              <button 
                onClick={() => removeGalleryImage(img.id)}
                style={{position: 'absolute', top: '10px', right: '10px', background: 'rgba(230,0,38,0.9)', color: 'white', border: 'none', borderRadius: '50%', width: '30px', height: '30px', display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer'}}
              >
                <Trash2 size={16} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminGallery;
