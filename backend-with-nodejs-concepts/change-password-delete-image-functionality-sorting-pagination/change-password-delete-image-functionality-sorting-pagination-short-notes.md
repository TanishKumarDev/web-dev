# 🚀 Project: Advanced Book API Features

### 🛠 Stack/Tools

* Node.js + Express
* MongoDB + Mongoose
* Cloudinary
* bcryptjs (password hashing)
* Postman (testing)

---

## 1️⃣ Project Setup

```bash
mkdir book-api-advanced
cd book-api-advanced
npm init -y
npm install express mongoose bcryptjs dotenv cloudinary
```

---

## 2️⃣ File Structure

```
book-api-advanced
 ├── server.js
 ├── .env
 ├── .gitignore
 ├── controllers/
 │    ├── bookController.js
 │    └── userController.js
 ├── models/
 │    ├── book.js
 │    └── user.js
 ├── routes/
 │    ├── bookRoutes.js
 │    └── userRoutes.js
 └── middleware/
      └── authMiddleware.js
```

---

## 3️⃣ .gitignore

```gitignore
node_modules/
.env
```

---

## 4️⃣ .env (Cloudinary + DB credentials)

```env
MONGO_URI=your_mongodb_connection_string
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
JWT_SECRET=your_jwt_secret
```

---

## 5️⃣ Models

### 5.1 User Model (`models/user.js`)

```javascript
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

// Hash password before save
userSchema.pre("save", async function(next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

// Compare password
userSchema.methods.comparePassword = async function(candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
};

module.exports = mongoose.model("User", userSchema);
```

---

### 5.2 Book Model (`models/book.js`)

```javascript
const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  price: { type: Number, required: true },
  coverUrl: { type: String },
});

module.exports = mongoose.model("Book", bookSchema);
```

---

## 6️⃣ Middleware: Auth (`middleware/authMiddleware.js`)

```javascript
const jwt = require("jsonwebtoken");
const User = require("../models/user");

exports.verifyToken = async (req, res, next) => {
  const token = req.headers["authorization"]?.split(" ")[1];
  if (!token) return res.status(401).json({ error: "Unauthorized" });
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decoded.id);
    next();
  } catch (err) {
    res.status(401).json({ error: "Invalid token" });
  }
};

exports.isAdmin = (req, res, next) => {
  // Example: assume user has role property
  if (req.user.role !== "admin") return res.status(403).json({ error: "Forbidden" });
  next();
};
```

---

## 7️⃣ Controllers

### 7.1 User Controller (`controllers/userController.js`)

```javascript
const User = require("../models/user");

exports.changePassword = async (req, res) => {
  try {
    const { oldPassword, newPassword } = req.body;
    const user = await User.findById(req.user._id);
    if (!user || !(await user.comparePassword(oldPassword))) {
      return res.status(400).json({ error: "Invalid old password" });
    }
    user.password = newPassword; // hashed by pre-save hook
    await user.save();
    res.json({ message: "Password changed successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
```

---

### 7.2 Book Controller (`controllers/bookController.js`)

```javascript
const Book = require("../models/book");
const cloudinary = require("cloudinary").v2;

// Delete Book Cover
exports.deleteImage = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book || !book.coverUrl) return res.status(404).json({ error: "No image found" });

    const publicId = book.coverUrl.split("/").pop().split(".")[0];
    await cloudinary.uploader.destroy(publicId);

    book.coverUrl = undefined;
    await book.save();

    res.json({ message: "Image deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get Books with Sorting & Pagination
exports.getAllBooks = async (req, res) => {
  try {
    const { page = 1, limit = 10, sort = "title" } = req.query;
    const books = await Book.find()
      .sort(sort)
      .skip((page - 1) * limit)
      .limit(parseInt(limit));
    const total = await Book.countDocuments();
    res.json({ books, total, page: parseInt(page), limit: parseInt(limit) });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
```

---

## 8️⃣ Routes

### 8.1 User Routes (`routes/userRoutes.js`)

```javascript
const express = require("express");
const router = express.Router();
const { changePassword } = require("../controllers/userController");
const { verifyToken } = require("../middleware/authMiddleware");

router.put("/change-password", verifyToken, changePassword);

module.exports = router;
```

### 8.2 Book Routes (`routes/bookRoutes.js`)

```javascript
const express = require("express");
const router = express.Router();
const { getAllBooks, deleteImage } = require("../controllers/bookController");
const { verifyToken, isAdmin } = require("../middleware/authMiddleware");

router.get("/", getAllBooks);
router.delete("/:id/image", verifyToken, isAdmin, deleteImage);

module.exports = router;
```

---

## 9️⃣ Server (`server.js`)

```javascript
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const userRoutes = require("./routes/userRoutes");
const bookRoutes = require("./routes/bookRoutes");
const cloudinary = require("cloudinary").v2;

const app = express();
app.use(express.json());

// MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error(err));

// Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

// Routes
app.use("/api/users", userRoutes);
app.use("/api/books", bookRoutes);

app.listen(5000, () => console.log("Server running on http://localhost:5000"));
```

---

## 🔑 Testing / Workflow

1. **Change Password**

   * PUT `/api/users/change-password`
   * Header: `Authorization: Bearer <token>`
   * Body: `{ "oldPassword":"abc123", "newPassword":"new12345" }`

2. **Delete Image**

   * DELETE `/api/books/:id/image`
   * Header: `Authorization: Bearer <token>` (admin)
   * Response: `{ message: "Image deleted successfully" }`

3. **Sorting & Pagination**

   * GET `/api/books?sort=price&page=2&limit=5`
   * Response includes `{ books, total, page, limit }`

---

## 🧠 Key Takeaways

* **Password Change:** old password verified → new hashed → save.
* **Delete Image:** Cloudinary destroy → clear DB field → async safe.
* **Sorting/Pagination:** Mongoose `.sort()`, `.skip()`, `.limit()` → efficient for large datasets.
* **Practical:** Integrates seamlessly in MERN apps, secure & scalable.
