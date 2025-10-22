const mongoose = require('mongoose');
const Book = require('./models/Book');
require('dotenv').config();

const books = [
  { title: "Book A", author: "Alice", price: 100 },
  { title: "Book B", author: "Bob", price: 150 },
  { title: "Book C", author: "Alice", price: 200 },
  { title: "Book D", author: "Charlie", price: 120 },
  { title: "Book E", author: "Bob", price: 80 },
];

const seedDB = async () => {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('✅ Connected to DB');

    await Book.deleteMany({}); // clear existing
    await Book.insertMany(books);
    console.log('✅ Books inserted');

    mongoose.connection.close();
};

seedDB();
