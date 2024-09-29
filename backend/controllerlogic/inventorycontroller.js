// controllers/inventorycontroller.js

const Inventory = require('../models/inventory');
const { validationResult } = require('express-validator'); // Assuming you're using express-validator

// Get all inventory items for a specific business
const getInventoryForBusiness = async (req, res) => {
    const { businessId } = req.params;
    try {
        const inventoryItems = await Inventory.findAll({ where: { businessId } });
        res.status(200).json({ success: true, data: inventoryItems });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error fetching inventory', error: error.message });
    }
};

// Add a new inventory item
const addInventoryItem = async (req, res) => {
    // Validate input
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ success: false, errors: errors.array() });
    }

    const { name, quantity, price, businessId } = req.body;
    try {
        const newItem = await Inventory.create({ name, quantity, price, businessId });
        res.status(201).json({ success: true, data: newItem });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error adding inventory item', error: error.message });
    }
};

// Update an inventory item
const updateInventoryItem = async (req, res) => {
    const { id } = req.params;
    const updates = req.body;

    try {
        const [updatedRowsCount] = await Inventory.update(updates, { where: { id } });

        if (updatedRowsCount === 0) {
            return res.status(404).json({ success: false, message: 'Inventory item not found' });
        }

        res.status(200).json({ success: true, message: 'Inventory item updated successfully' });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error updating inventory item', error: error.message });
    }
};

// Delete an inventory item
const deleteInventoryItem = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedRowsCount = await Inventory.destroy({ where: { id } });

        if (deletedRowsCount === 0) {
            return res.status(404).json({ success: false, message: 'Inventory item not found' });
        }

        res.status(200).json({ success: true, message: 'Inventory item deleted successfully' });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error deleting inventory item', error: error.message });
    }
};

// Get a specific inventory item by ID
const getInventoryItemById = async (req, res) => {
    const { id } = req.params;
    try {
        const item = await Inventory.findOne({ where: { id } });

        if (!item) {
            return res.status(404).json({ success: false, message: 'Inventory item not found' });
        }

        res.status(200).json({ success: true, data: item });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error fetching inventory item', error: error.message });
    }
};

module.exports = {
    getInventoryForBusiness,
    addInventoryItem,
    updateInventoryItem,
    deleteInventoryItem,
    getInventoryItemById, // Export the new function
};
