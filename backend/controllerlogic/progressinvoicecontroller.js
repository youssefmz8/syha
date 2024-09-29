const { ProgressInvoice } = require('../models/progressinvoice');

// Get all progress invoices
exports.getProgressInvoices = async (req, res) => {
    try {
        const invoices = await ProgressInvoice.findAll();
        res.status(200).json(invoices);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Create a new progress invoice
exports.createProgressInvoice = async (req, res) => {
    try {
        const newInvoice = await ProgressInvoice.create(req.body);
        res.status(201).json(newInvoice);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Update a specific progress invoice
exports.updateProgressInvoice = async (req, res) => {
    try {
        const [updatedRows] = await ProgressInvoice.update(req.body, { where: { id: req.params.id } });
        
        if (updatedRows === 0) {
            return res.status(404).json({ error: 'Progress invoice not found' });
        }

        const updatedInvoice = await ProgressInvoice.findByPk(req.params.id);
        res.status(200).json(updatedInvoice);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Delete a specific progress invoice
exports.deleteProgressInvoice = async (req, res) => {
    try {
        const deletedRows = await ProgressInvoice.destroy({ where: { id: req.params.id } });
        
        if (deletedRows === 0) {
            return res.status(404).json({ error: 'Progress invoice not found' });
        }

        res.status(204).json(); // No content to send back
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
