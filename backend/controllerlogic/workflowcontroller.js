const { Workflow } = require('../models/workflow');

// Get all workflows
exports.getAllWorkflows = async (req, res) => {
    try {
        const workflows = await Workflow.findAll();
        res.status(200).json(workflows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Create a new workflow
exports.createWorkflow = async (req, res) => {
    try {
        // Validate the request body
        if (!req.body.name || !req.body.description) {
            return res.status(400).json({ message: 'Name and description are required.' });
        }
        
        const newWorkflow = await Workflow.create(req.body);
        res.status(201).json(newWorkflow);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Update a workflow
exports.updateWorkflow = async (req, res) => {
    try {
        const [updated] = await Workflow.update(req.body, { where: { id: req.params.id } });
        
        if (updated) {
            const updatedWorkflow = await Workflow.findOne({ where: { id: req.params.id } });
            res.status(200).json(updatedWorkflow);
        } else {
            res.status(404).json({ message: 'Workflow not found.' });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Delete a workflow
exports.deleteWorkflow = async (req, res) => {
    try {
        const deleted = await Workflow.destroy({ where: { id: req.params.id } });
        
        if (deleted) {
            res.status(204).json();
        } else {
            res.status(404).json({ message: 'Workflow not found.' });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
