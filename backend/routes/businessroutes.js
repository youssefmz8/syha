const express = require('express');
const router = express.Router();
const businessController = require('../controllerlogic/businesscontroller');
const { authenticateToken } = require('../middleware/authmiddleware');

// Route to create a new business
router.post('/create', authenticateToken, businessController.createBusiness);

// Route to update a business
router.put('/update/:id', authenticateToken, businessController.updateBusiness);

// Route to delete a business
router.delete('/delete/:id', authenticateToken, businessController.deleteBusiness);

// Route to get all businesses for a user
router.get('/list', authenticateToken, businessController.getBusinesses);

module.exports = router;
