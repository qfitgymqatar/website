import React, { useState } from 'react';
import { useAdmin } from '../context/AdminContext';
import { Trash2, Upload } from 'lucide-react';

const AdminGallery = () => {
  const { data, addGalleryImage, removeGalleryImage, uploadImage } = useAdmin();
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState('');
  const [uploading, setUploading] = useState(false);

  const handleAdd = async (e) => {
    e.preventDefault();
    if (!file) return;
    
    setUploading(true);
    const url = await uploadImage(file);
    if (url) {
      await addGalleryImage({ url, title });
      setFile(null);
      setTitle('');
    } else {
      alert("Failed to upload image. Make sure your Supabase Storage bucket is correctly configured.");
    }
    setUploading(false);
  };

  return (
    <div className="admin-content-section fade-in">
      <h2>Gallery Management</h2>
      <div className="admin-card">
        <h3 style={{marginBottom: '20px'}}>Add Gallery Image</h3>
        <form onSubmit={handleAdd} style={{display: 'flex', flexDirection: 'column', gap: '15px'}}>
          <div className="form-group">
            <label>Image File (.jpg, .png)</label>
            <input 
              type="file" 
              accept="image/png, image/jpeg, image/jpg"
              onChange={(e) => setFile(e.target.files[0])}
              className="admin-input"
              required
            />
          </div>
          <div className="form-group">
            <label>Title (Optional)</label>
            <input 
              type="text" 
              value={title} 
              onChange={(e) => setTitle(e.target.value)} 
              className="admin-input" 
              placeholder="e.g. Cardio Zone"
            />
          </div>
          <button type="submit" className="admin-btn-primary" disabled={uploading}>
            {uploading ? 'Uploading...' : 'Add Image'}
          </button>
        </form>
      </div>

      <div className="admin-card">
        <h3 style={{marginBottom: '20px'}}>Gallery Preview</h3>
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))', gap: '20px'}}>
          {data.gallery.map((img) => (
            <div key={img.id} style={{position: 'relative', height: '150px', borderRadius: '10px', overflow: 'hidden'}}>
              <img src={img.url} alt={img.title || "Gallery"} style={{width: '100%', height: '100%', objectFit: 'cover'}} />
              {img.title && <div style={{position: 'absolute', bottom: 0, left: 0, width: '100%', background: 'rgba(0,0,0,0.7)', color: 'white', padding: '5px', fontSize: '0.8rem', textAlign: 'center'}}>{img.title}</div>}
              <button 
                onClick={() => removeGalleryImage(img.id)}
                style={{position: 'absolute', top: '10px', right: '10px', background: 'rgba(230,0,38,0.9)', color: 'white', border: 'none', borderRadius: '50%', width: '30px', height: '30px', display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer'}}
              >
                <Trash2 size={16} />
              </button>
            </div>
          ))}
          {data.gallery.length === 0 && <p style={{color: 'var(--silver-light)'}}>No images in gallery yet.</p>}
        </div>
      </div>
    </div>
  );
};

export default AdminGallery;
