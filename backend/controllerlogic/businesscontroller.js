const Business = require('../models/business');

// Controller to create a new business
const createBusiness = async (req, res) => {
    try {
        const { name, industry, address, taxSettings } = req.body;

        // Input validation
        if (!name || !industry || !address) {
            return res.status(400).json({ success: false, message: 'Name, industry, and address are required.' });
        }

        const newBusiness = await Business.create({
            name, industry, address, taxSettings
        });
        res.status(201).json({ success: true, business: newBusiness });
    } catch (error) {
        console.error(error); // Log error for debugging
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
};

// Controller to update a business
const updateBusiness = async (req, res) => {
    try {
        const businessId = req.params.id;
        const updatedData = req.body;

        // Check if the business exists
        const [updatedCount] = await Business.update(updatedData, { where: { id: businessId } });
        
        if (!updatedCount) {
            return res.status(404).json({ success: false, message: 'Business not found' });
        }

        // Retrieve the updated business to return
        const updatedBusiness = await Business.findByPk(businessId);
        res.status(200).json({ success: true, business: updatedBusiness });
    } catch (error) {
        console.error(error); // Log error for debugging
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
};

// Controller to delete a business
const deleteBusiness = async (req, res) => {
    try {
        const businessId = req.params.id;
        const deletedCount = await Business.destroy({ where: { id: businessId } });

        if (!deletedCount) {
            return res.status(404).json({ success: false, message: 'Business not found' });
        }

        res.status(204).json(); // No content to send back
    } catch (error) {
        console.error(error); // Log error for debugging
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
};

// Controller to get all businesses for a user
const getBusinesses = async (req, res) => {
    try {
        const userId = req.user.id; // Assuming user is attached to req after authentication
        const businesses = await Business.findAll({ where: { userId } });
        res.status(200).json({ success: true, businesses });
    } catch (error) {
        console.error(error); // Log error for debugging
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
};

module.exports = {
    createBusiness,
    updateBusiness,
    deleteBusiness,
    getBusinesses,
};
