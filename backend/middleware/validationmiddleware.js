// middlewares/validationMiddleware.js

const { body, validationResult } = require('express-validator');

const validateInvoice = [
    body('customerName').isString().notEmpty().withMessage('Customer name is required'),
    body('amount').isFloat({ gt: 0 }).withMessage('Amount must be a positive number'),
    body('dueDate').isISO8601().withMessage('Due date must be a valid date'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ success: false, errors: errors.array() });
        }
        next();
    },
];

module.exports = { validateInvoice };
