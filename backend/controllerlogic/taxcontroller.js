const { GstVat } = require('../models/tax');

// Get GST/VAT details
exports.getGstVat = async (req, res) => {
    try {
        const gstVat = await GstVat.findAll();
        res.status(200).json(gstVat);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Add GST/VAT details
exports.createGstVat = async (req, res) => {
    try {
        const newGstVat = await GstVat.create(req.body);
        res.status(201).json(newGstVat);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Update GST/VAT details
exports.updateGstVat = async (req, res) => {
    try {
        const updatedGstVat = await GstVat.update(req.body, { where: { id: req.params.id } });
        res.status(200).json(updatedGstVat);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Delete GST/VAT details
exports.deleteGstVat = async (req, res) => {
    try {
        await GstVat.destroy({ where: { id: req.params.id } });
        res.status(204).json();
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
