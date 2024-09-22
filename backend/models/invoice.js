// Placeholder for MySQL model
const invoiceModel = {
    customerName: '', // String for customer name
    items: [],        // Array of items, each with description and amount
    totalAmount: 0,   // Numeric value for total amount
    date: new Date(), // Default to current date
};

// Function to create an invoice
const createInvoice = (data) => {
    // This function will handle inserting data into MySQL
    // For now, it just returns the placeholder
    return {
        ...invoiceModel,
        ...data,
        date: data.date || new Date(), // Set date to provided or default
    };
};

module.exports = {
    invoiceModel,
    createInvoice,
};
