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

// Route to get all reports
router.get('/', async (req, res, next) => {
    try {
        const reports = await reportController.getAllReports();
        res.json(reports);
    } catch (err) {
        next(err);
    }
});

// Route to create a new report
router.post('/', async (req, res, next) => {
    try {
        const report = await reportController.createReport(req.body);
        res.status(201).json(report);
    } catch (err) {
        next(err);
    }
});

// Route to update a specific report
router.put('/:id', async (req, res, next) => {
    try {
        const updatedReport = await reportController.updateReport(req.params.id, req.body);
        if (!updatedReport) return res.status(404).send('Report not found');
        res.json(updatedReport);
    } catch (err) {
        next(err);
    }
});

// Route to delete a report
router.delete('/:id', async (req, res, next) => {
    try {
        const deletedReport = await reportController.deleteReport(req.params.id);
        if (!deletedReport) return res.status(404).send('Report not found');
        res.status(204).send(); // No content to send back
    } catch (err) {
        next(err);
    }
});

// Error handler middleware
router.use(errorHandler); // Use error handler

module.exports = router;
