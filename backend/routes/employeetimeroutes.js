// routes/employeetimeroutes.js

const express = require('express');
const router = express.Router();
const employeeTimeController = require('../controllerlogic/employeetimecontroller');

// Middleware for error handling
const errorHandler = (err, req, res, next) => {
    console.error(err.stack);
    res.status(err.status || 500).json({
        success: false,
        message: err.message || 'Internal Server Error',
    });
};

// Route to get all employee time records
router.get('/', async (req, res, next) => {
    try {
        const employeeTimes = await employeeTimeController.getAllEmployeeTimes();
        res.json(employeeTimes);
    } catch (err) {
        next(err);
    }
});

// Route to create a new employee time record
router.post('/', async (req, res, next) => {
    try {
        const employeeTime = await employeeTimeController.createEmployeeTime(req.body);
        res.status(201).json(employeeTime);
    } catch (err) {
        next(err);
    }
});

// Route to update an employee time record
router.put('/:id', async (req, res, next) => {
    try {
        const updatedEmployeeTime = await employeeTimeController.updateEmployeeTime(req.params.id, req.body);
        if (!updatedEmployeeTime) return res.status(404).send('Employee time record not found');
        res.json(updatedEmployeeTime);
    } catch (err) {
        next(err);
    }
});

// Route to delete an employee time record
router.delete('/:id', async (req, res, next) => {
    try {
        const deletedEmployeeTime = await employeeTimeController.deleteEmployeeTime(req.params.id);
        if (!deletedEmployeeTime) return res.status(404).send('Employee time record not found');
        res.status(204).send(); // No content to send back
    } catch (err) {
        next(err);
    }
});

// Error handler middleware
router.use(errorHandler); // Use error handler

module.exports = router;
