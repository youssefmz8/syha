// models/inventory.js

const { DataTypes } = require('sequelize'); // Import DataTypes
const sequelize = require('../config/database'); // Import the Sequelize instance
const Business = require('./business'); // Import the Business model

// Define the Inventory model using Sequelize
const Inventory = sequelize.define('Inventory', {
    id: {
        type: DataTypes.CHAR(36), // CHAR(36) for UUIDs
        primaryKey: true,
    },
    business_id: {
        type: DataTypes.CHAR(36), // CHAR(36) for business association
        allowNull: true,
        references: {
            model: Business,
            key: 'id',
        },
    },
    item_name: {
        type: DataTypes.STRING(255), // VARCHAR(255)
        allowNull: false,
    },
    item_code: {
        type: DataTypes.STRING(255), // VARCHAR(255)
        allowNull: false,
        unique: true, // Ensure item_code is unique
    },
    quantity: {
        type: DataTypes.INTEGER, // INT
        allowNull: true,
        defaultValue: 0, // Default quantity is 0
    },
    cost: {
        type: DataTypes.DECIMAL(10, 2), // DECIMAL(10, 2)
        allowNull: true,
    },
    supplier: {
        type: DataTypes.STRING(255), // VARCHAR(255)
        allowNull: true,
    },
    reorder_level: {
        type: DataTypes.INTEGER, // INT
        allowNull: true,
    },
    last_updated: {
        type: DataTypes.DATE, // TIMESTAMP
        allowNull: false,
        defaultValue: DataTypes.NOW, // Current timestamp by default
    },
}, {
    tableName: 'inventory', // Specify the table name
    timestamps: false, // Disable automatic timestamps as we're using last_updated
});

// Association between Inventory and Business
Inventory.belongsTo(Business, { foreignKey: 'business_id' });

module.exports = Inventory;
