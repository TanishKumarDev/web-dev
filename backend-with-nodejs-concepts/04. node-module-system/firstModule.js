// firstModule.js
function add(a, b) {  // Purpose: Adds two numbers
  return a + b;
}

function subtract(a, b) {  // Purpose: Subtracts two numbers
  return a - b;
}

function divide(a, b) {  // Purpose: Divides two numbers with error handling
  if (b === 0) {
    throw new Error('Divide by zero is not allowed');
  }
  return a / b;
}

// Export the functions
module.exports = { add, subtract, divide };