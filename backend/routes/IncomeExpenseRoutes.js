const express = require('express');
const IncomeExpense = require('../models/IncomeExpense');
const router = express.Router();

// Create income/expense
router.post('/', async (req, res) => {
    const { type, amount, description } = req.body;
    const incomeExpense = new IncomeExpense({ type, amount, description });
    await incomeExpense.save();
    res.status(201).send(incomeExpense);
});

// Get all income/expenses
router.get('/', async (req, res) => {
    const records = await IncomeExpense.find();
    res.send(records);
});

module.exports = router;
