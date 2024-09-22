// models/report.js

const reportModel = {
    period: '',          // e.g., 'monthly', 'yearly'
    income: 0,           // Total income for the period
    expenses: 0,         // Total expenses for the period
    profitorloss: 0,     // Income - Expenses
    dategenerated: new Date(), // Report generation date
};

// Function to generate report
const generateReport = (data) => {
    return {
        ...reportModel,
        ...data,
        profitorloss: data.income - data.expenses,
        dategenerated: new Date(),
    };
};

module.exports = {
    reportModel,
    generateReport,
};
