const Book = require('../models/book');

// Get all books
exports.getAllBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get book by numeric ID
exports.getBookById = async (req, res) => {
  try {
    const book = await Book.findOne({ id: parseInt(req.params.id) });
    if (!book) return res.status(404).json({ error: 'Book not found' });
    res.json(book);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Create book (auto-increment ID)
exports.createBook = async (req, res) => {
  try {
    const lastBook = await Book.findOne().sort({ id: -1 }); // Get max id
    const nextId = lastBook ? lastBook.id + 1 : 1;

    const book = new Book({ ...req.body, id: nextId });
    const savedBook = await book.save();
    res.status(201).json(savedBook);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Update by numeric ID
exports.updateBook = async (req, res) => {
  try {
    const book = await Book.findOneAndUpdate(
      { id: parseInt(req.params.id) },
      req.body,
      { new: true, runValidators: true }
    );
    if (!book) return res.status(404).json({ error: 'Book not found' });
    res.json(book);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete by numeric ID
exports.deleteBook = async (req, res) => {
  try {
    const result = await Book.findOneAndDelete({ id: parseInt(req.params.id) });
    if (!result) return res.status(404).json({ error: 'Book not found' });
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
