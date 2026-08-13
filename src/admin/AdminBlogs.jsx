import React, { useState } from 'react';
import { useAdmin } from '../context/AdminContext';
import { Trash2, Edit2, Upload, Loader } from 'lucide-react';

const AdminBlogs = () => {
  const { data, addBlog, removeBlog, updateBlog, uploadImage } = useAdmin();
  const [formData, setFormData] = useState({ title: '', subtitle: '', img: '', content: '' });
  const [imageFile, setImageFile] = useState(null);
  const [editingId, setEditingId] = useState(null);
  const [isUploading, setIsUploading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.title || !formData.content) return alert('Title and Content are required!');
    
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
      await updateBlog(editingId, finalData);
      setEditingId(null);
    } else {
      await addBlog(finalData);
    }
    
    setFormData({ title: '', subtitle: '', img: '', content: '' });
    setImageFile(null);
    setIsUploading(false);
  };

  const startEdit = (blog) => {
    setEditingId(blog.id);
    setFormData({ title: blog.title, subtitle: blog.subtitle, img: blog.img || '', content: blog.content });
    setImageFile(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const cancelEdit = () => {
    setEditingId(null);
    setFormData({ title: '', subtitle: '', img: '', content: '' });
    setImageFile(null);
  };

  return (
    <div>
      <div className="admin-card">
        <h3 style={{marginBottom: '20px'}}>{editingId ? 'Edit Blog Post' : 'Add New Blog Post'}</h3>
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
          <div className="admin-form-group">
            <label>Full Content</label>
            <textarea className="admin-input" rows="5" value={formData.content} onChange={e => setFormData({...formData, content: e.target.value})} required></textarea>
          </div>
          <div style={{ display: 'flex', gap: '15px' }}>
            <button type="submit" className="admin-btn" disabled={isUploading}>
              {isUploading ? <><Loader size={18} className="spin" /> Processing...</> : (editingId ? 'Update Blog' : 'Publish Blog')}
            </button>
            {editingId && <button type="button" className="admin-btn admin-btn-danger" onClick={cancelEdit}>Cancel</button>}
          </div>
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
              <div style={{ display: 'flex', gap: '10px' }}>
                <button className="admin-btn" style={{ background: 'var(--primary-blue)' }} onClick={() => startEdit(blog)}>
                  <Edit2 size={18} />
                </button>
                <button className="admin-btn admin-btn-danger" onClick={() => removeBlog(blog.id)}>
                  <Trash2 size={18} />
                </button>
              </div>
            </div>
          ))}
          {data.blogs.length === 0 && <p style={{color: '#aaa'}}>No blogs found.</p>}
        </div>
      </div>
    </div>
  );
};

export default AdminBlogs;
