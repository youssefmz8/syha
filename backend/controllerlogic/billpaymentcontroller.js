const { BillPayment } = require('../models/billpayment');
const notificationController = require('./notificationController'); // Import your notification controller

// Get bills/payments
exports.getBillsPayments = async (req, res) => {
    try {
        const bills = await BillPayment.findAll();
        res.status(200).json(bills);
    } catch (err) {
        console.error(err); // Log error for debugging
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Create new bill/payment
exports.createBillPayment = async (req, res) => {
    try {
        // Ensure required fields are present
        const { billtype, amount, duedate, paymentstatus, isRecurring, recurrenceFrequency, userId } = req.body;

        // Validate input data
        if (!billtype || !amount || !duedate) {
            return res.status(400).json({ error: 'Bill type, amount, and due date are required.' });
        }

        // Create the new bill payment
        const newBill = await BillPayment.create({
            billtype,
            amount,
            duedate,
            paymentstatus: paymentstatus || 'pending', // Default to 'pending'
            isRecurring: isRecurring || false, // Default to false
            recurrenceFrequency: isRecurring ? recurrenceFrequency : null // Set frequency if recurring
        });

        // Notification data after creating a bill payment
        const notificationData = {
            userId: userId, // Use userId from the request body
            message: `Your bill for ${billtype} is due on ${duedate}.`,
            dueDate: duedate,
        };

        // Create the notification
        await notificationController.createNotification(notificationData);

        res.status(201).json(newBill);
    } catch (err) {
        console.error(err); // Log error for debugging
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Update bill/payment
exports.updateBillPayment = async (req, res) => {
    try {
        const updatedCount = await BillPayment.update(req.body, { where: { id: req.params.id } });

        if (!updatedCount[0]) {
            return res.status(404).json({ error: 'Bill not found' });
        }

        // Retrieve the updated record to return
        const updatedBill = await BillPayment.findByPk(req.params.id);
        res.status(200).json({ message: 'Bill updated successfully', bill: updatedBill });
    } catch (err) {
        console.error(err); // Log error for debugging
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Delete bill/payment
exports.deleteBillPayment = async (req, res) => {
    try {
        const deletedCount = await BillPayment.destroy({ where: { id: req.params.id } });

        if (!deletedCount) {
            return res.status(404).json({ error: 'Bill not found' });
        }

        res.status(204).json(); // No content to send back
    } catch (err) {
        console.error(err); // Log error for debugging
        res.status(500).json({ error: 'Internal server error' });
    }
};
