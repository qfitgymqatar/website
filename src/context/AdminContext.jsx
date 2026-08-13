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
    blogs: []
  });
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    setLoading(true);
    try {
      const [galleryRes, trainersRes, careersRes, servicesRes, blogsRes] = await Promise.all([
        supabase.from('gallery').select('*').order('created_at', { ascending: false }),
        supabase.from('trainers').select('*').order('created_at', { ascending: false }),
        supabase.from('careers').select('*').order('created_at', { ascending: false }),
        supabase.from('services').select('*').order('created_at', { ascending: false }),
        supabase.from('blogs').select('*').order('created_at', { ascending: false })
      ]);

      setData({
        gallery: galleryRes.data || [],
        trainers: trainersRes.data || [],
        careers: careersRes.data || [],
        services: servicesRes.data || [],
        blogs: blogsRes.data || []
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

  const addGalleryImage = async (url) => {
    const { data: newRow, error } = await supabase.from('gallery').insert([{ url }]).select();
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

  return (
    <AdminContext.Provider value={{
      data, loading,
      addGalleryImage, removeGalleryImage,
      addTrainer, removeTrainer,
      addCareer, removeCareer,
      addService, removeService,
      addBlog, removeBlog
    }}>
      {children}
    </AdminContext.Provider>
  );
};
