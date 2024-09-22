const { EmployeeTime } = require('../models/employeetime');

// Get employee time logs
exports.getEmployeeTimeLogs = async (req, res) => {
    try {
        const timeLogs = await EmployeeTime.findAll();
        res.status(200).json(timeLogs);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Log employee time
exports.logEmployeeTime = async (req, res) => {
    try {
        const newTimeLog = await EmployeeTime.create(req.body);
        res.status(201).json(newTimeLog);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Update employee time log
exports.updateEmployeeTimeLog = async (req, res) => {
    try {
        const updatedTimeLog = await EmployeeTime.update(req.body, { where: { id: req.params.id } });
        res.status(200).json(updatedTimeLog);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Delete employee time log
exports.deleteEmployeeTimeLog = async (req, res) => {
    try {
        await EmployeeTime.destroy({ where: { id: req.params.id } });
        res.status(204).json();
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
