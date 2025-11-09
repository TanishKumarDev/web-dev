// Import our custom math module
const math = require('./modules/math');

// Using exported functions
console.log("Addition:", math.add(5, 10));
console.log("Multiplication:", math.multiply(3, 7));

// Import function directly
const greet = require('./modules/greet');

// Call the function
greet("Tanish");