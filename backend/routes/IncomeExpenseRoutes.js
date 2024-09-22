// routes/incomeexpenseroutes.js

const express = require('express');
const router = express.Router();
const incomeExpenseController = require('../controllerlogic/IncomeExpenseController');

// Middleware for error handling
const errorHandler = (err, req, res, next) => {
    console.error(err.stack);
    res.status(err.status || 500).json({
        success: false,
        message: err.message || 'Internal Server Error',
    });
};

// Route to get all income & expense records
router.get('/', async (req, res, next) => {
    try {
        const incomeExpenses = await incomeExpenseController.getAllIncomeExpenses();
        res.json(incomeExpenses);
    } catch (err) {
        next(err);
    }
});

// Route to create a new income or expense
router.post('/', async (req, res, next) => {
    try {
        const incomeExpense = await incomeExpenseController.createIncomeExpense(req.body);
        res.status(201).json(incomeExpense);
    } catch (err) {
        next(err);
    }
});

// Route to update a specific income or expense
router.put('/:id', async (req, res, next) => {
    try {
        const updatedIncomeExpense = await incomeExpenseController.updateIncomeExpense(req.params.id, req.body);
        if (!updatedIncomeExpense) return res.status(404).send('Income/Expense record not found');
        res.json(updatedIncomeExpense);
    } catch (err) {
        next(err);
    }
});

// Route to delete a specific income or expense
router.delete('/:id', async (req, res, next) => {
    try {
        const deletedIncomeExpense = await incomeExpenseController.deleteIncomeExpense(req.params.id);
        if (!deletedIncomeExpense) return res.status(404).send('Income/Expense record not found');
        res.status(204).send(); // No content to send back
    } catch (err) {
        next(err);
    }
});

// Error handler middleware
router.use(errorHandler); // Use error handler

module.exports = router;
