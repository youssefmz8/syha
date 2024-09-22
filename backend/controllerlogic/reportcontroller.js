const { Report } = require('../models/report');

// Get reports/insights
exports.getReports = async (req, res) => {
    try {
        const reports = await Report.findAll();
        res.status(200).json(reports);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
