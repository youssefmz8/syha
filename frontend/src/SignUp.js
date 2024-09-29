import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css'; // Ensure your styles are imported here
import BannerImage from './Images/banner.jpg'; // Adjust the path to your banner image

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate(); // Use navigate to redirect after sign-up

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission

        if (password !== confirmPassword) {
            setError('Passwords do not match'); // Set error message
            return;
        }

        // Simulate a successful sign-up
        console.log('User signed up with:', email);
        navigate('/signin'); // Redirect to Sign In page after sign-up
    };

    return (
        <div className="sign-up-container">
            {/* Banner Image */}
            <div className="about-banner">
                <img src={BannerImage} alt="Banner" />
            </div>

            <div className="form-box">
                <h1>Sign Up</h1>
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
                    <div>
                        <label>Confirm Password:</label>
                        <input 
                            type="password" 
                            value={confirmPassword} 
                            onChange={(e) => setConfirmPassword(e.target.value)} 
                            required 
                        />
                    </div>
                    <button type="submit">Sign Up</button>
                </form>
            </div>

            <footer className="home-footer">
                <p>&copy; 2024 SYHA.  All rights reserved.</p>
            </footer>
        </div>
    );
};

export default SignUp;
