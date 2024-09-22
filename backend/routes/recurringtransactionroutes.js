// routes/recurringtransactionroutes.js

const express = require('express');
const router = express.Router();
const recurringTransactionController = require('../controllerlogic/recurringtransactioncontroller');

// Middleware for error handling
const errorHandler = (err, req, res, next) => {
    console.error(err.stack);
    res.status(err.status || 500).json({
        success: false,
        message: err.message || 'Internal Server Error',
    });
};

// Route to get all recurring transactions
router.get('/', async (req, res, next) => {
    try {
        const transactions = await recurringTransactionController.getAllRecurringTransactions();
        res.json(transactions);
    } catch (err) {
        next(err);
    }
});

// Route to create a new recurring transaction
router.post('/', async (req, res, next) => {
    try {
        const transaction = await recurringTransactionController.createRecurringTransaction(req.body);
        res.status(201).json(transaction);
    } catch (err) {
        next(err);
    }
});

// Route to update a recurring transaction
router.put('/:id', async (req, res, next) => {
    try {
        const updatedTransaction = await recurringTransactionController.updateRecurringTransaction(req.params.id, req.body);
        if (!updatedTransaction) return res.status(404).send('Transaction not found');
        res.json(updatedTransaction);
    } catch (err) {
        next(err);
    }
});

// Route to delete a recurring transaction
router.delete('/:id', async (req, res, next) => {
    try {
        const deletedTransaction = await recurringTransactionController.deleteRecurringTransaction(req.params.id);
        if (!deletedTransaction) return res.status(404).send('Transaction not found');
        res.status(204).send(); // No content to send back
    } catch (err) {
        next(err);
    }
});

// Error handler middleware
router.use(errorHandler); // Use error handler

module.exports = router;
