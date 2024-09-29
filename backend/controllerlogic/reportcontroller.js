const { reportModel, createReport } = require('../models/report');
const { IncomeExpense } = require('../models/incomeexpense'); // Import your IncomeExpense model
const { ProjectProfitability } = require('../models/projectprofitability'); // Import your ProjectProfitability model

// Generate customizable report
exports.generateReport = async (req, res) => {
    try {
        const reportData = req.body; // Data for report generation
        const report = createReport(reportData);

        // Logic to filter and generate report data based on filters
        report.data = await fetchReportData(report.filters);

        // Save the generated report to the database
        const savedReport = await reportModel.create({
            business_id: reportData.business_id,
            report_type: reportData.report_type,
            data: report.data,
            generated_at: new Date(),
        });

        res.status(201).json(savedReport);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Function to fetch report data based on filters
const fetchReportData = async (filters) => {
    // Fetch income and expenses from the IncomeExpense model
    const incomeData = await IncomeExpense.findAll({
        where: {
            type: 'income', // Assuming there's a type field in IncomeExpense
            ...filters, // Apply other filters as needed
        },
    });

    const expenseData = await IncomeExpense.findAll({
        where: {
            type: 'expense', // Assuming there's a type field in IncomeExpense
            ...filters, // Apply other filters as needed
        },
    });

    // Calculate total income and total expenses
    const totalIncome = incomeData.reduce((total, income) => total + income.amount, 0); // Assuming there's an amount field
    const totalExpenses = expenseData.reduce((total, expense) => total + expense.amount, 0); // Assuming there's an amount field

    // Calculate profitability
    const profitability = totalIncome - totalExpenses;

    return {
        totalIncome,
        totalExpenses,
        profitability,
    };
};

// Track project profitability
exports.trackProjectProfitability = async (req, res) => {
    try {
        const projectId = req.params.id; // Get project ID from request parameters
        const profitabilityData = await calculateProjectProfitability(projectId);
        res.status(200).json({ projectId, profitability: profitabilityData });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Function to calculate project profitability
const calculateProjectProfitability = async (projectId) => {
    // Assuming you have a way to fetch related income and expenses for the project
    const incomeData = await IncomeExpense.findAll({
        where: {
            projectId, // Assuming there's a projectId field in IncomeExpense
            type: 'income',
        },
    });

    const expenseData = await IncomeExpense.findAll({
        where: {
            projectId, // Assuming there's a projectId field in IncomeExpense
            type: 'expense',
        },
    });

    const totalIncome = incomeData.reduce((total, income) => total + income.amount, 0);
    const totalExpenses = expenseData.reduce((total, expense) => total + expense.amount, 0);

    const profitability = totalIncome - totalExpenses;

    // Optionally save or log the profitability data
    await ProjectProfitability.create({
        projectId,
        profitability,
        calculatedAt: new Date(),
    });

    return profitability;
};
