## Table of Contents
1. [Intro & Demo](#1-intro--demo)
2. [Installing Node.js](#2-installing-nodejs)
3. [Running JavaScript Files with Node.js](#3-running-javascript-files-with-nodejs)
4. [Node Module System](#4-node-module-system)
5. [Node Package Manager (NPM)](#5-node-package-manager-npm)
6. [Path Module](#6-path-module)
7. [File System](#7-file-system)
8. [HTTP Module](#8-http-module)
9. [Callbacks and Callback Hell](#9-callbacks-and-callback-hell)
10. [Promises](#10-promises)
11. [Async/Await](#11-asyncawait)
12. [Event Emitter](#12-event-emitter)
13. [Express.js](#13-expressjs)
14. [EJS Template Engine](#14-ejs-template-engine)
15. [REST API Development](#15-rest-api-development)
16. [MongoDB and Mongoose Basics](#16-mongodb-and-mongoose-basics)
17. [Book Store API Development](#17-book-store-api-development)
18. [Authentication and Authorization](#18-authentication-and-authorization)
19. [File Upload](#19-file-upload)
20. [Change Password, Delete Image, Sorting, and Pagination](#20-change-password-delete-image-sorting-and-pagination)
21. [Intermediate MongoDB Concepts & Aggregation](#21-intermediate-mongodb-concepts--aggregation)
22. [Node.js with Socket.IO](#22-nodejs-with-socketio)
23. [Deployment Strategies](#23-deployment-strategies)
24. [Node.js with GraphQL](#24-nodejs-with-graphql)
25. [Node.js with TypeScript](#25-nodejs-with-typescript)
26. [Complete Book Store API Implementation](#26-complete-book-store-api-implementation)
27. [Step-by-Step Workflow](#27-step-by-step-workflow)
28. [Key Takeaways](#28-key-takeaways)
29. [Connection to Backend Development Roadmap](#29-connection-to-backend-development-roadmap)

---

## 1. Intro & Demo
*Timestamp: [00:00 - 06:23]*

### Concept & Theory
Node.js is a runtime environment that executes JavaScript outside browsers, enabling server-side applications like APIs and web servers. It’s built on Chrome’s V8 engine, making it fast and event-driven, ideal for I/O-heavy tasks in MERN stacks (MongoDB, Express, React, Node). The demo likely shows a simple server or script, highlighting Node’s power for backend development.

### Key Points
- **Purpose**: Run JavaScript on servers for APIs, web apps, or scripts.
- **Features**: Asynchronous, non-blocking, single-threaded with event loop.
- **Why Use It?**: Leverages JavaScript skills; scalable for MERN backends.
- **Best Practice**: Use for I/O tasks (e.g., APIs), not CPU-heavy computations.
- **Common Mistake**: Assuming browser features (e.g., DOM) exist—Node has no window/document.

### Code Example
```javascript
// hello.js
console.log('Hello from Node.js!');
```

*Run*: `node hello.js` → Output: `Hello from Node.js!`

*Explanation*: A simple script shows Node’s ability to execute JS, setting the stage for server-side programming.

---

## 2. Installing Node.js
*Timestamp: [06:23 - 09:51]*

### Concept & Theory
Node.js installation provides the runtime and NPM (Node Package Manager) for managing libraries. It’s the foundation for running JS files and building projects.

### Steps
1. Download LTS version from [nodejs.org](https://nodejs.org).
2. Install for your OS (Windows, macOS, Linux).
3. Verify: `node -v` (e.g., v20.17.0), `npm -v` (e.g., 10.8.3).

### Key Points
- **Node.js**: Executes JS; includes V8 engine.
- **NPM**: Manages packages and project setup.
- **Best Practice**: Use LTS for stability; consider `nvm` for version switching.
- **Common Mistake**: Installing outdated versions—check compatibility.

### Code Example
```bash
node -v
npm -v
```

*Explanation*: Verifies Node and NPM are installed, ensuring you can proceed with development.

---

## 3. Running JavaScript Files with Node.js
*Timestamp: [09:51 - 14:25]*

### Concept & Theory
Node.js runs `.js` files using `node filename.js`, executing code in a server environment without browser dependencies. This allows scripting and server logic.

### Code Example
```javascript
// script.js
const greet = (name) => `Hello, ${name}!`;
console.log(greet('Alice'));
```

*Run*: `node script.js` → Output: `Hello, Alice!`

### Key Points
- **Execution**: `node` interprets JS files using V8.
- **Best Practice**: Use small scripts to test logic; name files clearly.
- **Common Mistake**: Running without Node installed—verify with `node -v`.

*Explanation*: Demonstrates Node’s ability to execute basic JS, foundational for backend scripts.

---

## 4. Node Module System
*Timestamp: [14:25 - 30:24]*

### Concept & Theory
Node’s module system organizes code using `module.exports` to share functionality and `require()` to import it. Supports local files and built-in modules (e.g., `fs`, `http`).

### Code Example
- **math.js**:
  ```javascript
  const add = (a, b) => a + b;
  module.exports = { add };
  ```
- **main.js**:
  ```javascript
  const { add } = require('./math');
  console.log(add(2, 3)); // 5
  ```

*Run*: `node main.js`

### Key Points
- **Exports**: Share with `module.exports` or `exports.functionName`.
- **Require**: Import with `require('./path')` for local files or `require('module')` for built-ins.
- **Best Practice**: Export specific functions; use relative paths (`./`).
- **Common Mistake**: Incorrect paths—causes “Cannot find module” errors.

*Explanation*: Shows modularity, enabling reusable code, critical for larger projects like APIs.

---

## 5. Node Package Manager (NPM)
*Timestamp: [30:24 - 39:09]*

### Concept & Theory
NPM manages external libraries and project configuration via `package.json`. Commands like `npm install` add dependencies, and `npm init` sets up projects.

### Code Example
```bash
npm init -y  # Creates package.json
npm install express
```

- **package.json**:
  ```json
  {
      "name": "my-app",
      "version": "1.0.0",
      "dependencies": {
          "express": "^4.18.2"
      }
  }
  ```

### Key Points
- **Purpose**: Install packages; manage project metadata.
- **Commands**: `npm install <package>`, `npm install`, `npm start`.
- **Best Practice**: Commit `package.json`; use `^` for version flexibility.
- **Common Mistake**: Missing `npm install` after cloning—dependencies not installed.

*Explanation*: NPM simplifies dependency management, essential for using Express and Mongoose later.

---

## 6. Path Module
*Timestamp: [39:09 - 45:25]*

### Concept & Theory
The `path` module ensures cross-platform file path handling, avoiding issues with slashes (`/` vs. `\`) across OSes.

### Code Example
```javascript
const path = require('path');

const filePath = path.join(__dirname, 'data', 'file.txt');
console.log(filePath); // e.g., /path/to/project/data/file.txt

const ext = path.extname('file.txt');
console.log(ext); // .txt
```

### Key Points
- **Methods**: `path.join` (combines paths), `path.resolve` (absolute paths), `path.extname`.
- **Best Practice**: Always use `path` for file operations.
- **Common Mistake**: Hardcoding paths—breaks on different OSes.

*Explanation*: Ensures reliable file access, used in file-based APIs before MongoDB.

---

## 7. File System
*Timestamp: [45:25 - 57:53]*

### Concept & Theory
The `fs` module handles file operations (read, write, delete). `fs.promises` provides async methods for non-blocking I/O.

### Code Example
```javascript
const fs = require('fs').promises;
const path = require('path');

async function readWriteFile() {
    const filePath = path.join(__dirname, 'data.txt');
    await fs.writeFile(filePath, 'Hello, Node!');
    const content = await fs.readFile(filePath, 'utf8');
    console.log(content);
}

readWriteFile();
```

### Key Points
- **fs.promises**: Async read/write with promises.
- **Best Practice**: Use `utf8` for text; handle errors with try-catch.
- **Common Mistake**: Using sync methods (`fs.writeFileSync`)—blocks event loop.

*Explanation*: Critical for file-based storage before MongoDB; used in API prototypes.

---

## 8. HTTP Module
*Timestamp: [57:53 - 01:10:29]*

### Concept & Theory
The `http` module creates raw web servers, handling requests and responses. It’s the foundation for Express.

### Code Example
```javascript
const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello from Node!');
});

server.listen(3000, () => console.log('Server running on http://localhost:3000'));
```

### Key Points
- **Purpose**: Build HTTP servers; Express abstracts this.
- **Best Practice**: Set headers; use `res.end()` to close responses.
- **Common Mistake**: Missing `res.end()`—request hangs.

*Explanation*: Shows low-level server creation, leading to Express’s higher-level API.

---

## 9. Callbacks and Callback Hell
*Timestamp: [01:10:29 - 01:20:45]*

### Concept & Theory
Callbacks are functions passed to async operations, executed on completion. Nested callbacks create “callback hell,” making code hard to read and maintain.

### Code Example
```javascript
const fs = require('fs');

fs.readFile('data.txt', 'utf8', (err, data) => {
    if (err) return console.error(err);
    console.log(data);
    fs.writeFile('new.txt', data, (err) => {
        if (err) return console.error(err);
        console.log('Written!');
    });
});
```

### Key Points
- **Problem**: Nested callbacks are error-prone.
- **Best Practice**: Use promises/async-await to avoid nesting.
- **Common Mistake**: Ignoring errors—leads to unhandled exceptions.

*Explanation*: Introduces async challenges, solved by promises.

---

## 10. Promises
*Timestamp: [01:20:45 - 01:26:24]*

### Concept & Theory
Promises handle async operations with `.then()` and `.catch()`, providing a cleaner alternative to callbacks.

### Code Example
```javascript
const fs = require('fs').promises;

fs.readFile('data.txt', 'utf8')
    .then(data => console.log(data))
    .catch(err => console.error(err));
```

### Key Points
- **States**: Pending, fulfilled, rejected.
- **Best Practice**: Chain `.then()`; include `.catch()`.
- **Common Mistake**: Missing error handling—use `.catch()`.

*Explanation*: Simplifies async code, leading to async/await.

---

## 11. Async/Await
*Timestamp: [01:26:24 - 01:31:35]*

### Concept & Theory
Async/await uses `async` functions and `await` keywords to write synchronous-like async code, improving readability.

### Code Example
```javascript
const fs = require('fs').promises;

async function readAndLog() {
    try {
        const data = await fs.readFile('data.txt', 'utf8');
        console.log(data);
    } catch (err) {
        console.error(err);
    }
}

readAndLog();
```

### Key Points
- **Syntax**: `async` declares function; `await` pauses for promises.
- **Best Practice**: Use try-catch for errors.
- **Common Mistake**: Using `await` outside `async`—causes syntax errors.

*Explanation*: Makes async code clean, used in all API operations.

---

## 12. Event Emitter
*Timestamp: [01:31:35 - 01:39:40]*

### Concept & Theory (Summary)
`EventEmitter` enables event-driven programming, emitting and listening to custom events, underpinning Express’s request handling.

### Code Example
```javascript
const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.on('greet', (name) => console.log(`Hello, ${name}!`));
emitter.emit('greet', 'Alice');
```

### Key Points
- **Methods**: `on`, `emit`, `once`.
- **Best Practice**: Use clear event names; handle `error` events.
- **Common Mistake**: Event mismatches—events ignored.

*Explanation*: Powers Express’s routing and middleware.

---

## 13. Express.js
*Timestamp: [01:39:40 - 02:13:14]*

### Concept & Theory (Summary)
Express.js simplifies HTTP server creation with routing, middleware, and controllers, forming the backbone of MERN APIs.

### Code Example
```javascript
const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => res.send('Hello from Express!'));

app.listen(3000, () => console.log('Server running on http://localhost:3000'));
```

### Key Points
- **Features**: Routing, middleware, JSON parsing.
- **Best Practice**: Modularize routes/controllers; use status codes.
- **Common Mistake**: Missing `express.json()`—`req.body` undefined.

*Explanation*: Abstracts HTTP module for scalable APIs.

---

## 14. EJS Template Engine
*Timestamp: [02:13:14 - 02:28:33]*

### Concept & Theory (Summary)
EJS embeds JavaScript in HTML for server-side rendering, creating dynamic pages for Express apps.

### Code Example
```javascript
const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => res.render('index', { title: 'My App', user: 'Alice' }));

app.listen(3000);
```

- **views/index.ejs**:
  ```html
  <h1>Welcome, <%= user %></h1>
  ```

### Key Points
- **Syntax**: `<%= %>` for variables, `<% %>` for logic.
- **Best Practice**: Keep logic in controllers; use `<%= %>` for safety.
- **Common Mistake**: Missing `views` folder—causes 404s.

*Explanation*: Useful for server-rendered pages before React.

---

## 15. REST API Development
*Timestamp: [02:28:33 - 02:59:05]*

### Concept & Theory (Summary)
REST APIs use HTTP methods (GET, POST, PUT, DELETE) for CRUD operations, tested with Postman, enabling client-server communication.

### Code Example
```javascript
const express = require('express');
const app = express();
app.use(express.json());

let books = [];

app.get('/api/books', (req, res) => res.json(books));
app.post('/api/books', (req, res) => {
    const book = req.body;
    book.id = books.length + 1;
    books.push(book);
    res.status(201).json(book);
});

app.listen(3000);
```

### Key Points
- **CRUD**: GET (read), POST (create), PUT (update), DELETE (delete).
- **Best Practice**: Use `/api` prefix; validate inputs.
- **Common Mistake**: No JSON middleware—`req.body` undefined.

*Explanation*: Core for MERN backends, connecting to React.

---

## 16. MongoDB and Mongoose Basics
*Timestamp: [02:59:05 - 03:40:25]*

### Concept & Theory
**MongoDB** is a NoSQL database storing JSON-like documents in collections. **Mongoose** simplifies MongoDB operations with schemas and models, enabling type-safe CRUD.

### Key Concepts
- **MongoDB**: Stores data flexibly without rigid schemas.
- **Mongoose**: Defines schemas for validation, provides methods like `find`, `save`.
- **Operations**: Connect, create schemas, perform CRUD.

### Code Example
```javascript
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/bookstore');

const bookSchema = new mongoose.Schema({
    title: { type: String, required: true },
    author: String
});

const Book = mongoose.model('Book', bookSchema);

async function run() {
    const book = new Book({ title: 'Book One', author: 'Author A' });
    await book.save();
    const books = await Book.find();
    console.log(books);
}

run();
```

### Key Points
- **Connection**: `mongoose.connect` to local or cloud MongoDB.
- **Schema**: Enforces structure; `required` for validation.
- **Best Practice**: Handle connection errors; use async/await.
- **Common Mistake**: Missing MongoDB server—ensure `mongod` runs.

*Explanation*: Replaces file storage with a scalable database for APIs.

---

## 17. Book Store API Development
*Timestamp: [03:40:25 - 04:32:35]*

### Concept & Theory
This section builds a production-ready Book Store API, refining the REST API from Section 15 with MongoDB, modular routes, controllers, and error handling. It focuses on real-world API design, validation, and scalability.

### Code Example
- **models/book.js**:
  ```javascript
  const mongoose = require('mongoose');

  const bookSchema = new mongoose.Schema({
      title: { type: String, required: true },
      author: { type: String, required: true },
      price: { type: Number, required: true }
  });

  module.exports = mongoose.model('Book', bookSchema);
  ```

- **controllers/bookController.js**:
  ```javascript
  const Book = require('../models/book');

  module.exports = {
      getAllBooks: async (req, res) => {
          try {
              const books = await Book.find();
              res.json(books);
          } catch (err) {
              res.status(500).json({ error: err.message });
          }
      },
      createBook: async (req, res) => {
          try {
              const { title, author, price } = req.body;
              if (!title || !author || !price) {
                  return res.status(400).json({ error: 'All fields required' });
              }
              const book = new Book({ title, author, price });
              await book.save();
              res.status(201).json(book);
          } catch (err) {
              res.status(500).json({ error: err.message });
          }
      }
      // Add other CRUD methods similarly
  };
  ```

### Key Points
- **Modular Design**: Separate models, controllers, routes.
- **Validation**: Schema and manual checks for robust APIs.
- **Best Practice**: Use consistent error formats; prefix routes with `/api/v1`.
- **Common Mistake**: Overloading controllers—keep logic focused.

*Explanation*: Builds a scalable API, ready for advanced features like authentication.

---

## 18. Authentication and Authorization
*Timestamp: [04:32:35 - 06:01:12]*

### Concept & Theory
**Authentication** verifies user identity (e.g., login with username/password). **Authorization** controls access (e.g., admin vs. user roles). Use JSON Web Tokens (JWT) for stateless authentication in REST APIs.

### Key Concepts
- **JWT**: Token with header, payload, signature; verified with a secret.
- **Middleware**: Check tokens for protected routes.
- **Libraries**: `jsonwebtoken` for JWT, `bcrypt` for password hashing.

### Code Example
- Install: `npm install jsonwebtoken bcrypt`.
- **models/user.js**:
  ```javascript
  const mongoose = require('mongoose');

  const userSchema = new mongoose.Schema({
      email: { type: String, required: true, unique: true },
      password: { type: String, required: true },
      role: { type: String, enum: ['user', 'admin'], default: 'user' }
  });

  module.exports = mongoose.model('User', userSchema);
  ```

- **controllers/authController.js**:
  ```javascript
  const jwt = require('jsonwebtoken');
  const bcrypt = require('bcrypt');
  const User = require('../models/user');

  module.exports = {
      register: async (req, res) => {
          try {
              const { email, password } = req.body;
              const hashedPassword = await bcrypt.hash(password, 10);
              const user = new User({ email, password: hashedPassword });
              await user.save();
              res.status(201).json({ message: 'User created' });
          } catch (err) {
              res.status(500).json({ error: err.message });
          }
      },
      login: async (req, res) => {
          try {
              const { email, password } = req.body;
              const user = await User.findOne({ email });
              if (!user || !await bcrypt.compare(password, user.password)) {
                  return res.status(401).json({ error: 'Invalid credentials' });
              }
              const token = jwt.sign({ id: user._id, role: user.role }, 'secret', { expiresIn: '1h' });
              res.json({ token });
          } catch (err) {
              res.status(500).json({ error: err.message });
          }
      }
  };
  ```

- **middleware/auth.js**:
  ```javascript
  const jwt = require('jsonwebtoken');

  module.exports = (req, res, next) => {
      const token = req.header('Authorization')?.replace('Bearer ', '');
      if (!token) return res.status(401).json({ error: 'No token provided' });
      try {
          const decoded = jwt.verify(token, 'secret');
          req.user = decoded;
          next();
      } catch (err) {
          res.status(401).json({ error: 'Invalid token' });
      }
  };
  ```

### Key Points
- **Authentication**: Register/login with hashed passwords; issue JWT.
- **Authorization**: Middleware checks token; role-based access (e.g., admin-only routes).
- **Best Practice**: Use secure secrets; store JWT in HTTP-only cookies.
- **Common Mistake**: Storing plain passwords—always hash with `bcrypt`.

*Explanation*: Secures APIs, critical for protecting routes in MERN apps.

---

## 19. File Upload
*Timestamp: [06:01:12 - 06:47:30]*

### Concept & Theory
File uploads allow clients to send files (e.g., images) to the server, stored on disk or cloud. Use `multer` for handling multipart/form-data in Express.

### Code Example
- Install: `npm install multer`.
- **middleware/upload.js**:
  ```javascript
  const multer = require('multer');
  const path = require('path');

  const storage = multer.diskStorage({
      destination: './uploads/',
      filename: (req, file, cb) => {
          cb(null, `${Date.now()}-${file.originalname}`);
      }
  });

  const upload = multer({ storage });

  module.exports = upload;
  ```

- **controllers/bookController.js** (add):
  ```javascript
  const uploadBookCover: (req, res) => {
      try {
          res.json({ file: req.file.path });
      } catch (err) {
          res.status(500).json({ error: err.message });
      }
  }
  ```

- **routes/books.js** (add):
  ```javascript
  const upload = require('../middleware/upload');
  router.post('/upload', upload.single('cover'), bookController.uploadBookCover);
  ```

### Key Points
- **Multer**: Handles file uploads; stores files on disk or cloud.
- **Best Practice**: Validate file types/size; use unique filenames.
- **Common Mistake**: Missing `multipart/form-data` in Postman—set form-data for uploads.

*Explanation*: Adds file handling for book covers, enhancing API functionality.

---

## 20. Change Password, Delete Image, Sorting, and Pagination
*Timestamp: [06:47:30 - 07:26:03]*

### Concept & Theory
Enhance APIs with user features (change password, delete images) and data handling (sorting, pagination) for scalability and usability.

### Code Example
- **controllers/userController.js** (add):
  ```javascript
  const changePassword: async (req, res) => {
      try {
          const { oldPassword, newPassword } = req.body;
          const user = await User.findById(req.user.id);
          if (!await bcrypt.compare(oldPassword, user.password)) {
              return res.status(401).json({ error: 'Invalid old password' });
          }
          user.password = await bcrypt.hash(newPassword, 10);
          await user.save();
          res.json({ message: 'Password changed' });
      } catch (err) {
          res.status(500).json({ error: err.message });
      }
  }
  ```

- **controllers/bookController.js** (add for sorting/pagination):
  ```javascript
  const getBooksPaginated: async (req, res) => {
      try {
          const page = parseInt(req.query.page) || 1;
          const limit = parseInt(req.query.limit) || 10;
          const sort = req.query.sort || 'title';
          const books = await Book.find()
              .sort(sort)
              .skip((page - 1) * limit)
              .limit(limit);
          res.json(books);
      } catch (err) {
          res.status(500).json({ error: err.message });
      }
  }
  ```

### Key Points
- **Change Password**: Verify old password, hash new one.
- **Sorting/Pagination**: Use `sort`, `skip`, `limit` in Mongoose.
- **Best Practice**: Validate inputs; use query params for pagination.
- **Common Mistake**: Not sanitizing query params—leads to errors.

*Explanation*: Improves user experience and API efficiency.

---

## 21. Intermediate MongoDB Concepts & Aggregation
*Timestamp: [07:26:03 - 08:15:38]*

### Concept & Theory
MongoDB’s aggregation pipeline processes data through stages (e.g., `$match`, `$group`) for complex queries. Intermediate concepts include indexes and population.

### Code Example
```javascript
const getBookStats = async (req, res) => {
    try {
        const stats = await Book.aggregate([
            { $match: { price: { $gt: 0 } } },
            { $group: { _id: '$author', totalBooks: { $sum: 1 }, avgPrice: { $avg: '$price' } } }
        ]);
        res.json(stats);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Index for performance
Book.createIndex({ title: 1 });
```

### Key Points
- **Aggregation**: Pipeline for data transformation (filter, group, etc.).
- **Indexes**: Improve query performance.
- **Best Practice**: Use indexes for frequent queries; limit pipeline stages.
- **Common Mistake**: Overusing aggregation—keep simple queries with `find`.

*Explanation*: Enables advanced data analysis for reporting.

---

## 22. Node.js with Socket.IO
*Timestamp: [08:15:38 - 08:53:14]*

### Concept & Theory
**Socket.IO** enables real-time, bidirectional communication (e.g., notifications, chat) using WebSockets, complementing REST APIs.

### Code Example
- Install: `npm install socket.io`.
- **index.js** (update):
  ```javascript
  const http = require('http');
  const socketIo = require('socket.io');
  const server = http.createServer(app);
  const io = socketIo(server);

  io.on('connection', (socket) => {
      socket.on('newBook', (book) => {
          io.emit('bookAdded', book); // Broadcast to all clients
      });
  });

  server.listen(port, () => console.log(`Server running on http://localhost:${port}`));
  ```

### Key Points
- **Socket.IO**: Handles WebSocket connections; emits/listens to events.
- **Best Practice**: Use for real-time features; secure with auth.
- **Common Mistake**: Ignoring disconnects—handle `socket.on('disconnect')`.

*Explanation*: Adds real-time updates, like notifying users of new books.

---

## 23. Deployment Strategies
*Timestamp: [08:53:14 - 09:16:43]*

### Concept & Theory
Deploy Node.js apps to platforms like Heroku, AWS, or Render. Use environment variables, process managers (e.g., PM2), and MongoDB Atlas for production.

### Code Example
- **.env**:
  ```
  PORT=3000
  MONGODB_URI=mongodb://...
  JWT_SECRET=secret
  ```

- **Install PM2**: `npm install -g pm2`.
- **Run**: `pm2 start index.js --name bookstore`.

### Key Points
- **Platforms**: Heroku, AWS, Render, Vercel.
- **Best Practice**: Use `.env` for configs; monitor with PM2.
- **Common Mistake**: Hardcoding configs—use `dotenv` package.

*Explanation*: Ensures apps are production-ready with scalability.

---

## 24. Node.js with GraphQL
*Timestamp: [09:16:43 - 10:09:50]*

### Concept & Theory
GraphQL is an alternative to REST, allowing clients to request specific data via queries. Use `apollo-server-express` for integration with Express.

### Code Example
- Install: `npm install apollo-server-express graphql`.
- **graphql/schema.js**:
  ```javascript
  const { gql } = require('apollo-server-express');

  module.exports = gql`
      type Book {
          id: ID!
          title: String!
          author: String!
      }
      type Query {
          books: [Book]
      }
      type Mutation {
          createBook(title: String!, author: String!): Book
      }
  `;
  ```

- **graphql/resolvers.js**:
  ```javascript
  const Book = require('../models/book');

  module.exports = {
      Query: {
          books: async () => await Book.find()
      },
      Mutation: {
          createBook: async (_, { title, author }) => {
              const book = new Book({ title, author });
              await book.save();
              return book;
          }
      }
  };
  ```

- **index.js** (update):
  ```javascript
  const { ApolloServer } = require('apollo-server-express');
  const typeDefs = require('./graphql/schema');
  const resolvers = require('./graphql/resolvers');

  const server = new ApolloServer({ typeDefs, resolvers });
  await server.start();
  server.applyMiddleware({ app });

  app.listen(port, () => console.log(`GraphQL server on http://localhost:${port}${server.graphqlPath}`));
  ```

### Key Points
- **GraphQL**: Flexible queries; single endpoint (`/graphql`).
- **Best Practice**: Define clear schemas; validate inputs.
- **Common Mistake**: Overfetching—design precise queries.

*Explanation*: Offers flexible data fetching for complex MERN apps.

---

## 25. Node.js with TypeScript
*Timestamp: [10:09:50 - End]*

### Concept & Theory
TypeScript adds static types to JavaScript, improving code safety and maintainability. Use with Node.js for typed APIs.

### Code Example
- Install: `npm install typescript ts-node @types/node @types/express --save-dev`.
- **tsconfig.json**:
  ```json
  {
      "compilerOptions": {
          "target": "es6",
          "module": "commonjs",
          "outDir": "./dist",
          "strict": true
      }
  }
  ```

- **index.ts**:
  ```typescript
  import express, { Express, Request, Response } from 'express';

  const app: Express = express();
  app.use(express.json());

  app.get('/', (req: Request, res: Response) => res.send('Hello from TypeScript!'));

  const port: number = process.env.PORT ? parseInt(process.env.PORT) : 3000;
  app.listen(port, () => console.log(`Server running on http://localhost:${port}`));
  ```

*Run*: `npx ts-node index.ts`

### Key Points
- **TypeScript**: Adds types (e.g., `Request`, `Response`) for error prevention.
- **Best Practice**: Use strict mode; define interfaces for models.
- **Common Mistake**: Ignoring type errors—fix before running.

*Explanation*: Enhances code reliability for production APIs.

---

## 26. Complete Book Store API Implementation
This integrates all concepts into a production-ready Book Store API with MongoDB, authentication, file uploads, sorting/pagination, Socket.IO, GraphQL, and TypeScript.

### Directory Structure
```
book_store_api/
├── controllers/
│   ├── bookController.ts
│   ├── authController.ts
├── middleware/
│   ├── auth.ts
│   ├── upload.ts
├── models/
│   ├── book.ts
│   ├── user.ts
├── routes/
│   ├── books.ts
├── graphql/
│   ├── schema.ts
│   ├── resolvers.ts
├── uploads/
├── .env
├── tsconfig.json
├── package.json
├── index.ts
```

### Code
- **.env**:
  ```
  PORT=3000
  MONGODB_URI=mongodb://localhost:27017/bookstore
  JWT_SECRET=secret
  ```

- **tsconfig.json**:
  ```json
  {
      "compilerOptions": {
          "target": "es6",
          "module": "commonjs",
          "outDir": "./dist",
          "strict": true,
          "esModuleInterop": true
      }
  }
  ```

- **models/book.ts**:
  ```typescript
  import mongoose, { Schema, Document } from 'mongoose';

  interface IBook extends Document {
      title: string;
      author: string;
      price: number;
      cover?: string;
  }

  const bookSchema: Schema = new Schema({
      title: { type: String, required: true },
      author: { type: String, required: true },
      price: { type: Number, required: true },
      cover: { type: String }
  });

  export default mongoose.model<IBook>('Book', bookSchema);
  ```

- **models/user.ts**:
  ```typescript
  import mongoose, { Schema, Document } from 'mongoose';

  interface IUser extends Document {
      email: string;
      password: string;
      role: 'user' | 'admin';
  }

  const userSchema: Schema = new Schema({
      email: { type: String, required: true, unique: true },
      password: { type: String, required: true },
      role: { type: String, enum: ['user', 'admin'], default: 'user' }
  });

  export default mongoose.model<IUser>('User', userSchema);
  ```

- **middleware/auth.ts**:
  ```typescript
  import { Request, Response, NextFunction } from 'express';
  import jwt from 'jsonwebtoken';

  interface AuthRequest extends Request {
      user?: { id: string; role: string };
  }

  export const authMiddleware = (req: AuthRequest, res: Response, next: NextFunction) => {
      const token = req.header('Authorization')?.replace('Bearer ', '');
      if (!token) return res.status(401).json({ error: 'No token provided' });
      try {
          const decoded = jwt.verify(token, process.env.JWT_SECRET || 'secret');
          req.user = decoded;
          next();
      } catch (err) {
          res.status(401).json({ error: 'Invalid token' });
      }
  };
  ```

- **middleware/upload.ts**:
  ```typescript
  import multer from 'multer';
  import path from 'path';

  const storage = multer.diskStorage({
      destination: './uploads/',
      filename: (req, file, cb) => {
          cb(null, `${Date.now()}-${file.originalname}`);
      }
  });

  export const upload = multer({ storage });
  ```

- **controllers/authController.ts**:
  ```typescript
  import { Request, Response } from 'express';
  import bcrypt from 'bcrypt';
  import jwt from 'jsonwebtoken';
  import User from '../models/user';

  export const register = async (req: Request, res: Response) => {
      try {
          const { email, password } = req.body;
          const hashedPassword = await bcrypt.hash(password, 10);
          const user = new User({ email, password: hashedPassword });
          await user.save();
          res.status(201).json({ message: 'User created' });
      } catch (err: any) {
          res.status(500).json({ error: err.message });
      }
  };

  export const login = async (req: Request, res: Response) => {
      try {
          const { email, password } = req.body;
          const user = await User.findOne({ email });
          if (!user || !await bcrypt.compare(password, user.password)) {
              return res.status(401).json({ error: 'Invalid credentials' });
          }
          const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET || 'secret', { expiresIn: '1h' });
          res.json({ token });
      } catch (err: any) {
          res.status(500).json({ error: err.message });
      }
  };

  export const changePassword = async (req: AuthRequest, res: Response) => {
      try {
          const { oldPassword, newPassword } = req.body;
          const user = await User.findById(req.user?.id);
          if (!user || !await bcrypt.compare(oldPassword, user.password)) {
              return res.status(401).json({ error: 'Invalid old password' });
          }
          user.password = await bcrypt.hash(newPassword, 10);
          await user.save();
          res.json({ message: 'Password changed' });
      } catch (err: any) {
          res.status(500).json({ error: err.message });
      }
  };
  ```

- **controllers/bookController.ts**:
  ```typescript
  import { Request, Response } from 'express';
  import Book from '../models/book';

  export const getAllBooks = async (req: Request, res: Response) => {
      try {
          const page = parseInt(req.query.page as string) || 1;
          const limit = parseInt(req.query.limit as string) || 10;
          const sort = req.query.sort as string || 'title';
          const books = await Book.find()
              .sort(sort)
              .skip((page - 1) * limit)
              .limit(limit);
          res.json(books);
      } catch (err: any) {
          res.status(500).json({ error: err.message });
      }
  };

  export const getBookById = async (req: Request, res: Response) => {
      try {
          const book = await Book.findById(req.params.id);
          if (book) res.json(book);
          else res.status(404).json({ error: 'Book not found' });
      } catch (err: any) {
          res.status(500).json({ error: err.message });
      }
  };

  export const createBook = async (req: Request, res: Response) => {
      try {
          const { title, author, price } = req.body;
          if (!title || !author || !price) {
              return res.status(400).json({ error: 'All fields required' });
          }
          const book = new Book({ title, author, price, cover: req.file?.path });
          await book.save();
          res.status(201).json(book);
      } catch (err: any) {
          res.status(500).json({ error: err.message });
      }
  };

  export const updateBook = async (req: Request, res: Response) => {
      try {
          const { title, author, price } = req.body;
          if (!title || !author || !price) {
              return res.status(400).json({ error: 'All fields required' });
          }
          const book = await Book.findByIdAndUpdate(
              req.params.id,
              { title, author, price, cover: req.file?.path },
              { new: true }
          );
          if (book) res.json(book);
          else res.status(404).json({ error: 'Book not found' });
      } catch (err: any) {
          res.status(500).json({ error: err.message });
      }
  };

  export const deleteBook = async (req: Request, res: Response) => {
      try {
          const book = await Book.findByIdAndDelete(req.params.id);
          if (book) res.status(204).send();
          else res.status(404).json({ error: 'Book not found' });
      } catch (err: any) {
          res.status(500).json({ error: err.message });
      }
  };

  export const uploadBookCover = async (req: Request, res: Response) => {
      try {
          res.json({ file: req.file?.path });
      } catch (err: any) {
          res.status(500).json({ error: err.message });
      }
  };

  export const getBookStats = async (req: Request, res: Response) => {
      try {
          const stats = await Book.aggregate([
              { $match: { price: { $gt: 0 } } },
              { $group: { _id: '$author', totalBooks: { $sum: 1 }, avgPrice: { $avg: '$price' } } }
          ]);
          res.json(stats);
      } catch (err: any) {
          res.status(500).json({ error: err.message });
      }
  };
  ```

- **routes/books.ts**:
  ```typescript
  import { Router } from 'express';
  import { getAllBooks, getBookById, createBook, updateBook, deleteBook, uploadBookCover, getBookStats } from '../controllers/bookController';
  import { authMiddleware } from '../middleware/auth';
  import { upload } from '../middleware/upload';

  const router = Router();

  router.get('/', getAllBooks);
  router.get('/:id', getBookById);
  router.post('/', authMiddleware, upload.single('cover'), createBook);
  router.put('/:id', authMiddleware, upload.single('cover'), updateBook);
  router.delete('/:id', authMiddleware, deleteBook);
  router.post('/upload', authMiddleware, upload.single('cover'), uploadBookCover);
  router.get('/stats', getBookStats);

  export default router;
  ```

- **graphql/schema.ts**:
  ```typescript
  import { gql } from 'apollo-server-express';

  export default gql`
      type Book {
          id: ID!
          title: String!
          author: String!
          price: Float!
          cover: String
      }
      type Query {
          books: [Book]
          book(id: ID!): Book
      }
      type Mutation {
          createBook(title: String!, author: String!, price: Float!): Book
      }
  `;
  ```

- **graphql/resolvers.ts**:
  ```typescript
  import Book from '../models/book';

  export default {
      Query: {
          books: async () => await Book.find(),
          book: async (_: any, { id }: { id: string }) => await Book.findById(id)
      },
      Mutation: {
          createBook: async (_: any, { title, author, price }: { title: string; author: string; price: number }) => {
              const book = new Book({ title, author, price });
              await book.save();
              return book;
          }
      }
  };
  ```

- **index.ts**:
  ```typescript
  import express, { Express, Request, Response } from 'express';
  import mongoose from 'mongoose';
  import { ApolloServer } from 'apollo-server-express';
  import http from 'http';
  import { Server } from 'socket.io';
  import dotenv from 'dotenv';
  import bookRoutes from './routes/books';
  import typeDefs from './graphql/schema';
  import resolvers from './graphql/resolvers';

  dotenv.config();

  const app: Express = express();
  const server = http.createServer(app);
  const io = new Server(server);

  app.use(express.json());

  // Socket.IO
  io.on('connection', (socket) => {
      socket.on('newBook', (book) => {
          io.emit('bookAdded', book);
      });
  });

  // MongoDB
  mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/bookstore')
      .then(() => console.log('Connected to MongoDB'))
      .catch(err => console.error('MongoDB error:', err));

  // GraphQL
  const apolloServer = new ApolloServer({ typeDefs, resolvers });
  apolloServer.start().then(() => {
      apolloServer.applyMiddleware({ app });
  });

  // Routes
  app.use('/api/v1/books', bookRoutes);

  app.use((err: Error, req: Request, res: Response, next: any) => {
      console.error('Error:', err.message);
      res.status(500).json({ error: 'Internal Server Error' });
  });

  const port: number = process.env.PORT ? parseInt(process.env.PORT) : 3000;
  server.listen(port, () => console.log(`Server running on http://localhost:${port}`));
  ```

### Instructions to Run
1. **Install MongoDB**: Local or MongoDB Atlas; ensure running.
2. **Project Setup**:
   - Create folder: `mkdir book_store_api && cd book_store_api`.
   - Run: `npm init -y && npm install express mongoose jsonwebtoken bcrypt multer socket.io apollo-server-express graphql dotenv && npm install typescript ts-node @types/node @types/express @types/jsonwebtoken @types/bcrypt @types/multer --save-dev`.
   - Create `tsconfig.json` and folders/files as above.
   - Create `.env` with `PORT`, `MONGODB_URI`, `JWT_SECRET`.
3. **Run**: `npx ts-node index.ts`.
4. **Test with Postman**:
   - **POST /api/v1/auth/register**: `{ "email": "test@example.com", "password": "pass123" }` → 201.
   - **POST /api/v1/auth/login**: Get token.
   - **GET /api/v1/books**: List books (no auth).
   - **POST /api/v1/books**: Use token in Authorization header; send `{ "title": "Book", "author": "Author", "price": 10 }` with file in `form-data` → 201.
   - **GET /api/v1/books?page=1&limit=5&sort=price**: Paginated, sorted books.
   - **GraphQL**: Query at `/graphql`: `{ books { title } }`.
5. **Test Socket.IO**: Use client-side Socket.IO to listen for `bookAdded`.

---

## 27. Step-by-Step Workflow
1. **Setup Basics**: Install Node.js, MongoDB; set up project with TypeScript.
2. **Module System**: Organize with models, controllers, routes, middleware.
3. **MongoDB**: Connect with Mongoose; define schemas.
4. **REST API**: Implement CRUD with auth middleware.
5. **Features**: Add file upload, pagination, sorting, password change.
6. **Socket.IO**: Add real-time book notifications.
7. **GraphQL**: Add alternative API endpoint.
8. **Deploy**: Use PM2, `.env`, and Render/Heroku.

---

## 28. Key Takeaways
- **Node.js**: Runs JS on servers, enabling MERN backends.
- **Modules/NPM**: Organize and manage code/dependencies.
- **Async**: Callbacks → Promises → Async/Await for non-blocking I/O.
- **Express**: Simplifies HTTP with routing and middleware.
- **MongoDB/Mongoose**: Scalable NoSQL storage.
- **Advanced Features**: Auth, file uploads, real-time, GraphQL, TypeScript.

---

## 29. Connection to Backend Development Roadmap
- **Early Sections (1–11)**: Build foundational Node.js skills (modules, async).
- **Express/EJS/REST (12–15)**: Create web servers and APIs.
- **MongoDB (16–17)**: Add persistent storage.
- **Advanced (18–25)**: Secure, enhance, and deploy production APIs.
- **Next Steps**: Integrate React for full MERN stack.

---

### Hands-On Practice
1. Run the Book Store API.
2. Test all endpoints with Postman and GraphQL playground.
3. Add features: `PATCH` route, more validations.
4. Deploy to Render with PM2 and MongoDB Atlas.
5. Debug: Check MongoDB connection, token issues, file uploads.

Let me know if you need the next transcript or further clarification!

# Complete Node.js Backend Development Master Course

Let me take you through a comprehensive backend development journey from absolute basics to advanced concepts!

## ⭐ Chapter 1: Installing Node.js & Setup

### What is Node.js?
Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine that allows you to run JavaScript on the server-side.

### Installation Process

#### Windows/Mac/Linux Installation
```bash
# Download from nodejs.org (LTS version recommended)

# Verify installation
node --version
npm --version

# Expected output:
# v18.17.0
# 9.6.7
```

#### Setting Up Your First Project
```bash
# Create project directory
mkdir my-backend-app
cd my-backend-app

# Initialize package.json
npm init -y

# Create your first file
touch app.js
```

### Understanding package.json
```json
{
  "name": "my-backend-app",
  "version": "1.0.0",
  "description": "",
  "main": "app.js",
  "scripts": {
    "start": "node app.js",
    "dev": "nodemon app.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```

## ⭐ Chapter 2: Running JavaScript Files with Node.js

### Basic JavaScript Execution
```javascript
// app.js
console.log("Hello from Node.js!");

// Variables and data types
const name = "John";
let age = 30;
var isDeveloper = true;

console.log(`Name: ${name}, Age: ${age}, Developer: ${isDeveloper}`);

// Functions
function greet(person) {
    return `Hello, ${person}!`;
}

console.log(greet("Alice"));

// Arrow functions
const add = (a, b) => a + b;
console.log(`5 + 3 = ${add(5, 3)}`);
```

### Running Files
```bash
# Run JavaScript file
node app.js

# Run with arguments
node app.js argument1 argument2

# Interactive mode
node
> 2 + 2
4
> const name = "Node"
undefined
> console.log(name)
Node
```

### File System Interaction
```javascript
// process.js
console.log("Process Information:");
console.log("Current directory:", process.cwd());
console.log("Node version:", process.version);
console.log("Platform:", process.platform);
console.log("Arguments:", process.argv);

// Command line arguments
const args = process.argv.slice(2);
console.log("Your arguments:", args);
```

## ⭐ Chapter 3: Node Module System

### CommonJS Modules (require/module.exports)

#### Creating Modules
```javascript
// math.js
const PI = 3.14159;

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => {
    if (b === 0) throw new Error("Cannot divide by zero");
    return a / b;
};

// Exporting multiple functions
module.exports = {
    PI,
    add,
    subtract,
    multiply,
    divide
};

// Alternative export syntax
// exports.add = add;
// exports.PI = PI;
```

#### Importing Modules
```javascript
// app.js
const math = require('./math.js');

console.log("Math Operations:");
console.log("PI:", math.PI);
console.log("5 + 3 =", math.add(5, 3));
console.log("10 - 4 =", math.subtract(10, 4));
console.log("6 * 7 =", math.multiply(6, 7));
console.log("15 / 3 =", math.divide(15, 3));
```

#### Built-in Core Modules
```javascript
// Using built-in modules
const os = require('os');
const path = require('path');

console.log("OS Information:");
console.log("Platform:", os.platform());
console.log("Architecture:", os.arch());
console.log("CPU Cores:", os.cpus().length);
console.log("Free Memory:", os.freemem());
console.log("Total Memory:", os.totalmem());
console.log("Home Directory:", os.homedir());

console.log("\nPath Operations:");
console.log("Directory separator:", path.sep);
console.log("Current file:", __filename);
console.log("Current directory:", __dirname);
```

### ES6 Modules (import/export)

#### ES6 Module Syntax
```javascript
// math.mjs
export const PI = 3.14159;

export const add = (a, b) => a + b;
export const multiply = (a, b) => a * b;

// Default export
const calculator = {
    add,
    multiply,
    PI
};

export default calculator;
```

#### Importing ES6 Modules
```javascript
// app.mjs
import calculator, { PI, add } from './math.mjs';

console.log("ES6 Modules:");
console.log("PI:", PI);
console.log("8 + 6 =", add(8, 6));
console.log("Calculator:", calculator);
```

## ⭐ Chapter 4: Node Package Manager (NPM)

### Package Management Basics
```bash
# Initialize project
npm init

# Install packages
npm install express mongoose

# Install dev dependencies
npm install --save-dev nodemon

# Install specific version
npm install express@4.18.2

# Global installation
npm install -g nodemon

# View installed packages
npm list

# Update packages
npm update

# Uninstall packages
npm uninstall mongoose
```

### package.json Deep Dive
```json
{
  "name": "my-advanced-app",
  "version": "1.0.0",
  "description": "A comprehensive Node.js backend application",
  "main": "app.js",
  "scripts": {
    "start": "node app.js",
    "dev": "nodemon app.js",
    "test": "jest",
    "build": "webpack",
    "lint": "eslint .",
    "clean": "rm -rf dist"
  },
  "dependencies": {
    "express": "^4.18.2",
    "mongoose": "^7.3.0",
    "cors": "^2.8.5",
    "dotenv": "^16.1.4"
  },
  "devDependencies": {
    "nodemon": "^2.0.22",
    "jest": "^29.5.0",
    "eslint": "^8.42.0"
  },
  "engines": {
    "node": ">=18.0.0"
  },
  "keywords": ["nodejs", "backend", "api"],
  "author": "Your Name",
  "license": "MIT"
}
```

### npm Scripts in Action
```javascript
// package.json scripts explanation
"scripts": {
  "start": "node app.js",                    // Production start
  "dev": "nodemon app.js",                   // Development with auto-restart
  "test": "jest --coverage",                 // Run tests with coverage
  "test:watch": "jest --watch",              // Test in watch mode
  "lint": "eslint .",                        // Code linting
  "lint:fix": "eslint . --fix",              // Auto-fix linting issues
  "clean": "rm -rf dist && mkdir dist",      // Clean build directory
  "build": "npm run clean && webpack"        // Build process
}
```

## ⭐ Chapter 5: Path Module

### Comprehensive Path Operations
```javascript
const path = require('path');

// Basic path operations
console.log("=== PATH MODULE DEMO ===");

const filePath = '/users/john/documents/project/app.js';

console.log("Original path:", filePath);
console.log("Directory name:", path.dirname(filePath));
console.log("File name:", path.basename(filePath));
console.log("File extension:", path.extname(filePath));
console.log("File name without extension:", path.basename(filePath, path.extname(filePath)));

// Path joining and resolution
console.log("\n=== PATH JOINING ===");
console.log("Join paths:", path.join('/users', 'john', 'documents', 'app.js'));
console.log("Resolve paths:", path.resolve('src', 'app.js'));
console.log("Relative path:", path.relative('/users/john', '/users/john/documents/file.txt'));

// Platform-specific paths
console.log("\n=== PLATFORM SPECIFIC ===");
console.log("Path separator:", path.sep);
console.log("Delimiter:", path.delimiter);
console.log("Normalized path:", path.normalize('/users//john/../documents/./file.txt'));

// Working with __dirname and __filename
console.log("\n=== CURRENT FILE INFO ===");
console.log("Current file:", __filename);
console.log("Current directory:", __dirname);
console.log("Relative to current:", path.relative(__dirname, __filename));

// Practical examples
console.log("\n=== PRACTICAL EXAMPLES ===");
const configPath = path.join(__dirname, 'config', 'database.json');
console.log("Config file path:", configPath);

const publicPath = path.resolve('public', 'images');
console.log("Public images path:", publicPath);
```

### Real-world Path Usage
```javascript
// file-structure.js
const path = require('path');

class FileManager {
    constructor(baseDir) {
        this.baseDir = path.resolve(baseDir);
    }
    
    getFullPath(relativePath) {
        return path.join(this.baseDir, relativePath);
    }
    
    isSafePath(userPath) {
        const resolvedPath = path.resolve(this.baseDir, userPath);
        return resolvedPath.startsWith(this.baseDir);
    }
    
    getFileInfo(filePath) {
        return {
            name: path.basename(filePath),
            extension: path.extname(filePath),
            directory: path.dirname(filePath),
            absolute: path.resolve(filePath)
        };
    }
}

// Usage
const fm = new FileManager(__dirname);
console.log("File Manager Demo:");
console.log("Full path for config:", fm.getFullPath('config/app.json'));
console.log("Is safe path?", fm.isSafePath('../sensitive-file'));
console.log("File info:", fm.getFileInfo('/users/test/document.txt'));
```

## ⭐ Chapter 6: File System Module

### Synchronous File Operations
```javascript
const fs = require('fs');
const path = require('path');

console.log("=== FILE SYSTEM - SYNCHRONOUS ===");

// Reading files synchronously
try {
    const data = fs.readFileSync('./example.txt', 'utf8');
    console.log("File content:", data);
} catch (error) {
    console.error("Error reading file:", error.message);
}

// Writing files synchronously
try {
    fs.writeFileSync('./output.txt', 'Hello, Node.js File System!');
    console.log("File written successfully");
} catch (error) {
    console.error("Error writing file:", error.message);
}

// Appending to files
try {
    fs.appendFileSync('./output.txt', '\nThis is appended content!');
    console.log("Content appended successfully");
} catch (error) {
    console.error("Error appending to file:", error.message);
}

// File operations
try {
    const stats = fs.statSync('./output.txt');
    console.log("File stats:");
    console.log(" - Size:", stats.size, "bytes");
    console.log(" - Created:", stats.birthtime);
    console.log(" - Modified:", stats.mtime);
    console.log(" - Is directory?", stats.isDirectory());
    console.log(" - Is file?", stats.isFile());
} catch (error) {
    console.error("Error getting file stats:", error.message);
}
```

### Asynchronous File Operations
```javascript
console.log("\n=== FILE SYSTEM - ASYNCHRONOUS ===");

// Callback-based file operations
fs.readFile('./example.txt', 'utf8', (err, data) => {
    if (err) {
        console.error("Error reading file:", err.message);
        return;
    }
    console.log("Async file content:", data);
});

// Writing file asynchronously
fs.writeFile('./async-output.txt', 'Async write operation', (err) => {
    if (err) {
        console.error("Error writing file:", err.message);
        return;
    }
    console.log("Async file written successfully");
    
    // Appending after write
    fs.appendFile('./async-output.txt', '\nAppended async content', (err) => {
        if (err) {
            console.error("Error appending:", err.message);
            return;
        }
        console.log("Content appended async");
    });
});

// Checking file existence
fs.access('./example.txt', fs.constants.F_OK, (err) => {
    if (err) {
        console.log("File doesn't exist");
    } else {
        console.log("File exists");
    }
});
```

### Promise-based File Operations
```javascript
const fs = require('fs').promises;

console.log("\n=== FILE SYSTEM - PROMISE-BASED ===");

async function fileOperations() {
    try {
        // Read file
        const data = await fs.readFile('./example.txt', 'utf8');
        console.log("Promise-based read:", data);
        
        // Write file
        await fs.writeFile('./promise-output.txt', 'Promise-based write');
        console.log("Promise file written");
        
        // Append to file
        await fs.appendFile('./promise-output.txt', '\nPromise appended');
        console.log("Promise content appended");
        
        // Get file stats
        const stats = await fs.stat('./promise-output.txt');
        console.log("Promise file stats - Size:", stats.size);
        
        // Read directory
        const files = await fs.readdir('.');
        console.log("Directory files:", files);
        
    } catch (error) {
        console.error("Promise error:", error.message);
    }
}

fileOperations();
```

### Advanced File Operations
```javascript
console.log("\n=== ADVANCED FILE OPERATIONS ===");

// Working with directories
async function directoryOperations() {
    try {
        // Create directory
        await fs.mkdir('./test-directory', { recursive: true });
        console.log("Directory created");
        
        // Create file in directory
        await fs.writeFile('./test-directory/test.txt', 'Directory test');
        
        // Read directory contents
        const items = await fs.readdir('./test-directory');
        console.log("Directory contents:", items);
        
        // Remove file
        await fs.unlink('./test-directory/test.txt');
        console.log("File removed");
        
        // Remove directory
        await fs.rmdir('./test-directory');
        console.log("Directory removed");
        
    } catch (error) {
        console.error("Directory operation error:", error.message);
    }
}

directoryOperations();

// File streams for large files
const readStream = fs.createReadStream('./large-file.txt', 'utf8');
const writeStream = fs.createWriteStream('./copy-large-file.txt');

readStream.on('data', (chunk) => {
    console.log("Received chunk:", chunk.length, "bytes");
    writeStream.write(chunk);
});

readStream.on('end', () => {
    console.log("File read complete");
    writeStream.end();
});

readStream.on('error', (error) => {
    console.error("Stream error:", error);
});
```

## ⭐ Chapter 7: HTTP Module

### Creating a Basic HTTP Server
```javascript
const http = require('http');
const url = require('url');
const querystring = require('querystring');

console.log("=== BASIC HTTP SERVER ===");

// Simple HTTP server
const server = http.createServer((req, res) => {
    const { method, url: reqUrl } = req;
    const parsedUrl = url.parse(reqUrl, true);
    const { pathname, query } = parsedUrl;
    
    console.log(`${method} ${pathname}`);
    
    // Set response headers
    res.setHeader('Content-Type', 'application/json');
    
    // Handle different routes
    if (pathname === '/' && method === 'GET') {
        res.writeHead(200);
        res.end(JSON.stringify({ 
            message: 'Welcome to our HTTP Server!',
            timestamp: new Date().toISOString()
        }));
    } 
    else if (pathname === '/users' && method === 'GET') {
        res.writeHead(200);
        res.end(JSON.stringify({ 
            users: [
                { id: 1, name: 'John Doe', email: 'john@example.com' },
                { id: 2, name: 'Jane Smith', email: 'jane@example.com' }
            ]
        }));
    }
    else if (pathname === '/users' && method === 'POST') {
        let body = '';
        
        // Collect request body
        req.on('data', chunk => {
            body += chunk.toString();
        });
        
        // Process when complete
        req.on('end', () => {
            try {
                const userData = JSON.parse(body);
                res.writeHead(201);
                res.end(JSON.stringify({ 
                    message: 'User created successfully',
                    user: { id: Date.now(), ...userData }
                }));
            } catch (error) {
                res.writeHead(400);
                res.end(JSON.stringify({ error: 'Invalid JSON' }));
            }
        });
    }
    else if (pathname.startsWith('/users/') && method === 'GET') {
        const userId = pathname.split('/')[2];
        res.writeHead(200);
        res.end(JSON.stringify({ 
            user: { 
                id: userId, 
                name: 'User ' + userId,
                email: `user${userId}@example.com`
            }
        }));
    }
    else {
        res.writeHead(404);
        res.end(JSON.stringify({ error: 'Route not found' }));
    }
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`HTTP Server running on http://localhost:${PORT}`);
    console.log('Available routes:');
    console.log('  GET  /');
    console.log('  GET  /users');
    console.log('  POST /users');
    console.log('  GET  /users/:id');
});
```

### Advanced HTTP Server with Routing
```javascript
const http = require('http');

class HTTPServer {
    constructor() {
        this.routes = {
            GET: {},
            POST: {},
            PUT: {},
            DELETE: {}
        };
        this.middlewares = [];
    }
    
    get(path, handler) {
        this.routes.GET[path] = handler;
    }
    
    post(path, handler) {
        this.routes.POST[path] = handler;
    }
    
    use(middleware) {
        this.middlewares.push(middleware);
    }
    
    handleRequest(req, res) {
        // Run middlewares
        this.runMiddlewares(req, res, () => {
            const { method, url } = req;
            const routeHandler = this.routes[method] && this.routes[method][url];
            
            if (routeHandler) {
                routeHandler(req, res);
            } else {
                res.writeHead(404, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ error: 'Route not found' }));
            }
        });
    }
    
    runMiddlewares(req, res, callback) {
        let index = 0;
        
        const next = () => {
            if (index < this.middlewares.length) {
                const middleware = this.middlewares[index++];
                middleware(req, res, next);
            } else {
                callback();
            }
        };
        
        next();
    }
    
    start(port = 3000) {
        const server = http.createServer((req, res) => {
            this.handleRequest(req, res);
        });
        
        server.listen(port, () => {
            console.log(`Advanced HTTP Server running on port ${port}`);
        });
        
        return server;
    }
}

// Usage
const app = new HTTPServer();

// Middleware
app.use((req, res, next) => {
    console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
    next();
});

app.use((req, res, next) => {
    res.setHeader('Content-Type', 'application/json');
    next();
});

// Routes
app.get('/', (req, res) => {
    res.writeHead(200);
    res.end(JSON.stringify({ message: 'Home Page' }));
});

app.get('/api/users', (req, res) => {
    res.writeHead(200);
    res.end(JSON.stringify({ 
        users: [
            { id: 1, name: 'Alice' },
            { id: 2, name: 'Bob' }
        ]
    }));
});

app.post('/api/users', (req, res) => {
    let body = '';
    req.on('data', chunk => body += chunk);
    req.on('end', () => {
        const user = JSON.parse(body);
        res.writeHead(201);
        res.end(JSON.stringify({ 
            message: 'User created', 
            user: { id: Date.now(), ...user } 
        }));
    });
});

// Start server
app.start(4000);
```

## ⭐ Chapter 8: Callbacks and Callback Hell

### Understanding Callbacks
```javascript
console.log("=== CALLBACKS FUNDAMENTALS ===");

// Basic callback example
function greet(name, callback) {
    console.log(`Hello, ${name}!`);
    callback();
}

function sayGoodbye() {
    console.log("Goodbye!");
}

greet("John", sayGoodbye);

// Callbacks with parameters
function processData(data, callback) {
    console.log("Processing data:", data);
    const result = data * 2;
    callback(result);
}

processData(5, (result) => {
    console.log("Processing complete. Result:", result);
});

// Error-first callbacks (Node.js convention)
function divide(a, b, callback) {
    if (b === 0) {
        callback(new Error("Cannot divide by zero"), null);
    } else {
        callback(null, a / b);
    }
}

divide(10, 2, (error, result) => {
    if (error) {
        console.error("Error:", error.message);
    } else {
        console.log("Division result:", result);
    }
});

divide(10, 0, (error, result) => {
    if (error) {
        console.error("Error:", error.message);
    } else {
        console.log("Division result:", result);
    }
});
```

### Callback Hell (Pyramid of Doom)
```javascript
console.log("\n=== CALLBACK HELL EXAMPLE ===");

// Simulated asynchronous functions
function getUser(id, callback) {
    setTimeout(() => {
        console.log("Getting user from database...");
        callback(null, { id: id, name: 'John Doe' });
    }, 1000);
}

function getPosts(userId, callback) {
    setTimeout(() => {
        console.log("Getting user posts...");
        callback(null, [
            { id: 1, title: 'Post 1', userId: userId },
            { id: 2, title: 'Post 2', userId: userId }
        ]);
    }, 1000);
}

function getComments(postId, callback) {
    setTimeout(() => {
        console.log("Getting post comments...");
        callback(null, [
            { id: 1, text: 'Great post!', postId: postId },
            { id: 2, text: 'Thanks for sharing', postId: postId }
        ]);
    }, 1000);
}

// CALLBACK HELL - Nested callbacks
getUser(1, (err, user) => {
    if (err) {
        console.error("Error getting user:", err);
        return;
    }
    console.log("User:", user);
    
    getPosts(user.id, (err, posts) => {
        if (err) {
            console.error("Error getting posts:", err);
            return;
        }
        console.log("Posts:", posts);
        
        getComments(posts[0].id, (err, comments) => {
            if (err) {
                console.error("Error getting comments:", err);
                return;
            }
            console.log("Comments:", comments);
            
            // More nested callbacks...
            console.log("Final result: All data retrieved!");
        });
    });
});
```

### Solving Callback Hell
```javascript
console.log("\n=== SOLVING CALLBACK HELL ===");

// Solution 1: Named functions
function handleUser(err, user) {
    if (err) {
        console.error("Error getting user:", err);
        return;
    }
    console.log("User:", user);
    getPosts(user.id, handlePosts);
}

function handlePosts(err, posts) {
    if (err) {
        console.error("Error getting posts:", err);
        return;
    }
    console.log("Posts:", posts);
    getComments(posts[0].id, handleComments);
}

function handleComments(err, comments) {
    if (err) {
        console.error("Error getting comments:", err);
        return;
    }
    console.log("Comments:", comments);
    console.log("Final result: All data retrieved (named functions)!");
}

// Using named functions
getUser(2, handleUser);

// Solution 2: Using async library (conceptual)
class AsyncFlow {
    static series(tasks, finalCallback) {
        let index = 0;
        const results = [];
        
        function next() {
            if (index < tasks.length) {
                const task = tasks[index++];
                task((err, result) => {
                    if (err) {
                        finalCallback(err);
                    } else {
                        results.push(result);
                        next();
                    }
                });
            } else {
                finalCallback(null, results);
            }
        }
        
        next();
    }
}

// Using series flow
AsyncFlow.series([
    (cb) => getUser(3, cb),
    (cb) => getPosts(3, cb),
    (cb) => getComments(1, cb)
], (err, results) => {
    if (err) {
        console.error("Error in series:", err);
    } else {
        console.log("Series results:", results);
    }
});
```

## ⭐ Chapter 9: Promises

### Promise Fundamentals
```javascript
console.log("=== PROMISES FUNDAMENTALS ===");

// Creating promises
const simplePromise = new Promise((resolve, reject) => {
    const success = true;
    
    setTimeout(() => {
        if (success) {
            resolve("Promise resolved successfully!");
        } else {
            reject(new Error("Promise rejected!"));
        }
    }, 2000);
});

// Using promises
simplePromise
    .then(result => {
        console.log("Success:", result);
    })
    .catch(error => {
        console.error("Error:", error.message);
    })
    .finally(() => {
        console.log("Promise completed (finally)");
    });

// Promise-based versions of our async functions
function getUserPromise(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Getting user from database...");
            resolve({ id: id, name: 'John Doe', email: 'john@example.com' });
        }, 1000);
    });
}

function getPostsPromise(userId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Getting user posts...");
            resolve([
                { id: 1, title: 'Post 1', userId: userId },
                { id: 2, title: 'Post 2', userId: userId }
            ]);
        }, 1000);
    });
}

function getCommentsPromise(postId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Getting post comments...");
            resolve([
                { id: 1, text: 'Great post!', postId: postId },
                { id: 2, text: 'Thanks for sharing', postId: postId }
            ]);
        }, 1000);
    });
}
```

### Promise Chaining
```javascript
console.log("\n=== PROMISE CHAINING ===");

// Solving callback hell with promises
getUserPromise(1)
    .then(user => {
        console.log("User:", user);
        return getPostsPromise(user.id);
    })
    .then(posts => {
        console.log("Posts:", posts);
        return getCommentsPromise(posts[0].id);
    })
    .then(comments => {
        console.log("Comments:", comments);
        console.log("All data retrieved with promises!");
    })
    .catch(error => {
        console.error("Error in promise chain:", error);
    });

// Advanced promise chaining
getUserPromise(2)
    .then(user => {
        console.log("\nAdvanced chain - User:", user);
        // Return multiple promises
        return Promise.all([
            getPostsPromise(user.id),
            getCommentsPromise(1) // Using fixed post ID for demo
        ]);
    })
    .then(([posts, comments]) => {
        console.log("Posts:", posts);
        console.log("Comments:", comments);
        return "All operations completed";
    })
    .then(finalMessage => {
        console.log(finalMessage);
    })
    .catch(error => {
        console.error("Error:", error);
    });
```

### Promise Utility Methods
```javascript
console.log("\n=== PROMISE UTILITY METHODS ===");

// Promise.all - Wait for all promises
const promise1 = getUserPromise(1);
const promise2 = getPostsPromise(1);
const promise3 = getCommentsPromise(1);

Promise.all([promise1, promise2, promise3])
    .then(([user, posts, comments]) => {
        console.log("Promise.all Results:");
        console.log("User:", user);
        console.log("Posts:", posts);
        console.log("Comments:", comments);
    })
    .catch(error => {
        console.error("Error in Promise.all:", error);
    });

// Promise.race - First promise to settle
const timeoutPromise = new Promise((_, reject) => {
    setTimeout(() => reject(new Error("Timeout!")), 500);
});

Promise.race([getUserPromise(1), timeoutPromise])
    .then(result => {
        console.log("Promise.race winner:", result);
    })
    .catch(error => {
        console.error("Promise.race error:", error.message);
    });

// Promise.allSettled - Wait for all to complete
Promise.allSettled([
    getUserPromise(1),
    Promise.reject(new Error("Intentional error")),
    getPostsPromise(1)
])
.then(results => {
    console.log("\nPromise.allSettled Results:");
    results.forEach((result, index) => {
        if (result.status === 'fulfilled') {
            console.log(`Promise ${index}: Success -`, result.value);
        } else {
            console.log(`Promise ${index}: Error -`, result.reason.message);
        }
    });
});

// Promise.any - First successful promise
Promise.any([
    Promise.reject(new Error("First failed")),
    Promise.reject(new Error("Second failed")),
    getUserPromise(1)
])
.then(result => {
    console.log("\nPromise.any success:", result);
})
.catch(errors => {
    console.log("All promises failed in Promise.any");
});
```

## ⭐ Chapter 10: Async/Await

### Async/Await Fundamentals
```javascript
console.log("=== ASYNC/AWAIT FUNDAMENTALS ===");

// Basic async function
async function fetchUserData() {
    try {
        console.log("Starting async operation...");
        
        const user = await getUserPromise(1);
        console.log("User received:", user);
        
        const posts = await getPostsPromise(user.id);
        console.log("Posts received:", posts);
        
        const comments = await getCommentsPromise(posts[0].id);
        console.log("Comments received:", comments);
        
        return { user, posts, comments };
        
    } catch (error) {
        console.error("Error in async function:", error);
        throw error; // Re-throw the error
    }
}

// Using async function
fetchUserData()
    .then(data => {
        console.log("Final data:", data);
    })
    .catch(error => {
        console.error("Final error:", error);
    });

// Async function with parallel execution
async function fetchDataParallel() {
    try {
        console.log("\n=== PARALLEL EXECUTION ===");
        
        // Execute promises in parallel
        const [user, posts, comments] = await Promise.all([
            getUserPromise(2),
            getPostsPromise(2),
            getCommentsPromise(1)
        ]);
        
        console.log("Parallel results:");
        console.log("User:", user);
        console.log("Posts:", posts);
        console.log("Comments:", comments);
        
        return { user, posts, comments };
        
    } catch (error) {
        console.error("Error in parallel execution:", error);
    }
}

fetchDataParallel();
```

### Advanced Async/Await Patterns
```javascript
console.log("\n=== ADVANCED ASYNC/AWAIT PATTERNS ===");

// Error handling patterns
async function robustDataFetch() {
    // Using try-catch for individual awaits
    let user;
    try {
        user = await getUserPromise(1);
    } catch (error) {
        console.error("Failed to get user, using default");
        user = { id: 0, name: 'Default User' };
    }
    
    // Using .catch() with await
    const posts = await getPostsPromise(user.id)
        .catch(() => {
            console.log("Failed to get posts, using empty array");
            return [];
        });
    
    return { user, posts };
}

robustDataFetch().then(console.log);

// Async functions in loops
async function processMultipleUsers() {
    const userIds = [1, 2, 3];
    const users = [];
    
    // Sequential processing
    console.log("\nSequential processing:");
    for (const id of userIds) {
        const user = await getUserPromise(id);
        users.push(user);
        console.log(`Processed user ${id}`);
    }
    
    // Parallel processing
    console.log("\nParallel processing:");
    const userPromises = userIds.map(id => getUserPromise(id));
    const parallelUsers = await Promise.all(userPromises);
    console.log("All users processed in parallel:", parallelUsers);
    
    return users;
}

processMultipleUsers();

// Async IIFE (Immediately Invoked Function Expression)
(async () => {
    console.log("\n=== ASYNC IIFE ===");
    
    try {
        const user = await getUserPromise(1);
        const posts = await getPostsPromise(user.id);
        
        console.log("IIFE Results:");
        console.log("User:", user.name);
        console.log("Posts count:", posts.length);
        
    } catch (error) {
        console.error("IIFE Error:", error);
    }
})();
```

### Real-world Async/Await Examples
```javascript
console.log("\n=== REAL-WORLD ASYNC/AWAIT EXAMPLES ===");

// API service class with async/await
class ApiService {
    async getUserWithPosts(userId) {
        try {
            const user = await this.fetchUser(userId);
            const posts = await this.fetchUserPosts(userId);
            
            return {
                ...user,
                posts: posts,
                postCount: posts.length
            };
            
        } catch (error) {
            console.error(`Failed to get user ${userId} with posts:`, error);
            throw error;
        }
    }
    
    async fetchUser(userId) {
        // Simulate API call
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({
                    id: userId,
                    name: `User ${userId}`,
                    email: `user${userId}@example.com`
                });
            }, 500);
        });
    }
    
    async fetchUserPosts(userId) {
        // Simulate API call
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve([
                    { id: 1, title: `Post 1 by User ${userId}`, content: '...' },
                    { id: 2, title: `Post 2 by User ${userId}`, content: '...' }
                ]);
            }, 500);
        });
    }
    
    async getMultipleUsers(userIds) {
        const userPromises = userIds.map(id => this.getUserWithPosts(id));
        return Promise.all(userPromises);
    }
}

// Usage
const apiService = new ApiService();

(async () => {
    console.log("=== API SERVICE DEMO ===");
    
    // Single user with posts
    const userWithPosts = await apiService.getUserWithPosts(1);
    console.log("User with posts:", userWithPosts);
    
    // Multiple users
    const multipleUsers = await apiService.getMultipleUsers([1, 2, 3]);
    console.log("Multiple users:", multipleUsers);
    
})().catch(console.error);
```

This completes the first 10 chapters! Each chapter builds upon the previous one, creating a solid foundation in Node.js backend development. The concepts covered so far include:

- **Node.js setup and basics**
- **Module system (CommonJS vs ES6)**
- **Package management with npm**
- **File system operations**
- **HTTP server creation**
- **Asynchronous programming (Callbacks, Promises, Async/Await)**
- **Error handling patterns**

Would you like me to continue with the remaining chapters (Event Emitter, Express.js, EJS, REST APIs, MongoDB, etc.)? Each will be covered with the same depth and practical code examples.

