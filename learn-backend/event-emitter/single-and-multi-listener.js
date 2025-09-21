const eventEmitter = require('events');

// create instance
const myEmitter = new eventEmitter();

// 🎯 single listener 

// listener 1
myEmitter.on('singleListenerEvent', (data) => {
    console.log(`Hello: ${data}`);
});

// Emit event
myEmitter.emit('singleListenerEvent', 'Tanish!');


// 🎯 multiple listeners

// listener 1
myEmitter.on('multiListenerEvent', (data) => {
    console.log(`Hi : ${data}`);
});


// listener 2
myEmitter.on('multiListenerEvent', (data) => {
    console.log(`Welcome Back : ${data}`);
});

// emit event
myEmitter.emit('multiListenerEvent', 'Tanish')

// 🎯 One-time Listener

myEmitter.once('greet', (name) => {
    console.log(`Hello ${name}, this will run only once!`);
});

myEmitter.emit('greet', 'Tanish'); // runs
myEmitter.emit('greet', 'Tanish'); // ignored

// 💡 Summary:

// on(event, listener) → multiple listeners allowed.
// once(event, listener) → listener runs only once.
// emit(event, data...) → trigger event with arguments.