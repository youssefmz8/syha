const { Invoice } = require('../models/invoice');

// Get all invoices
exports.getAllInvoices = async (req, res) => {
    try {
        const invoices = await Invoice.findAll();
        res.status(200).json({ success: true, data: invoices });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
};

// Create new invoice
exports.createInvoice = async (req, res) => {
    try {
        const newInvoice = await Invoice.create(req.body);
        res.status(201).json({ success: true, data: newInvoice });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
};

// Update an invoice
exports.updateInvoice = async (req, res) => {
    try {
        const invoiceId = req.params.id;
        const [updatedRows] = await Invoice.update(req.body, { where: { id: invoiceId } });

        if (updatedRows === 0) {
            return res.status(404).json({ success: false, message: 'Invoice not found' });
        }

        const updatedInvoice = await Invoice.findByPk(invoiceId);
        res.status(200).json({ success: true, data: updatedInvoice });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
};

// Delete an invoice
exports.deleteInvoice = async (req, res) => {
    try {
        const deletedRows = await Invoice.destroy({ where: { id: req.params.id } });

        if (deletedRows === 0) {
            return res.status(404).json({ success: false, message: 'Invoice not found' });
        }

        res.status(204).send(); // No content
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
};
