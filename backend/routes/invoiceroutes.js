const express = require('express');
const Invoice = require('../models/invoice');
const router = express.Router();

// Create invoice
router.post('/', async (req, res) => {
    const invoice = new Invoice(req.body);
    await invoice.save();
    res.status(201).send(invoice);
});

// Get all invoices
router.get('/', async (req, res) => {
    const invoices = await Invoice.find();
    res.send(invoices);
});

module.exports = router;
