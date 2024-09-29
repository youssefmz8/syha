// models/report.js

const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); // Import the Sequelize instance
const Business = require('./business'); // Import the Business model

// Define the Report model using Sequelize
const Report = sequelize.define('Report', {
    id: {
        type: DataTypes.CHAR(36), // CHAR(36) for UUIDs
        primaryKey: true,
    },
    businessId: {
        type: DataTypes.CHAR(36), // Foreign key referencing businesses
        allowNull: false,
        references: {
            model: Business,
            key: 'id',
        },
    },
    reportType: {
        type: DataTypes.ENUM('income_statement', 'balance_sheet'), // ENUM for report types
        allowNull: false,
    },
    data: {
        type: DataTypes.JSON, // JSON field for report data
        allowNull: true,
    },
    generatedAt: {
        type: DataTypes.DATE, // Automatically managed
        defaultValue: DataTypes.NOW,
    },
});

// Function to create a new report
const createReport = async (data) => {
    try {
        const newReport = await Report.create(data);
        return newReport;
    } catch (error) {
        throw new Error('Error creating report: ' + error.message);
    }
};

// Export the model and utility functions
module.exports = {
    Report,
    createReport,
};
