// controllerlogic/userController.js

const User = require('../models/user'); // Import user model
const users = []; // Placeholder for user data

// Function to sign up a new user
const signUp = (req, res) => {
    const { username, password, businessName } = req.body;

    // Basic validation
    if (!username || !password || !businessName) {
        return res.status(400).json({ message: 'All fields are required.' });
    }

    // Check if user already exists
    const existingUser = users.find(user => user.username === username);
    if (existingUser) {
        return res.status(400).json({ message: 'User already exists.' });
    }

    // Create a new user (placeholder, no hashing of passwords)
    const newUser = new User(username, password, businessName); // Use User model
    users.push(newUser); // Push to placeholder array

    res.status(201).json({ message: 'User created successfully.', user: newUser });
};

// Function to log in a user
const login = (req, res) => {
    const { username, password } = req.body;

    // Validate credentials
    const user = users.find(user => user.username === username && user.password === password);
    if (!user) {
        return res.status(401).json({ message: 'Invalid credentials.' });
    }

    // Here you can implement token generation and session management
    res.status(200).json({ message: 'Login successful.', user });
};

module.exports = {
    signUp,
    login,
};
