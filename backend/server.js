require('dotenv').config(); // Load environment variables from .env file

const express = require('express');
const cors = require('cors');
const routemanager = require('./routes/routemanager'); // Correct path for the route manager
const errorHandler = require('./middleware/errorhandler'); // Include the error handler
const sequelize = require('./config/database'); // Import the Sequelize instance

const app = express();

// CORS configuration to allow requests from the React frontend
app.use(cors({ origin: 'http://localhost:3000' }));
app.use(express.json()); // Parse incoming JSON

// Use routes from routemanager
if (routemanager && Object.keys(routemanager).length) {
    Object.entries(routemanager).forEach(([path, route]) => {
        app.use(`/api${path}`, route); // Add `/api` prefix to all routes
    });
} else {
    console.error("No routes found in the route manager.");
}

// Basic route for testing
app.get('/', (req, res) => {
    res.send('Hello, this is your backend!');
});

// Error handling middleware
app.use(errorHandler); // Use error handler

// Sync the models with the database
const syncDatabase = async () => {
    try {
        await sequelize.sync({ alter: true }); // Sync the models
        console.log('Database synced successfully.');
    } catch (error) {
        console.error('Error syncing database:', error);
    }
};

// Start server
const PORT = process.env.PORT || 4000;
app.listen(PORT, async () => {
    console.log(`Server running on http://localhost:${PORT}`);
    await syncDatabase(); // Sync database when server starts
});

// Graceful shutdown
const shutdown = async () => {
    console.log('Shutting down gracefully...');
    await sequelize.close(); // Close the database connection
    process.exit(0);
};

process.on('SIGINT', shutdown); // Handle Ctrl+C
process.on('SIGTERM', shutdown); // Handle kill commands
