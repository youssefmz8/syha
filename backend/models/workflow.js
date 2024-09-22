// models/workflow.js

const workflowModel = {
    workflowname: '',      // Name of the workflow
    steps: [],             // List of steps in the workflow
    isactive: true,        // Whether the workflow is currently active
    frequency: '',         // Frequency of automation ('daily', 'weekly', 'monthly', etc.)
};

const createWorkflow = (data) => {
    return {
        ...workflowModel,
        ...data,
    };
};

module.exports = {
    workflowModel,
    createWorkflow,
};
