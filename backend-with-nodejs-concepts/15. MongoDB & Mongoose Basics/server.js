const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./db');

dotenv.config();

const app = express();

// Middleware
app.use(express.json());

// Connect to MongoDB
connectDB();

// Routes
const bookRoutes = require('./routes/bookRoutes');
app.use('/api/books', bookRoutes);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
