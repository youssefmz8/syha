// models/employee.js

const { Sequelize, DataTypes } = require('sequelize'); // Import Sequelize and DataTypes
const sequelize = require('../config/database'); // Import the Sequelize instance

// Define the Employee model using Sequelize
const Employee = sequelize.define('Employee', {
    id: {
        type: DataTypes.CHAR(36), // CHAR(36) for UUIDs
        primaryKey: true,
    },
    business_id: {
        type: DataTypes.CHAR(36), // CHAR(36) for business association
        allowNull: true,
    },
    user_id: {
        type: DataTypes.CHAR(36), // CHAR(36) for user association
        allowNull: true,
    },
    role: {
        type: DataTypes.STRING(255), // VARCHAR(255)
        allowNull: true,
    },
    salary: {
        type: DataTypes.DECIMAL(10, 2), // DECIMAL(10, 2)
        allowNull: true,
    },
    createdAt: {
        type: DataTypes.DATE, // Use DATE instead of TIMESTAMP
        allowNull: false,
        defaultValue: DataTypes.NOW, // Current timestamp by default
    },
    updatedAt: {
        type: DataTypes.DATE, // Use DATE instead of TIMESTAMP
        allowNull: false,
        defaultValue: DataTypes.NOW, // Automatically updated on changes
    },
}, {
    tableName: 'employees', // Specify the table name
    timestamps: true, // Ensure timestamps are used for createdAt and updatedAt
});

// Define the EmployeeTimeTracking model using Sequelize
const EmployeeTimeTracking = sequelize.define('EmployeeTimeTracking', {
    id: {
        type: DataTypes.CHAR(36), // CHAR(36) for UUIDs
        primaryKey: true,
    },
    employee_id: {
        type: DataTypes.CHAR(36), // Foreign key referencing employees
        allowNull: false,
        references: {
            model: Employee,
            key: 'id',
        },
    },
    start_time: {
        type: DataTypes.DATE, // Start time of the tracking
        allowNull: false,
    },
    end_time: {
        type: DataTypes.DATE, // End time of the tracking
        allowNull: false,
    },
    total_hours: {
        type: DataTypes.DECIMAL(10, 2), // Total hours worked
        allowNull: true,
    },
    createdAt: {
        type: DataTypes.DATE, // Automatically managed
        defaultValue: DataTypes.NOW,
    },
    updatedAt: {
        type: DataTypes.DATE, // Automatically managed
        defaultValue: DataTypes.NOW,
        onUpdate: DataTypes.NOW,
    },
}, {
    tableName: 'employee_time_tracking', // Specify the table name
    timestamps: true, // Ensure timestamps are used for createdAt and updatedAt
});

// Function to track employee time
const trackEmployeeTime = (data) => {
    return {
        id: data.id || '', // ID of the employee
        user_id: data.user_id || '', // User ID
        role: data.role || '', // Role
        hourlyRate: data.hourlyRate || 0, // Hourly pay rate
        hoursWorked: data.hoursWorked || 0, // Total hours worked
        date: data.date || new Date(), // Date of work
        payroll: 0, // Calculated payroll amount
    };
};

// Function to calculate payroll based on hours worked
const calculatePayroll = (data) => {
    const payrollAmount = data.hourlyRate * data.hoursWorked;
    return {
        ...data,
        payroll: payrollAmount, // Calculate and set payroll
    };
};

// Export the models and utility functions
module.exports = {
    Employee,
    EmployeeTimeTracking,
    trackEmployeeTime,
    calculatePayroll,
};
