const { ProgressInvoice } = require('../models/progressinvoice');

// Get progress invoices
exports.getProgressInvoices = async (req, res) => {
    try {
        const invoices = await ProgressInvoice.findAll();
        res.status(200).json(invoices);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Create progress invoice
exports.createProgressInvoice = async (req, res) => {
    try {
        const newInvoice = await ProgressInvoice.create(req.body);
        res.status(201).json(newInvoice);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Update progress invoice
exports.updateProgressInvoice = async (req, res) => {
    try {
        const updatedInvoice = await ProgressInvoice.update(req.body, { where: { id: req.params.id } });
        res.status(200).json(updatedInvoice);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Delete progress invoice
exports.deleteProgressInvoice = async (req, res) => {
    try {
        await ProgressInvoice.destroy({ where: { id: req.params.id } });
        res.status(204).json();
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
