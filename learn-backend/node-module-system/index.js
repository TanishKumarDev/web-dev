// index.js
const firstModule = require('./firstModule');  // Purpose: Imports the module

// Test the add function
console.log(firstModule.add(10, 20));  // Output: 30

// Test divide with error handling
try {
  console.log('Trying to divide by zero');
  let result = firstModule.divide(0, 0);  // Should throw error
  console.log('Result:', result);
} catch (error) {
  console.log('Caught an error:', error.message);  // Output: Divide by zero is not allowed
}

// Test valid division
try {
  let result = firstModule.divide(0, 10);
  console.log('Result:', result);  // Output: 0
} catch (error) {
  console.log('Caught an error:', error.message);
}