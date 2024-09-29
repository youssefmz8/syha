// models/billpayment.js

const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

// Define the BillPayment model using Sequelize
const BillPayment = sequelize.define('BillPayment', {
    id: {
        type: DataTypes.CHAR(36), // Use CHAR(36) for UUIDs
        primaryKey: true,
    },
    business_id: {
        type: DataTypes.CHAR(36), // Foreign key to businesses table
        allowNull: false,
    },
    bill_type: {
        type: DataTypes.ENUM('utility', 'supplier', 'rent'), // ENUM for bill types
        allowNull: false, // Ensure bill type is provided
    },
    amount: {
        type: DataTypes.DECIMAL(10, 2), // Amount of the bill
        allowNull: true, // Allow null if not provided
    },
    due_date: {
        type: DataTypes.DATE, // Due date for the bill
        allowNull: true, // Allow null if not provided
    },
    recurring: {
        type: DataTypes.BOOLEAN, // Indicates if the bill is recurring
        defaultValue: false, // Default to false
    },
    description: {
        type: DataTypes.TEXT, // Description of the bill
        allowNull: true, // Allow null if not provided
    },
}, {
    tableName: 'bills', // Specify the table name
    timestamps: true, // Automatically manage createdAt and updatedAt
    createdAt: 'created_at', // Custom field name for createdAt
    updatedAt: 'updated_at', // Custom field name for updatedAt
});

// Function to create a new bill (with Sequelize)
const createBill = async (billData) => {
    try {
        const newBill = await BillPayment.create(billData);
        return newBill;
    } catch (error) {
        throw new Error('Error creating bill: ' + error.message);
    }
};

// Export the model and utility functions
module.exports = {
    BillPayment,
    createBill,
};
