import React, { useState } from 'react';
import { useAdmin } from '../context/AdminContext';
import { Trash2, Edit2, Upload, Loader } from 'lucide-react';

const AdminTrainers = () => {
  const { data, addTrainer, removeTrainer, updateTrainer, uploadImage } = useAdmin();
  const [formData, setFormData] = useState({ name: '', role: '', img: '', achievements: '', specialties: '' });
  const [imageFile, setImageFile] = useState(null);
  const [editingId, setEditingId] = useState(null);
  const [isUploading, setIsUploading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name) return;
    
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
      await updateTrainer(editingId, finalData);
      setEditingId(null);
    } else {
      await addTrainer(finalData);
    }
    
    setFormData({ name: '', role: '', img: '', achievements: '', specialties: '' });
    setImageFile(null);
    setIsUploading(false);
  };

  const startEdit = (trainer) => {
    setEditingId(trainer.id);
    setFormData({ 
      name: trainer.name, 
      role: trainer.role, 
      img: trainer.img || '', 
      achievements: trainer.achievements || '', 
      specialties: trainer.specialties || '' 
    });
    setImageFile(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const cancelEdit = () => {
    setEditingId(null);
    setFormData({ name: '', role: '', img: '', achievements: '', specialties: '' });
    setImageFile(null);
  };

  return (
    <div>
      <div className="admin-card">
        <h3 style={{marginBottom: '20px'}}>{editingId ? 'Edit Trainer' : 'Add New Trainer'}</h3>
        <form onSubmit={handleSubmit}>
          <div style={{display: 'flex', gap: '20px', flexWrap: 'wrap'}}>
            <div className="admin-form-group" style={{flex: '1 1 200px'}}>
              <label>Name</label>
              <input className="admin-input" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} required />
            </div>
            <div className="admin-form-group" style={{flex: '1 1 200px'}}>
              <label>Role</label>
              <input className="admin-input" value={formData.role} onChange={e => setFormData({...formData, role: e.target.value})} required />
            </div>
          </div>
          
          <div className="admin-form-group">
            <label>Trainer Photo (Upload file)</label>
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

          <div className="admin-form-group">
            <label>Achievements (One per line)</label>
            <textarea className="admin-input" rows="3" value={formData.achievements} onChange={e => setFormData({...formData, achievements: e.target.value})}></textarea>
          </div>
          
          <div className="admin-form-group">
            <label>Specialties (One per line)</label>
            <textarea className="admin-input" rows="3" value={formData.specialties} onChange={e => setFormData({...formData, specialties: e.target.value})}></textarea>
          </div>
          
          <div style={{ display: 'flex', gap: '15px' }}>
            <button type="submit" className="admin-btn" disabled={isUploading}>
              {isUploading ? <><Loader size={18} className="spin" /> Processing...</> : (editingId ? 'Update Trainer' : 'Add Trainer')}
            </button>
            {editingId && <button type="button" className="admin-btn admin-btn-danger" onClick={cancelEdit}>Cancel</button>}
          </div>
        </form>
      </div>

      <div className="admin-card">
        <h3 style={{marginBottom: '20px'}}>Current Trainers</h3>
        <div style={{display: 'flex', flexDirection: 'column', gap: '15px'}}>
          {data.trainers.map(t => (
            <div key={t.id} style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#0a0a0a', padding: '15px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.05)'}}>
              <div style={{display: 'flex', alignItems: 'center', gap: '15px'}}>
                <img src={t.img || '/trainer.jpg'} alt="trainer" style={{width: '60px', height: '60px', borderRadius: '50%', objectFit: 'cover'}} />
                <div>
                  <h4 style={{margin: '0 0 5px 0'}}>{t.name}</h4>
                  <span style={{color: '#aaa', fontSize: '0.85rem'}}>{t.role}</span>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '10px' }}>
                <button className="admin-btn" style={{ background: 'var(--primary-blue)' }} onClick={() => startEdit(t)}>
                  <Edit2 size={18} />
                </button>
                <button className="admin-btn admin-btn-danger" onClick={() => removeTrainer(t.id)}>
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

export default AdminTrainers;
