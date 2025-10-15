# 🚀 Node.js + GraphQL (Beginner-Friendly Project)

---

## 1️⃣ What is GraphQL?

**Kya hai?**
GraphQL is a **query language for APIs**. It lets clients **ask exactly the data they need**, unlike REST where endpoints return fixed data.

**Problem with REST:**

* `/books` returns all fields; frontend may need only `title` → over-fetching
* `/books/:id` → multiple requests for related data (author info, ratings)

**Solution:** GraphQL → Single `/graphql` endpoint, client specifies fields:

```graphql
query {
  books {
    title
    author
  }
}
```

---

## 2️⃣ Why GraphQL?

1. **Flexible Queries:** Fetch only what you need
2. **Single Endpoint:** Reduces multiple REST calls
3. **Nested Data:** Query books + authors in one request
4. **Better MERN Integration:** React can request only needed fields → less bandwidth

---

## 3️⃣ How GraphQL Works (Logic)

**Flow:**

1. **Schema** → defines types, queries, mutations
2. **Resolvers** → functions fetching/mutating data
3. **Client sends query/mutation** → server executes resolvers → returns exactly requested data

---

## 4️⃣ Small Project: Book API with GraphQL

### 4.1 Project Setup

```bash
mkdir graphql-book-api
cd graphql-book-api
npm init -y
npm install express graphql express-graphql mongoose dotenv
```

**Folder Structure:**

```
graphql-book-api/
│-- index.js
│-- .env
│-- models/
│    └-- Book.js
```

---

### 4.2 .env File

```env
PORT=5000
MONGO_URI=mongodb://localhost/bookstore
```

---

### 4.3 Basic Server Setup

**index.js**

```javascript
require('dotenv').config();
const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');
const mongoose = require('mongoose');
const Book = require('./models/Book');

const app = express();

// Connect MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error(err));

// Define Schema
const schema = buildSchema(`
  type Book {
    id: ID!
    title: String!
    author: String!
  }

  type Query {
    books: [Book]
  }

  type Mutation {
    addBook(title: String!, author: String!): Book
  }
`);

// Resolvers
const root = {
  books: async () => await Book.find(),
  addBook: async ({ title, author }) => {
    const book = new Book({ title, author });
    await book.save();
    return book;
  }
};

// GraphQL endpoint
app.use('/graphql', graphqlHTTP({
  schema,
  rootValue: root,
  graphiql: true // interactive IDE
}));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`GraphQL server running on port ${PORT}`));
```

---

### 4.4 Mongoose Model

**models/Book.js**

```javascript
const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true }
});

module.exports = mongoose.model('Book', bookSchema);
```

---

### 4.5 Query Example (GraphiQL/Postman)

```graphql
query {
  books {
    id
    title
    author
  }
}
```

### 4.6 Mutation Example

```graphql
mutation {
  addBook(title: "GraphQL Basics", author: "Tanish") {
    id
    title
    author
  }
}
```

---

## 5️⃣ Testing

* Open browser → `http://localhost:5000/graphql`
* Run queries/mutations → data fetched/added in MongoDB
* Verify backend works without multiple REST endpoints

---

## 6️⃣ Key Takeaways

1. **GraphQL vs REST:** Single endpoint, client-driven
2. **Schemas & Resolvers:** Schemas define types; resolvers fetch/write data
3. **Mongoose Integration:** Resolvers connect to MongoDB for real data
4. **Mutations:** Used for writes (POST/PUT/DELETE equivalents)
5. **Queries:** Used for reads (GET equivalent)

---

## 7️⃣ Quick Hands-On Activity

1. Setup Express + GraphQL server
2. Create Book schema, query, mutation
3. Add resolver with in-memory data → then connect MongoDB
4. Test queries/mutations in GraphiQL
