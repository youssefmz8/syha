const { IncomeExpense } = require('../models/IncomeExpense');

// Get all income & expenses
exports.getAllIncomeExpenses = async (req, res) => {
    try {
        const records = await IncomeExpense.findAll();
        res.status(200).json(records);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Add new income or expense
exports.createIncomeExpense = async (req, res) => {
    try {
        const newRecord = await IncomeExpense.create(req.body);
        res.status(201).json(newRecord);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Update income or expense
exports.updateIncomeExpense = async (req, res) => {
    try {
        const updatedRecord = await IncomeExpense.update(req.body, { where: { id: req.params.id } });
        res.status(200).json(updatedRecord);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Delete income or expense
exports.deleteIncomeExpense = async (req, res) => {
    try {
        await IncomeExpense.destroy({ where: { id: req.params.id } });
        res.status(204).json();
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
