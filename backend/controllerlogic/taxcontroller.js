const { Tax } = require('../models/tax'); // Import your Tax model
const notificationController = require('./notificationcontroller'); // Import the notification controller

// Get all taxes for a user
exports.getTaxes = async (req, res) => {
    const userId = req.params.userId; // Assuming userId is provided as a URL parameter

    try {
        const taxes = await Tax.findAll({ where: { businessId: userId } });
        return res.status(200).json(taxes);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

// Create a new tax entry
exports.createTax = async (req, res) => {
    const taxData = req.body; // Get the tax data from the request body

    try {
        const newTax = await Tax.create(taxData); // Save to database

        // Create a notification for tax filing reminder
        const notificationData = {
            userId: newTax.businessId, // Assuming businessId is equivalent to userId
            message: `Your tax payment of ${newTax.amount} is due on ${newTax.dueDate}.`,
            dueDate: newTax.dueDate,
        };

        await notificationController.createNotification(notificationData); // Trigger the notification
        return res.status(201).json(newTax);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

// Update a tax entry
exports.updateTax = async (req, res) => {
    const { id } = req.params; // Get the tax ID from request parameters
    const data = req.body; // Get the data to update from the request body

    try {
        const [updated] = await Tax.update(data, {
            where: { id },
        });

        if (updated) {
            const updatedTax = await Tax.findByPk(id); // Fetch the updated tax entry
            return res.status(200).json(updatedTax);
        }

        return res.status(404).json({ error: 'Tax entry not found' });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

// Delete a tax entry
exports.deleteTax = async (req, res) => {
    const { id } = req.params; // Get the tax ID from request parameters

    try {
        const deleted = await Tax.destroy({
            where: { id },
        });

        if (deleted) {
            return res.status(204).json(); // No content to return
        }

        return res.status(404).json({ error: 'Tax entry not found' });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};
