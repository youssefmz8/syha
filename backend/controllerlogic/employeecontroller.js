const Employee = require('../models/employee'); // Ensure the Employee model is imported
const { calculatePayroll } = require('../models/employee');

// Get all employees
exports.getEmployees = async (req, res) => {
    try {
        const employees = await Employee.findAll();
        res.status(200).json({ success: true, employees });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
};

// Create a new employee
exports.createEmployee = async (req, res) => {
    try {
        const newEmployee = await Employee.create(req.body);
        res.status(201).json({ success: true, employee: newEmployee });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
};

// Update an employee
exports.updateEmployee = async (req, res) => {
    try {
        const updatedCount = await Employee.update(req.body, { where: { id: req.params.id } });

        if (updatedCount[0] === 0) {
            return res.status(404).json({ success: false, message: 'Employee not found.' });
        }

        res.status(200).json({ success: true, message: 'Employee updated successfully.' });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
};

// Delete an employee
exports.deleteEmployee = async (req, res) => {
    try {
        const deletedCount = await Employee.destroy({ where: { id: req.params.id } });

        if (deletedCount === 0) {
            return res.status(404).json({ success: false, message: 'Employee not found.' });
        }

        res.status(204).json(); // No content to send back
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
};

// Calculate payroll for an employee
exports.calculatePayrollForEmployee = (req, res) => {
    try {
        const payrollData = calculatePayroll(req.body);
        res.status(200).json({ success: true, payrollData });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
};
