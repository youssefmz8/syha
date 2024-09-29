import React from 'react';
import './styles.css'; // Assuming you have styles defined here
import bannerImage from './Images/banner.jpg'; // Ensure this matches your file name exactly

const Home = () => {
  return (
    <div className="home-container">
      {/* Banner Image */}
      <div className="banner">
        <img src={bannerImage} alt="Banner" />
      </div>

      <header className="home-header">
        <h1>Welcome to Your Accounting Solution</h1>
        <p>Streamline your finances and take control of your business with our comprehensive tools.</p>
        <p>Whether you're managing bills, tracking expenses, or generating insightful reports, we provide all the resources you need to succeed.</p>
        <div className="cta-buttons">
         
        </div>
      </header>

      <section className="testimonials-section">
        <h2>What Our Users Say</h2>
        <blockquote>
          <p>"This application has transformed the way I manage my finances. Highly recommended!"</p>
          <footer>- A Satisfied User</footer>
        </blockquote>
      </section>

      <footer className="home-footer">
        <p>&copy; 2024 SYHA. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
