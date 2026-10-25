"use client";

import React, { useState } from 'react';
import { useAdmin } from '@/context/AdminContext';
import { Trash2, Edit2, Upload, Loader, X, CheckSquare, Square } from 'lucide-react';
import { toast } from 'react-toastify';

const AdminGallery = () => {
  const {
    data,
    addGalleryImage,
    addGalleryImages,
    removeGalleryImage,
    updateGalleryImage,
    bulkDeleteGalleryImages,
    uploadImage
  } = useAdmin();

  // Single or Bulk Add state
  const [files, setFiles] = useState([]);
  const [title, setTitle] = useState('');
  const [uploading, setUploading] = useState(false);

  // Edit State
  const [editingId, setEditingId] = useState(null);
  const [editTitle, setEditTitle] = useState('');
  const [editFile, setEditFile] = useState(null);
  const [existingUrl, setExistingUrl] = useState('');

  // Bulk Selection State
  const [selectedIds, setSelectedIds] = useState([]);
  const [isBulkDeleting, setIsBulkDeleting] = useState(false);

  // Previews for add mode
  const filePreviews = files.map(f => ({ file: f, url: URL.createObjectURL(f) }));

  // Preview for edit mode
  const editPreview = editFile ? URL.createObjectURL(editFile) : existingUrl;

  // Handle file selection in Add Mode
  const handleFilesChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setFiles(Array.from(e.target.files));
    }
  };

  const removeSelectedFile = (index) => {
    setFiles(prev => prev.filter((_, i) => i !== index));
  };

  // Submit Handler: Add or Update
  const handleSubmit = async (e) => {
    e.preventDefault();

    // EDIT MODE
    if (editingId) {
      setUploading(true);
      let finalUrl = existingUrl;

      if (editFile) {
        const uploadedUrl = await uploadImage(editFile);
        if (uploadedUrl) {
          finalUrl = uploadedUrl;
        } else {
          toast.error("Could not process replacement image. Please try again.");
          setUploading(false);
          return;
        }
      }

      const res = await updateGalleryImage(editingId, { title: editTitle, url: finalUrl });
      if (res?.success) {
        toast.success("Gallery image updated successfully!");
        cancelEdit();
      } else {
        toast.error("Failed to update image: " + (res?.error?.message || ''));
      }
      setUploading(false);
      return;
    }

    // ADD MODE (Single or Multiple)
    if (files.length === 0) {
      toast.warn("Please select at least one image file.");
      return;
    }

    setUploading(true);

    try {
      if (files.length === 1) {
        // Single upload
        const url = await uploadImage(files[0]);
        if (url) {
          const res = await addGalleryImage({ url, title });
          if (res?.success) {
            toast.success("Image added to gallery!");
            setFiles([]);
            setTitle('');
          } else {
            toast.error("Failed to save to database: " + (res?.error?.message || ''));
          }
        } else {
          toast.error("Could not process image.");
        }
      } else {
        // Bulk upload
        const uploadedItems = [];
        for (let i = 0; i < files.length; i++) {
          const url = await uploadImage(files[i]);
          if (url) {
            uploadedItems.push({
              url,
              title: title ? `${title} (${i + 1})` : ''
            });
          }
        }

        if (uploadedItems.length > 0) {
          const res = await addGalleryImages(uploadedItems);
          if (res?.success) {
            toast.success(`Successfully uploaded ${uploadedItems.length} images!`);
            setFiles([]);
            setTitle('');
          } else {
            toast.error("Database save failed: " + (res?.error?.message || ''));
          }
        } else {
          toast.error("Failed to process selected images.");
        }
      }
    } catch (err) {
      console.error(err);
      toast.error("An error occurred during upload.");
    } finally {
      setUploading(false);
    }
  };

  // Start Editing an image
  const startEdit = (img) => {
    setEditingId(img.id);
    setEditTitle(img.title || '');
    setExistingUrl(img.url);
    setEditFile(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Cancel Edit
  const cancelEdit = () => {
    setEditingId(null);
    setEditTitle('');
    setEditFile(null);
    setExistingUrl('');
  };

  // Delete single image
  const handleDelete = async (id, imgTitle) => {
    if (window.confirm(`Delete ${imgTitle ? `"${imgTitle}"` : 'this image'} from gallery?`)) {
      const res = await removeGalleryImage(id);
      if (res?.success) {
        toast.success("Image removed from gallery!");
        setSelectedIds(prev => prev.filter(item => item !== id));
      } else {
        toast.error("Failed to remove image.");
      }
    }
  };

  // Toggle single selection
  const toggleSelect = (id) => {
    setSelectedIds(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  // Select All / Deselect All
  const handleSelectAll = () => {
    if (selectedIds.length === data.gallery.length) {
      setSelectedIds([]);
    } else {
      setSelectedIds(data.gallery.map(img => img.id));
    }
  };

  // Bulk Delete
  const handleBulkDelete = async () => {
    if (selectedIds.length === 0) return;

    if (window.confirm(`Are you sure you want to permanently delete ${selectedIds.length} selected images?`)) {
      setIsBulkDeleting(true);
      const res = await bulkDeleteGalleryImages(selectedIds);
      if (res?.success) {
        toast.success(`Deleted ${selectedIds.length} images successfully!`);
        setSelectedIds([]);
      } else {
        toast.error("Failed to delete selected images.");
      }
      setIsBulkDeleting(false);
    }
  };

  return (
    <div className="admin-content-section fade-in">
      <h2>Gallery Management</h2>

      {/* FORM: ADD OR EDIT */}
      <div className="admin-card">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <h3 style={{ margin: 0 }}>
            {editingId ? 'Edit Gallery Image' : 'Add Gallery Image(s)'}
          </h3>
          {editingId && (
            <button type="button" className="admin-btn admin-btn-danger" onClick={cancelEdit} style={{ padding: '6px 14px', fontSize: '0.85rem' }}>
              Cancel Edit
            </button>
          )}
        </div>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          {/* File Picker */}
          <div className="admin-form-group">
            <label>{editingId ? 'Replace Image File (Optional)' : 'Image File(s) - Select Single or Multiple'}</label>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', flexWrap: 'wrap' }}>
              <label className="admin-btn" style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Upload size={18} /> {editingId ? 'Choose New File' : 'Choose File(s)'}
                <input
                  type="file"
                  accept="image/png, image/jpeg, image/jpg, image/webp"
                  multiple={!editingId}
                  onChange={editingId ? (e) => setEditFile(e.target.files[0]) : handleFilesChange}
                  style={{ display: 'none' }}
                />
              </label>
              <span style={{ color: '#aaa', fontSize: '0.9rem' }}>
                {editingId
                  ? (editFile ? editFile.name : (existingUrl ? 'Current image attached' : 'No file chosen'))
                  : (files.length > 0 ? `${files.length} file(s) chosen` : 'No file chosen')}
              </span>
            </div>

            {/* Previews in Edit Mode */}
            {editingId && editPreview && (
              <div style={{ marginTop: '12px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ position: 'relative', width: '120px', height: '80px', borderRadius: '8px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.2)' }}>
                  <img src={editPreview} alt="Preview" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                {editFile && (
                  <button
                    type="button"
                    onClick={() => setEditFile(null)}
                    style={{ background: 'none', border: 'none', color: '#ff4d4d', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.85rem' }}
                  >
                    <X size={16} /> Revert to Original
                  </button>
                )}
              </div>
            )}

            {/* Previews in Add Mode (Single or Multiple) */}
            {!editingId && filePreviews.length > 0 && (
              <div style={{ marginTop: '15px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                  <span style={{ fontSize: '0.85rem', color: '#aaa' }}>Selected Images Preview ({filePreviews.length}):</span>
                  <button
                    type="button"
                    onClick={() => setFiles([])}
                    style={{ background: 'none', border: 'none', color: '#ff4d4d', cursor: 'pointer', fontSize: '0.8rem' }}
                  >
                    Clear All
                  </button>
                </div>
                <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                  {filePreviews.map((p, idx) => (
                    <div key={idx} style={{ position: 'relative', width: '90px', height: '60px', borderRadius: '6px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.2)' }}>
                      <img src={p.url} alt={`Preview ${idx + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                      <button
                        type="button"
                        onClick={() => removeSelectedFile(idx)}
                        style={{ position: 'absolute', top: '2px', right: '2px', background: 'rgba(0,0,0,0.7)', color: '#fff', border: 'none', borderRadius: '50%', width: '18px', height: '18px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}
                      >
                        <X size={12} />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Title Input */}
          <div className="admin-form-group">
            <label>Title (Optional)</label>
            <input
              type="text"
              value={editingId ? editTitle : title}
              onChange={(e) => editingId ? setEditTitle(e.target.value) : setTitle(e.target.value)}
              className="admin-input"
              placeholder={editingId ? "e.g. Boxing" : "e.g. Cardio Zone (applies to all uploaded)"}
            />
          </div>

          {/* Action Buttons */}
          <div style={{ display: 'flex', gap: '12px', marginTop: '10px' }}>
            <button type="submit" className="admin-btn" disabled={uploading}>
              {uploading ? (
                <><Loader size={18} className="spin" /> Processing...</>
              ) : (
                editingId ? 'Update Gallery Image' : (files.length > 1 ? `Upload ${files.length} Images` : 'Add Image')
              )}
            </button>
            {editingId && (
              <button type="button" className="admin-btn admin-btn-danger" onClick={cancelEdit}>
                Cancel
              </button>
            )}
          </div>
        </form>
      </div>

      {/* GALLERY PREVIEW & BULK ACTIONS */}
      <div className="admin-card">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '15px', marginBottom: '20px' }}>
          <div>
            <h3 style={{ margin: 0 }}>Gallery Preview</h3>
            <span style={{ fontSize: '0.85rem', color: '#888' }}>
              Total: {data.gallery.length} images {selectedIds.length > 0 && `• Selected: ${selectedIds.length}`}
            </span>
          </div>

          {/* Bulk Action Controls */}
          {data.gallery.length > 0 && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
              <button
                type="button"
                className="admin-btn"
                onClick={handleSelectAll}
                style={{
                  background: selectedIds.length === data.gallery.length ? 'rgba(255,255,255,0.2)' : 'rgba(255,255,255,0.08)',
                  border: '1px solid rgba(255,255,255,0.15)',
                  fontSize: '0.85rem',
                  padding: '8px 14px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px'
                }}
              >
                {selectedIds.length === data.gallery.length ? <CheckSquare size={16} /> : <Square size={16} />}
                {selectedIds.length === data.gallery.length ? 'Deselect All' : 'Select All'}
              </button>

              {selectedIds.length > 0 && (
                <button
                  type="button"
                  className="admin-btn admin-btn-danger"
                  onClick={handleBulkDelete}
                  disabled={isBulkDeleting}
                  style={{
                    fontSize: '0.85rem',
                    padding: '8px 16px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    background: 'var(--primary-red)',
                    color: '#fff'
                  }}
                >
                  {isBulkDeleting ? (
                    <><Loader size={16} className="spin" /> Deleting...</>
                  ) : (
                    <><Trash2 size={16} /> Delete Selected ({selectedIds.length})</>
                  )}
                </button>
              )}
            </div>
          )}
        </div>

        {/* Gallery Image Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(170px, 1fr))', gap: '15px' }}>
          {data.gallery.map((img) => {
            const isSelected = selectedIds.includes(img.id);

            return (
              <div
                key={img.id}
                style={{
                  position: 'relative',
                  height: '160px',
                  borderRadius: '10px',
                  overflow: 'hidden',
                  border: isSelected ? '2px solid var(--primary-cyan)' : '1px solid rgba(255,255,255,0.1)',
                  boxShadow: isSelected ? '0 0 12px rgba(0, 195, 255, 0.4)' : 'none',
                  transition: 'all 0.2s ease',
                  background: '#0a0a0a',
                  cursor: 'pointer'
                }}
                onClick={() => toggleSelect(img.id)}
              >
                {/* Background Image */}
                <img
                  src={img.url}
                  alt={img.title || "Gallery"}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    filter: isSelected ? 'brightness(0.85)' : 'none'
                  }}
                />

                {/* Bulk Selection Checkbox Overlay (Top-Left) */}
                <div
                  style={{
                    position: 'absolute',
                    top: '8px',
                    left: '8px',
                    zIndex: 2,
                    background: isSelected ? 'var(--primary-cyan)' : 'rgba(0,0,0,0.6)',
                    borderRadius: '4px',
                    width: '24px',
                    height: '24px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '1px solid rgba(255,255,255,0.3)',
                    color: isSelected ? '#000' : '#fff'
                  }}
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleSelect(img.id);
                  }}
                >
                  {isSelected ? <CheckSquare size={16} /> : <Square size={16} />}
                </div>

                {/* Action Buttons: Edit & Delete (Top-Right) */}
                <div
                  style={{
                    position: 'absolute',
                    top: '8px',
                    right: '8px',
                    display: 'flex',
                    gap: '6px',
                    zIndex: 2
                  }}
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* Edit Button */}
                  <button
                    type="button"
                    onClick={() => startEdit(img)}
                    title="Edit Title / Image"
                    style={{
                      background: 'var(--primary-blue)',
                      color: 'white',
                      border: 'none',
                      borderRadius: '50%',
                      width: '28px',
                      height: '28px',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      cursor: 'pointer',
                      boxShadow: '0 2px 5px rgba(0,0,0,0.5)'
                    }}
                  >
                    <Edit2 size={14} />
                  </button>

                  {/* Delete Button */}
                  <button
                    type="button"
                    onClick={() => handleDelete(img.id, img.title)}
                    title="Delete Image"
                    style={{
                      background: 'rgba(230,0,38,0.9)',
                      color: 'white',
                      border: 'none',
                      borderRadius: '50%',
                      width: '28px',
                      height: '28px',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      cursor: 'pointer',
                      boxShadow: '0 2px 5px rgba(0,0,0,0.5)'
                    }}
                  >
                    <Trash2 size={14} />
                  </button>
                </div>

                {/* Image Title Overlay (Bottom) */}
                {img.title && (
                  <div
                    style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      width: '100%',
                      background: 'rgba(0,0,0,0.75)',
                      color: 'white',
                      padding: '6px 8px',
                      fontSize: '0.8rem',
                      textAlign: 'center',
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis'
                    }}
                  >
                    {img.title}
                  </div>
                )}
              </div>
            );
          })}
          {data.gallery.length === 0 && (
            <p style={{ color: 'var(--silver-light)' }}>No images in gallery yet. Upload some above!</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminGallery;
