const IncomeExpense = require('../models/IncomeExpense');
const Inventory = require('../models/inventory');
const BillPayment = require('../models/billpayment');
const Tax = require('../models/tax');
const User = require('../models/user'); // Make sure to import the User model

// Function to fetch data for the dashboard based on the selected business
const getDashboardData = async (req, res) => {
    const { businessId } = req.params; // Extract business ID from the request

    try {
        // Fetching expense, income, inventory, and tax data for the selected business
        const incomeExpenses = await IncomeExpense.findAll({ where: { businessId } });
        const inventory = await Inventory.findAll({ where: { businessId } });
        const billPayments = await BillPayment.findAll({ where: { businessId } });
        const taxes = await Tax.findAll({ where: { businessId } });

        // Return the fetched data as a JSON response
        return res.status(200).json({
            success: true,
            incomeExpenses,
            inventory,
            billPayments,
            taxes,
        });
    } catch (error) {
        console.error('Error fetching dashboard data:', error.message);
        return res.status(500).json({ success: false, error: 'Failed to load dashboard data' });
    }
};

// Function to update dashboard preferences (customize dashboard)
const updateDashboardPreferences = async (req, res) => {
    const { userId } = req.user; // Extract the user ID from the request (assumed user is authenticated)
    const { selectedWidgets } = req.body; // Array of selected features/widgets the user wants on the dashboard

    // Validate the selectedWidgets input
    if (!Array.isArray(selectedWidgets)) {
        return res.status(400).json({ success: false, message: 'Selected widgets must be an array.' });
    }

    try {
        // You can store/update user's dashboard preferences in the user profile
        const user = await User.findByPk(userId);
        
        if (!user) {
            return res.status(404).json({ success: false, message: 'User not found.' });
        }

        user.dashboardPreferences = selectedWidgets; // Save user's preferred dashboard layout/widgets
        await user.save();

        return res.status(200).json({ success: true, message: 'Dashboard preferences updated successfully!' });
    } catch (error) {
        console.error('Error updating dashboard preferences:', error.message);
        return res.status(500).json({ success: false, error: 'Failed to update dashboard preferences' });
    }
};

module.exports = {
    getDashboardData,
    updateDashboardPreferences,
};
