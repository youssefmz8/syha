import React from 'react';
import bannerImage from './Images/banner.jpg'; // Update with your image path
import './styles.css';

const SignIn = () => {
  return (
    <div className="signin">
      <img src={bannerImage} alt="Banner" className="home-banner" />
      <h1>Sign In</h1>
      <div className="form-container">
        <form>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Enter your email" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Enter your password" required />
          </div>
          <button type="submit" className="submit-button">Sign In</button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
