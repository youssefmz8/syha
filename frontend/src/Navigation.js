// src/Navigation.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = ({ onNavClick }) => {
  return (
    <div className="navbar">
      <div className="logo">Your Logo</div>
      <div className="nav-container">
        <ul className="nav-links">
          <li><Link to="/" onClick={() => onNavClick('Welcome to the Home Page')}>Home</Link></li>
          <li><Link to="/dashboard" onClick={() => onNavClick('Welcome to the Dashboard')}>Dashboard</Link></li>
          <li><Link to="/records" onClick={() => onNavClick('Welcome to the Records')}>Records</Link></li>
          <li><Link to="/transactions" onClick={() => onNavClick('Welcome to the Transactions')}>Transactions</Link></li>
          <li><Link to="/settings" onClick={() => onNavClick('Welcome to the Settings')}>Settings</Link></li>
        </ul>
      </div>
      <div className="auth-links">
        <Link to="/signin" onClick={() => onNavClick('Sign In')}>Sign In</Link>
        <Link to="/signup" onClick={() => onNavClick('Sign Up')}>Sign Up</Link>
      </div>
    </div>
  );
};

export default Navigation;
