// routes/inventoryroutes.js

const express = require('express');
const router = express.Router();
const inventoryController = require('../controllerlogic/inventorycontroller');

// Middleware for error handling
const errorHandler = (err, req, res, next) => {
    console.error(err.stack);
    res.status(err.status || 500).json({
        success: false,
        message: err.message || 'Internal Server Error',
    });
};

// Route to get all inventory records
router.get('/', async (req, res, next) => {
    try {
        const inventoryItems = await inventoryController.getAllInventoryItems();
        res.json(inventoryItems);
    } catch (err) {
        next(err);
    }
});

// Route to create a new inventory item
router.post('/', async (req, res, next) => {
    try {
        const inventoryItem = await inventoryController.createInventoryItem(req.body);
        res.status(201).json(inventoryItem);
    } catch (err) {
        next(err);
    }
});

// Route to update an inventory item
router.put('/:id', async (req, res, next) => {
    try {
        const updatedInventoryItem = await inventoryController.updateInventoryItem(req.params.id, req.body);
        if (!updatedInventoryItem) return res.status(404).send('Inventory item not found');
        res.json(updatedInventoryItem);
    } catch (err) {
        next(err);
    }
});

// Route to delete an inventory item
router.delete('/:id', async (req, res, next) => {
    try {
        const deletedInventoryItem = await inventoryController.deleteInventoryItem(req.params.id);
        if (!deletedInventoryItem) return res.status(404).send('Inventory item not found');
        res.status(204).send(); // No content to send back
    } catch (err) {
        next(err);
    }
});

// Error handler middleware
router.use(errorHandler); // Use error handler

module.exports = router;
