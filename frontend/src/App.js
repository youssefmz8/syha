// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './Home';
import Dashboard from './Dashboard'; // Import the Dashboard component
import Records from './Records'; // Import the Records component
import Transactions from './Transactions'; // Import the Transactions component
import Settings from './Settings'; // Import the Settings component
import SignUp from './SignUp'; // Import the SignUp component
import SignIn from './SignIn'; // Import the SignIn component
import Navigation from './Navigation'; // Ensure Navigation is imported
import './styles.css';

const App = () => {
  const [bannerText, setBannerText] = useState('Welcome to the Home Page');

  const handleNavClick = (text) => {
    setBannerText(text);
  };

  return (
    <Router>
      <Navigation onNavClick={handleNavClick} />
      <div>
        <Routes>
          <Route 
            path="/" 
            element={<Home bannerText={bannerText} />} 
          />
          <Route 
            path="/dashboard" 
            element={<Dashboard bannerText={bannerText} />} 
          />
          <Route 
            path="/records" 
            element={<Records bannerText={bannerText} />} 
          />
          <Route 
            path="/transactions" 
            element={<Transactions bannerText={bannerText} />} 
          />
          <Route 
            path="/settings" 
            element={<Settings bannerText={bannerText} />} 
          />
          <Route 
            path="/signup" 
            element={<SignUp />} // Sign Up page route
          />
          <Route 
            path="/signin" 
            element={<SignIn />} // Sign In page route
          />
          {/* Redirect any other routes to Home */}
          <Route 
            path="*" 
            element={<Navigate to="/" replace />} 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
