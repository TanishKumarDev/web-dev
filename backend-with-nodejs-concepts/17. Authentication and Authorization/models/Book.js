// models/Book.js
const mongoose = require('mongoose');

// Define Book schema
const bookSchema = new mongoose.Schema({
    bookId: { type: Number, required: true, unique: true }, // numeric ID
    title: { type: String, required: true },      // Book title
    author: { type: String, required: true },     // Author name
    price: { type: Number, required: true },      // Book price
    publishedAt: { type: Date, default: Date.now }, // Default to current date 
});

// Create and export Book model
module.exports = mongoose.model('Book', bookSchema);
