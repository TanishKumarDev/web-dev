const mongoose = require('mongoose');

const searchSchema = new mongoose.Schema({
  postId: { type: mongoose.Schema.Types.ObjectId, ref: 'Post' },
  title: String,
  content: String,
}, { timestamps: true });

searchSchema.index({ title: 'text', content: 'text' });

module.exports = mongoose.model('Search', searchSchema);