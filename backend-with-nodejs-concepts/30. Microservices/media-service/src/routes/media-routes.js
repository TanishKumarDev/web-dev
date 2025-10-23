const express = require('express');
const { uploadMedia, upload } = require('../controllers/media-controller');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/upload', authMiddleware, upload.single('file'), uploadMedia);

module.exports = router;