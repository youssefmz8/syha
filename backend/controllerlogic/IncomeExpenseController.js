const { IncomeExpense } = require('../models/IncomeExpense');
const { validationResult } = require('express-validator'); // Assuming you're using express-validator

// Get all income & expenses for a specific business or user
exports.getAllIncomeExpenses = async (req, res) => {
    try {
        const { businessId } = req.params; // Assuming you're passing businessId in the request params
        const records = await IncomeExpense.findAll({ where: { businessId } });
        res.status(200).json({ success: true, data: records });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
};

// Add new income or expense
exports.createIncomeExpense = async (req, res) => {
    // Validate input
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ success: false, errors: errors.array() });
    }

    try {
        const newRecord = await IncomeExpense.create(req.body);
        res.status(201).json({ success: true, data: newRecord });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
};

// Update income or expense
exports.updateIncomeExpense = async (req, res) => {
    // Validate input
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ success: false, errors: errors.array() });
    }

    try {
        const [updatedRowsCount, updatedRecord] = await IncomeExpense.update(req.body, {
            where: { id: req.params.id },
            returning: true, // Return the updated record
        });
        
        if (updatedRowsCount === 0) {
            return res.status(404).json({ success: false, message: 'Record not found' });
        }
        
        res.status(200).json({ success: true, data: updatedRecord[0] });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
};

// Delete income or expense
exports.deleteIncomeExpense = async (req, res) => {
    try {
        const deletedRowsCount = await IncomeExpense.destroy({ where: { id: req.params.id } });
        
        if (deletedRowsCount === 0) {
            return res.status(404).json({ success: false, message: 'Record not found' });
        }

        res.status(204).json(); // No content response
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
};
