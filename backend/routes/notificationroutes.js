// routes/notificationroutes.js

const express = require('express');
const router = express.Router();
const notificationController = require('../controllerlogic/notificationcontroller');

// Middleware for error handling
const errorHandler = (err, req, res, next) => {
    console.error(err.stack);
    res.status(err.status || 500).json({
        success: false,
        message: err.message || 'Internal Server Error',
    });
};

// Route to add a new notification
router.post('/', async (req, res, next) => {
    try {
        await notificationController.addNotification(req, res);
    } catch (err) {
        next(err);
    }
});

// Route to get notifications for a user
router.get('/:userId', async (req, res, next) => {
    try {
        await notificationController.getNotifications(req, res);
    } catch (err) {
        next(err);
    }
});

// Route to mark a notification as read
router.put('/read/:id', async (req, res, next) => {
    try {
        await notificationController.markAsRead(req, res);
    } catch (err) {
        next(err);
    }
});

// Error handler middleware
router.use(errorHandler); // Use error handler

module.exports = router;
