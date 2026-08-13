import React, { useState } from 'react';
import { useAdmin } from '../context/AdminContext';
import { Trash2, Edit2, Upload, Loader } from 'lucide-react';

const AdminServices = () => {
  const { data, addService, removeService, updateService, uploadImage } = useAdmin();
  const [formData, setFormData] = useState({ title: '', desc: '', img: '' });
  const [imageFile, setImageFile] = useState(null);
  const [editingId, setEditingId] = useState(null);
  const [isUploading, setIsUploading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.title) return;
    
    setIsUploading(true);
    let finalImgUrl = formData.img;
    
    if (imageFile) {
      const uploadedUrl = await uploadImage(imageFile);
      if (uploadedUrl) {
        finalImgUrl = uploadedUrl;
      }
    }
    
    const finalData = { ...formData, img: finalImgUrl };
    
    if (editingId) {
      await updateService(editingId, finalData);
      setEditingId(null);
    } else {
      await addService(finalData);
    }
    
    setFormData({ title: '', desc: '', img: '' });
    setImageFile(null);
    setIsUploading(false);
  };

  const startEdit = (service) => {
    setEditingId(service.id);
    setFormData({ title: service.title, desc: service.desc, img: service.img || '' });
    setImageFile(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const cancelEdit = () => {
    setEditingId(null);
    setFormData({ title: '', desc: '', img: '' });
    setImageFile(null);
  };

  return (
    <div>
      <div className="admin-card">
        <h3 style={{marginBottom: '20px'}}>{editingId ? 'Edit Service' : 'Add New Service'}</h3>
        <form onSubmit={handleSubmit}>
          <div className="admin-form-group">
            <label>Heading (Title)</label>
            <input className="admin-input" value={formData.title} onChange={e => setFormData({...formData, title: e.target.value})} required />
          </div>
          <div className="admin-form-group">
            <label>Subheading (Description)</label>
            <input className="admin-input" value={formData.desc} onChange={e => setFormData({...formData, desc: e.target.value})} required />
          </div>
          <div className="admin-form-group">
            <label>Cover Image (Upload file)</label>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
              <label className="admin-btn" style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Upload size={18} /> Choose File
                <input type="file" accept="image/*" onChange={e => setImageFile(e.target.files[0])} style={{ display: 'none' }} />
              </label>
              <span style={{ color: '#aaa', fontSize: '0.9rem' }}>
                {imageFile ? imageFile.name : (formData.img ? 'Current Image exists' : 'No file chosen')}
              </span>
            </div>
          </div>
          <div style={{ display: 'flex', gap: '15px' }}>
            <button type="submit" className="admin-btn" disabled={isUploading}>
              {isUploading ? <><Loader size={18} className="spin" /> Processing...</> : (editingId ? 'Update Service' : 'Add Service')}
            </button>
            {editingId && <button type="button" className="admin-btn admin-btn-danger" onClick={cancelEdit}>Cancel</button>}
          </div>
        </form>
      </div>

      <div className="admin-card">
        <h3 style={{marginBottom: '20px'}}>Current Services</h3>
        <div style={{display: 'flex', flexDirection: 'column', gap: '15px'}}>
          {data.services.map(s => (
            <div key={s.id} style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#0a0a0a', padding: '15px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.05)'}}>
              <div style={{display: 'flex', alignItems: 'center', gap: '15px'}}>
                <img src={s.img || '/logo.png'} alt="service" style={{width: '60px', height: '60px', borderRadius: '8px', objectFit: 'cover'}} />
                <div>
                  <h4 style={{margin: '0 0 5px 0'}}>{s.title}</h4>
                  <span style={{color: '#aaa', fontSize: '0.85rem'}}>{s.desc}</span>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '10px' }}>
                <button className="admin-btn" style={{ background: 'var(--primary-blue)' }} onClick={() => startEdit(s)}>
                  <Edit2 size={18} />
                </button>
                <button className="admin-btn admin-btn-danger" onClick={() => removeService(s.id)}>
                  <Trash2 size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminServices;
