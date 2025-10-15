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
