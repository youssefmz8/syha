import React, { useState } from 'react';
import './styles.css'; // Assuming your styles are here
import bannerImage from './Images/banner.jpg'; // Banner image

const EmployeeLogin = ({ onLogin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // Demo authentication (you can replace this with real authentication later)
    const handleLogin = (e) => {
        e.preventDefault();

        // Example check for employee credentials (replace with real logic)
        if (email === 'employee@shop.com' && password === 'password123') {
            onLogin(); // Call the login handler when login is successful
        } else {
            alert('Invalid login credentials!');
        }
    };

    return (
        <div className="home-container">
            {/* Banner Image */}
            <div className="banner">
                <img src={bannerImage} alt="Banner" />
            </div>

            <div className="login-container">
                <h2>Employee Login</h2>
                <form onSubmit={handleLogin}>
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <button type="submit">Login</button>
                </form>
            </div>

            {/* Footer */}
            <footer className="home-footer">
                <p>&copy; 2024 SYHA. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default EmployeeLogin;
