// routes/multicurrencyroutes.js

const express = require('express');
const router = express.Router();
const multiCurrencyController = require('../controllerlogic/multicurrencycontroller');

// Middleware for error handling
const errorHandler = (err, req, res, next) => {
    console.error(err.stack);
    res.status(err.status || 500).json({
        success: false,
        message: err.message || 'Internal Server Error',
    });
};

// Route to get all currencies
router.get('/', async (req, res, next) => {
    try {
        const currencies = await multiCurrencyController.getAllCurrencies();
        res.json(currencies);
    } catch (err) {
        next(err);
    }
});

// Route to add a new currency
router.post('/', async (req, res, next) => {
    try {
        const currency = await multiCurrencyController.addCurrency(req.body);
        res.status(201).json(currency);
    } catch (err) {
        next(err);
    }
});

// Route to update a currency
router.put('/:id', async (req, res, next) => {
    try {
        const updatedCurrency = await multiCurrencyController.updateCurrency(req.params.id, req.body);
        if (!updatedCurrency) return res.status(404).send('Currency not found');
        res.json(updatedCurrency);
    } catch (err) {
        next(err);
    }
});

// Route to delete a currency
router.delete('/:id', async (req, res, next) => {
    try {
        const deletedCurrency = await multiCurrencyController.deleteCurrency(req.params.id);
        if (!deletedCurrency) return res.status(404).send('Currency not found');
        res.status(204).send(); // No content to send back
    } catch (err) {
        next(err);
    }
});

// Error handler middleware
router.use(errorHandler); // Use error handler

module.exports = router;
