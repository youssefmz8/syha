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
        const [updatedRows] = await ProjectProfitability.update(req.body, { where: { id: req.params.id } });
        
        if (updatedRows === 0) {
            return res.status(404).json({ error: 'Project profitability data not found' });
        }

        const updatedProject = await ProjectProfitability.findByPk(req.params.id);
        res.status(200).json(updatedProject);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Delete project profitability data
exports.deleteProjectProfitability = async (req, res) => {
    try {
        const deletedRows = await ProjectProfitability.destroy({ where: { id: req.params.id } });
        
        if (deletedRows === 0) {
            return res.status(404).json({ error: 'Project profitability data not found' });
        }

        res.status(204).json(); // No content to send back
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
