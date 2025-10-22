const express = require('express');
const router = express.Router();
const multer = require('multer');
const fs = require('fs');
const path = require('path');

// Configure storage
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/'); // folder to store files
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname); // unique file name
    }
});

const upload = multer({ storage: storage });

// Single file upload
router.post('/single', upload.single('file'), (req, res) => {
    res.json({
        message: 'File uploaded successfully!',
        file: req.file
    });
});

// Multiple files upload
router.post('/multiple', upload.array('files', 5), (req, res) => {
    res.json({
        message: 'Files uploaded successfully!',
        files: req.files
    });
});

// DELETE IMAGE
router.delete('/image/:filename', auth, (req, res) => {
    const filePath = path.join(__dirname, '../uploads', req.params.filename);
    fs.unlink(filePath, (err) => {
        if (err) return res.status(500).json({ error: 'File not found' });
        res.json({ message: 'Image deleted successfully' });
    });
});

module.exports = router;
