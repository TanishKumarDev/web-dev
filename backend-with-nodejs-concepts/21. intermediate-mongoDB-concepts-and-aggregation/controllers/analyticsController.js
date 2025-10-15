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
