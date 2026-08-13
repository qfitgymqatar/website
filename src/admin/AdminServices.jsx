import React, { useState } from 'react';
import { useAdmin } from '../context/AdminContext';
import { Trash2 } from 'lucide-react';

const AdminServices = () => {
  const { data, addService, removeService } = useAdmin();
  const [formData, setFormData] = useState({ title: '', desc: '', img: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title) return;
    addService(formData);
    setFormData({ title: '', desc: '', img: '' });
  };

  return (
    <div>
      <div className="admin-card">
        <h3 style={{marginBottom: '20px'}}>Add New Service</h3>
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
            <label>Cover Image URL</label>
            <input className="admin-input" value={formData.img} onChange={e => setFormData({...formData, img: e.target.value})} required />
          </div>
          <button type="submit" className="admin-btn">Add Service</button>
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
              <button className="admin-btn admin-btn-danger" onClick={() => removeService(s.id)}><Trash2 size={18} /></button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminServices;
