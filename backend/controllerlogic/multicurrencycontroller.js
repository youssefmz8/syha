const { Currency } = require('../models/multicurrency');

// Get exchange rates
exports.getAllCurrencies = async (req, res) => {
    try {
        const currencies = await Currency.findAll();
        res.status(200).json(currencies);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Add a new exchange rate
exports.createCurrency = async (req, res) => {
    try {
        const newCurrency = await Currency.create(req.body);
        res.status(201).json(newCurrency);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Update an exchange rate
exports.updateCurrency = async (req, res) => {
    try {
        const updatedCurrency = await Currency.update(req.body, { where: { id: req.params.id } });
        res.status(200).json(updatedCurrency);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Delete an exchange rate
exports.deleteCurrency = async (req, res) => {
    try {
        await Currency.destroy({ where: { id: req.params.id } });
        res.status(204).json();
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
