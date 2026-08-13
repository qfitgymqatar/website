import React, { useState } from 'react';
import './AdminLogin.css';

const AdminLogin = ({ onLogin }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const correctPassword = import.meta.env.VITE_ADMIN_PASSWORD || 'admin123';
    
    if (password === correctPassword) {
      setError('');
      onLogin();
    } else {
      setError('Incorrect password. Please try again.');
      setPassword('');
    }
  };

  return (
    <div className="admin-login-container">
      <div className="admin-login-card animate-fade-in">
        <div className="admin-login-header">
          <img src="/logo.png" alt="QFit Gym Logo" className="admin-login-logo" />
          <h2>Admin Portal</h2>
          <p>Please enter your master password to continue.</p>
        </div>

        <form onSubmit={handleSubmit} className="admin-login-form">
          <div className="form-group">
            <input 
              type="password" 
              placeholder="Enter Password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoFocus
              required
            />
          </div>
          {error && <div className="admin-login-error">{error}</div>}
          
          <button type="submit" className="btn-primary" style={{ width: '100%', marginTop: '10px' }}>
            Access Portal
          </button>
        </form>
        
        <div className="admin-login-footer">
          <a href="/">← Back to Website</a>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
