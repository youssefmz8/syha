// routes/employeeroutes.js

const express = require('express');
const router = express.Router();
const employeeController = require('../controllerlogic/employeecontroller');
const employeeLoginController = require('../controllerlogic/employeelogincontroller'); // Import the login controller
const { authenticateToken } = require('../middleware/authmiddleware'); // Import the authentication middleware

// Middleware for error handling
const errorHandler = (err, req, res, next) => {
    console.error(err.stack);
    res.status(err.status || 500).json({
        success: false,
        message: err.message || 'Internal Server Error',
    });
};

// Route to get all employees
router.get('/', authenticateToken, async (req, res, next) => { // Protect this route
    try {
        const employees = await employeeController.getEmployees();
        res.json(employees);
    } catch (err) {
        next(err);
    }
});

// Route to create a new employee
router.post('/', authenticateToken, async (req, res, next) => { // Protect this route
    try {
        const employee = await employeeController.createEmployee(req.body);
        res.status(201).json(employee);
    } catch (err) {
        next(err);
    }
});

// Route to update an employee
router.put('/:id', authenticateToken, async (req, res, next) => { // Protect this route
    try {
        const updatedEmployee = await employeeController.updateEmployee(req.params.id, req.body);
        if (!updatedEmployee) return res.status(404).send('Employee not found');
        res.json(updatedEmployee);
    } catch (err) {
        next(err);
    }
});

// Route to delete an employee
router.delete('/:id', authenticateToken, async (req, res, next) => { // Protect this route
    try {
        await employeeController.deleteEmployee(req.params.id);
        res.status(204).send(); // No content to send back
    } catch (err) {
        next(err);
    }
});

// Route to calculate payroll for an employee
router.post('/payroll', authenticateToken, async (req, res, next) => { // Protect this route
    try {
        const payroll = await employeeController.calculatePayrollForEmployee(req.body);
        res.json(payroll);
    } catch (err) {
        next(err);
    }
});

// Route for employee login
router.post('/login', async (req, res, next) => {
    try {
        const token = await employeeLoginController.loginEmployee(req.body); // Call the login function
        res.json({ token }); // Return the token to the client
    } catch (err) {
        next(err);
    }
});

// Route for updating inventory
router.put('/inventory', authenticateToken, async (req, res, next) => { // Protect this route
    try {
        const updatedInventory = await employeeLoginController.updateInventory(req.body); // Call the update inventory function
        res.json(updatedInventory); // Return the updated inventory
    } catch (err) {
        next(err);
    }
});

// Error handler middleware
router.use(errorHandler); // Use error handler

module.exports = router;
