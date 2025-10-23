const amqp = require('amqplib');
let channel;

async function connectRabbitMQ() {
  const conn = await amqp.connect(process.env.RABBITMQ_URI || 'amqp://localhost');
  channel = await conn.createChannel();
  await channel.assertQueue('post_events');
}

async function publishEvent(event) {
  if (!channel) await connectRabbitMQ();
  channel.sendToQueue('post_events', Buffer.from(JSON.stringify(event)));
}

module.exports = { publishEvent, connectRabbitMQ };