// === Understanding Error Handling ===
// Error handling is like a safety net: it catches mistakes (exceptions) in your code to prevent crashes.
// - try: Tests a block of code for errors.
// - catch: Handles errors if they occur.
// - finally: Runs code regardless of success or failure.
// - throw: Creates custom errors to control program flow.
// Why confusing? Syntax (try/catch) and error types (e.g., SyntaxError, TypeError) can feel overwhelming.
// Analogy: Think of try as attempting a tricky recipe, catch as fixing a burnt dish, and finally as cleaning the kitchen afterward.
// Tip: Always use try/catch for risky operations (e.g., user input, external data) and log errors for debugging.

console.log("=== JavaScript Error Handling Examples ===");

// === Basic try and catch ===
// Try a block of code and catch any errors that occur.

console.log("\n=== Basic Try and Catch ===");
try {
  adddlert("Welcome guest!"); // Intentional error (adddlert is undefined)
}
catch(err) {
  console.log(err.message); // "adddlert is not defined"
}
// Reason: try runs the code; if an error occurs (e.g., undefined function), catch handles it.
// Logic: Prevents the program from crashing by capturing the error’s message.

// === throw Statement ===
// Create custom errors with throw (string, number, boolean, or object).

console.log("\n=== Throw Statement ===");
try {
  throw "Too big"; // Throw a string
}
catch(err) {
  console.log("Error: " + err); // "Error: Too big", 
}
// Reason: throw creates a custom error; catch captures it for handling.
// Logic: Allows custom error messages to control program flow.

try {
  throw 500; // Throw a number
}
catch(err) {
  console.log("Error: " + err); // "Error: 500"
}
// Reason: throw can use any value; catch treats it as the error.
// Logic: Numbers or other types can represent error codes.

// === Input Validation Example ===
// Validate user input and throw custom errors for invalid cases.

console.log("\n=== Input Validation ===");
function validateInput(x) {
  try {
    if(x.trim() === "") throw "empty";
    if(isNaN(x)) throw "not a number";
    x = Number(x);
    if(x < 5) throw "too low";
    if(x > 10) throw "too high";
    return "Valid input: " + x;
  }
  catch(err) {
    return "Input is " + err;
  }
}
console.log(validateInput("")); // "Input is empty"
console.log(validateInput("abc")); // "Input is not a number"
console.log(validateInput("3")); // "Input is too low"
console.log(validateInput("8")); // "Valid input: 8"
// Reason: Each throw creates a custom error based on input validation; catch returns the error message.
// Logic: Demonstrates real-world use for validating user input.

// === finally Statement ===
// Run code regardless of try/catch outcome.

console.log("\n=== Try, Catch, Finally ===");
function validateWithFinally(x) {
  let result = "";
  try {
    if(x.trim() === "") throw "is empty";
    if(isNaN(x)) throw "is not a number";
    x = Number(x);
    if(x > 10) throw "is too high";
    if(x < 5) throw "is too low";
    result = "Valid: " + x;
  }
  catch(err) {
    result = "Error: " + err + ".";
  }
  finally {
    console.log("Validation complete.");
  }
  return result;
}
console.log(validateWithFinally("8")); // "Valid: 8" followed by "Validation complete."
console.log(validateWithFinally("abc")); // "Error: is not a number." followed by "Validation complete."
// Reason: finally runs after try or catch, ensuring cleanup or final steps.
// Logic: Useful for resetting state or logging completion.

// === Error Object ===
// The Error object provides name and message properties for errors.

console.log("\n=== Error Object ===");
try {
  throw new Error("Something went wrong!");
}
catch(err) {
  console.log("Name: " + err.name); // "Name: Error"
  console.log("Message: " + err.message); // "Message: Something went wrong!"
}
// Reason: throw new Error creates an Error object with name and message.
// Logic: Provides structured error information for debugging.

// === Specific Error Types ===
// JavaScript throws specific error types for different issues.

// RangeError
console.log("\n=== RangeError ===");
try {
  let num = 1;
  num.toPrecision(500); // Too many significant digits
}
catch(err) {
  console.log(err.name); // "RangeError"
}
// Reason: RangeError occurs for invalid numeric ranges (e.g., too many digits).
// Logic: Catches out-of-range errors in numeric operations.

// ReferenceError
console.log("\n=== ReferenceError ===");
try {
  let x = 5;
  x = y + 1; // y is undefined
}
catch(err) {
  console.log(err.name); // "ReferenceError"
}
// Reason: ReferenceError occurs when using an undefined variable.
// Logic: Catches invalid references to prevent crashes.

// SyntaxError
console.log("\n=== SyntaxError ===");
try {
  eval("alert('Hello)"); // Missing quote
}
catch(err) {
  console.log(err.name); // "SyntaxError"
}
// Reason: SyntaxError occurs for invalid code syntax.
// Logic: Catches parsing errors in eval or similar functions.

// TypeError
console.log("\n=== TypeError ===");
try {
  let num = 1;
  num.toUpperCase(); // Numbers don’t have toUpperCase
}
catch(err) {
  console.log(err.name); // "TypeError"
}
// Reason: TypeError occurs for operations on incompatible types.
// Logic: Catches type mismatches in function calls.

// URIError
console.log("\n=== URIError ===");
try {
  decodeURI("%%%"); // Invalid URI characters
}
catch(err) {
  console.log(err.name); // "URIError"
}
// Reason: URIError occurs for invalid URI encoding/decoding.
// Logic: Catches errors in URI functions.

// === Exercise: Only one of the following words is a legal JavaScript statement, which one? ===
console.log("\n=== Exercise Result ===");
console.log("The legal JavaScript statement is: try");
// Reason: try is a reserved keyword used to start a try/catch block; find, check, and execute are not standalone statements.
// Logic: Only try initiates error handling in JavaScript.
// Correct Answer: try