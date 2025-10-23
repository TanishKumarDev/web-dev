const Post = require('../models/Post');
const { publishEvent } = require('../utils/rabbitmq');
const logger = require('../utils/logger');

const createPost = async (req, res) => {
  const { title, content } = req.body;
  try {
    const post = new Post({ title, content, userId: req.user.id });
    await post.save();

    await publishEvent({ type: 'post_created', postId: post._id });
    res.status(201).json(post);
  } catch (err) {
    logger.error(err);
    res.status(500).json({ msg: 'Error' });
  }
};

// Add getPost, updatePost, deletePost

module.exports = { createPost /* others */ };