let books = require('../data/books');

// READ all books
const getBooks = (req, res) => {
  res.json(books);
};

// CREATE a new book
const addBook = (req, res) => {
  const { title, author } = req.body;
  if (!title || !author)
    return res.status(400).json({ message: 'Title and author are required' });

  const newBook = { id: books.length + 1, title, author };
  books.push(newBook);
  res.status(201).json(newBook);
};

// UPDATE a book
const updateBook = (req, res) => {
  const book = books.find(b => b.id === parseInt(req.params.id));
  if (!book) return res.status(404).json({ message: 'Book not found' });

  const { title, author } = req.body;
  book.title = title || book.title;
  book.author = author || book.author;

  res.json(book);
};

// DELETE a book
const deleteBook = (req, res) => {
  const index = books.findIndex(b => b.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ message: 'Book not found' });

  const deletedBook = books.splice(index, 1);
  res.json(deletedBook[0]);
};

// Export controller functions
module.exports = {
  getBooks,
  addBook,
  updateBook,
  deleteBook
};
