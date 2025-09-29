# 📂 Section 19: File Uploads with Multer & Cloudinary

We’ll expand your existing **Book Store API** (with auth + CRUD) to handle **image uploads** (like book covers).
This is the **real-world leap**: making APIs capable of handling media, not just text.

---

## 1️⃣ Problem Understanding

**Problem Statement**

* Hum ek Book Store API bana rahe hain.
* Ab hum chahte hain ki har book ke saath cover image bhi upload ho jaye.
* Client (React app / Postman) ek file bhejta hai (image).
* Ye file JSON format me nahi hoti, balki binary/multipart form-data hoti hai.
* Isko Express server khud samajh nahi paata.
* Aur agar hum apne local server me image store karenge → disk bhar jayegi, deploy ke time delete ho sakti hai.

👉 **Isliye hume chahiye ek parser (Multer) + ek storage service (Cloudinary).**


👉 **What are we solving?**
Books in our API don’t yet have **cover images**. In real apps (Amazon, Goodreads, Flipkart), every product/book needs an image. We need a way to **upload, store, and fetch images**.

👉 **Why not store images locally?**

* Server disk space = limited.
* Cloud deploys (like Vercel/Heroku) reset files on each deploy.
* No CDN, so images load slow.

👉 **Why Multer + Cloudinary?**

* **Multer** = middleware to parse `multipart/form-data` (files).
* **Cloudinary** = cloud storage + CDN + optimizations (resizing, formats, etc).
* Together: Client sends file → Multer parses → Cloudinary stores → MongoDB saves only **URL**.



**Workflow (Mindset)** - *Socho ye pipeline*
```
Client (React/Postman form-data)
   ↓
Multer (parse karega file ko)
   ↓
Cloudinary (upload karega cloud pe)
   ↓
MongoDB (sirf URL save hoga)
   ↓
Frontend (img src=URL se direct load)

```


## 2️⃣ Project Folder Setup

Here’s your project tree for this section:

```
📁 file-upload-with-multer-and-cloudinary
 ├── 📁controllers
 │    ├── authController.js
 │    ├── bookController.js   // add upload logic here
 ├── 📁middleware
 │    ├── authMiddleware.js   // restrict uploads to logged-in users
 ├── 📁models
 │    ├── book.js             // add coverUrl field
 │    ├── user.js
 ├── 📁routes
 │    ├── authRoutes.js
 │    ├── bookRoutes.js       // add /upload route
 ├── .env                     // Cloudinary creds
 ├── .gitignore
 ├── learn-backend.postman_collection.json
 ├── package.json
 └── server.js
```

---

## 3️⃣ Step-by-Step Implementation

### Step 1: Install Packages

```bash
npm install multer cloudinary dotenv
```

---

### Step 2: Setup Cloudinary (`server.js` or `config/cloudinary.js`)

```js
const cloudinary = require('cloudinary').v2;
require('dotenv').config();

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_KEY,
  api_secret: process.env.CLOUD_SECRET,
});
```

✅ **Mindset:**

* Use `.env` → never hardcode secrets.
* Cloudinary gives you `secure_url` → always prefer HTTPS.

---

### Step 3: Add `coverUrl` to Book Model (`models/book.js`)

```js
const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  price: { type: Number, required: true, min: 0 },
  isbn: { type: String, unique: true, required: true },
  coverUrl: { type: String },  // NEW: stores Cloudinary URL
});
```

✅ **Mindset:**
Never store raw image files in DB → just the URL.

---

### Step 4: Setup Multer (`middleware/uploadMiddleware.js`)

```js
const multer = require('multer');

// Option 1: Store in disk temp folder
const upload = multer({
  dest: 'uploads/', 
  limits: { fileSize: 5 * 1024 * 1024 }, // 5 MB limit
  fileFilter: (req, file, cb) => {
    if (file.mimetype.startsWith('image/')) cb(null, true);
    else cb(new Error('Only image files allowed'), false);
  }
});

module.exports = upload;
```

✅ **Mindset:**

* Use `limits` to avoid DOS with large files.
* `fileFilter` → ensures only images are uploaded.

---

### Step 5: Controller – Upload to Cloudinary (`controllers/bookController.js`)

```js
const cloudinary = require('cloudinary').v2;
const Book = require('../models/book');
const fs = require('fs');

exports.uploadCover = async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ error: 'No file uploaded' });

    // Upload to Cloudinary
    const result = await cloudinary.uploader.upload(req.file.path);

    // Save URL in book
    const book = await Book.findByIdAndUpdate(
      req.params.id,
      { coverUrl: result.secure_url },
      { new: true }
    );

    // Delete temp file
    fs.unlinkSync(req.file.path);

    if (!book) return res.status(404).json({ error: 'Book not found' });

    res.json(book);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
```

✅ **Mindset:**

* Always delete temp files after upload.
* Store **only Cloudinary URL** in DB.
* Handle missing book IDs gracefully.

---

### Step 6: Route – Upload Endpoint (`routes/bookRoutes.js`)

```js
const express = require('express');
const router = express.Router();
const upload = require('../middleware/uploadMiddleware');
const { uploadCover } = require('../controllers/bookController');
const { protect } = require('../middleware/authMiddleware');

router.post('/:id/upload-cover', protect, upload.single('cover'), uploadCover);

module.exports = router;
```

✅ **Mindset:**

* `protect` → only logged-in users can upload.
* `upload.single('cover')` → field name in Postman/React must be **cover**.

---

## 4️⃣ Testing with Postman

1. **POST** `/api/books/:id/upload-cover`

   * `Authorization`: Bearer token (from login).
   * `Body`: form-data → key: `cover` → type: File → choose image.

✅ **Expected Response:**

```json
{
  "_id": "6512abc123...",
  "title": "Node.js Basics",
  "author": "John Doe",
  "price": 250,
  "isbn": "978-12345",
  "coverUrl": "https://res.cloudinary.com/demo/image/upload/v169..."
}
```

---

## 5️⃣ Common Mistakes

❌ Forgetting to delete temp files → disk fills up.
❌ Not using `req.file` (wrong field name) → always match `"cover"`.
❌ Storing binary images in MongoDB → slows down DB.
❌ Exposing API keys in GitHub → use `.env` + `.gitignore`.

---

## 6️⃣ Best Practices

✅ Use **Cloudinary transformations** → `/w_200,h_200,c_fill/` for thumbnails.
✅ Add **rate limiting** on upload route.
✅ Use `memoryStorage()` + `buffer` → faster for direct Cloudinary upload.
✅ On frontend (React): Preview before upload using `URL.createObjectURL(file)`.

---

## 7️⃣ Real-World Connection

* **E-commerce:** Product images.
* **Social Media:** Profile pictures, posts.
* **Blogs/Publishing:** Article cover images.

All use same flow: **Multer → Cloud → DB URL → Frontend display**.

---

## 8️⃣ Progress Check

✅ Books can now have **cover images**.
✅ Upload secured with auth.
✅ Cloud storage integrated.

👉 Next in Section 20: **Change Password, Delete Image, Sorting, Pagination**.
