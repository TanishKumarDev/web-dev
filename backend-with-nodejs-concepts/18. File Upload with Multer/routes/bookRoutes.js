// routes/bookRoutes.js
const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');

const Book = require('../models/Book');

// GET all books
router.get('/', async (req, res) => {
    try {
        const books = await Book.find(); // Fetch all books
        res.json(books);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// GET a book by ID
router.get('/:id', async (req, res) => {
    try {
        const book = await Book.findById(req.params.id);
        if (!book) return res.status(404).send('Book not found');
        res.json(book);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// POST a new book
router.post('/', auth, async (req, res) => {
    try {
        const book = new Book(req.body);  // Create book from request body
        const savedBook = await book.save(); // Save to DB
        res.status(201).json(savedBook);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// PUT to update a book
router.put('/:id',  auth, async (req, res) => {
    try {
        const updatedBook = await Book.findByIdAndUpdate(
            req.params.id,       // Book ID
            req.body,            // Data to update
            { new: true }        // Return updated document
        );
        res.json(updatedBook);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// DELETE a book
router.delete('/:id',  auth, async (req, res) => {
    try {
        const deletedBook = await Book.findByIdAndDelete(req.params.id);
        if (!deletedBook) return res.status(404).send('Book not found');
        res.json(deletedBook);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
