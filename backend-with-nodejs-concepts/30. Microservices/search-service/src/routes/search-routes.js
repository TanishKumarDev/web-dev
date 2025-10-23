const express = require('express');
const { searchPosts } = require('../controllers/search-controller');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/', authMiddleware, searchPosts);

module.exports = router;