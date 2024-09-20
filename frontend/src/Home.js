// src/Home.js
import React from 'react';
import Navigation from './Navigation';
import bannerImage from './Images/banner.jpg'; // Import the image
import './styles.css';

const Home = ({ bannerText, onSignIn }) => {
  return (
    <div className="home">
      <Navigation />
      <img 
        src={bannerImage} 
        alt="Home Banner" 
        className="home-banner" 
      />
      <h1>{bannerText}</h1>
      <p>Your go-to solution for all accounting and finance needs.</p>
    
    </div>
  );
};

export default Home;
