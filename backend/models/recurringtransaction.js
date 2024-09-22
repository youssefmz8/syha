// models/recurringtransaction.js

const recurringTransactionModel = {
    transactiontype: '',   // 'income', 'expense'
    amount: 0,             // Amount for each occurrence
    frequency: '',         // e.g., 'monthly', 'yearly'
    nextduedate: new Date(),  // Date of the next occurrence
};

const createRecurringTransaction = (data) => {
    return {
        ...recurringTransactionModel,
        ...data,
        nextduedate: data.nextduedate || new Date(),
    };
};

module.exports = {
    recurringTransactionModel,
    createRecurringTransaction,
};
