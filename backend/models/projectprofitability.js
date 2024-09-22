// models/projectprofitability.js

const projectProfitabilityModel = {
    projectid: '',        // Project identifier
    totalrevenue: 0,      // Total project revenue
    totalcost: 0,         // Total project costs
    profit: 0,            // Revenue - Cost
    profitmargin: 0,      // Profit margin percentage
};

const calculateProfitability = (data) => {
    const profit = data.totalrevenue - data.totalcost;
    return {
        ...projectProfitabilityModel,
        ...data,
        profit: profit,
        profitmargin: (profit / data.totalrevenue) * 100,
    };
};

module.exports = {
    projectProfitabilityModel,
    calculateProfitability,
};
