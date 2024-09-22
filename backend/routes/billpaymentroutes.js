// routes/billpaymentroutes.js

const express = require('express');
const router = express.Router();
const billPaymentController = require('../controllerlogic/billpaymentcontroller');

// Middleware for error handling
const errorHandler = (err, req, res, next) => {
    console.error(err.stack);
    res.status(err.status || 500).json({
        success: false,
        message: err.message || 'Internal Server Error',
    });
};

// Route to get all bill payments
router.get('/', async (req, res, next) => {
    try {
        const billPayments = await billPaymentController.getAllBillPayments();
        res.json(billPayments);
    } catch (err) {
        next(err); // Pass the error to the error handler
    }
});

// Route to create a new bill payment
router.post('/', async (req, res, next) => {
    try {
        const bill = await billPaymentController.createBill(req.body); // Use async/await for controller
        res.status(201).json(bill);
    } catch (err) {
        next(err);
    }
});

// Route to update a specific bill payment
router.put('/:id', async (req, res, next) => {
    try {
        const updatedBill = await billPaymentController.updateBillPayment(req.params.id, req.body);
        if (!updatedBill) return res.status(404).send('Bill payment not found');
        res.json(updatedBill);
    } catch (err) {
        next(err);
    }
});

// Route to delete a specific bill payment
router.delete('/:id', async (req, res, next) => {
    try {
        const deletedBill = await billPaymentController.deleteBillPayment(req.params.id);
        if (!deletedBill) return res.status(404).send('Bill payment not found');
        res.status(204).send(); // No content to send back
    } catch (err) {
        next(err);
    }
});

// Error handler middleware
router.use(errorHandler); // Use error handler

module.exports = router;
