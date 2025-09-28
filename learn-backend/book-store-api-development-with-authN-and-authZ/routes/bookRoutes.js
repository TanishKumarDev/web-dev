const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');
const { protect, restrictTo } = require('../middleware/authMiddleware');

// 🌐 public routes

// get all books
router.get('/', protect, bookController.getAllBooks);
// get all books by id
router.get('/:id', protect, bookController.getBookById);

// 🔒 admin-only routes

// create a new book
router.post('/', protect, restrictTo('admin'), bookController.createBook);
// update a book
router.put('/:id', protect, restrictTo('admin'), bookController.updateBook);
// delete a book
router.delete('/:id', protect, restrictTo('admin'), bookController.deleteBook);


module.exports = router;