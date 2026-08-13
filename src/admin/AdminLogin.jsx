import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import './AdminLogin.css';

const AdminLogin = ({ onLogin }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Using hardcoded password to ensure no Vercel environment variable conflicts
    const correctPassword = 'Qfit@2026';
    
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
          <div className="form-group password-group">
            <input 
              type={showPassword ? "text" : "password"} 
              placeholder="Enter Password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoFocus
              required
            />
            <button 
              type="button" 
              className="password-toggle-btn"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
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
