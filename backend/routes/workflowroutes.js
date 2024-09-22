// routes/workflowroutes.js

const express = require('express');
const router = express.Router();
const workflowController = require('../controllerlogic/workflowcontroller');

// Middleware for error handling
const errorHandler = (err, req, res, next) => {
    console.error(err.stack);
    res.status(err.status || 500).json({
        success: false,
        message: err.message || 'Internal Server Error',
    });
};

// Route to get all workflows
router.get('/', async (req, res, next) => {
    try {
        const workflows = await workflowController.getAllWorkflows();
        res.json(workflows);
    } catch (err) {
        next(err);
    }
});

// Route to create a new workflow
router.post('/', async (req, res, next) => {
    try {
        const workflow = await workflowController.createWorkflow(req.body);
        res.status(201).json(workflow);
    } catch (err) {
        next(err);
    }
});

// Route to update a workflow
router.put('/:id', async (req, res, next) => {
    try {
        const updatedWorkflow = await workflowController.updateWorkflow(req.params.id, req.body);
        if (!updatedWorkflow) return res.status(404).send('Workflow not found');
        res.json(updatedWorkflow);
    } catch (err) {
        next(err);
    }
});

// Route to delete a workflow
router.delete('/:id', async (req, res, next) => {
    try {
        const deletedWorkflow = await workflowController.deleteWorkflow(req.params.id);
        if (!deletedWorkflow) return res.status(404).send('Workflow not found');
        res.status(204).send(); // No content to send back
    } catch (err) {
        next(err);
    }
});

// Error handler middleware
router.use(errorHandler); // Use error handler

module.exports = router;
