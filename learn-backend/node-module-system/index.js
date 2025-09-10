const firstModule = require('./first-module');  // Purpose: Import module (relative path)

console.log(firstModule.add(10, 20));  // Output: 30

// Error Handling with Try-Catch
try {
  console.log('Trying to divide by zero');
  let result = firstModule.divide(10, 0);  // Purpose: Test error case
  console.log(result);
} catch (error) {
  console.log('Caught an error:', error.message);  // Output: Divide by zero not allowed
}

console.log(firstModule.subtract(20, 5));  // Output: 15