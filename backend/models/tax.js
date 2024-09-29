// models/tax.js

const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Import the Sequelize instance
const Business = require('./business'); // Import the Business model

// Define the Tax model using Sequelize
const Tax = sequelize.define('Tax', {
    id: {
        type: DataTypes.CHAR(36), // CHAR(36) for UUIDs
        primaryKey: true,
    },
    businessId: {
        type: DataTypes.CHAR(36), // Foreign key referencing businesses
        allowNull: false,
        references: {
            model: Business,
            key: 'id',
        },
    },
    taxType: {
        type: DataTypes.ENUM('VAT', 'GST'), // ENUM for tax types
        allowNull: false,
    },
    amount: {
        type: DataTypes.DECIMAL(10, 2), // Decimal for amounts
        allowNull: true,
    },
    filingDate: {
        type: DataTypes.DATE, // Date for filing date
        allowNull: true,
    },
    dueDate: {
        type: DataTypes.DATE, // Date for due date
        allowNull: true,
    },
    status: {
        type: DataTypes.ENUM('filed', 'pending'), // ENUM for status
        allowNull: false,
    },
    createdAt: {
        type: DataTypes.DATE, // Use DataTypes.DATE for timestamps
        allowNull: false, // It's good practice to require this
        defaultValue: DataTypes.NOW, // Automatically set to current timestamp
    },
    updatedAt: {
        type: DataTypes.DATE, // Use DataTypes.DATE for timestamps
        allowNull: false, // It's good practice to require this
        defaultValue: DataTypes.NOW, // Automatically updated on changes
        onUpdate: DataTypes.NOW,
    },
}, {
    tableName: 'taxes', // Specify the table name
    timestamps: true, // Enable automatic timestamping
});

// Function to create a new tax record
const createTax = async (data) => {
    try {
        const newTax = await Tax.create(data);
        return newTax;
    } catch (error) {
        throw new Error('Error creating tax record: ' + error.message);
    }
};

// Export the model and utility functions
module.exports = {
    Tax,
    createTax,
};
