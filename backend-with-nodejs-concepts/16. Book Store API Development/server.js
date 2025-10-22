// server.js
const express = require('express');
const connectDB = require('./db');
const bookRoutes = require('./routes/bookRoutes');
require('dotenv').config(); // Load environment variables

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Connect to MongoDB
connectDB();

// API Routes
app.use('/api/books', bookRoutes); // All book routes start with /api/books

// Root route
app.get('/', (req, res) => {
    res.send('📚 Welcome to the Book Store API!');
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
});
