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

// Create new workflow
exports.createWorkflow = async (req, res) => {
    try {
        const newWorkflow = await Workflow.create(req.body);
        res.status(201).json(newWorkflow);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Update a workflow
exports.updateWorkflow = async (req, res) => {
    try {
        const updatedWorkflow = await Workflow.update(req.body, { where: { id: req.params.id } });
        res.status(200).json(updatedWorkflow);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Delete a workflow
exports.deleteWorkflow = async (req, res) => {
    try {
        await Workflow.destroy({ where: { id: req.params.id } });
        res.status(204).json();
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
