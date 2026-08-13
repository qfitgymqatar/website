import React from 'react';
import { Link } from 'react-router-dom';
import { useAdmin } from '../context/AdminContext';
import PageBanner from '../components/PageBanner';
import './Blogs.css';

const Blogs = () => {
  const { data } = useAdmin();

  return (
    <div className="page-container">
      <PageBanner 
        title="Fitness Blog" 
        subtitle="Tips, nutrition guides, and workouts from our experts." 
        bgImage="/hero-sports.jpg" 
      />

      <div className="content-wrapper blogs-wrapper">
        <div className="blogs-grid">
          {data.blogs.map((blog) => (
            <div key={blog.id} className="blog-card">
              <div className="blog-img" style={{ backgroundImage: `url(${blog.img || '/hero-energetic.jpg'})` }}>
                <div className="blog-date">{blog.date}</div>
              </div>
              <div className="blog-content">
                <h3>{blog.title}</h3>
                <h4 className="blog-subtitle">{blog.subtitle}</h4>
                <p>{blog.content}</p>
                <Link to={`/blog/${blog.id}`} className="btn-primary" style={{marginTop: '20px', padding: '10px 20px', fontSize: '0.9rem', alignSelf: 'flex-start', textDecoration: 'none'}}>Read More</Link>
              </div>
            </div>
          ))}
        </div>

        {data.blogs.length === 0 && (
          <div style={{textAlign: 'center', color: '#aaa', padding: '50px 0'}}>
            <h2>No blogs published yet.</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default Blogs;
