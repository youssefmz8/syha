const { BillPayment } = require('../models/billpayment');

// Get bills/payments
exports.getBillsPayments = async (req, res) => {
    try {
        const bills = await BillPayment.findAll();
        res.status(200).json(bills);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Create new bill/payment
exports.createBillPayment = async (req, res) => {
    try {
        const newBill = await BillPayment.create(req.body);
        res.status(201).json(newBill);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Update bill/payment
exports.updateBillPayment = async (req, res) => {
    try {
        const updatedBill = await BillPayment.update(req.body, { where: { id: req.params.id } });
        res.status(200).json(updatedBill);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Delete bill/payment
exports.deleteBillPayment = async (req, res) => {
    try {
        await BillPayment.destroy({ where: { id: req.params.id } });
        res.status(204).json();
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
