const express = require('express');
const router = express.Router();
const analyticsController = require('../controllers/analyticsController');

router.get('/stats-by-author', analyticsController.statsByAuthor);
router.get('/books-with-author', analyticsController.booksWithAuthor);

module.exports = router;
