const express = require('express');
const cors = require('cors');
const routemanager = require('./routes/routemanager'); // Correct path for the route manager
const errorHandler = require('./middleware/errorhandler'); // Include the error handler

const app = express();

// CORS configuration to allow requests from the React frontend
app.use(cors({ origin: 'http://localhost:3000' }));
app.use(express.json()); // Parse incoming JSON

// Placeholder for MySQL connection
const db = {
    connect: (callback) => {
        console.log('MySQL connected (placeholder)');
        callback(null); // Simulate successful connection
    },
    query: (sql, params, callback) => {
        console.log(`Query executed: ${sql} with params: ${JSON.stringify(params)}`);
        callback(null, []); // Simulate empty results
    }
};

// Connect to MySQL (using placeholder)
db.connect(err => {
    if (err) {
        console.error('MySQL connection error:', err);
    } else {
        console.log('MySQL connected (placeholder)');
    }
});

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

// Start server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
