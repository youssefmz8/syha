// models/recurringtransaction.js

const { Sequelize, DataTypes } = require('sequelize'); // Import Sequelize and DataTypes
const sequelize = require('../config/database'); // Import the Sequelize instance

// Define the RecurringTransaction model using Sequelize
const RecurringTransaction = sequelize.define('RecurringTransaction', {
    id: {
        type: DataTypes.CHAR(36), // CHAR(36) for UUIDs
        primaryKey: true,
    },
    business_id: {
        type: DataTypes.CHAR(36), // Foreign key referencing businesses
        allowNull: false,
        references: {
            model: 'businesses', // Table name
            key: 'id',
        },
    },
    transaction_type: {
        type: DataTypes.ENUM('expense', 'income'), // Enum for transaction types
        allowNull: false,
    },
    amount: {
        type: DataTypes.DECIMAL(10, 2), // Amount for each occurrence
        allowNull: true,
    },
    frequency: {
        type: DataTypes.ENUM('weekly', 'monthly', 'quarterly', 'annually'), // Enum for frequency
        allowNull: false,
    },
    next_due_date: {
        type: DataTypes.DATE, // Date for the next occurrence
        allowNull: false,
    },
    createdAt: {
        type: DataTypes.DATE, // Automatically managed
        defaultValue: DataTypes.NOW,
    },
    updatedAt: {
        type: DataTypes.DATE, // Automatically managed
        defaultValue: DataTypes.NOW,
        onUpdate: DataTypes.NOW,
    },
}, {
    tableName: 'recurring_transactions', // Specify the table name
    timestamps: true, // Ensure timestamps are used for createdAt and updatedAt
});

// Function to create a new recurring transaction
const createRecurringTransaction = (data) => {
    return {
        id: data.id || '', // ID of the recurring transaction
        business_id: data.business_id || '', // Business ID
        transaction_type: data.transaction_type || '', // Type of transaction
        amount: data.amount || 0, // Amount for each occurrence
        frequency: data.frequency || '', // Frequency of transaction
        next_due_date: data.next_due_date || new Date(), // Next due date
    };
};

// Export the model and utility functions
module.exports = {
    RecurringTransaction,
    createRecurringTransaction,
};
