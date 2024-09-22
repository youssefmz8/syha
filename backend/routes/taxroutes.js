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

// Route to get all tax records
router.get('/', async (req, res, next) => {
    try {
        const taxes = await taxController.getAllTaxes();
        res.json(taxes);
    } catch (err) {
        next(err);
    }
});

// Route to create a new tax record
router.post('/', async (req, res, next) => {
    try {
        const tax = await taxController.createTax(req.body);
        res.status(201).json(tax);
    } catch (err) {
        next(err);
    }
});

// Route to update a specific tax record
router.put('/:id', async (req, res, next) => {
    try {
        const updatedTax = await taxController.updateTax(req.params.id, req.body);
        if (!updatedTax) return res.status(404).send('Tax record not found');
        res.json(updatedTax);
    } catch (err) {
        next(err);
    }
});

// Route to delete a tax record
router.delete('/:id', async (req, res, next) => {
    try {
        const deletedTax = await taxController.deleteTax(req.params.id);
        if (!deletedTax) return res.status(404).send('Tax record not found');
        res.status(204).send(); // No content to send back
    } catch (err) {
        next(err);
    }
});

// Error handler middleware
router.use(errorHandler); // Use error handler

module.exports = router;
