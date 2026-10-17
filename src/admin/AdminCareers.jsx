"use client";

import React, { useState } from 'react';
import { useAdmin } from '@/context/AdminContext';
import { Trash2, Edit2, Upload, Loader, X } from 'lucide-react';
import { toast } from 'react-toastify';

const AdminCareers = () => {
  const { data, addCareer, removeCareer, updateCareer, uploadImage } = useAdmin();
  const [formData, setFormData] = useState({ title: '', type: 'Full-Time', desc: '', img: '' });
  const [imageFile, setImageFile] = useState(null);
  const [editingId, setEditingId] = useState(null);
  const [isUploading, setIsUploading] = useState(false);

  // Compute preview URL
  const previewImg = imageFile ? URL.createObjectURL(imageFile) : formData.img;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.title) return;
    
    setIsUploading(true);
    let finalImgUrl = formData.img;
    
    if (imageFile) {
      const uploadedUrl = await uploadImage(imageFile);
      if (uploadedUrl) {
        finalImgUrl = uploadedUrl;
      } else {
        toast.error('Could not process the selected image. Please try again.');
        setIsUploading(false);
        return;
      }
    }
    
    const finalData = { ...formData, img: finalImgUrl };
    
    if (editingId) {
      const res = await updateCareer(editingId, finalData);
      if (res?.success) {
        toast.success('Job opening updated successfully!');
        setEditingId(null);
        setFormData({ title: '', type: 'Full-Time', desc: '', img: '' });
        setImageFile(null);
      } else {
        toast.error('Failed to update job opening: ' + (res?.error?.message || 'Unknown error'));
      }
    } else {
      const res = await addCareer(finalData);
      if (res?.success) {
        toast.success('Job opening posted successfully!');
        setFormData({ title: '', type: 'Full-Time', desc: '', img: '' });
        setImageFile(null);
      } else {
        toast.error('Failed to post job opening: ' + (res?.error?.message || 'Unknown error'));
      }
    }
    
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

  const handleDelete = async (id, title) => {
    if (window.confirm(`Are you sure you want to delete job opening "${title}"?`)) {
      const res = await removeCareer(id);
      if (res?.success) {
        toast.success('Job opening deleted successfully!');
      } else {
        toast.error('Failed to delete job opening.');
      }
    }
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
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', flexWrap: 'wrap' }}>
              <label className="admin-btn" style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Upload size={18} /> Choose File
                <input type="file" accept="image/*" onChange={e => setImageFile(e.target.files[0])} style={{ display: 'none' }} />
              </label>
              <span style={{ color: '#aaa', fontSize: '0.9rem' }}>
                {imageFile ? imageFile.name : (formData.img ? 'Image attached' : 'No file chosen')}
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
                  onClick={() => { setImageFile(null); setFormData({ ...formData, img: '' }); }}
                  style={{ background: 'none', border: 'none', color: '#ff4d4d', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.85rem' }}
                >
                  <X size={16} /> Remove Image
                </button>
              </div>
            )}
          </div>
          <div className="admin-form-group">
            <label>Description</label>
            <textarea className="admin-input" rows="3" value={formData.desc} onChange={e => setFormData({...formData, desc: e.target.value})} required></textarea>
          </div>
          <div style={{ display: 'flex', gap: '15px', marginTop: '15px' }}>
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
                <button className="admin-btn admin-btn-danger" onClick={() => handleDelete(job.id, job.title)}>
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
