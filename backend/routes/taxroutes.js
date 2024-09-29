// routes/taxroutes.js

const express = require('express');
const router = express.Router();
const taxController = require('../controllerlogic/taxcontroller');

// Middleware for error handling
const errorHandler = (err, req, res, next) => {
    console.error(err.stack);
    res.status(err.status || 500).json({
        success: false,
        message: err.message || 'Internal Server Error',
    });
};

// Route to get all taxes for a user
router.get('/:userId', async (req, res, next) => {
    try {
        const taxes = await taxController.getTaxes(req.params.userId);
        res.json(taxes);
    } catch (err) {
        next(err);
    }
});

// Route to create a new tax entry
router.post('/', async (req, res, next) => {
    try {
        const tax = await taxController.createTax(req.body);
        res.status(201).json(tax);
    } catch (err) {
        next(err);
    }
});

// Route to update a specific tax entry
router.put('/:id', async (req, res, next) => {
    try {
        const updatedTax = await taxController.updateTax(req.params.id, req.body);
        if (!updatedTax) return res.status(404).send('Tax entry not found');
        res.json(updatedTax);
    } catch (err) {
        next(err);
    }
});

// Route to delete a specific tax entry
router.delete('/:id', async (req, res, next) => {
    try {
        const deleted = await taxController.deleteTax(req.params.id);
        if (!deleted) return res.status(404).send('Tax entry not found');
        res.status(204).send(); // No content to send back
    } catch (err) {
        next(err);
    }
});

// Error handler middleware
router.use(errorHandler); // Use error handler

module.exports = router;
