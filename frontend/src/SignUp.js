// src/SignUp.js
import React from 'react';
import bannerImage from './Images/banner.jpg'; // Update with your image path
import './styles.css';

const SignUp = () => {
  return (
    <div className="signup">
      <img src={bannerImage} alt="Banner" className="home-banner" />
      <h1>Sign Up</h1>
      <div className="form-container">
        <form>
          <div className="form-group">
            <label htmlFor="first-name">First Name</label>
            <input type="text" id="first-name" placeholder="Enter your first name" required />
          </div>
          <div className="form-group">
            <label htmlFor="last-name">Last Name</label>
            <input type="text" id="last-name" placeholder="Enter your last name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Enter your email" required />
          </div>
          <div className="form-group">
            <label htmlFor="mobile">Mobile Number</label>
            <input type="tel" id="mobile" placeholder="Enter your mobile number" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="Enter your password" required />
          </div>
          <div className="form-group">
            <label htmlFor="confirm-password">Retype Password</label>
            <input type="password" id="confirm-password" placeholder="Retype your password" required />
          </div>
          <button type="submit" className="submit-button">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
