// routes/budgetroutes.js

const express = require('express');
const router = express.Router();
const budgetController = require('../controllerlogic/budgetcontroller');

// Middleware for error handling
const errorHandler = (err, req, res, next) => {
    console.error(err.stack);
    res.status(err.status || 500).json({
        success: false,
        message: err.message || 'Internal Server Error',
    });
};

// Route to get all budgets
router.get('/', async (req, res, next) => {
    try {
        const budgets = await budgetController.getAllBudgets();
        res.json(budgets);
    } catch (err) {
        next(err); // Pass the error to the error handler
    }
});

// Route to create a new budget
router.post('/', async (req, res, next) => {
    try {
        const budget = await budgetController.createBudget(req.body);
        res.status(201).json(budget);
    } catch (err) {
        next(err);
    }
});

// Route to update a specific budget
router.put('/:id', async (req, res, next) => {
    try {
        const updatedBudget = await budgetController.updateBudget(req.params.id, req.body);
        if (!updatedBudget) return res.status(404).send('Budget not found');
        res.json(updatedBudget);
    } catch (err) {
        next(err);
    }
});

// Route to delete a specific budget
router.delete('/:id', async (req, res, next) => {
    try {
        const deletedBudget = await budgetController.deleteBudget(req.params.id);
        if (!deletedBudget) return res.status(404).send('Budget not found');
        res.status(204).send(); // No content to send back
    } catch (err) {
        next(err);
    }
});

// Error handler middleware
router.use(errorHandler); // Use error handler

module.exports = router;
