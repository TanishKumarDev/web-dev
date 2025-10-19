# Node.js REST API Development: Full CRUD for a Book Store

These study notes build on **Section 15: REST API Development (02:28:33 - 02:59:05)** from your Node.js backend development course, focusing on creating a **full CRUD REST API for a book store** with a **modular design**, minimal comments, and a beginner-friendly approach. The API will manage books using Express.js, with data stored in a JSON file (using `fs.promises` and Path from Sections 6, 7, and 11) to simulate a database. We’ll implement **Create**, **Read**, **Update**, and **Delete** operations one by one, using a clean folder structure, and test with Postman. This builds on Express.js and REST concepts (Sections 13 and 15) and prepares you for MongoDB integration. Each CRUD operation is explained gradually, with a focus on simplicity, modularity, and clarity for a MERN stack context.

---

## Table of Contents
1. [Project Setup and Modular Design](#1-project-setup-and-modular-design)
2. [Read Operations (GET)](#2-read-operations-get)
3. [Create Operation (POST)](#3-create-operation-post)
4. [Update Operation (PUT)](#4-update-operation-put)
5. [Delete Operation (DELETE)](#5-delete-operation-delete)
6. [Full CRUD Implementation](#6-full-crud-implementation)
7. [Step-by-Step Workflow](#7-step-by-step-workflow)
8. [Key Explanations and Best Practices](#8-key-explanations-and-best-practices)
9. [Key Takeaways](#9-key-takeaways)
10. [Connection to Backend Development Roadmap](#10-connection-to-backend-development-roadmap)

---

## 1. Project Setup and Modular Design
*Timestamp: [02:30:13 - 02:32:06]*

### Concept Simplified
Set up an Express project with a modular folder structure to keep code organized. Use separate files for routes, controllers, and data storage. Store books in a JSON file for persistence.

### Folder Structure
```
book_store_api/
├── controllers/
│   └── bookController.js
├── routes/
│   └── books.js
├── data/
│   └── books.json
├── index.js
├── package.json
```

### Initial Setup
1. Create folder: `mkdir book_store_api && cd book_store_api`.
2. Initialize project: `npm init -y && npm install express`.
3. Create `data/books.json`:
   ```json
   [
       { "id": 1, "title": "Book One", "author": "Author A" },
       { "id": 2, "title": "Book Two", "author": "Author B" }
   ]
   ```
4. Create files: `index.js`, `controllers/bookController.js`, `routes/books.js`.

### index.js
```javascript
const express = require('express');
const bookRoutes = require('./routes/books');

const app = express();
app.use(express.json()); // Parse JSON bodies

app.use('/api/books', bookRoutes); // Mount book routes

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on http://localhost:${port}`));
```

### routes/books.js
```javascript
const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');

// Routes will be added here
module.exports = router;
```

### controllers/bookController.js
```javascript
// Controller functions will be added here
module.exports = {};
```

*Comment*: This setup uses `express.Router` for modularity, keeping routes separate from the main app. `express.json()` is essential for POST/PUT.

---

## 2. Read Operations (GET)
*Timestamp: [02:30:13 - 02:32:06]*

### Concept Simplified
**Read** operations use `GET` to retrieve data: all books (`/api/books`) or one book by ID (`/api/books/:id`). Data is read from `books.json` using `fs.promises`.

### Update Files
- **controllers/bookController.js**:
  ```javascript
  const fs = require('fs').promises;
  const path = require('path');

  const readBooks = async () => {
      const data = await fs.readFile(path.join(__dirname, '../data/books.json'), 'utf8');
      return JSON.parse(data);
  };

  module.exports = {
      getAllBooks: async (req, res) => {
          const books = await readBooks();
          res.json(books);
      },
      getBookById: async (req, res) => {
          const id = parseInt(req.params.id);
          const books = await readBooks();
          const book = books.find(b => b.id === id);
          if (book) {
              res.json(book);
          } else {
              res.status(404).json({ error: 'Book not found' });
          }
      }
  };
  ```

- **routes/books.js**:
  ```javascript
  const express = require('express');
  const router = express.Router();
  const bookController = require('../controllers/bookController');

  router.get('/', bookController.getAllBooks);
  router.get('/:id', bookController.getBookById);

  module.exports = router;
  ```

### Test with Postman
- **GET http://localhost:3000/api/books**: Returns `[{ "id": 1, "title": "Book One", "author": "Author A" }, ...]`.
- **GET http://localhost:3000/api/books/1**: Returns `{ "id": 1, "title": "Book One", "author": "Author A" }`.
- **GET http://localhost:3000/api/books/999**: Returns `{ "error": "Book not found" }` (404).

*Comment*: `GET` routes read data from `books.json` using async/await (Section 11). `parseInt` ensures `:id` is a number.

---

## 3. Create Operation (POST)
*Timestamp: [02:30:13 - 02:32:06]*

### Concept Simplified
The **Create** operation uses `POST` to add a new book to `books.json`. Validate the request body and generate a unique ID.

### Update Files
- **controllers/bookController.js** (add to existing):
  ```javascript
  const writeBooks = async (books) => {
      await fs.writeFile(path.join(__dirname, '../data/books.json'), JSON.stringify(books, null, 2));
  };

  module.exports = {
      // ... existing getAllBooks, getBookById
      createBook: async (req, res) => {
          const newBook = req.body;
          if (!newBook.title) {
              return res.status(400).json({ error: 'Title is required' });
          }
          const books = await readBooks();
          newBook.id = books.length ? Math.max(...books.map(b => b.id)) + 1 : 1;
          books.push(newBook);
          await writeBooks(books);
          res.status(201).json(newBook);
      }
  };
  ```

- **routes/books.js** (add to existing):
  ```javascript
  router.post('/', bookController.createBook);
  ```

### Test with Postman
- **POST http://localhost:3000/api/books**:
  - Body: `{ "title": "New Book", "author": "Author C" }`
  - Response: 201, `{ "id": 3, "title": "New Book", "author": "Author C" }`
  - Check `books.json`: New book added.
- **POST** without title: `{ "error": "Title is required" }` (400).

*Comment*: `POST` adds a book, validates `title`, and saves to file. The ID is generated by incrementing the highest existing ID.

---

## 4. Update Operation (PUT)
*Timestamp: [02:32:06 - 02:35:13]*

### Concept Simplified
The **Update** operation uses `PUT` to replace a book by ID in `books.json`. Validate input and ensure the book exists.

### Update Files
- **controllers/bookController.js** (add to existing):
  ```javascript
  module.exports = {
      // ... existing functions
      updateBook: async (req, res) => {
          const id = parseInt(req.params.id);
          const updatedBook = req.body;
          if (!updatedBook.title) {
              return res.status(400).json({ error: 'Title is required' });
          }
          const books = await readBooks();
          const index = books.findIndex(b => b.id === id);
          if (index !== -1) {
              books[index] = { id, ...updatedBook };
              await writeBooks(books);
              res.json(books[index]);
          } else {
              res.status(404).json({ error: 'Book not found' });
          }
      }
  };
  ```

- **routes/books.js** (add to existing):
  ```javascript
  router.put('/:id', bookController.updateBook);
  ```

### Test with Postman
- **PUT http://localhost:3000/api/books/1**:
  - Body: `{ "title": "Updated Book", "author": "Author A" }`
  - Response: `{ "id": 1, "title": "Updated Book", "author": "Author A" }`
  - Check `books.json`: Book updated.
- **PUT http://localhost:3000/api/books/999**: `{ "error": "Book not found" }` (404).
- **PUT** without title: `{ "error": "Title is required" }` (400).

*Comment*: `PUT` replaces the book’s data, keeping the same ID. Validation ensures the API is robust.

---

## 5. Delete Operation (DELETE)
*Timestamp: [02:32:06 - 02:35:13]*

### Concept Simplified
The **Delete** operation uses `DELETE` to remove a book by ID from `books.json`. Return 204 on success or 404 if not found.

### Update Files
- **controllers/bookController.js** (add to existing):
  ```javascript
  module.exports = {
      // ... existing functions
      deleteBook: async (req, res) => {
          const id = parseInt(req.params.id);
          const books = await readBooks();
          const index = books.findIndex(b => b.id === id);
          if (index !== -1) {
              books.splice(index, 1);
              await writeBooks(books);
              res.status(204).send();
          } else {
              res.status(404).json({ error: 'Book not found' });
          }
      }
  };
  ```

- **routes/books.js** (add to existing):
  ```javascript
  router.delete('/:id', bookController.deleteBook);
  ```

### Test with Postman
- **DELETE http://localhost:3000/api/books/1**: 204 (no body).
- **GET http://localhost:3000/api/books/1**: `{ "error": "Book not found" }` (404).
- **Check `books.json`**: Book removed.
- **DELETE http://localhost:3000/api/books/999**: `{ "error": "Book not found" }` (404).

*Comment*: `DELETE` removes the book and updates the file, returning 204 for success (no content).

---

## 6. Full CRUD Implementation
*Timestamp: [02:46:00 - 02:59:05]*

### Complete Code
Below is the consolidated code for the full CRUD API with modular design.

- **index.js**:
  ```javascript
  const express = require('express');
  const bookRoutes = require('./routes/books');

  const app = express();
  app.use(express.json());

  app.use('/api/books', bookRoutes);

  app.use((err, req, res, next) => {
      console.error('Error:', err.message);
      res.status(500).json({ error: 'Internal Server Error' });
  });

  const port = process.env.PORT || 3000;
  app.listen(port, () => console.log(`Server running on http://localhost:${port}`));
  ```

- **routes/books.js**:
  ```javascript
  const express = require('express');
  const router = express.Router();
  const bookController = require('../controllers/bookController');

  router.get('/', bookController.getAllBooks);
  router.get('/:id', bookController.getBookById);
  router.post('/', bookController.createBook);
  router.put('/:id', bookController.updateBook);
  router.delete('/:id', bookController.deleteBook);

  module.exports = router;
  ```

- **controllers/bookController.js**:
  ```javascript
  const fs = require('fs').promises;
  const path = require('path');

  const readBooks = async () => {
      try {
          const data = await fs.readFile(path.join(__dirname, '../data/books.json'), 'utf8');
          return JSON.parse(data);
      } catch (err) {
          return [];
      }
  };

  const writeBooks = async (books) => {
      await fs.writeFile(path.join(__dirname, '../data/books.json'), JSON.stringify(books, null, 2));
  };

  module.exports = {
      getAllBooks: async (req, res) => {
          const books = await readBooks();
          res.json(books);
      },
      getBookById: async (req, res) => {
          const id = parseInt(req.params.id);
          const books = await readBooks();
          const book = books.find(b => b.id === id);
          if (book) {
              res.json(book);
          } else {
              res.status(404).json({ error: 'Book not found' });
          }
      },
      createBook: async (req, res) => {
          const newBook = req.body;
          if (!newBook.title) {
              return res.status(400).json({ error: 'Title is required' });
          }
          const books = await readBooks();
          newBook.id = books.length ? Math.max(...books.map(b => b.id)) + 1 : 1;
          books.push(newBook);
          await writeBooks(books);
          res.status(201).json(newBook);
      },
      updateBook: async (req, res) => {
          const id = parseInt(req.params.id);
          const updatedBook = req.body;
          if (!updatedBook.title) {
              return res.status(400).json({ error: 'Title is required' });
          }
          const books = await readBooks();
          const index = books.findIndex(b => b.id === id);
          if (index !== -1) {
              books[index] = { id, ...updatedBook };
              await writeBooks(books);
              res.json(books[index]);
          } else {
              res.status(404).json({ error: 'Book not found' });
          }
      },
      deleteBook: async (req, res) => {
          const id = parseInt(req.params.id);
          const books = await readBooks();
          const index = books.findIndex(b => b.id === id);
          if (index !== -1) {
              books.splice(index, 1);
              await writeBooks(books);
              res.status(204).send();
          } else {
              res.status(404).json({ error: 'Book not found' });
          }
      }
  };
  ```

- **data/books.json** (unchanged):
  ```json
  [
      { "id": 1, "title": "Book One", "author": "Author A" },
      { "id": 2, "title": "Book Two", "author": "Author B" }
  ]
  ```

### Instructions to Run
1. Set up folder structure and files as above.
2. Run: `npm init -y && npm install express`.
3. Start server: `node index.js`.
4. Test with Postman:
   - **GET /api/books**: List all books.
   - **GET /api/books/1**: Get book with ID 1.
   - **POST /api/books**: `{ "title": "New Book", "author": "Author C" }` → 201.
   - **PUT /api/books/1**: `{ "title": "Updated Book", "author": "Author A" }` → Updated book.
   - **DELETE /api/books/1**: 204; GET /api/books/1 → 404.

### Expected Output
**Console**:
```
Server running on http://localhost:3000
```

**Postman**:
- **GET /api/books**: `[{ "id": 1, "title": "Book One", "author": "Author A" }, ...]`
- **GET /api/books/1**: `{ "id": 1, "title": "Book One", "author": "Author A" }`
- **POST /api/books**: `{ "id": 3, "title": "New Book", "author": "Author C" }` (201)
- **PUT /api/books/1**: `{ "id": 1, "title": "Updated Book", "author": "Author A" }`
- **DELETE /api/books/1**: 204 (no body)
- **GET /api/books/999**: `{ "error": "Book not found" }` (404)

*Comment*: This modular implementation separates routes and controllers, uses persistent storage, and includes validation for a production-like API.

---

## 7. Step-by-Step Workflow
*Timestamp: [02:28:33 - 02:59:05]*

### How to Build the Book Store API
1. **Set Up Project**:
   - Create: `mkdir book_store_api && cd book_store_api`.
   - Run: `npm init -y && npm install express`.
   - Create folders: `controllers`, `routes`, `data`.
   - Add `books.json` with initial data.

2. **Create Modular Structure**:
   - In `index.js`: Set up Express, `express.json()`, and mount `/api/books` routes.
   - In `routes/books.js`: Initialize `express.Router`.
   - In `controllers/bookController.js`: Add helper functions for file I/O.

3. **Implement Read (GET)**:
   - Add `getAllBooks` and `getBookById` in controller.
   - Add `GET /` and `GET /:id` in routes.
   - Test with Postman: Verify book list and single book.

4. **Implement Create (POST)**:
   - Add `createBook` in controller with validation and ID generation.
   - Add `POST /` in routes.
   - Test: Create a book, check `books.json`.

5. **Implement Update (PUT)**:
   - Add `updateBook` with validation and ID check.
   - Add `PUT /:id` in routes.
   - Test: Update a book, verify changes.

6. **Implement Delete (DELETE)**:
   - Add `deleteBook` to remove book by ID.
   - Add `DELETE /:id` in routes.
   - Test: Delete a book, confirm removal.

7. **Add Error Handling**:
   - Include global error middleware in `index.js`.
   - Test errors: Invalid ID, missing title.

8. **Run and Test**:
   - Run: `node index.js`.
   - Use Postman to test all CRUD operations.

*Comment*: This gradual workflow builds a complete API, testing each step to ensure understanding.

---

## 8. Key Explanations and Best Practices
*Timestamp: [02:28:33 - 02:59:05]*

### Key Explanations
- **RESTful Design**: Resources (`/api/books`) are manipulated with HTTP methods (GET, POST, PUT, DELETE). Each request is stateless, ideal for MERN frontends like React.
- **Modular Structure**: Separating routes and controllers keeps code organized, scalable, and testable (Section 13).
- **File Storage**: Using `fs.promises` (Sections 7, 11) mimics a database for learning; MongoDB will replace it.
- **Postman Testing**: Verifies API behavior without a frontend, ensuring endpoints work as expected.

### Common Mistakes to Avoid
1. **No JSON Middleware**: Forgetting `express.json()`—`req.body` is undefined.
2. **ID Type Errors**: String `:id` vs. number—use `parseInt`.
3. **Missing Validation**: Accepting invalid data—check fields like `title`.
4. **File Access Issues**: Wrong paths for `books.json`—use `path.join`.

### Best Practices
1. **Use Proper Status Codes**: 200 (OK), 201 (Created), 204 (No Content), 400 (Bad Request), 404 (Not Found).
2. **Modularize**: Keep routes and controllers separate; use `/api` prefix for versioning.
3. **Validate Inputs**: Ensure required fields (e.g., `title`) to prevent errors.
4. **Error Handling**: Use global error middleware and JSON error responses.
5. **Test Thoroughly**: Use Postman collections to test all cases, including errors.

---

## 9. Key Takeaways
- **REST API**: Implements CRUD with HTTP methods for a book store.
- **Modular Design**: Uses separate routes and controllers for clean code.
- **Testing**: Postman ensures endpoints work correctly.
- **Why It Matters**: Prepares you for MERN backend development with real-world API patterns.

---

## 10. Connection to Backend Development Roadmap
- **Previous Topics**:
  - **Section 6 (Path)**: Used for safe file paths in `bookController.js`.
  - **Section 7 (fs)**: `fs.promises` for persistent storage.
  - **Section 11 (Async/Await)**: Handles async file operations.
  - **Section 13 (Express.js)**: Provides routing and middleware for APIs.
  - **Section 14 (EJS)**: APIs can serve data to EJS templates or React frontends.
- **Current Section**: REST APIs are the core of MERN backends, enabling data exchange.
- **Next Steps**: MongoDB integration will replace file storage, using these CRUD patterns.
- **Bigger Picture**: Builds scalable APIs for MERN apps, connecting Node.js to React and MongoDB.

---

### Hands-On Practice
1. Set up and run the `book_store_api` project from Section 6.
2. Test all CRUD operations with Postman:
   - GET all books and by ID.
   - POST a new book.
   - PUT to update a book.
   - DELETE a book.
3. Modify the project:
   - Add validation for `author` in POST/PUT.
   - Add a `PATCH /api/books/:id` for partial updates (e.g., update only `title`).
   - Add a middleware to log request timestamps in `index.js`.
4. Test error cases:
   - POST without `title` (400).
   - GET/DELETE non-existent ID (404).
   - Remove `books.json` to test error handling.