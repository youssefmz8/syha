import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css'; // Ensure your styles are imported here
import BannerImage from './Images/banner.jpg'; // Adjust the path to your banner image

const SignIn = ({ setIsLoggedIn }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate(); // Use navigate to redirect after login

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent default form submission

        // Simulated authentication process
        if (email === 'user@example.com' && password === 'password') {
            setIsLoggedIn(true); // Update the logged-in state
            navigate('/dashboard'); // Redirect to the dashboard
        } else {
            setError('Invalid email or password'); // Set error message
        }
    };

    return (
        <div className="sign-in-container">
            {/* Banner Image */}
            <div className="about-banner">
                <img src={BannerImage} alt="Banner" />
            </div>

            <div className="form-box">
                <h1>Sign In</h1>
                {error && <p className="error-message">{error}</p>}
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Email:</label>
                        <input 
                            type="email" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                            required 
                        />
                    </div>
                    <div>
                        <label>Password:</label>
                        <input 
                            type="password" 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                            required 
                        />
                    </div>
                    <button type="submit">Sign In</button>
                </form>
            </div>

            <footer className="home-footer">
                <p>&copy;2024 SYHA.  All rights reserved.</p>
            </footer>
        </div>
    );
};

export default SignIn;
