import React, { useState } from 'react';
import './Booking.css';

const Booking = () => {
  const [emailId, setEmailId] = useState('');
  const [mobileNo, setMobileNo] = useState('');
  const [membershipNo, setMembershipNo] = useState('');
  const [qidNo, setQidNo] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!emailId || !mobileNo) {
      alert('Please enter your Email and Mobile Number to proceed.');
      return;
    }
    // Proceed with booking logic here
    alert('Appointment requested successfully! (Frontend Demo)');
  };

  return (
    <div className="booking-page" style={{ backgroundImage: "url('/hero-cinematic.jpg')" }}>
      <div className="booking-overlay"></div>
      
      <div className="booking-container">
        <div className="booking-header">
          <img src="/logo.png" alt="QFit Gym Logo" className="booking-logo" />
        </div>
        
        <div className="booking-titles">
          <h2>Book your Appointment <span>إحجز موعد</span></h2>
          <p className="booking-subtitle">PLEASE ENTER YOUR CREDENTIALS BELOW <span>يرجى إدخال بياناتك أدناه</span></p>
        </div>

        <form className="booking-form" onSubmit={handleSubmit}>
          
          <div className="form-group">
            <label>
              Email ID (Required) <span>البريد الإلكتروني (مطلوب)</span>
            </label>
            <input 
              type="email" 
              value={emailId}
              onChange={(e) => setEmailId(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>
              Mobile Number (Required) <span>رقم الهاتف المحمول (مطلوب)</span>
            </label>
            <input 
              type="tel" 
              value={mobileNo}
              onChange={(e) => setMobileNo(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>
              Membership Number (Optional) <span>رقم العضوية (إختياري)</span>
            </label>
            <input 
              type="text" 
              value={membershipNo}
              onChange={(e) => setMembershipNo(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>
              QID Number (Optional) <span>رقم البطاقة الشخصية القطرية (إختياري)</span>
            </label>
            <input 
              type="text" 
              value={qidNo}
              onChange={(e) => setQidNo(e.target.value)}
            />
          </div>

          <button type="submit" className="btn-primary submit-btn">
            Proceed / متابعة
          </button>
        </form>

        <div className="booking-footer">
          <p>For Assistance: 3327 9451 / 5035 0222 <span>للمساعدة أو الإستفسار الرجاء التواصل على</span></p>
        </div>
      </div>
    </div>
  );
};

export default Booking;
