const { connectRabbitMQ } = require('../utils/rabbitmq');
const Search = require('../models/Search');
const logger = require('../utils/logger');
// Assume a way to fetch post data, e.g., via HTTP or shared DB

async function consumeEvents() {
  await connectRabbitMQ();
  const channel = /* from utils */
  channel.consume('post_events', async (msg) => {
    const event = JSON.parse(msg.content.toString());
    if (event.type === 'post_created') {
      // Fetch post details (simplified: assume shared DB)
      const post = { /* mock fetch */ title: 'example', content: 'content', _id: event.postId };
      await Search.create({ postId: event.postId, title: post.title, content: post.content });
      logger.info(`Indexed post ${event.postId}`);
    }
    channel.ack(msg);
  });
}

module.exports = { consumeEvents };