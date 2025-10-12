const express = require('express');
const app = express();

// Middleware to parse JSON bodies (essential for POST/PUT)
app.use(express.json()); // Purpose: Parses req.body from JSON requests

// Basic CRUD routes (in-memory data for demo)
let books = []; // Simulated database

app.get('/books', (req, res) => { // Read all
  res.json(books);
});

app.post('/books', (req, res) => { // Create
  const newBook = req.body; // Access from JSON body
  books.push(newBook);
  res.status(201).json(newBook);
});
app.put('/books/:id', (req, res) => { // Update full resource
  const id = parseInt(req.params.id);
  const updatedBook = req.body;
  const index = books.findIndex(book => book.id === id);
  if (index !== -1) {
    books[index] = { ...books[index], ...updatedBook }; // Merge for partial-like
    res.json(books[index]);
  } else {
    res.status(404).send('Book not found');
  }
});

app.delete('/books/:id', (req, res) => { // Delete
  const id = parseInt(req.params.id);
  books = books.filter(book => book.id !== id);
  res.status(204).send(); // No content on success
});

app.listen(3000, () => console.log('server is running `http://localhost:3000`'));