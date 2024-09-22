const { ProjectProfitability } = require('../models/projectprofitability');

// Get all project profitability data
exports.getAllProjectProfitability = async (req, res) => {
    try {
        const projects = await ProjectProfitability.findAll();
        res.status(200).json(projects);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Add new project profitability data
exports.createProjectProfitability = async (req, res) => {
    try {
        const newProject = await ProjectProfitability.create(req.body);
        res.status(201).json(newProject);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Update project profitability data
exports.updateProjectProfitability = async (req, res) => {
    try {
        const updatedProject = await ProjectProfitability.update(req.body, { where: { id: req.params.id } });
        res.status(200).json(updatedProject);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Delete project profitability data
exports.deleteProjectProfitability = async (req, res) => {
    try {
        await ProjectProfitability.destroy({ where: { id: req.params.id } });
        res.status(204).json();
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
