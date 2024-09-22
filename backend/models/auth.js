// models/auth.js

const bcrypt = require('bcrypt');
const User = require('./user'); // Adjust the path if necessary

// Function to hash a password
const hashPassword = async (password) => {
    const saltRounds = 10;
    return await bcrypt.hash(password, saltRounds);
};

// Function to compare a password with a hash
const comparePassword = async (password, hashedPassword) => {
    return await bcrypt.compare(password, hashedPassword);
};

// Function to create a new user (this can be used during signup)
const createUser = async (username, password, businessName) => {
    const hashedPassword = await hashPassword(password);
    const newUser = new User({
        username,
        password: hashedPassword,
        businessName,
    });

    // Placeholder for saving the user (replace with your actual DB logic)
    // await newUser.save();

    return newUser; // Return the new user object
};

// Function to find a user by username
const findUserByUsername = async (username) => {
    // Placeholder for database lookup
    // const user = await User.findOne({ username }); // Replace with actual DB logic
    return null; // Change this to return the found user
};

// Export the functions
module.exports = {
    createUser,
    findUserByUsername,
    comparePassword,
};
