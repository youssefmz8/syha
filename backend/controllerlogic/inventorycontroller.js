const { Inventory } = require('../models/inventory');

// Get all inventory items
exports.getAllInventoryItems = async (req, res) => {
    try {
        const items = await Inventory.findAll();
        res.status(200).json(items);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Add new inventory item
exports.createInventoryItem = async (req, res) => {
    try {
        const newItem = await Inventory.create(req.body);
        res.status(201).json(newItem);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Update inventory item
exports.updateInventoryItem = async (req, res) => {
    try {
        const updatedItem = await Inventory.update(req.body, { where: { id: req.params.id } });
        res.status(200).json(updatedItem);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Delete inventory item
exports.deleteInventoryItem = async (req, res) => {
    try {
        await Inventory.destroy({ where: { id: req.params.id } });
        res.status(204).json();
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
