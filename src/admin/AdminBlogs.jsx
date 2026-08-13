import React, { useState } from 'react';
import { useAdmin } from '../context/AdminContext';
import { Trash2 } from 'lucide-react';

const AdminBlogs = () => {
  const { data, addBlog, removeBlog } = useAdmin();
  const [formData, setFormData] = useState({ title: '', subtitle: '', img: '', content: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title || !formData.content) return alert('Title and Content are required!');
    addBlog(formData);
    setFormData({ title: '', subtitle: '', img: '', content: '' });
  };

  return (
    <div>
      <div className="admin-card">
        <h3 style={{marginBottom: '20px'}}>Add New Blog Post</h3>
        <form onSubmit={handleSubmit}>
          <div className="admin-form-group">
            <label>Title</label>
            <input className="admin-input" value={formData.title} onChange={e => setFormData({...formData, title: e.target.value})} required />
          </div>
          <div className="admin-form-group">
            <label>Subtitle / Short Description</label>
            <input className="admin-input" value={formData.subtitle} onChange={e => setFormData({...formData, subtitle: e.target.value})} />
          </div>
          <div className="admin-form-group">
            <label>Cover Image URL (e.g., /hero-sports.jpg)</label>
            <input className="admin-input" value={formData.img} onChange={e => setFormData({...formData, img: e.target.value})} />
          </div>
          <div className="admin-form-group">
            <label>Full Content</label>
            <textarea className="admin-input" rows="5" value={formData.content} onChange={e => setFormData({...formData, content: e.target.value})} required></textarea>
          </div>
          <button type="submit" className="admin-btn">Publish Blog</button>
        </form>
      </div>

      <div className="admin-card">
        <h3 style={{marginBottom: '20px'}}>Existing Blogs</h3>
        <div style={{display: 'flex', flexDirection: 'column', gap: '15px'}}>
          {data.blogs.map(blog => (
            <div key={blog.id} style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#0a0a0a', padding: '15px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.05)'}}>
              <div>
                <h4 style={{margin: '0 0 5px 0'}}>{blog.title}</h4>
                <span style={{color: '#aaa', fontSize: '0.85rem'}}>{blog.date}</span>
              </div>
              <button className="admin-btn admin-btn-danger" onClick={() => removeBlog(blog.id)}>
                <Trash2 size={18} />
              </button>
            </div>
          ))}
          {data.blogs.length === 0 && <p style={{color: '#aaa'}}>No blogs found.</p>}
        </div>
      </div>
    </div>
  );
};

export default AdminBlogs;
