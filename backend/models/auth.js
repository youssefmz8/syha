const bcrypt = require('bcrypt');
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Use Sequelize setup

// Define the User model
const User = sequelize.define('User', {
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    businessName: {
        type: DataTypes.STRING,
        allowNull: true
    },
    // Optional: add email field for two-factor authentication
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    // Optional: Add fields for two-factor authentication (if required later)
    twoFactorCode: {
        type: DataTypes.STRING,
        allowNull: true
    },
    twoFactorEnabled: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
}, {
    tableName: 'users' // Specify table name in MySQL
});

// Function to hash a password
const hashPassword = async (password) => {
    const saltRounds = 10;
    return await bcrypt.hash(password, saltRounds);
};

// Function to compare a password with a hash
const comparePassword = async (password, hashedPassword) => {
    return await bcrypt.compare(password, hashedPassword);
};

// Function to create a new user
const createUser = async (username, password, email, businessName) => {
    const hashedPassword = await hashPassword(password); // Hash the password before saving
    const newUser = await User.create({
        username,
        password: hashedPassword,
        email,
        businessName
    });
    return newUser; // Return the new user object
};

// Function to find a user by username
const findUserByUsername = async (username) => {
    const user = await User.findOne({ where: { username } });
    return user; // Return the found user
};

// Function to find a user by email (for two-factor authentication)
const findUserByEmail = async (email) => {
    const user = await User.findOne({ where: { email } });
    return user;
};

module.exports = {
    User,
    createUser,
    findUserByUsername,
    findUserByEmail,
    comparePassword
};
