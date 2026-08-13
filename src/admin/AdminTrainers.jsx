import React, { useState } from 'react';
import { useAdmin } from '../context/AdminContext';
import { Trash2 } from 'lucide-react';

const AdminTrainers = () => {
  const { data, addTrainer, removeTrainer } = useAdmin();
  const [formData, setFormData] = useState({ name: '', role: '', exp: '', qual: '', img: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name) return;
    addTrainer(formData);
    setFormData({ name: '', role: '', exp: '', qual: '', img: '' });
  };

  return (
    <div>
      <div className="admin-card">
        <h3 style={{marginBottom: '20px'}}>Add New Trainer</h3>
        <form onSubmit={handleSubmit}>
          <div className="admin-form-group">
            <label>Name</label>
            <input className="admin-input" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} required />
          </div>
          <div style={{display: 'flex', gap: '20px'}}>
            <div className="admin-form-group" style={{flex: 1}}>
              <label>Role</label>
              <input className="admin-input" value={formData.role} onChange={e => setFormData({...formData, role: e.target.value})} />
            </div>
            <div className="admin-form-group" style={{flex: 1}}>
              <label>Experience (e.g., 5 Years)</label>
              <input className="admin-input" value={formData.exp} onChange={e => setFormData({...formData, exp: e.target.value})} />
            </div>
          </div>
          <div className="admin-form-group">
            <label>Qualifications</label>
            <input className="admin-input" value={formData.qual} onChange={e => setFormData({...formData, qual: e.target.value})} />
          </div>
          <div className="admin-form-group">
            <label>Image URL</label>
            <input className="admin-input" value={formData.img} onChange={e => setFormData({...formData, img: e.target.value})} />
          </div>
          <button type="submit" className="admin-btn">Add Trainer</button>
        </form>
      </div>

      <div className="admin-card">
        <h3 style={{marginBottom: '20px'}}>Current Trainers</h3>
        <div style={{display: 'flex', flexDirection: 'column', gap: '15px'}}>
          {data.trainers.map(t => (
            <div key={t.id} style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#0a0a0a', padding: '15px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.05)'}}>
              <div style={{display: 'flex', alignItems: 'center', gap: '15px'}}>
                <img src={t.img || '/logo.png'} alt="trainer" style={{width: '50px', height: '50px', borderRadius: '50%', objectFit: 'cover'}} />
                <div>
                  <h4 style={{margin: '0 0 5px 0'}}>{t.name} <span style={{color: 'var(--primary-cyan)', fontSize: '0.9rem', marginLeft: '10px'}}>{t.role}</span></h4>
                  <span style={{color: '#aaa', fontSize: '0.85rem'}}>{t.qual}</span>
                </div>
              </div>
              <button className="admin-btn admin-btn-danger" onClick={() => removeTrainer(t.id)}><Trash2 size={18} /></button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminTrainers;
