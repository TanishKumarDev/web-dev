const EventEmitter = require('events');  // Purpose: Import EventEmitter class
const myEmitter = new EventEmitter();  // Purpose: Create instance

// Listen for Event
myEmitter.on('greet', (name) => {  // Purpose: Register listener
  console.log(`Hello ${name}!`);  // Output: Hello World!
});

myEmitter.on('error', (msg) => {  // Purpose: Error event listener
  console.error(`Error occurred: ${msg}`);
});

// Emit Events
myEmitter.emit('greet', 'World');  // Purpose: Trigger greet event
myEmitter.emit('error', 'Something failed');  // Purpose: Trigger error