// routes/projectprofitabilityroutes.js

const express = require('express');
const router = express.Router();
const projectProfitabilityController = require('../controllerlogic/projectprofitabilitycontroller');

// Middleware for error handling
const errorHandler = (err, req, res, next) => {
    console.error(err.stack);
    res.status(err.status || 500).json({
        success: false,
        message: err.message || 'Internal Server Error',
    });
};

// Route to get all project profitability records
router.get('/', async (req, res, next) => {
    try {
        const records = await projectProfitabilityController.getAllProjectProfitability();
        res.json(records);
    } catch (err) {
        next(err);
    }
});

// Route to create a new project profitability record
router.post('/', async (req, res, next) => {
    try {
        const record = await projectProfitabilityController.createProjectProfitability(req.body);
        res.status(201).json(record);
    } catch (err) {
        next(err);
    }
});

// Route to update a project profitability record
router.put('/:id', async (req, res, next) => {
    try {
        const updatedRecord = await projectProfitabilityController.updateProjectProfitability(req.params.id, req.body);
        if (!updatedRecord) return res.status(404).send('Record not found');
        res.json(updatedRecord);
    } catch (err) {
        next(err);
    }
});

// Route to delete a project profitability record
router.delete('/:id', async (req, res, next) => {
    try {
        const deletedRecord = await projectProfitabilityController.deleteProjectProfitability(req.params.id);
        if (!deletedRecord) return res.status(404).send('Record not found');
        res.status(204).send(); // No content to send back
    } catch (err) {
        next(err);
    }
});

// Error handler middleware
router.use(errorHandler); // Use error handler

module.exports = router;
