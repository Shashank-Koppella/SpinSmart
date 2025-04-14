const express = require('express'); // Import Express framework
const cors = require('cors'); // Import CORS to allow cross-origin requests
const bodyParser = require('body-parser'); // Import body-parser to parse incoming request bodies
const userRoutes = require('./routes/user'); // Import user routes
const adminRoutes = require('./routes/admin'); // Import admin routes

const app = express(); // Create an Express application
const PORT = 5000; // Set the port for the server

// Middleware setup
app.use(cors()); // Enable CORS for all routes
app.use(bodyParser.json()); // Parse JSON request bodies

// Routes setup
app.use('/api/user', userRoutes); // User-related routes
app.use('/api/admin', adminRoutes); // Register admin routes

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`); // Log the server URL
});