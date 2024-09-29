import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css'; // Ensure styles are correctly linked
import LogoImage from './Images/your-logo.png'; // Adjust the path and filename

const Navigation = ({ onNavClick, isLoggedIn, onLogout }) => {
  // Handler function for navigation clicks
  const handleNavClick = (message) => {
    if (onNavClick) {
      onNavClick(message); // Call the function if provided
    }
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/" onClick={() => handleNavClick('Welcome to the Home Page')}>
          <img src={LogoImage} alt="Logo" className="logo-image" />
        </Link>
      </div>
      <div className="nav-container">
        <ul className="nav-links">
          <li>
            <Link to="/" onClick={() => handleNavClick('Welcome to the Home Page')}>Home</Link>
          </li>
          <li>
            <Link to="/aboutus" onClick={() => handleNavClick('Welcome to About Us')}>About Us</Link>
          </li>
          <li>
            <Link to="/dashboard" onClick={() => handleNavClick('Welcome to the Dashboard')}>Dashboard</Link>
          </li>
          <li>
            <Link to="/settings" onClick={() => handleNavClick('Welcome to the Settings')}>Settings</Link>
          </li>
        </ul>
      </div>
      <div className="auth-links">
        {isLoggedIn ? (
          <>
            <span className="welcome-message">Welcome, User</span>
            <button onClick={onLogout} className="logout-button">Logout</button>
          </>
        ) : (
          <>
            <Link to="/signin" onClick={() => handleNavClick('Sign In')}>Sign In</Link>
            <Link to="/signup" onClick={() => handleNavClick('Sign Up')}>Sign Up</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
