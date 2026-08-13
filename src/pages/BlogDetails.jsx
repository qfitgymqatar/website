import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { supabase } from '../supabaseClient';
import { ChevronLeft, Calendar } from 'lucide-react';
import './BlogDetails.css';

const BlogDetails = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlog = async () => {
      const { data, error } = await supabase.from('blogs').select('*').eq('id', id).single();
      if (!error && data) {
        setBlog(data);
      }
      setLoading(false);
    };
    fetchBlog();
  }, [id]);

  if (loading) return <div className="page-container"><div className="content-wrapper text-center" style={{paddingTop: '150px'}}>Loading...</div></div>;
  if (!blog) return <div className="page-container"><div className="content-wrapper text-center" style={{paddingTop: '150px'}}>Blog not found.</div></div>;

  return (
    <div className="page-container">
      <div className="blog-hero" style={{ backgroundImage: `url(${blog.img || '/hero-energetic.jpg'})` }}>
        <div className="blog-hero-overlay"></div>
      </div>
      
      <div className="content-wrapper blog-details-wrapper">
        <Link to="/blogs" className="back-link">
          <ChevronLeft size={20} /> Back to Blogs
        </Link>
        
        <article className="blog-article-content">
          <div className="blog-meta">
            <span className="blog-date-badge">
              <Calendar size={16} style={{marginRight: '8px'}}/> {blog.date}
            </span>
          </div>
          
          <h1 className="blog-main-title">{blog.title}</h1>
          <h2 className="blog-main-subtitle">{blog.subtitle}</h2>
          
          <div className="blog-text-body">
            {blog.content.split('\n').map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </article>
      </div>
    </div>
  );
};

export default BlogDetails;
