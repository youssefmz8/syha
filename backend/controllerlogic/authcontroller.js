// controllerlogic/authcontroller.js

const User = require('../models/user'); // Import user model
const jwt = require('jsonwebtoken');

// Secret key for JWT (use environment variables in production)
const SECRET_KEY = process.env.JWT_SECRET || 'your_secret_key';

// Login function
const login = async (req, res) => {
    const { username, password } = req.body;

    try {
        // Find user in the placeholder data (replace with DB query later)
        const user = await User.findByUsername(username); // Assume this is a method to find the user

        // Check if user exists and password matches (placeholder logic)
        if (!user || user.password !== password) {
            return res.status(401).json({ message: 'Invalid username or password' });
        }

        // Create a token
        const token = jwt.sign({ username: user.username }, SECRET_KEY, { expiresIn: '1h' });

        // Respond with the token
        res.json({ token });
    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Additional functions can be added here (e.g., signUp)

// Export the controller functions
module.exports = {
    login,
    // other exports can go here...
};
