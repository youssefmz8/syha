// Placeholder for MySQL model
const incomeExpenseModel = {
    // Define your properties
    type: null,          // 'income' or 'expense'
    amount: null,        // Numeric value
    description: null,   // Description string
    date: new Date(),    // Default to current date
};

// You can define functions for your model later when you implement MySQL
const createIncomeExpense = (data) => {
    // This function will handle inserting data into MySQL
    // For now, it just returns the placeholder
    return { ...incomeExpenseModel, ...data };
};

module.exports = {
    incomeExpenseModel,
    createIncomeExpense,
};
