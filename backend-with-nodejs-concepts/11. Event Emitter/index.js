const Logger = require('./logger');

const logger = new Logger();

// Subscribe to event
logger.on('messageLogged', (data) => {
    console.log('Event received:', data);
});

// Trigger the event
logger.log('This is a test message');
