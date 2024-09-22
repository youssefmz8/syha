// middleware/userMiddleware.js

const User = require('../models/user'); // Import the user model
const users = []; // Placeholder for user data

// Middleware to validate user registration data
const validateSignUp = (req, res, next) => {
    const { username, password, businessName } = req.body;
    
    if (!username || !password || !businessName) {
        return res.status(400).json({ message: 'All fields are required.' });
    }

    // Check if the user already exists (use placeholder logic)
    const existingUser = users.find(user => user.username === username);
    if (existingUser) {
        return res.status(400).json({ message: 'User already exists.' });
    }

    next(); // Proceed to the next middleware or route handler
};

// Middleware to validate user login data
const validateLogin = (req, res, next) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ message: 'Username and password are required.' });
    }

    next(); // Proceed to the next middleware or route handler
};

// Middleware to check if user exists (using the model)
const checkUserExists = async (req, res, next) => {
    const { username } = req.body;
    const user = await User.findByUsername(username); // Placeholder function to fetch user

    if (!user) {
        return res.status(404).json({ message: 'User not found.' });
    }

    req.user = user; // Attach user to request object for later use
    next(); // Proceed to the next middleware or route handler
};

// Middleware to check if the user is authenticated
const authenticateUser = (req, res, next) => {
    const token = req.headers['authorization'];

    if (!token) {
        return res.status(401).json({ message: 'Access denied. No token provided.' });
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(400).json({ message: 'Invalid token.' });
        }

        req.user = decoded; // Add decoded token data to request
        next();
    });
};

module.exports = {
    validateSignUp,
    validateLogin,
    checkUserExists,
    authenticateUser,
};
