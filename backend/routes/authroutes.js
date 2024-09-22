// routes/authroutes.js

const express = require('express');
const router = express.Router();
const authController = require('../controllerlogic/authcontroller'); // Ensure this points to the correct controller
const { validateLogin } = require('../middleware/usermiddleware'); // Adjust if necessary
const { authenticateToken } = require('../middleware/authmiddleware'); // Ensure this is correct

// Route for user login
router.post('/login', validateLogin, authController.login); // Use authController for login

// Example protected route
router.get('/protected', authenticateToken, (req, res) => {
    res.json({ message: 'This is a protected route!', user: req.user });
});

// Additional routes can be added here (e.g., signup)

// Export the router
module.exports = router;
