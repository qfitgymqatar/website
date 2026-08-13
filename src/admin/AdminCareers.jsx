import React, { useState } from 'react';
import { useAdmin } from '../context/AdminContext';
import { Trash2, Edit2, Upload, Loader } from 'lucide-react';

const AdminCareers = () => {
  const { data, addCareer, removeCareer, updateCareer, uploadImage } = useAdmin();
  const [formData, setFormData] = useState({ title: '', type: 'Full-Time', desc: '', img: '' });
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
      await updateCareer(editingId, finalData);
      setEditingId(null);
    } else {
      await addCareer(finalData);
    }
    
    setFormData({ title: '', type: 'Full-Time', desc: '', img: '' });
    setImageFile(null);
    setIsUploading(false);
  };

  const startEdit = (job) => {
    setEditingId(job.id);
    setFormData({ title: job.title, type: job.type, desc: job.desc, img: job.img || '' });
    setImageFile(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const cancelEdit = () => {
    setEditingId(null);
    setFormData({ title: '', type: 'Full-Time', desc: '', img: '' });
    setImageFile(null);
  };

  return (
    <div>
      <div className="admin-card">
        <h3 style={{marginBottom: '20px'}}>{editingId ? 'Edit Job Opening' : 'Post a Job Opening'}</h3>
        <form onSubmit={handleSubmit}>
          <div style={{display: 'flex', gap: '20px', flexWrap: 'wrap'}}>
            <div className="admin-form-group" style={{flex: '2 1 300px'}}>
              <label>Job Title</label>
              <input className="admin-input" value={formData.title} onChange={e => setFormData({...formData, title: e.target.value})} required />
            </div>
            <div className="admin-form-group" style={{flex: '1 1 150px'}}>
              <label>Type</label>
              <select className="admin-input" value={formData.type} onChange={e => setFormData({...formData, type: e.target.value})}>
                <option>Full-Time</option>
                <option>Part-Time</option>
                <option>Contract</option>
              </select>
            </div>
          </div>
          <div className="admin-form-group">
            <label>Image (Optional File Upload)</label>
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
            <label>Description</label>
            <textarea className="admin-input" rows="3" value={formData.desc} onChange={e => setFormData({...formData, desc: e.target.value})} required></textarea>
          </div>
          <div style={{ display: 'flex', gap: '15px' }}>
            <button type="submit" className="admin-btn" disabled={isUploading}>
              {isUploading ? <><Loader size={18} className="spin" /> Processing...</> : (editingId ? 'Update Job' : 'Post Job')}
            </button>
            {editingId && <button type="button" className="admin-btn admin-btn-danger" onClick={cancelEdit}>Cancel</button>}
          </div>
        </form>
      </div>

      <div className="admin-card">
        <h3 style={{marginBottom: '20px'}}>Current Openings</h3>
        <div style={{display: 'flex', flexDirection: 'column', gap: '15px'}}>
          {data.careers.map(job => (
            <div key={job.id} style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#0a0a0a', padding: '15px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.05)'}}>
              <div style={{display: 'flex', alignItems: 'center', gap: '15px'}}>
                {job.img && <img src={job.img} alt="career" style={{width: '60px', height: '60px', borderRadius: '8px', objectFit: 'cover'}} />}
                <div>
                  <h4 style={{margin: '0 0 5px 0'}}>{job.title} <span style={{fontSize: '0.8rem', background: 'var(--primary-blue)', padding: '2px 8px', borderRadius: '4px', marginLeft: '10px'}}>{job.type}</span></h4>
                  <span style={{color: '#aaa', fontSize: '0.85rem'}}>{job.desc}</span>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '10px' }}>
                <button className="admin-btn" style={{ background: 'var(--primary-blue)' }} onClick={() => startEdit(job)}>
                  <Edit2 size={18} />
                </button>
                <button className="admin-btn admin-btn-danger" onClick={() => removeCareer(job.id)}>
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

export default AdminCareers;
