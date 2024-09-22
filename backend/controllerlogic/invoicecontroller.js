const { Invoice } = require('../models/invoice');

// Get all invoices
exports.getAllInvoices = async (req, res) => {
    try {
        const invoices = await Invoice.findAll();
        res.status(200).json(invoices);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Create new invoice
exports.createInvoice = async (req, res) => {
    try {
        const newInvoice = await Invoice.create(req.body);
        res.status(201).json(newInvoice);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Update an invoice
exports.updateInvoice = async (req, res) => {
    try {
        const updatedInvoice = await Invoice.update(req.body, { where: { id: req.params.id } });
        res.status(200).json(updatedInvoice);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Delete an invoice
exports.deleteInvoice = async (req, res) => {
    try {
        await Invoice.destroy({ where: { id: req.params.id } });
        res.status(204).json();
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
