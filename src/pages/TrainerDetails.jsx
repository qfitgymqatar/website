import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { supabase } from '../supabaseClient';
import { ChevronLeft, Award } from 'lucide-react';
import './TrainerDetails.css';

const TrainerDetails = () => {
  const { id } = useParams();
  const [trainer, setTrainer] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTrainer = async () => {
      const { data, error } = await supabase.from('trainers').select('*').eq('id', id).single();
      if (!error && data) {
        setTrainer(data);
      }
      setLoading(false);
    };
    fetchTrainer();
  }, [id]);

  if (loading) return <div className="page-container"><div className="content-wrapper text-center" style={{paddingTop: '150px'}}>Loading...</div></div>;
  if (!trainer) return <div className="page-container"><div className="content-wrapper text-center" style={{paddingTop: '150px'}}>Trainer not found.</div></div>;

  const renderList = (text) => {
    if (!text) return null;
    return text.split('\n').filter(item => item.trim() !== '').map((item, index) => (
      <div key={index} className="list-item">
        <span className="list-bullet">›</span> {item}
      </div>
    ));
  };

  return (
    <div className="page-container">
      <div className="content-wrapper trainer-details-wrapper">
        <Link to="/trainers" className="back-link">
          <ChevronLeft size={20} /> Back to Trainers
        </Link>
        
        <div className="trainer-profile-card">
          <div className="trainer-profile-left">
            <div className="trainer-profile-header">
              <div className="trainer-badge"><Award size={30} /></div>
              <div>
                <h1 className="trainer-name">{trainer.name}</h1>
                <h2 className="trainer-role">{trainer.role}</h2>
              </div>
            </div>

            <div className="trainer-profile-content">
              {trainer.qual && (
                <div className="profile-section">
                  <h3>QUALIFICATIONS</h3>
                  <div className="profile-list">
                    {renderList(trainer.qual)}
                  </div>
                </div>
              )}
              
              {trainer.achievements && (
                <div className="profile-section">
                  <h3>ACHIEVEMENTS</h3>
                  <div className="profile-list">
                    {renderList(trainer.achievements)}
                  </div>
                </div>
              )}

              {trainer.specialties && (
                <div className="profile-section">
                  <h3>SPECIALISING IN</h3>
                  <div className="profile-list">
                    {renderList(trainer.specialties)}
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="trainer-profile-right">
            <img src={trainer.img || '/trainer.jpg'} alt={trainer.name} className="trainer-profile-image" onError={(e) => { e.target.src = '/hero-sports.jpg' }} />
            <div className="trainer-profile-image-overlay"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainerDetails;
