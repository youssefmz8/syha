const express = require('express');
const cors = require('cors');
const incomeExpenseRoutes = require('./routes/IncomeExpenseRoutes');
const invoiceroutes = require('./routes/invoiceroutes'); // Assuming you have this file created

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

// Use routes
app.use('/api/income-expenses', IncomeExpenseRoutes);
app.use('/api/invoices', invoiceroutes); // Use routes for invoices

// Basic route for testing
app.get('/', (req, res) => {
    res.send('Hello, this is your backend!');
});

// Start server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
