import React, { createContext, useState, useContext, useEffect } from 'react';
import { supabase } from '../supabaseClient';

const AdminContext = createContext();

export const useAdmin = () => useContext(AdminContext);

export const AdminProvider = ({ children }) => {
  const [data, setData] = useState({
    gallery: [],
    trainers: [],
    careers: [],
    services: [],
    blogs: [],
    bookings: []
  });
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    setLoading(true);
    try {
      const [galleryRes, trainersRes, careersRes, servicesRes, blogsRes, bookingsRes] = await Promise.all([
        supabase.from('gallery').select('*').order('created_at', { ascending: false }),
        supabase.from('trainers').select('*').order('created_at', { ascending: false }),
        supabase.from('careers').select('*').order('created_at', { ascending: false }),
        supabase.from('services').select('*').order('created_at', { ascending: false }),
        supabase.from('blogs').select('*').order('created_at', { ascending: false }),
        supabase.from('bookings').select('*').order('created_at', { ascending: false })
      ]);

      setData({
        gallery: galleryRes.data || [],
        trainers: trainersRes.data || [],
        careers: careersRes.data || [],
        services: servicesRes.data || [],
        blogs: blogsRes.data || [],
        bookings: bookingsRes.data || []
      });
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const addGalleryImage = async (galleryData) => {
    const { data: newRow, error } = await supabase.from('gallery').insert([galleryData]).select();
    if (!error && newRow) {
      setData(prev => ({ ...prev, gallery: [newRow[0], ...prev.gallery] }));
    }
  };
  const removeGalleryImage = async (id) => {
    await supabase.from('gallery').delete().eq('id', id);
    setData(prev => ({ ...prev, gallery: prev.gallery.filter(g => g.id !== id) }));
  };

  const addTrainer = async (trainer) => {
    const { data: newRow, error } = await supabase.from('trainers').insert([trainer]).select();
    if (!error && newRow) {
      setData(prev => ({ ...prev, trainers: [newRow[0], ...prev.trainers] }));
    }
  };
  const removeTrainer = async (id) => {
    await supabase.from('trainers').delete().eq('id', id);
    setData(prev => ({ ...prev, trainers: prev.trainers.filter(t => t.id !== id) }));
  };

  const addCareer = async (career) => {
    const { data: newRow, error } = await supabase.from('careers').insert([career]).select();
    if (!error && newRow) {
      setData(prev => ({ ...prev, careers: [newRow[0], ...prev.careers] }));
    }
  };
  const removeCareer = async (id) => {
    await supabase.from('careers').delete().eq('id', id);
    setData(prev => ({ ...prev, careers: prev.careers.filter(c => c.id !== id) }));
  };

  const addService = async (service) => {
    const { data: newRow, error } = await supabase.from('services').insert([service]).select();
    if (!error && newRow) {
      setData(prev => ({ ...prev, services: [newRow[0], ...prev.services] }));
    }
  };
  const removeService = async (id) => {
    await supabase.from('services').delete().eq('id', id);
    setData(prev => ({ ...prev, services: prev.services.filter(s => s.id !== id) }));
  };

  const uploadImage = async (file) => {
    if (!file) return null;
    const fileName = `${Date.now()}-${file.name.replace(/\s+/g, '-')}`;
    const { data, error } = await supabase.storage.from('qfit-images').upload(fileName, file);
    if (error) {
      console.error("Upload error:", error);
      return null;
    }
    const { data: publicUrlData } = supabase.storage.from('qfit-images').getPublicUrl(fileName);
    return publicUrlData.publicUrl;
  };

  const addBlog = async (blog) => {
    const { data: newRow, error } = await supabase.from('blogs').insert([{ ...blog, date: new Date().toLocaleDateString() }]).select();
    if (!error && newRow) {
      setData(prev => ({ ...prev, blogs: [newRow[0], ...prev.blogs] }));
    }
  };
  const removeBlog = async (id) => {
    await supabase.from('blogs').delete().eq('id', id);
    setData(prev => ({ ...prev, blogs: prev.blogs.filter(b => b.id !== id) }));
  };

  const updateTrainer = async (id, updates) => {
    const { data: updated, error } = await supabase.from('trainers').update(updates).eq('id', id).select();
    if (!error && updated) {
      setData(prev => ({ ...prev, trainers: prev.trainers.map(t => t.id === id ? updated[0] : t) }));
    }
  };

  const updateCareer = async (id, updates) => {
    const { data: updated, error } = await supabase.from('careers').update(updates).eq('id', id).select();
    if (!error && updated) {
      setData(prev => ({ ...prev, careers: prev.careers.map(c => c.id === id ? updated[0] : c) }));
    }
  };

  const updateService = async (id, updates) => {
    const { data: updated, error } = await supabase.from('services').update(updates).eq('id', id).select();
    if (!error && updated) {
      setData(prev => ({ ...prev, services: prev.services.map(s => s.id === id ? updated[0] : s) }));
    }
  };

  const updateBlog = async (id, updates) => {
    const { data: updated, error } = await supabase.from('blogs').update(updates).eq('id', id).select();
    if (!error && updated) {
      setData(prev => ({ ...prev, blogs: prev.blogs.map(b => b.id === id ? updated[0] : b) }));
    }
  };

  return (
    <AdminContext.Provider value={{
      data, loading,
      uploadImage,
      addGalleryImage, removeGalleryImage,
      addTrainer, removeTrainer, updateTrainer,
      addCareer, removeCareer, updateCareer,
      addService, removeService, updateService,
      addBlog, removeBlog, updateBlog
    }}>
      {children}
    </AdminContext.Provider>
  );
};
