// controllerlogic/notificationcontroller.js

const { Notification } = require('../models/notification'); // Assuming Notification is a Sequelize model

// Create a new notification
exports.addNotification = async (req, res) => {
    try {
        const newNotification = await Notification.create(req.body); // Create notification in the database
        res.status(201).json({ success: true, data: newNotification });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
};

// Get all notifications for a user
exports.getNotifications = async (req, res) => {
    try {
        const userId = req.params.userId; // Get user ID from request parameters
        const userNotifications = await Notification.findAll({ where: { userId } }); // Fetch notifications from database
        res.status(200).json({ success: true, data: userNotifications });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
};

// Mark a notification as read
exports.markAsRead = async (req, res) => {
    try {
        const notificationId = req.params.id; // Get notification ID from request parameters
        const notification = await Notification.findByPk(notificationId);

        if (!notification) {
            return res.status(404).json({ success: false, error: 'Notification not found' });
        }

        notification.isRead = true; // Mark notification as read
        await notification.save(); // Save changes to the database
        res.status(200).json({ success: true, data: notification });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
};
