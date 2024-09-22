// models/progressinvoice.js

const progressInvoiceModel = {
    projectid: '',       // Project associated with the invoice
    amountinvoiced: 0,   // Amount already invoiced
    totalprojectamount: 0, // Total value of the project
    percentagecompleted: 0, // Percentage completed
    remainingamount: 0,  // Remaining to be invoiced
};

const createProgressInvoice = (data) => {
    const remaining = data.totalprojectamount - data.amountinvoiced;
    return {
        ...progressInvoiceModel,
        ...data,
        remainingamount: remaining,
        percentagecompleted: (data.amountinvoiced / data.totalprojectamount) * 100,
    };
};

module.exports = {
    progressInvoiceModel,
    createProgressInvoice,
};
