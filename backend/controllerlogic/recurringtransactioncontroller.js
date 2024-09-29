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
        const [updatedRows] = await RecurringTransaction.update(req.body, { where: { id: req.params.id } });

        if (updatedRows === 0) {
            return res.status(404).json({ error: 'Recurring transaction not found' });
        }

        const updatedTransaction = await RecurringTransaction.findByPk(req.params.id);
        res.status(200).json(updatedTransaction);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Delete a recurring transaction
exports.deleteRecurringTransaction = async (req, res) => {
    try {
        const deletedRows = await RecurringTransaction.destroy({ where: { id: req.params.id } });

        if (deletedRows === 0) {
            return res.status(404).json({ error: 'Recurring transaction not found' });
        }

        res.status(204).json(); // No content to send back
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
