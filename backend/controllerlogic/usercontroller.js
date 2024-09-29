const User = require('../models/user'); // Import user model
const bcrypt = require('bcrypt'); // For password hashing
const jwt = require('jsonwebtoken'); // For JWT token generation
const { v4: uuidv4 } = require('uuid'); // For generating unique IDs

// Function to sign up a new user
const signUp = async (req, res) => {
    const { username, password, businessName } = req.body;

    // Basic validation
    if (!username || !password || !businessName) {
        return res.status(400).json({ message: 'All fields are required.' });
    }

    try {
        // Check if user already exists
        const existingUser = await User.findOne({ where: { username } });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists.' });
        }

        // Hash the password before storing
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user
        const newUser = await User.create({
            id: uuidv4(), // Generate a unique ID
            username,
            password: hashedPassword,
            businessName,
        });

        res.status(201).json({ message: 'User created successfully.', user: newUser });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Function to log in a user
const login = async (req, res) => {
    const { username, password } = req.body;

    // Validate credentials
    try {
        const user = await User.findOne({ where: { username } });
        if (!user) {
            return res.status(401).json({ message: 'Invalid credentials.' });
        }

        // Check the password
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Invalid credentials.' });
        }

        // Generate a JWT token (you can set a secret key in an environment variable)
        const token = jwt.sign({ id: user.id, username: user.username }, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.status(200).json({ message: 'Login successful.', user: { id: user.id, username: user.username, businessName: user.businessName }, token });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    signUp,
    login,
};
