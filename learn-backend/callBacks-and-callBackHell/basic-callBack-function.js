// Purpose: Basic callback demo
function greet(name, callback) {
  console.log('Hello, ' + name);
  callback(); // Execute callback after greet
}

greet('Alice', () => {
  console.log('Callback executed');
});

// Definition: A callback is a function executed after another function finishes, commonly for async tasks.

// Callbacks allow non-blocking—code continues while waiting (e.g., for timers or I/O).