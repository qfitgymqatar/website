import React from 'react';
import { useAdmin } from '../context/AdminContext';
import { Briefcase, Send } from 'lucide-react';
import PageBanner from '../components/PageBanner';
import './Careers.css';

const Careers = () => {
  const { data } = useAdmin();

  return (
    <div className="page-container">
      <PageBanner 
        title="Join Our Team" 
        subtitle="Build your career with the most prestigious fitness brand in Qatar." 
        bgImage="/hero-editorial.jpg" 
      />

      <div className="content-wrapper">
        
        <div className="careers-intro text-center" style={{marginBottom: '60px'}}>
          <h2 className="section-title">Current Openings</h2>
          <p style={{color: 'var(--silver-light)', maxWidth: '600px', margin: '0 auto', fontSize: '1.1rem'}}>
            We are always looking for passionate fitness professionals to join our growing family.
          </p>
        </div>

        <div className="jobs-list">
          {data.careers.map((job) => (
            <div key={job.id} className="job-card">
              <div className="job-header">
                <h3>{job.title}</h3>
                <span className="job-type">{job.type}</span>
              </div>
              <p className="job-desc">{job.desc}</p>
              <button className="btn-primary apply-btn">
                Apply Now <Send size={16} />
              </button>
            </div>
          ))}

          {data.careers.length === 0 && (
            <p style={{textAlign: 'center', color: '#aaa', fontSize: '1.2rem', padding: '40px 0'}}>There are currently no job openings. Please check back later.</p>
          )}
        </div>

      </div>
    </div>
  );
};

export default Careers;
