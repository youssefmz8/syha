// controllerlogic/employeelogincontroller.js

const { Employee } = require('../models/employee'); // Assuming you have an Employee model for employee data
const { Inventory } = require('../models/inventory'); // Assuming you have an Inventory model for managing inventory
const { generateToken } = require('../middleware/authmiddleware'); // Import the token generation function
const bcrypt = require('bcrypt'); // Import bcrypt for password hashing

// Employee login function
exports.loginEmployee = async (req, res) => {
    try {
        const { employeeId, password } = req.body; // Get employee credentials from request body
        const employee = await Employee.findOne({ where: { employeeId } }); // Find employee by ID

        // Check if employee exists
        if (!employee) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        // Check if the password matches
        const isPasswordValid = await bcrypt.compare(password, employee.password);
        if (!isPasswordValid) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        // Generate token upon successful login
        const token = generateToken({ id: employee.id, employeeId: employee.employeeId }); // Generate token with employee ID
        res.status(200).json({ message: 'Login successful', token }); // Return the token to the client
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Update inventory function
exports.updateInventory = async (req, res) => {
    try {
        const { itemId, quantity } = req.body; // Get inventory details from request body
        const item = await Inventory.findOne({ where: { id: itemId } }); // Find the item in inventory

        if (!item) return res.status(404).json({ error: 'Item not found' });

        // Update the inventory quantity
        item.quantity += quantity; // Adjust the quantity as per the request
        await item.save(); // Save the updated item

        res.status(200).json({ message: 'Inventory updated successfully', item });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
