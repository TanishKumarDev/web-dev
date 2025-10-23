const express = require('express');
const { createPost } = require('../controllers/post-controller');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/', authMiddleware, createPost);
// Add others

module.exports = router;