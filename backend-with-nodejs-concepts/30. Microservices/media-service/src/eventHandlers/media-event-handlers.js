const { connectRabbitMQ } = require('../utils/rabbitmq');
const logger = require('../utils/logger');

async function consumeEvents() {
  await connectRabbitMQ();
  const channel = /* from utils */
  channel.consume('post_events', async (msg) => {
    const event = JSON.parse(msg.content.toString());
    if (event.type === 'post_created') {
      // Process media if attached, e.g., optimize images
      logger.info(`Handled post_created for ${event.postId}`);
    }
    channel.ack(msg);
  });
}

module.exports = { consumeEvents };