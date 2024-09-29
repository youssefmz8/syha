// models/user.js

const { Sequelize, DataTypes } = require('sequelize'); // Import Sequelize and DataTypes
const sequelize = require('../config/database'); // Import the Sequelize instance
const { v4: uuidv4 } = require('uuid'); // Import uuid for generating UUIDs

// Define the User model using Sequelize
const User = sequelize.define('User', {
    id: {
        type: DataTypes.CHAR(36), // CHAR(36) for UUIDs
        primaryKey: true,
        defaultValue: uuidv4(), // Generate a UUID by default
    },
    name: {
        type: DataTypes.STRING(255), // VARCHAR(255)
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING(255), // VARCHAR(255)
        allowNull: false,
        unique: true,
    },
    password: {
        type: DataTypes.STRING(255), // VARCHAR(255)
        allowNull: false,
    },
    role: {
        type: DataTypes.ENUM('owner', 'employee'), // ENUM for roles
        allowNull: false,
    },
}, {
    timestamps: true, // Automatically adds createdAt and updatedAt
});

// Export the model and utility functions
module.exports = User;
