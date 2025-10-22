const mongoose = require('mongoose');
const Book = require('./models/Book');
require('dotenv').config();

const runAggregation = async () => {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('✅ Connected to DB');

    // 1️⃣ Total price of all books
    const totalPrice = await Book.aggregate([
        { $group: { _id: null, total: { $sum: "$price" } } }
    ]);
    console.log('Total Price of all books:', totalPrice);

    // 2️⃣ Count of books by author
    const countByAuthor = await Book.aggregate([
        { $group: { _id: "$author", count: { $sum: 1 } } }
    ]);
    console.log('Books count by author:', countByAuthor);

    // 3️⃣ Average price by author
    const avgPriceByAuthor = await Book.aggregate([
        { $group: { _id: "$author", avgPrice: { $avg: "$price" } } }
    ]);
    console.log('Average price by author:', avgPriceByAuthor);

    // 4️⃣ Books with price > 100
    const expensiveBooks = await Book.aggregate([
        { $match: { price: { $gt: 100 } } }
    ]);
    console.log('Books with price > 100:', expensiveBooks);

    // 5️⃣ Sort books by price descending
    const sortedBooks = await Book.aggregate([
        { $sort: { price: -1 } }
    ]);
    console.log('Books sorted by price descending:', sortedBooks);

    mongoose.connection.close();
};

runAggregation();

