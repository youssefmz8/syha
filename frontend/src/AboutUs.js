import React from 'react';
import './styles.css'; // Assuming your styles are here
import BannerImage from './Images/banner.jpg'; // Adjust the path to your image

const AboutUs = () => {
  return (
    <div className="about-us-container">
      {/* Banner Image */}
      <div className="about-banner">
        <img src={BannerImage} alt="About Us Banner" className="banner-image" />
      </div>

      <section className="about-content">
        <h1>About Us</h1>
        <p>
          Welcome to Your Accounting Solution, where we simplify financial management for businesses of all sizes. 
          Our mission is to provide innovative tools that streamline your accounting processes and empower you to 
          make informed decisions for your business's success.
        </p>

        <h2>Our Vision</h2>
        <p>
          We envision a world where business owners can effortlessly manage their finances, freeing them to focus on 
          what truly matters – growing their business. Our solutions are designed to be user-friendly, efficient, 
          and effective, ensuring you have the resources you need at your fingertips.
        </p>

        <h2>Our Mission</h2>
        <p>
          Our mission is to provide comprehensive financial tools that help businesses manage their accounts, 
          track expenses, and generate insightful reports. We strive to offer exceptional customer support and 
          continuous improvements to our services, ensuring our users receive the best experience possible.
        </p>

        <h2>Why Choose Us?</h2>
        <ul className="about-features">
          <li><strong>User-Friendly Interface:</strong> Designed with you in mind, our platform is easy to navigate.</li>
          <li><strong>Comprehensive Tools:</strong> All the features you need for effective financial management.</li>
          <li><strong>Expert Support:</strong> Our dedicated team is here to assist you whenever you need help.</li>
          <li><strong>Secure and Reliable:</strong> We prioritize your data security with industry-standard protections.</li>
        </ul>

        <h2>Join Us Today!</h2>
        <p>
          Experience the future of accounting with Your Accounting Solution. 
          Sign up today and discover how we can help you take control of your finances!
        </p>
      </section>

      <footer className="home-footer">
        <p>&copy; 2024 SYHA. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default AboutUs;
