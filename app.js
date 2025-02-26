// app.js
const express = require('express');
const userRoutes = require('./routes/userRoutes');
const { PORT } = require('./config');

// Create an Express app
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Use the user routes
app.use('/user', userRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});