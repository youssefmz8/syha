// models/users.js

const users = []; // Placeholder for user data

// Function to create a new user
const createUser = (userData) => {
    const newUser = {
        id: users.length + 1,
        username: userData.username,
        password: userData.password, // In a real app, make sure to hash passwords!
        businessName: userData.businessName,
    };
    users.push(newUser);
    return newUser;
};

// Function to find a user by username
const findUserByUsername = (username) => {
    return users.find(user => user.username === username);
};

// Function to get all users (for testing purposes)
const getAllUsers = () => {
    return users;
};

module.exports = {
    createUser,
    findUserByUsername,
    getAllUsers,
};
