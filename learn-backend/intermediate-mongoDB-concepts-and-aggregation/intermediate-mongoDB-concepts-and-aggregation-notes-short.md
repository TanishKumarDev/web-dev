
# MongoDB Aggregation in MERN (Step-by-Step Beginner Flow)

---

## 1️⃣ What is Aggregation?

**Kya hai?**
Aggregation MongoDB me ek **process** hai jahan hum data ko **filter, group, transform, or join** kar sakte hain, **ek pipeline** ki tarah.

* Socho tumhare paas ek `books` collection hai:

  ```json
  [
    { "title": "Book A", "author": "John", "price": 20 },
    { "title": "Book B", "author": "Jane", "price": 30 },
    { "title": "Book C", "author": "John", "price": 25 }
  ]
  ```

* Tum chahte ho: **author-wise average price**.

Normal `find()` se ye nahi ho sakta directly. Aggregation ka use yahan hota hai.

---

## 2️⃣ Why Use Aggregation?

**Problem:**

* Find queries simple data nikalne ke liye hain, jaise "saare books le aao".
* Lekin analytics, reports, dashboard ke liye humko **grouping, summing, averaging, joining** chahiye.

**Solution:** Aggregation pipeline

* Step by step processing of data: `$match → $group → $sort → $project → $lookup`

---

## 3️⃣ How Aggregation Works (Logic)

**Step-by-Step Pipeline:**

1. `$match` → filter documents
2. `$group` → group by field + sum/avg/count
3. `$sort` → order results
4. `$project` → select or compute fields
5. `$lookup` → join another collection
6. `$unwind` → flatten arrays

Example Logic:

* Hum chahte hain: Author-wise total books + average price

1. Start with **all books**
2. Group by `author`
3. Count books per author + avg price

---

## 4️⃣ Fresh Small Project Example

### 4.1 Setup

```bash
mkdir aggregation-demo
cd aggregation-demo
npm init -y
npm install express mongoose dotenv
```

---

### 4.2 Models

**Author.js**

```javascript
const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema({
  name: { type: String, required: true }
});

module.exports = mongoose.model('Author', authorSchema);
```

**Book.js**

```javascript
const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: String,
  authorId: { type: mongoose.Schema.Types.ObjectId, ref: 'Author' },
  price: Number
});

module.exports = mongoose.model('Book', bookSchema);
```

---

### 4.3 Controller with Aggregation Logic

**analyticsController.js**

```javascript
const Book = require('../models/book');

// 1. Author-wise total books and average price
exports.statsByAuthor = async (req, res) => {
  try {
    const pipeline = [
      { $group: { 
          _id: "$authorId", // group by author
          totalBooks: { $sum: 1 }, // count books
          avgPrice: { $avg: "$price" } // average price
      } },
      { $sort: { avgPrice: -1 } } // descending by avgPrice
    ];

    const results = await Book.aggregate(pipeline);
    res.json(results);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// 2. Join with authors to get author names
exports.booksWithAuthor = async (req, res) => {
  try {
    const pipeline = [
      { $lookup: {
          from: "authors", // collection name
          localField: "authorId",
          foreignField: "_id",
          as: "authorDetails"
      }},
      { $unwind: "$authorDetails" }, // flatten array
      { $project: { title: 1, price: 1, "authorDetails.name": 1 } } // select fields
    ];

    const results = await Book.aggregate(pipeline);
    res.json(results);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
```

---

### 4.4 Routes

```javascript
const express = require('express');
const router = express.Router();
const analyticsController = require('../controllers/analyticsController');

router.get('/stats-by-author', analyticsController.statsByAuthor);
router.get('/books-with-author', analyticsController.booksWithAuthor);

module.exports = router;
```

---

### 4.5 Server

```javascript
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const analyticsRoutes = require('./routes/analyticsRoutes');

const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error(err));

app.use('/api/analytics', analyticsRoutes);

app.listen(5000, () => console.log("Server running on http://localhost:5000"));
```

---

## 5️⃣ Testing & Understanding

**Scenario:**

Books:

```json
[
  { "title": "A", "authorId": "1", "price": 20 },
  { "title": "B", "authorId": "2", "price": 30 },
  { "title": "C", "authorId": "1", "price": 25 }
]
```

1. `/stats-by-author` → Output:

```json
[
  { "_id": "2", "totalBooks": 1, "avgPrice": 30 },
  { "_id": "1", "totalBooks": 2, "avgPrice": 22.5 }
]
```

2. `/books-with-author` → Output:

```json
[
  { "title": "A", "price": 20, "authorDetails": { "name": "John" } },
  { "title": "B", "price": 30, "authorDetails": { "name": "Jane" } },
  { "title": "C", "price": 25, "authorDetails": { "name": "John" } }
]
```

---

### ✅ Key Learnings

* `$group` = author-wise count/avg → like SQL GROUP BY
* `$lookup` = join collections → like SQL JOIN
* `$project` = select + compute new fields
* `$unwind` = flatten array fields
* Aggregation pipelines **process data in DB**, not frontend → fast & efficient
=