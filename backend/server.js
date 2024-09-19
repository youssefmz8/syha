const express = require('express');
const cors = require('cors');
const app = express();

// CORS configuration to allow requests from the React frontend
const corsOptions = {
  origin: 'http://localhost:3000', // Allow requests from this React frontend URL
  methods: 'GET,POST,PUT,DELETE', // Specify allowed HTTP methods (optional, default is GET)
  optionsSuccessStatus: 200, // Some legacy browsers choke on 204 status, so use 200
};

// Enable CORS with the specified options
app.use(cors(corsOptions));

// Basic GET route that sends a message to the React frontend
app.get('/', (req, res) => {
  res.send('Hello, this is your backend!'); // The message React will receive
});

// Define the port, use environment variable if available, otherwise default to 5000
const PORT = process.env.PORT || 4000;

// Start the server, listening on the specified port
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on http://localhost:${PORT}`); // Use backticks for template literal
});
