const express = require('express');
const router = express.Router();
const routes = require('./routeManager');

// Automatically load all routes from routeManager.js
Object.entries(routes).forEach(([path, route]) => {
    router.use(path, route);
});

// Catch-all route for handling 404 errors
router.use((req, res) => {
    res.status(404).json({ message: 'Route not found.' });
});

module.exports = router;
