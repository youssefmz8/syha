// models/business.js

const { DataTypes, Sequelize } = require('sequelize'); // Import DataTypes and Sequelize
const sequelize = require('../config/database');

// Define the Business model
const Business = sequelize.define('Business', {
    id: {
        type: DataTypes.CHAR(36), // CHAR(36) for UUIDs
        primaryKey: true,
    },
    owner_id: {
        type: DataTypes.CHAR(36), // CHAR(36) for UUIDs
        allowNull: true,
    },
    business_name: {
        type: DataTypes.STRING(255), // VARCHAR(255)
        allowNull: false,
    },
    industry: {
        type: DataTypes.STRING(255), // VARCHAR(255)
        allowNull: true,
    },
    address: {
        type: DataTypes.TEXT, // TEXT
        allowNull: true,
    },
    tax_settings: {
        type: DataTypes.JSON, // JSON
        allowNull: true,
    },
    createdAt: {
        type: DataTypes.DATE, // Use DataTypes.DATE for timestamps
        allowNull: false,
        defaultValue: DataTypes.NOW, // Automatically set to current timestamp
    },
    updatedAt: {
        type: DataTypes.DATE, // Use DataTypes.DATE for timestamps
        allowNull: false,
        defaultValue: DataTypes.NOW, // Automatically updated on changes
    },
}, {
    tableName: 'businesses', // Specify the table name
    timestamps: true, // Ensure timestamps are used for createdAt and updatedAt
});

// Export the Business model
module.exports = Business;
