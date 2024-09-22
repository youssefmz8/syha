// models/budget.js

const budgetModel = {
    budgetname: '',        // Name of the budget (e.g., 'marketing', 'development')
    totalbudget: 0,        // Total allocated budget
    spentamount: 0,        // Amount spent so far
    remainingbudget: 0,    // Remaining budget
    percentageused: 0,     // Percentage of budget used
};

const manageBudget = (data) => {
    const remaining = data.totalbudget - data.spentamount;
    return {
        ...budgetModel,
        ...data,
        remainingbudget: remaining,
        percentageused: (data.spentamount / data.totalbudget) * 100,
    };
};

module.exports = {
    budgetModel,
    manageBudget,
};
