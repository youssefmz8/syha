// controllerlogic/authcontroller.js

const { createUser, findUserByUsername, comparePassword, findUserByEmail } = require('../models/auth');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Sign-up function (allows multiple businesses)
const signup = async (req, res) => {
    const { username, password, email, businessName } = req.body;

    try {
        // Check if user already exists
        const existingUser = await findUserByUsername(username);
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // Hash the password before saving
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user
        const newUser = await createUser(username, hashedPassword, email, businessName);
        
        // Return user data without password
        const { password: _, ...userWithoutPassword } = newUser;

        res.status(201).json({ message: 'User created successfully', user: userWithoutPassword });
    } catch (error) {
        res.status(500).json({ message: 'Internal server error', error });
    }
};

// Login function (with placeholder for two-factor auth logic)
const login = async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await findUserByUsername(username);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Compare the provided password with the stored hash
        const isMatch = await comparePassword(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        // Optional: Add logic for two-factor authentication here

        // Generate JWT token
        const token = jwt.sign({ userId: user.id, username: user.username }, process.env.JWT_SECRET); // Use environment variable
        res.status(200).json({ message: 'Login successful', token });
    } catch (error) {
        res.status(500).json({ message: 'Internal server error', error });
    }
};

module.exports = {
    signup,
    login
};
