"use client";

import React, { useState } from 'react';
import { useAdmin } from '@/context/AdminContext';
import { Trash2, Edit2, Upload, Loader, X } from 'lucide-react';
import { toast } from 'react-toastify';

const AdminBlogs = () => {
  const { data, addBlog, removeBlog, updateBlog, uploadImage } = useAdmin();
  const [formData, setFormData] = useState({ title: '', subtitle: '', img: '', content: '' });
  const [imageFile, setImageFile] = useState(null);
  const [editingId, setEditingId] = useState(null);
  const [isUploading, setIsUploading] = useState(false);

  // Compute preview URL
  const previewImg = imageFile ? URL.createObjectURL(imageFile) : formData.img;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.title || !formData.content) {
      toast.error('Title and Content are required!');
      return;
    }
    
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
      const res = await updateBlog(editingId, finalData);
      if (res?.success) {
        toast.success('Blog post updated successfully!');
        setEditingId(null);
        setFormData({ title: '', subtitle: '', img: '', content: '' });
        setImageFile(null);
      } else {
        toast.error('Failed to update blog: ' + (res?.error?.message || 'Unknown error'));
      }
    } else {
      const res = await addBlog(finalData);
      if (res?.success) {
        toast.success('Blog post published successfully!');
        setFormData({ title: '', subtitle: '', img: '', content: '' });
        setImageFile(null);
      } else {
        toast.error('Failed to publish blog: ' + (res?.error?.message || 'Unknown error'));
      }
    }
    
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

  const handleDelete = async (id, title) => {
    if (window.confirm(`Are you sure you want to delete blog "${title}"?`)) {
      const res = await removeBlog(id);
      if (res?.success) {
        toast.success('Blog deleted successfully!');
      } else {
        toast.error('Failed to delete blog.');
      }
    }
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
                  <X size={16} /> Remove Cover Image
                </button>
              </div>
            )}
          </div>
          <div className="admin-form-group">
            <label>Full Content</label>
            <textarea className="admin-input" rows="5" value={formData.content} onChange={e => setFormData({...formData, content: e.target.value})} required></textarea>
          </div>
          <div style={{ display: 'flex', gap: '15px', marginTop: '15px' }}>
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
              <div style={{display: 'flex', alignItems: 'center', gap: '15px'}}>
                {blog.img && <img src={blog.img} alt="blog" style={{width: '60px', height: '60px', borderRadius: '8px', objectFit: 'cover'}} />}
                <div>
                  <h4 style={{margin: '0 0 5px 0'}}>{blog.title}</h4>
                  <span style={{color: '#aaa', fontSize: '0.85rem'}}>{blog.date}</span>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '10px' }}>
                <button className="admin-btn" style={{ background: 'var(--primary-blue)' }} onClick={() => startEdit(blog)}>
                  <Edit2 size={18} />
                </button>
                <button className="admin-btn admin-btn-danger" onClick={() => handleDelete(blog.id, blog.title)}>
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
