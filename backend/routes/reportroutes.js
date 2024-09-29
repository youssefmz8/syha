// routes/reportroutes.js

const express = require('express');
const router = express.Router();
const reportController = require('../controllerlogic/reportcontroller');

// Middleware for error handling
const errorHandler = (err, req, res, next) => {
    console.error(err.stack);
    res.status(err.status || 500).json({
        success: false,
        message: err.message || 'Internal Server Error',
    });
};

// Route to generate a customizable report
router.post('/generate', async (req, res, next) => {
    try {
        await reportController.generateReport(req, res);
    } catch (err) {
        next(err);
    }
});

// Route to track project profitability
router.get('/profitability/:id', async (req, res, next) => {
    try {
        await reportController.trackProjectProfitability(req, res);
    } catch (err) {
        next(err);
    }
});

// Error handler middleware
router.use(errorHandler); // Use error handler

module.exports = router;
