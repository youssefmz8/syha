const { Budget } = require('../models/budget');

// Get all budgets
exports.getAllBudgets = async (req, res) => {
    try {
        const budgets = await Budget.findAll();
        res.status(200).json(budgets);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Create new budget
exports.createBudget = async (req, res) => {
    try {
        const newBudget = await Budget.create(req.body);
        res.status(201).json(newBudget);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Update a budget
exports.updateBudget = async (req, res) => {
    try {
        const updatedBudget = await Budget.update(req.body, { where: { id: req.params.id } });
        res.status(200).json(updatedBudget);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Delete a budget
exports.deleteBudget = async (req, res) => {
    try {
        await Budget.destroy({ where: { id: req.params.id } });
        res.status(204).json();
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
