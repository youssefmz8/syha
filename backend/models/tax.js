// models/tax.js

const taxModel = {
    transactiontype: '', // String (sale or purchase)
    amount: 0,           // Number (total amount)
    gstrate: 0,          // Number (GST percentage)
    vatrate: 0,          // Number (VAT percentage)
    totaltax: 0,         // Calculated tax
    date: new Date(),    // Transaction date
};

// Function to calculate GST and VAT
const calculateTax = (data) => {
    const totalgst = data.amount * (data.gstrate / 100);
    const totalvat = data.amount * (data.vatrate / 100);
    return {
        ...taxModel,
        ...data,
        totaltax: totalgst + totalvat,
        date: data.date || new Date(),
    };
};

module.exports = {
    taxModel,
    calculateTax,
};
