const Book = require('../models/Book');

// GET all books
const getBooks = async (req, res) => {
  const books = await Book.find();
  res.json(books);
};

// CREATE book
const addBook = async (req, res) => {
  const { title, author } = req.body;
  const book = new Book({ title, author });
  await book.save();
  res.status(201).json(book);
};

// UPDATE book
const updateBook = async (req, res) => {
  const book = await Book.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  if (!book) return res.status(404).json({ message: 'Book not found' });
  res.json(book);
};

// DELETE book
const deleteBook = async (req, res) => {
  const book = await Book.findByIdAndDelete(req.params.id);
  if (!book) return res.status(404).json({ message: 'Book not found' });
  res.json(book);
};

module.exports = { getBooks, addBook, updateBook, deleteBook };
