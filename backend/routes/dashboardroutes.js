// routes/dashboardroutes.js

const express = require('express');
const { getDashboardData, updateDashboardPreferences } = require('../controllerlogic/dashboardcontroller');
const router = express.Router();

// Route to get the dashboard data for the selected business
// Endpoint: GET /api/dashboard/:businessId
router.get('/:businessId', getDashboardData);

// Route to update the dashboard preferences (customize dashboard layout)
// Endpoint: PUT /api/dashboard/preferences
router.put('/preferences', updateDashboardPreferences);

module.exports = router;
