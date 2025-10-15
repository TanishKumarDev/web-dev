const eventEmitter = require('events');
const myEmitter = new eventEmitter();

// listener
myEmitter.on('customEvent', (message, status) => {
    console.log(`🎉 Event received: ${message} with status: ${status}`);
});

// Emitting event
myEmitter.emit('customEvent', 'This is a custom event', 200);

// Emitting event after 2 seconds
setTimeout(() => {
    myEmitter.emit('customEvent', 'This is a delayed custom event', 201);
}, 2000);

