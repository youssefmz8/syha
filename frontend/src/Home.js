// src/Home.js
import React from 'react';
import Navigation from './Navigation';
import bannerImage from './Images/banner.jpg'; // Import the banner image
import additionalImage from './Images/Accounting.jpg'; // Import the additional image
import boardImage from './Images/board.jpg'; // Import the new image
import './styles.css';

const Home = ({ bannerText, onSignIn }) => {
  return (
    <div className="home">
      <Navigation />
      <div className="home-banner-container">
        <img 
          src={bannerImage} 
          alt="A professional background for the home page" 
          className="home-banner" 
        />
        <div className="banner-text">
          <p>Your go-to solution for all accounting and finance needs.</p>
        </div>
      </div>
      {/* Additional Images After Banner Text */}
      <div className="additional-image-container">
        <img 
          src={additionalImage} 
          alt="Accounting tools and resources" 
          className="additional-image" 
        />
        <img 
          src={boardImage} 
          alt="A whiteboard with financial notes" 
          className="additional-image" 
        />
      </div>
      
      <div className="home-content">
        <h2>Welcome to Pro Accounting Solutions</h2>
        <p>
          Streamline your accounting and finance tasks with our powerful, user-friendly platform.
          Whether you’re managing transactions, generating reports, or analyzing data, our tools are
          designed to help you stay organized and in control. Elevate your business operations with
          real-time financial insights, ensuring your decisions are always data-driven and effective.
        </p>
        <p>
          Start your journey to smarter accounting and seamless financial management. Explore our
          comprehensive features today.
        </p>
        <button className="cta-button" onClick={onSignIn}>Get Started</button>
      </div>
      <footer className="footer">
        <p>&copy; 2024 SYHA. All rights reserved.</p>
        <p>syha@gmail.com</p>
        <p>Muscat, Oman</p>
      </footer>
    </div>
  );
};

export default Home;
