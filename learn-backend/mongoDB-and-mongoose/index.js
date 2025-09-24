const express = require('express');
const mongoose = require('mongoose');

const app = express(); // Create Express app
app.use(express.json()); // Parse JSON bodies

// Connect to MongoDB
mongoose.connect('mongodb+srv://tanish2992002_db_user:20g6PVhvAMYf2DOh@learn-backend-part1.kiobva2.mongodb.net/?retryWrites=true&w=majority&appName=learn-backend-part1', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('✅ Connected to MongoDB');
}).catch((err) => {
    console.error('❌ Error connecting to MongoDB:', err.message);
})

// Define schema and model
const bookSchema = new mongoose.Schema({
  id: Number,               // keep id like before
  title: String,
  author: String,
  price: Number
});

const Book = mongoose.model('Book', bookSchema);

// CRUD Routes

// Read 
app.get('/books', async (req, res) => {
    const books = await Book.find();
    res.json(books);
});

// Create
app.post('/books', async (req, res) => {
    try {
        const newBook = new Book(req.body);
        await newBook.save();
        res.status(201).json(newBook);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Update by id
app.put('/books/:id', async (req, res) => {
  try {
    const book = await Book.findOneAndUpdate(
      { id: parseInt(req.params.id) },
      req.body,
      { new: true }
    );
    if (!book) return res.status(404).json({ error: 'Book not found' });
    res.json(book);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});


// Delete
app.delete('/books/:id', async (req, res) => {
    try {
        const result = await Book.findByIdAndDelete({id: parseInt(req.params.id)});
        if (!result) return res.status(400).send("Book not found");
        res.status(204).send();
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Start the server
app.listen(3000, () => {
    console.log('Server started on `http://localhost:3000`');
});