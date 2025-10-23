const Search = require('../models/Search');

const searchPosts = async (req, res) => {
  const { query } = req.query;
  try {
    const results = await Search.find({ $text: { $search: query } });
    res.json(results);
  } catch (err) {
    res.status(500).json({ msg: 'Search error' });
  }
};

module.exports = { searchPosts };