"use client";

import React, { createContext, useState, useContext, useEffect } from 'react';
import { supabase } from '@/supabaseClient';
import { compressImage } from '@/utils/imageHelper';

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

    // Subscribe to realtime bookings
    const bookingsSubscription = supabase.channel('public:bookings')
      .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'bookings' }, payload => {
        setData(prev => ({
          ...prev,
          bookings: [payload.new, ...prev.bookings]
        }));
        
        // Dispatch custom event for the toast notification
        window.dispatchEvent(new CustomEvent('new-booking', { detail: payload.new }));
      })
      .subscribe();

    return () => {
      supabase.removeChannel(bookingsSubscription);
    };
  }, []);

  const uploadImage = async (file) => {
    if (!file) return null;

    // 1. First, attempt uploading to Supabase Storage bucket
    try {
      const fileName = `${Date.now()}-${file.name.replace(/\s+/g, '-')}`;
      const { data, error } = await supabase.storage.from('qfit-images').upload(fileName, file);

      if (!error && data) {
        const { data: publicUrlData } = supabase.storage.from('qfit-images').getPublicUrl(fileName);
        if (publicUrlData?.publicUrl) {
          return publicUrlData.publicUrl;
        }
      }
      console.warn("Supabase Storage upload error, falling back to local image compression:", error?.message || error);
    } catch (storageErr) {
      console.warn("Storage upload exception, falling back to compression:", storageErr);
    }

    // 2. Fallback: compress image to lightweight base64 data URI (~50-90KB)
    try {
      const compressedDataUri = await compressImage(file);
      return compressedDataUri;
    } catch (compressErr) {
      console.error("Image compression failed:", compressErr);
      return null;
    }
  };

  const addGalleryImage = async (galleryData) => {
    const { data: newRow, error } = await supabase.from('gallery').insert([galleryData]).select();
    if (!error && newRow) {
      setData(prev => ({ ...prev, gallery: [newRow[0], ...prev.gallery] }));
      return { success: true, data: newRow[0] };
    }
    return { success: false, error };
  };

  const addGalleryImages = async (galleryDataArray) => {
    const { data: newRows, error } = await supabase.from('gallery').insert(galleryDataArray).select();
    if (!error && newRows) {
      setData(prev => ({ ...prev, gallery: [...newRows, ...prev.gallery] }));
      return { success: true, data: newRows };
    }
    return { success: false, error };
  };

  const removeGalleryImage = async (id) => {
    const { error } = await supabase.from('gallery').delete().eq('id', id);
    if (!error) {
      setData(prev => ({ ...prev, gallery: prev.gallery.filter(g => g.id !== id) }));
      return { success: true };
    }
    return { success: false, error };
  };

  const bulkDeleteGalleryImages = async (ids) => {
    if (!ids || ids.length === 0) return { success: true };
    const { error } = await supabase.from('gallery').delete().in('id', ids);
    if (!error) {
      const idSet = new Set(ids);
      setData(prev => ({ ...prev, gallery: prev.gallery.filter(g => !idSet.has(g.id)) }));
      return { success: true };
    }
    return { success: false, error };
  };

  const updateGalleryImage = async (id, updates) => {
    const { data: updated, error } = await supabase.from('gallery').update(updates).eq('id', id).select();
    if (!error && updated) {
      setData(prev => ({ ...prev, gallery: prev.gallery.map(g => g.id === id ? updated[0] : g) }));
      return { success: true, data: updated[0] };
    }
    return { success: false, error };
  };

  const addTrainer = async (trainer) => {
    const { data: newRow, error } = await supabase.from('trainers').insert([trainer]).select();
    if (!error && newRow) {
      setData(prev => ({ ...prev, trainers: [newRow[0], ...prev.trainers] }));
      return { success: true, data: newRow[0] };
    }
    return { success: false, error };
  };

  const removeTrainer = async (id) => {
    const { error } = await supabase.from('trainers').delete().eq('id', id);
    if (!error) {
      setData(prev => ({ ...prev, trainers: prev.trainers.filter(t => t.id !== id) }));
      return { success: true };
    }
    return { success: false, error };
  };

  const addCareer = async (career) => {
    const { data: newRow, error } = await supabase.from('careers').insert([career]).select();
    if (!error && newRow) {
      setData(prev => ({ ...prev, careers: [newRow[0], ...prev.careers] }));
      return { success: true, data: newRow[0] };
    }
    return { success: false, error };
  };

  const removeCareer = async (id) => {
    const { error } = await supabase.from('careers').delete().eq('id', id);
    if (!error) {
      setData(prev => ({ ...prev, careers: prev.careers.filter(c => c.id !== id) }));
      return { success: true };
    }
    return { success: false, error };
  };

  const addService = async (service) => {
    const { data: newRow, error } = await supabase.from('services').insert([service]).select();
    if (!error && newRow) {
      setData(prev => ({ ...prev, services: [newRow[0], ...prev.services] }));
      return { success: true, data: newRow[0] };
    }
    return { success: false, error };
  };

  const removeService = async (id) => {
    const { error } = await supabase.from('services').delete().eq('id', id);
    if (!error) {
      setData(prev => ({ ...prev, services: prev.services.filter(s => s.id !== id) }));
      return { success: true };
    }
    return { success: false, error };
  };

  const addBlog = async (blog) => {
    const { data: newRow, error } = await supabase.from('blogs').insert([{ ...blog, date: new Date().toLocaleDateString() }]).select();
    if (!error && newRow) {
      setData(prev => ({ ...prev, blogs: [newRow[0], ...prev.blogs] }));
      return { success: true, data: newRow[0] };
    }
    return { success: false, error };
  };

  const removeBlog = async (id) => {
    const { error } = await supabase.from('blogs').delete().eq('id', id);
    if (!error) {
      setData(prev => ({ ...prev, blogs: prev.blogs.filter(b => b.id !== id) }));
      return { success: true };
    }
    return { success: false, error };
  };

  const updateTrainer = async (id, updates) => {
    const { data: updated, error } = await supabase.from('trainers').update(updates).eq('id', id).select();
    if (!error && updated) {
      setData(prev => ({ ...prev, trainers: prev.trainers.map(t => t.id === id ? updated[0] : t) }));
      return { success: true, data: updated[0] };
    }
    return { success: false, error };
  };

  const updateCareer = async (id, updates) => {
    const { data: updated, error } = await supabase.from('careers').update(updates).eq('id', id).select();
    if (!error && updated) {
      setData(prev => ({ ...prev, careers: prev.careers.map(c => c.id === id ? updated[0] : c) }));
      return { success: true, data: updated[0] };
    }
    return { success: false, error };
  };

  const updateService = async (id, updates) => {
    const { data: updated, error } = await supabase.from('services').update(updates).eq('id', id).select();
    if (!error && updated) {
      setData(prev => ({ ...prev, services: prev.services.map(s => s.id === id ? updated[0] : s) }));
      return { success: true, data: updated[0] };
    }
    return { success: false, error };
  };

  const updateBlog = async (id, updates) => {
    const { data: updated, error } = await supabase.from('blogs').update(updates).eq('id', id).select();
    if (!error && updated) {
      setData(prev => ({ ...prev, blogs: prev.blogs.map(b => b.id === id ? updated[0] : b) }));
      return { success: true, data: updated[0] };
    }
    return { success: false, error };
  };

  return (
    <AdminContext.Provider value={{
      data, loading,
      uploadImage,
      addGalleryImage, addGalleryImages, removeGalleryImage, updateGalleryImage, bulkDeleteGalleryImages,
      addTrainer, removeTrainer, updateTrainer,
      addCareer, removeCareer, updateCareer,
      addService, removeService, updateService,
      addBlog, removeBlog, updateBlog
    }}>
      {children}
    </AdminContext.Provider>
  );
};

