const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');
const mongoose = require('mongoose');
const Book = require('./models/Book');
require('dotenv').config();

const app = express();

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('✅ MongoDB connected'))
    .catch(err => console.log(err));

// GraphQL Schema
const schema = buildSchema(`
  type Book {
    id: ID!
    title: String!
    author: String!
    price: Float!
  }

  type Query {
    books: [Book]
    book(id: ID!): Book
  }

  type Mutation {
    addBook(title: String!, author: String!, price: Float!): Book
    updateBook(id: ID!, title: String, author: String, price: Float): Book
    deleteBook(id: ID!): Book
  }
`);

// Resolvers
const root = {
  books: async () => await Book.find(),
  book: async ({ id }) => await Book.findById(id),
  addBook: async ({ title, author, price }) => {
    const book = new Book({ title, author, price });
    return await book.save();
  },
  updateBook: async ({ id, title, author, price }) => {
    return await Book.findByIdAndUpdate(
      id,
      { title, author, price },
      { new: true }
    );
  },
  deleteBook: async ({ id }) => {
    return await Book.findByIdAndDelete(id);
  }
};

// GraphQL endpoint
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true // enables GraphiQL UI
}));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}/graphql`));
