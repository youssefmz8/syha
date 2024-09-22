// routes/progressinvoiceroutes.js

const express = require('express');
const router = express.Router();
const progressInvoiceController = require('../controllerlogic/progressinvoicecontroller');

// Middleware for error handling
const errorHandler = (err, req, res, next) => {
    console.error(err.stack);
    res.status(err.status || 500).json({
        success: false,
        message: err.message || 'Internal Server Error',
    });
};

// Route to get all progress invoices
router.get('/', async (req, res, next) => {
    try {
        const invoices = await progressInvoiceController.getAllProgressInvoices();
        res.json(invoices);
    } catch (err) {
        next(err);
    }
});

// Route to create a new progress invoice
router.post('/', async (req, res, next) => {
    try {
        const invoice = await progressInvoiceController.createProgressInvoice(req.body);
        res.status(201).json(invoice);
    } catch (err) {
        next(err);
    }
});

// Route to update a progress invoice
router.put('/:id', async (req, res, next) => {
    try {
        const updatedInvoice = await progressInvoiceController.updateProgressInvoice(req.params.id, req.body);
        if (!updatedInvoice) return res.status(404).send('Invoice not found');
        res.json(updatedInvoice);
    } catch (err) {
        next(err);
    }
});

// Route to delete a progress invoice
router.delete('/:id', async (req, res, next) => {
    try {
        const deletedInvoice = await progressInvoiceController.deleteProgressInvoice(req.params.id);
        if (!deletedInvoice) return res.status(404).send('Invoice not found');
        res.status(204).send(); // No content to send back
    } catch (err) {
        next(err);
    }
});

// Error handler middleware
router.use(errorHandler); // Use error handler

module.exports = router;
