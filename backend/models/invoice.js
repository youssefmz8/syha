const mongoose = require('mongoose');

const invoiceSchema = new mongoose.Schema({
    customerName: { type: String, required: true },
    items: [
        {
            description: { type: String, required: true },
            amount: { type: Number, required: true },
        },
    ],
    totalAmount: { type: Number, required: true },
    date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Invoice', invoiceSchema);
