// db.js
const mongoose = require('mongoose');
require('dotenv').config(); // Load .env variables

// Function to connect to MongoDB
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI); // Connect using env variable
        console.log('✅ MongoDB connected');
    } catch (err) {
        console.error('❌ MongoDB connection error:', err.message);
        process.exit(1); // Stop server if DB fails
    }
};

module.exports = connectDB;
