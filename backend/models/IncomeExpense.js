// models/incomeexpense.js

const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

// Define the Income model using Sequelize
const Income = sequelize.define('Income', {
    id: {
        type: DataTypes.CHAR(36),
        primaryKey: true,
    },
    business_id: {
        type: DataTypes.CHAR(36),
        allowNull: false,
    },
    income_type: {
        type: DataTypes.ENUM('sales', 'services'),
        allowNull: false,
    },
    amount: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: true,
    },
    date: {
        type: DataTypes.DATE,
        allowNull: true,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
}, {
    tableName: 'income', // Specify the table name
    timestamps: true, // Automatically manage createdAt and updatedAt
    createdAt: 'created_at', // Custom field name for createdAt
    updatedAt: 'updated_at', // Custom field name for updatedAt
});

// Define the Expense model using Sequelize
const Expense = sequelize.define('Expense', {
    id: {
        type: DataTypes.CHAR(36),
        primaryKey: true,
    },
    business_id: {
        type: DataTypes.CHAR(36),
        allowNull: false,
    },
    expense_type: {
        type: DataTypes.ENUM('rent', 'salaries', 'bills', 'suppliers'),
        allowNull: false,
    },
    amount: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: true,
    },
    date: {
        type: DataTypes.DATE,
        allowNull: true,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
}, {
    tableName: 'expenses', // Specify the table name
    timestamps: true, // Automatically manage createdAt and updatedAt
    createdAt: 'created_at', // Custom field name for createdAt
    updatedAt: 'updated_at', // Custom field name for updatedAt
});

// Export both models
module.exports = {
    Income,
    Expense,
};
