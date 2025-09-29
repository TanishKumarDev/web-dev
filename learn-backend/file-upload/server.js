require('dotenv').config();
const express = require('express');
const multer = require('multer');
const cloudinary = require('cloudinary').v2;
const fs = require('fs');

const app = express();
const port = 5000;

const upload = multer({ dest: 'uploads/' });

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

app.post('/upload', upload.single('image'), async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ error: 'No file uploaded' });

    const result = await cloudinary.uploader.upload(req.file.path);

    fs.unlinkSync(req.file.path); // delete temp file

    res.json({ url: result.secure_url });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(port, () => console.log(`Server running on http://localhost:${port}`));
