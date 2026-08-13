import React, { createContext, useState, useContext, useEffect } from 'react';

const AdminContext = createContext();

export const useAdmin = () => useContext(AdminContext);

export const AdminProvider = ({ children }) => {
  const [data, setData] = useState(() => {
    const savedData = localStorage.getItem('qfit_admin_data');
    if (savedData) {
      return JSON.parse(savedData);
    }
    // Default Data Initialization
    return {
      gallery: [
        '/hero-cinematic.jpg',
        '/hero-energetic.jpg',
        '/hero-premium.jpg',
        '/hero-editorial.jpg',
        '/hero-sports.jpg',
        '/hero-architectural.jpg',
      ],
      trainers: [
        { id: 1, name: 'Marcus Johnson', role: 'Head Coach', exp: '10+ Years', qual: 'Certified Strength & Conditioning Specialist', img: '/hero-sports.jpg' },
        { id: 2, name: 'Sarah Miller', role: 'HIIT Specialist', exp: '6 Years', qual: 'ACE Certified Personal Trainer', img: '/hero-energetic.jpg' },
        { id: 3, name: 'David Chen', role: 'Mobility Coach', exp: '8 Years', qual: 'Physical Therapy Asst.', img: '/hero-editorial.jpg' },
      ],
      careers: [
        { id: 1, title: 'Senior Personal Trainer', type: 'Full-Time', desc: 'Looking for an experienced PT to handle our elite clients.' },
        { id: 2, title: 'Gym Receptionist', type: 'Part-Time', desc: 'Front desk operations, welcoming members, and managing check-ins.' },
      ],
      services: [
        { id: 1, title: 'Personal Training', desc: '1-on-1 sessions tailored to your specific goals with certified coaches.', img: '/service-pt.jpg' },
        { id: 2, title: 'Group Classes', desc: 'High energy classes including HIIT, Spin, Yoga, and Pilates.', img: '/service-group.jpg' },
        { id: 3, title: 'Free Weights', desc: 'Extensive free weight area for bodybuilding and strength training.', img: '/service-weights.jpg' },
      ],
      blogs: [
        { id: 1, title: 'The Ultimate Guide to Pre-Workout Nutrition', subtitle: 'Fuel your body right before hitting the gym.', content: 'Eating the right nutrients before you exercise can help you maximize performance and minimize muscle damage...', img: '/service-nutrition.jpg', date: 'Oct 15, 2026' }
      ]
    };
  });

  // Save to LocalStorage whenever data changes
  useEffect(() => {
    localStorage.setItem('qfit_admin_data', JSON.stringify(data));
  }, [data]);

  const addGalleryImage = (url) => setData(prev => ({ ...prev, gallery: [...prev.gallery, url] }));
  const removeGalleryImage = (index) => setData(prev => ({ ...prev, gallery: prev.gallery.filter((_, i) => i !== index) }));

  const addTrainer = (trainer) => setData(prev => ({ ...prev, trainers: [...prev.trainers, { ...trainer, id: Date.now() }] }));
  const removeTrainer = (id) => setData(prev => ({ ...prev, trainers: prev.trainers.filter(t => t.id !== id) }));

  const addCareer = (career) => setData(prev => ({ ...prev, careers: [...prev.careers, { ...career, id: Date.now() }] }));
  const removeCareer = (id) => setData(prev => ({ ...prev, careers: prev.careers.filter(c => c.id !== id) }));

  const addService = (service) => setData(prev => ({ ...prev, services: [...prev.services, { ...service, id: Date.now() }] }));
  const removeService = (id) => setData(prev => ({ ...prev, services: prev.services.filter(s => s.id !== id) }));

  const addBlog = (blog) => setData(prev => ({ ...prev, blogs: [...prev.blogs, { ...blog, id: Date.now(), date: new Date().toLocaleDateString() }] }));
  const removeBlog = (id) => setData(prev => ({ ...prev, blogs: prev.blogs.filter(b => b.id !== id) }));

  return (
    <AdminContext.Provider value={{
      data,
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
