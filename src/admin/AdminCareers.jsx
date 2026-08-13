import React, { useState } from 'react';
import { useAdmin } from '../context/AdminContext';
import { Trash2 } from 'lucide-react';

const AdminCareers = () => {
  const { data, addCareer, removeCareer } = useAdmin();
  const [formData, setFormData] = useState({ title: '', type: 'Full-Time', desc: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title) return;
    addCareer(formData);
    setFormData({ title: '', type: 'Full-Time', desc: '' });
  };

  return (
    <div>
      <div className="admin-card">
        <h3 style={{marginBottom: '20px'}}>Post a Job Opening</h3>
        <form onSubmit={handleSubmit}>
          <div style={{display: 'flex', gap: '20px'}}>
            <div className="admin-form-group" style={{flex: 2}}>
              <label>Job Title</label>
              <input className="admin-input" value={formData.title} onChange={e => setFormData({...formData, title: e.target.value})} required />
            </div>
            <div className="admin-form-group" style={{flex: 1}}>
              <label>Type</label>
              <select className="admin-input" value={formData.type} onChange={e => setFormData({...formData, type: e.target.value})}>
                <option>Full-Time</option>
                <option>Part-Time</option>
                <option>Contract</option>
              </select>
            </div>
          </div>
          <div className="admin-form-group">
            <label>Description</label>
            <textarea className="admin-input" rows="3" value={formData.desc} onChange={e => setFormData({...formData, desc: e.target.value})} required></textarea>
          </div>
          <button type="submit" className="admin-btn">Post Job</button>
        </form>
      </div>

      <div className="admin-card">
        <h3 style={{marginBottom: '20px'}}>Current Openings</h3>
        <div style={{display: 'flex', flexDirection: 'column', gap: '15px'}}>
          {data.careers.map(job => (
            <div key={job.id} style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#0a0a0a', padding: '15px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.05)'}}>
              <div>
                <h4 style={{margin: '0 0 5px 0'}}>{job.title} <span style={{fontSize: '0.8rem', background: 'var(--primary-blue)', padding: '2px 8px', borderRadius: '4px', marginLeft: '10px'}}>{job.type}</span></h4>
                <span style={{color: '#aaa', fontSize: '0.85rem'}}>{job.desc}</span>
              </div>
              <button className="admin-btn admin-btn-danger" onClick={() => removeCareer(job.id)}><Trash2 size={18} /></button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminCareers;
