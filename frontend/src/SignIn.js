// src/SignIn.js
import React, { useState } from 'react';
import bannerImage from './Images/banner.jpg';
import './styles.css';

const SignIn = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Simulate authentication
    if (email === 'test@example.com' && password === 'password') {
      onLogin(); // Call onLogin after successful login
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="signin">
      <img src={bannerImage} alt="Banner" className="home-banner" />
      <h1>Sign In</h1>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          {error && <p className="error-message">{error}</p>}
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input 
              type="email" 
              id="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              required 
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input 
              type="password" 
              id="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required 
            />
          </div>
          <button type="submit" className="submit-button">Sign In</button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
