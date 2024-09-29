// middleware/errorHandler.js

const errorHandler = (err, req, res, next) => {
    console.error(err.stack); // Log the error stack trace for debugging

    // Check if the error is a validation error or a specific type of error
    const isValidationError = err.name === 'ValidationError'; // Example for a Sequelize validation error
    const isNotFoundError = err.name === 'NotFoundError'; // Customize this based on your errors

    // Set response status based on the error type
    const statusCode = isValidationError ? 400 : isNotFoundError ? 404 : err.status || 500;

    res.status(statusCode).json({
        success: false,
        message: err.message || 'Internal Server Error',
        ...(isValidationError && { details: err.errors }), // Include validation error details if available
    });
};

module.exports = errorHandler;
