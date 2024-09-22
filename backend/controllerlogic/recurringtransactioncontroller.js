const { RecurringTransaction } = require('../models/recurringtransaction');

// Get all recurring transactions
exports.getAllRecurringTransactions = async (req, res) => {
    try {
        const transactions = await RecurringTransaction.findAll();
        res.status(200).json(transactions);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Add a recurring transaction
exports.createRecurringTransaction = async (req, res) => {
    try {
        const newTransaction = await RecurringTransaction.create(req.body);
        res.status(201).json(newTransaction);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Update a recurring transaction
exports.updateRecurringTransaction = async (req, res) => {
    try {
        const updatedTransaction = await RecurringTransaction.update(req.body, { where: { id: req.params.id } });
        res.status(200).json(updatedTransaction);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Delete a recurring transaction
exports.deleteRecurringTransaction = async (req, res) => {
    try {
        await RecurringTransaction.destroy({ where: { id: req.params.id } });
        res.status(204).json();
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
