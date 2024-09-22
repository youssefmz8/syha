// models/billpayment.js

const billPaymentModel = {
    billtype: '',     // 'utility', 'subscription', etc.
    amount: 0,        // Total amount of the bill
    duedate: '',      // When the bill is due
    paymentstatus: 'pending', // Status (pending, paid)
};

const createBill = (data) => {
    return {
        ...billPaymentModel,
        ...data,
    };
};

module.exports = {
    billPaymentModel,
    createBill,
};
