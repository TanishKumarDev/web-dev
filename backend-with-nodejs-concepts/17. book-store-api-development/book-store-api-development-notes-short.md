# Book Store API – Simple Version (Without Auth)

## 1️⃣ Understanding the Problem

**Goal:**
Build a simple backend API to **manage books**. It should allow users to:

* **Create** a book
* **Read** books (all or by ID)
* **Update** a book
* **Delete** a book

**Constraints & Requirements:**

1. Each book must have a **unique numeric ID**.
2. `title`, `author`, `price`, and `isbn` are **mandatory**.
3. `price` cannot be negative.
4. `isbn` must be **unique**.
5. The API should respond with **proper HTTP status codes**.
6. Code should be **organized and modular** (controllers, routes, models).

**Why:**
Even without authentication/authorization, we want:

* **Clean architecture**: Easy to maintain and extend.
* **Validation**: Prevents invalid data from entering the database.
* **Error handling**: Proper feedback to clients.

---

## 2️⃣ Designing the Solution

### Step 1: Model

* Represents **structure of a Book** (like a blueprint).
* Helps MongoDB **enforce data consistency**.
* Includes validations (required, unique, min values).

### Step 2: Controller

* Contains **all the logic** for handling CRUD operations.
* Each function:

  * **Receives request**
  * **Processes data**
  * **Sends response** with proper status code

### Step 3: Routes

* Maps **HTTP methods + endpoints** to controller functions.
* Clean separation: routes are **only responsible for mapping**.

---

## 3️⃣ Step-by-Step Solution

### 3.1 server.js – Setup

```js
const express = require('express');
const mongoose = require('mongoose');
const bookRoutes = require('./routes/bookRoutes');

const app = express();

// Middleware: parse JSON bodies
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb+srv://tanish2992002_db_user:20g6PVhvAMYf2DOh@learn-backend-part1.kiobva2.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

// Mount routes
app.use('/api/books', bookRoutes);

// Start server
const PORT = 3000;
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
```

**Explanation / Mindset:**

* **What**: Sets up the Express server and MongoDB connection.
* **Why**: Separates concerns: server setup, DB connection, routes mounting.
* **Problem Solved**: Clean entry point. All requests now go through `/api/books`.

---

### 3.2 models/book.js – Data Model

```js
const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    id: { type: Number, required: true, unique: true },
    title: { type: String, required: true, minlength: 3 },
    author: { type: String, required: true },
    price: { type: Number, required: true, min: 0 },
    isbn: { type: String, required: true, unique: true },
    published: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Book', bookSchema);
```

**Explanation / Mindset:**

* **What**: Schema defines **structure + rules** for the Book.
* **Why**: Prevents bad data (empty title, negative price, duplicate ISBN).
* **How**: Mongoose validates before saving.
* **Problem Solved**: Auto-validation + consistent DB documents.

---

### 3.3 controllers/bookController.js – CRUD Logic

```js
const Book = require('../models/book');

// Get all books
exports.getAllBooks = async (req, res) => {
    try {
        const books = await Book.find();
        res.json(books);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Get book by numeric ID
exports.getBookById = async (req, res) => {
    try {
        const book = await Book.findOne({ id: parseInt(req.params.id) });
        if (!book) return res.status(404).json({ error: 'Book not found' });
        res.json(book);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Create book with auto-incremented ID
exports.createBook = async (req, res) => {
    try {
        const lastBook = await Book.findOne().sort({ id: -1 });
        const nextId = lastBook ? lastBook.id + 1 : 1;

        const book = new Book({ ...req.body, id: nextId });
        const savedBook = await book.save();
        res.status(201).json(savedBook);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Update book by numeric ID
exports.updateBook = async (req, res) => {
    try {
        const book = await Book.findOneAndUpdate(
            { id: parseInt(req.params.id) },
            req.body,
            { new: true, runValidators: true }
        );
        if (!book) return res.status(404).json({ error: 'Book not found' });
        res.json(book);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Delete book by numeric ID
exports.deleteBook = async (req, res) => {
    try {
        const result = await Book.findOneAndDelete({ id: parseInt(req.params.id) });
        if (!result) return res.status(404).json({ error: 'Book not found' });
        res.status(204).send();
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
```

**Explanation / Mindset:**

* **What**: Implements all CRUD operations.
* **Why**: Keeps route logic clean, handles DB interactions separately.
* **How**: Uses Mongoose methods (`find`, `findOne`, `save`, `findOneAndUpdate`, `findOneAndDelete`).
* **Problem Solved**:

  * Proper error handling for invalid requests.
  * Auto-increment ID prevents manual mistakes.
  * Validations ensure clean data.

---

### 3.4 routes/bookRoutes.js – Mapping Endpoints

```js
const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');

router.get('/', bookController.getAllBooks);       // List all books
router.get('/:id', bookController.getBookById);   // Get one book by ID
router.post('/', bookController.createBook);      // Create new book
router.put('/:id', bookController.updateBook);    // Update book
router.delete('/:id', bookController.deleteBook); // Delete book

module.exports = router;
```

**Explanation / Mindset:**

* **What**: Maps HTTP methods + endpoints → controller functions.
* **Why**: Keeps server clean; easy to add future features.
* **Problem Solved**: Clear routing structure.

---

## 4️⃣ Testing & Postman

* **GET** `/api/books` → fetch all books
* **GET** `/api/books/:id` → fetch one book
* **POST** `/api/books` → create book (body: title, author, price, isbn)
* **PUT** `/api/books/:id` → update book
* **DELETE** `/api/books/:id` → delete book

**Example JSON for POST:**

```json
{
  "title": "Node.js Basics",
  "author": "John Doe",
  "price": 250,
  "isbn": "978-1-2345-6789-0"
}
```