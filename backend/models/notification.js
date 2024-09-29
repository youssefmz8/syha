const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Import the Sequelize instance
const { v4: uuidv4 } = require('uuid'); // Import uuid for generating UUIDs

// Define the Notification model using Sequelize
const Notification = sequelize.define('Notification', {
    id: {
        type: DataTypes.CHAR(36), // CHAR(36) for UUIDs
        primaryKey: true,
        allowNull: false,
    },
    userId: {
        type: DataTypes.CHAR(36), // Foreign key referencing users
        allowNull: false,
    },
    businessId: {
        type: DataTypes.CHAR(36), // Foreign key referencing businesses
        allowNull: false,
    },
    notificationType: {
        type: DataTypes.ENUM('payment_reminder', 'task', 'tax_filing', 'other'), // ENUM for notification types
        allowNull: false,
    },
    message: {
        type: DataTypes.TEXT, // Text field for the notification message
        allowNull: false,
    },
    isRead: {
        type: DataTypes.BOOLEAN, // Boolean to indicate if the notification has been read
        defaultValue: false, // Default value is false (unread)
    },
    status: {
        type: DataTypes.ENUM('unread', 'read'), // ENUM for notification status
        allowNull: false,
        defaultValue: 'unread', // Default status is unread
    },
}, {
    timestamps: true, // Automatically adds createdAt and updatedAt
    hooks: {
        beforeCreate: (notification) => {
            notification.id = uuidv4(); // Generate a UUID before creating the notification
        },
    },
});

// Function to create a new notification
const createNotification = async (data) => {
    try {
        const newNotification = await Notification.create(data);
        return newNotification;
    } catch (error) {
        throw new Error('Error creating notification: ' + error.message);
    }
};

// Export the model and utility functions
module.exports = {
    Notification,
    createNotification,
};
