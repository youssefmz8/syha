import React from 'react';
import './styles.css';
import bannerImage from './Images/banner.jpg'; // Update the path to your banner image

const Settings = () => {
  const handleLogout = () => {
    // Implement your logout logic here
    console.log("User logged out");
  };

  const handleSaveChanges = () => {
    // Implement your save changes logic here
    console.log("Changes saved");
  };

  return (
    <div className="settings">
      <img src={bannerImage} alt="Banner" className="banner" />
      <h1>Settings</h1>
     
      <div className="settings-container">
        {/* Account Settings */}
        <div className="setting-item">
          <label htmlFor="accountEmail">Account Email:</label>
          <input type="email" id="accountEmail" placeholder="Enter your email" />
        </div>
        <div className="setting-item">
          <label htmlFor="UserName">UserName:</label>
          <input type="text" id="Username" placeholder="Enter your User Name" />
        </div>
        <div className="setting-item">
          <label htmlFor="oldPassword">Old Password:</label>
          <input type="password" id="oldPassword" placeholder="Enter your old password" />
        </div>
        <div className="setting-item">
          <label htmlFor="newPassword">New Password:</label>
          <input type="password" id="newPassword" placeholder="New password" />
        </div>
        
        {/* Save Changes Button */}
        <button className="save-changes-button" onClick={handleSaveChanges}>
          Save Changes
        </button>
        {/* Logout Button */}
        <button className="save-changes-button" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Settings;
