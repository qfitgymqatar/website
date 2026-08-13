import React, { useState } from 'react';
import { useAdmin } from '../context/AdminContext';
import { Trash2 } from 'lucide-react';

const AdminTrainers = () => {
  const { data, addTrainer, removeTrainer, uploadImage } = useAdmin();
  const [form, setForm] = useState({ name: '', role: '', exp: '', qual: '', achievements: '', specialties: '' });
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);

  const handleAdd = async (e) => {
    e.preventDefault();
    setUploading(true);
    let imgUrl = null;
    
    if (file) {
      imgUrl = await uploadImage(file);
      if (!imgUrl) {
        alert("Failed to upload image. Please try again.");
        setUploading(false);
        return;
      }
    }

    await addTrainer({ ...form, img: imgUrl });
    setForm({ name: '', role: '', exp: '', qual: '', achievements: '', specialties: '' });
    setFile(null);
    setUploading(false);
  };

  return (
    <div className="admin-content-section fade-in">
      <h2>Trainers</h2>
      
      <div className="admin-card">
        <h3 style={{marginBottom: '20px'}}>Add New Trainer</h3>
        <form onSubmit={handleAdd} style={{display: 'flex', flexDirection: 'column', gap: '15px'}}>
          <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px'}}>
            <div className="form-group">
              <label>Name</label>
              <input required type="text" value={form.name} onChange={e => setForm({...form, name: e.target.value})} className="admin-input" />
            </div>
            <div className="form-group">
              <label>Role</label>
              <input required type="text" value={form.role} onChange={e => setForm({...form, role: e.target.value})} className="admin-input" />
            </div>
          </div>
          
          <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px'}}>
            <div className="form-group">
              <label>Experience (e.g., 5 Years)</label>
              <input required type="text" value={form.exp} onChange={e => setForm({...form, exp: e.target.value})} className="admin-input" />
            </div>
            <div className="form-group">
              <label>Trainer Photo (.jpg, .png)</label>
              <input type="file" accept="image/*" onChange={e => setFile(e.target.files[0])} className="admin-input" />
            </div>
          </div>
          
          <div className="form-group">
            <label>Qualifications (One per line)</label>
            <textarea rows="3" value={form.qual} onChange={e => setForm({...form, qual: e.target.value})} className="admin-input" placeholder="Certified Personal Trainer&#10;Nutrition Specialist" />
          </div>

          <div className="form-group">
            <label>Achievements (One per line)</label>
            <textarea rows="3" value={form.achievements} onChange={e => setForm({...form, achievements: e.target.value})} className="admin-input" placeholder="1st Place Fitness Competition&#10;Trainer of the Year 2022" />
          </div>

          <div className="form-group">
            <label>Specialising In (One per line)</label>
            <textarea rows="3" value={form.specialties} onChange={e => setForm({...form, specialties: e.target.value})} className="admin-input" placeholder="Strength & Conditioning&#10;Weight Loss" />
          </div>

          <button type="submit" className="admin-btn-primary" disabled={uploading}>
            {uploading ? 'Uploading & Saving...' : 'Add Trainer'}
          </button>
        </form>
      </div>

      <div className="admin-card">
        <h3 style={{marginBottom: '20px'}}>Current Trainers</h3>
        <div style={{display: 'grid', gridTemplateColumns: '1fr', gap: '15px'}}>
          {data.trainers.map((t) => (
            <div key={t.id} style={{display: 'flex', alignItems: 'center', background: 'rgba(255,255,255,0.02)', padding: '15px', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.05)'}}>
              <img src={t.img || '/trainer.jpg'} alt={t.name} style={{width: '60px', height: '60px', borderRadius: '50%', objectFit: 'cover', marginRight: '20px'}} />
              <div style={{flexGrow: 1}}>
                <h4 style={{color: '#fff', marginBottom: '5px'}}>{t.name}</h4>
                <p style={{color: 'var(--primary-cyan)', fontSize: '0.9rem'}}>{t.role}</p>
              </div>
              <button 
                onClick={() => removeTrainer(t.id)}
                style={{background: 'rgba(230,0,38,0.2)', color: 'var(--primary-red)', border: '1px solid rgba(230,0,38,0.5)', borderRadius: '8px', padding: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer'}}
              >
                <Trash2 size={18} />
              </button>
            </div>
          ))}
          {data.trainers.length === 0 && <p style={{color: 'var(--silver-light)'}}>No trainers added yet.</p>}
        </div>
      </div>
    </div>
  );
};

export default AdminTrainers;
