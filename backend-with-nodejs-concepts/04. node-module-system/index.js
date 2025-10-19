const firstModule = require('./firstModule');

// Testing the functions with different inputs
console.log("Add 20 + 30: ", firstModule.add(20, 30));
console.log("Subtract 50 - 15: ", firstModule.subtract(50, 15));
console.log("Multiply 7 * 8: ", firstModule.multiply(7, 8));
console.log("Divide 100 / 4: ", firstModule.divide(100, 4));

try {
  console.log("Trying to divide by zero");
  let result = firstModule.divide(10, 0);
  console.log("Result: ", result);
} catch (error) {
  console.log("Caught an error:", error.message);
}

