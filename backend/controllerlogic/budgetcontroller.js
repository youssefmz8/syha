const { Budget } = require('../models/budget');

// Get all budgets
exports.getAllBudgets = async (req, res) => {
    try {
        const budgets = await Budget.findAll();
        res.status(200).json(budgets);
    } catch (err) {
        console.error(err); // Log error for debugging
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Create new budget
exports.createBudget = async (req, res) => {
    try {
        // Validate input data
        const { name, amount, category } = req.body; // Adjust based on your Budget model structure
        if (!name || !amount || !category) {
            return res.status(400).json({ error: 'Name, amount, and category are required.' });
        }

        const newBudget = await Budget.create(req.body);
        res.status(201).json(newBudget);
    } catch (err) {
        console.error(err); // Log error for debugging
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Update a budget
exports.updateBudget = async (req, res) => {
    try {
        const updatedCount = await Budget.update(req.body, { where: { id: req.params.id } });

        if (!updatedCount[0]) {
            return res.status(404).json({ error: 'Budget not found' });
        }

        // Retrieve the updated record to return
        const updatedBudget = await Budget.findByPk(req.params.id);
        res.status(200).json({ message: 'Budget updated successfully', budget: updatedBudget });
    } catch (err) {
        console.error(err); // Log error for debugging
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Delete a budget
exports.deleteBudget = async (req, res) => {
    try {
        const deletedCount = await Budget.destroy({ where: { id: req.params.id } });

        if (!deletedCount) {
            return res.status(404).json({ error: 'Budget not found' });
        }

        res.status(204).json(); // No content to send back
    } catch (err) {
        console.error(err); // Log error for debugging
        res.status(500).json({ error: 'Internal server error' });
    }
};
