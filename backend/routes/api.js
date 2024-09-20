// routes/api.js
const express = require('express');
const router = express.Router();
const { incomeData, expenseData } = require('../models'); // Import mock data

// GET all income records
router.get('/income', (req, res) => {
    res.json(incomeData);  // Return all income
});

// POST new income
router.post('/income', (req, res) => {
    const newIncome = { ...req.body, id: incomeData.length + 1 };
    incomeData.push(newIncome);
    res.status(201).json({ message: 'Income added successfully', newIncome });
});

// GET all expense records
router.get('/expenses', (req, res) => {
    res.json(expenseData);  // Return all expenses
});

// POST new expense
router.post('/expenses', (req, res) => {
    const newExpense = { ...req.body, id: expenseData.length + 1 };
    expenseData.push(newExpense);
    res.status(201).json({ message: 'Expense added successfully', newExpense });
});

module.exports = router;
