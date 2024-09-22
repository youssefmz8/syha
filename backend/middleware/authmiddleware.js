// middleware/authmiddleware.js

const jwt = require('jsonwebtoken');
const SECRET_KEY = 'your_secret_key'; // Replace with your actual secret key

// Middleware to authenticate the token
const authenticateToken = (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1]; // Get token from Authorization header

    if (!token) {
        return res.status(401).json({ message: 'Access denied. No token provided.' });
    }

    jwt.verify(token, SECRET_KEY, (err, user) => {
        if (err) {
            return res.status(403).json({ message: 'Invalid token.' });
        }

        req.user = user; // Attach user information to the request object
        next(); // Proceed to the next middleware or route handler
    });
};

// Function to generate a token (you can use this in your login controller)
const generateToken = (user) => {
    return jwt.sign(user, SECRET_KEY, { expiresIn: '1h' }); // Token expires in 1 hour
};

module.exports = {
    authenticateToken,
    generateToken,
};
