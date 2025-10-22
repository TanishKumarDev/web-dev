const eventEmitter = require('events'); 
const emitter = new eventEmitter();

// subscribe to an event
emitter.on('event', () => { 
    console.log('event fired'); 
});

// emit an event
emitter.emit('event');

// unsubscribe from an event
emitter.removeListener('event', () => { 
    console.log('event removed'); 
});

// passing data with an event
emitter.on('greet', (name) => {
    console.log(`Hello, ${name}!`);
});

emitter.emit('greet', 'Tanish');

// passing multiple arguments with an event
emitter.on('greet', (name, age) => {
    console.log(`Hello, ${name}! You are ${age} years old.`);
});

emitter.emit('greet', 'Tanish', 20);

// passing an object with an event
emitter.on('greet', (person) => {
    console.log(`Hello, ${person.name}! You are ${person.age} years old.`);
});

emitter.emit('greet', { name: 'Tanish', age: 20 });

// One-time Event
emitter.once('greet', (name) => {
    console.log(`Hello, ${name}!`);
});

emitter.emit('greet', 'One-time Event');
emitter.emit('greet', 'One-time Event');