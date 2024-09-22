// routes/invoiceroutes.js

const express = require('express');
const router = express.Router();
const invoiceController = require('../controllerlogic/invoicecontroller');

// Middleware for error handling
const errorHandler = (err, req, res, next) => {
    console.error(err.stack);
    res.status(err.status || 500).json({
        success: false,
        message: err.message || 'Internal Server Error',
    });
};

// Route to get all invoices
router.get('/', async (req, res, next) => {
    try {
        const invoices = await invoiceController.getAllInvoices();
        res.json(invoices);
    } catch (err) {
        next(err);
    }
});

// Route to create a new invoice
router.post('/', async (req, res, next) => {
    try {
        const invoice = await invoiceController.createInvoice(req.body);
        res.status(201).json(invoice);
    } catch (err) {
        next(err);
    }
});

// Route to update a specific invoice
router.put('/:id', async (req, res, next) => {
    try {
        const updatedInvoice = await invoiceController.updateInvoice(req.params.id, req.body);
        if (!updatedInvoice) return res.status(404).send('Invoice not found');
        res.json(updatedInvoice);
    } catch (err) {
        next(err);
    }
});

// Route to delete a specific invoice
router.delete('/:id', async (req, res, next) => {
    try {
        const deletedInvoice = await invoiceController.deleteInvoice(req.params.id);
        if (!deletedInvoice) return res.status(404).send('Invoice not found');
        res.status(204).send(); // No content to send back
    } catch (err) {
        next(err);
    }
});

// Error handler middleware
router.use(errorHandler); // Use error handler

module.exports = router;

