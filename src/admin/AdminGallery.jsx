"use client";

import React, { useState } from 'react';
import { useAdmin } from '@/context/AdminContext';
import { Trash2, Upload, Loader, X } from 'lucide-react';
import { toast } from 'react-toastify';

const AdminGallery = () => {
  const { data, addGalleryImage, removeGalleryImage, uploadImage } = useAdmin();
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState('');
  const [uploading, setUploading] = useState(false);

  // Compute preview URL
  const previewImg = file ? URL.createObjectURL(file) : null;

  const handleAdd = async (e) => {
    e.preventDefault();
    if (!file) return;
    
    setUploading(true);
    const url = await uploadImage(file);
    if (url) {
      const res = await addGalleryImage({ url, title });
      if (res?.success) {
        toast.success('Image added to gallery!');
        setFile(null);
        setTitle('');
      } else {
        toast.error('Failed to save gallery item to database: ' + (res?.error?.message || ''));
      }
    } else {
      toast.error("Could not process image. Please try again.");
    }
    setUploading(false);
  };

  const handleDelete = async (id, imgTitle) => {
    if (window.confirm(`Delete ${imgTitle ? `"${imgTitle}"` : 'this image'} from gallery?`)) {
      const res = await removeGalleryImage(id);
      if (res?.success) {
        toast.success('Image removed from gallery!');
      } else {
        toast.error('Failed to remove image from gallery.');
      }
    }
  };

  return (
    <div className="admin-content-section fade-in">
      <h2>Gallery Management</h2>
      <div className="admin-card">
        <h3 style={{marginBottom: '20px'}}>Add Gallery Image</h3>
        <form onSubmit={handleAdd} style={{display: 'flex', flexDirection: 'column', gap: '15px'}}>
          <div className="form-group">
            <label>Image File (.jpg, .png)</label>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', flexWrap: 'wrap' }}>
              <label className="admin-btn" style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Upload size={18} /> Choose File
                <input 
                  type="file" 
                  accept="image/png, image/jpeg, image/jpg"
                  onChange={(e) => setFile(e.target.files[0])}
                  style={{ display: 'none' }}
                />
              </label>
              <span style={{ color: '#aaa', fontSize: '0.9rem' }}>
                {file ? file.name : 'No file chosen'}
              </span>
            </div>

            {/* Live Image Preview */}
            {previewImg && (
              <div style={{ marginTop: '12px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ position: 'relative', width: '100px', height: '65px', borderRadius: '6px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.2)' }}>
                  <img src={previewImg} alt="Preview" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <button
                  type="button"
                  onClick={() => setFile(null)}
                  style={{ background: 'none', border: 'none', color: '#ff4d4d', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.85rem' }}
                >
                  <X size={16} /> Remove
                </button>
              </div>
            )}
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
          <div style={{ marginTop: '10px' }}>
            <button type="submit" className="admin-btn" disabled={uploading}>
              {uploading ? <><Loader size={18} className="spin" /> Uploading...</> : 'Add Image'}
            </button>
          </div>
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
                onClick={() => handleDelete(img.id, img.title)}
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
