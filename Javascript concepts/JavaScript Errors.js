// -----------------------------------------------------------------------------
// ✅ 1. What are JavaScript Errors?
// -----------------------------------------------------------------------------

/**
 * JavaScript errors are runtime issues that stop the normal flow of the script.
 * These can be caught and handled using error-handling mechanisms.
 */

// -----------------------------------------------------------------------------
// ✅ 2. JavaScript Error Types
// -----------------------------------------------------------------------------

/**
 * SyntaxError: Invalid code syntax
 * ReferenceError: Using an undeclared variable
 * TypeError: Using a value in an unexpected way (e.g., call non-function)
 * RangeError: A number out of range
 * EvalError: Error related to the eval() function
 * URIError: Malformed URI (in decodeURIComponent, encodeURI, etc.)
 */

// ✅ SyntaxError
// let a = ; // ❌ Uncommenting this will throw SyntaxError

// ✅ ReferenceError
try {
  console.log(x); // x is not defined
} catch (err) {
  console.log("ReferenceError Caught:", err.message);
}

// ✅ TypeError
try {
  let num = 10;
  num(); // num is not a function
} catch (err) {
  console.log("TypeError Caught:", err.message);
}

// ✅ RangeError
try {
  let arr = new Array(10 ** 12); // too large
} catch (err) {
  console.log("RangeError Caught:", err.message);
}

// ✅ URIError
try {
  decodeURIComponent('%'); // invalid escape
} catch (err) {
  console.log("URIError Caught:", err.message);
}

// -----------------------------------------------------------------------------
// ✅ 3. try...catch Statement
// -----------------------------------------------------------------------------

/**
 * Use `try...catch` to handle exceptions gracefully.
 * `finally` block always runs (optional).
 */

try {
  let result = someUndefinedVar + 1;
} catch (error) {
  console.log("Caught Error:", error.message);
} finally {
  console.log("Finally block always runs");
}

// -----------------------------------------------------------------------------
// ✅ 4. The Error Object
// -----------------------------------------------------------------------------

/**
 * JavaScript provides a built-in `Error` constructor for custom errors.
 * Properties: name, message, stack
 */

try {
  throw new Error("Something went wrong");
} catch (e) {
  console.log("Custom Error Message:", e.message);
  console.log("Error Name:", e.name);
  console.log("Stack Trace:", e.stack);
}

// -----------------------------------------------------------------------------
// ✅ 5. Custom Error Types
// -----------------------------------------------------------------------------

/**
 * You can also throw your own custom error types.
 */

class MyCustomError extends Error {
  constructor(message) {
    super(message);
    this.name = "MyCustomError";
  }
}

try {
  throw new MyCustomError("Custom logic failed");
} catch (e) {
  console.log(e.name + ": " + e.message);
}

// -----------------------------------------------------------------------------
// ✅ 6. Interview-Tricky Cases
// -----------------------------------------------------------------------------

// typeof undeclaredVar; // ✅ No error, returns 'undefined'

try {
  let x = undefined;
  x.toUpperCase(); // ❌ TypeError: undefined has no toUpperCase
} catch (err) {
  console.log("Tricky TypeError:", err.message);
}

try {
  JSON.parse("{name: 'Tanish'}"); // ❌ Invalid JSON
} catch (err) {
  console.log("JSON Parse Error:", err.message);
}

// -----------------------------------------------------------------------------
// ✅ 7. throw Keyword
// -----------------------------------------------------------------------------

/**
 * You can throw any value — not just Error objects.
 */

try {
  throw "Something went wrong!"; // not recommended
} catch (e) {
  console.log("Caught a thrown string:", e);
}

try {
  throw new TypeError("Wrong type!");
} catch (e) {
  console.log("Caught a thrown TypeError:", e.message);
}

// -----------------------------------------------------------------------------
// ✅ 8. Summary (Interview Friendly)
// -----------------------------------------------------------------------------

/**
 * Use try...catch for handling runtime exceptions
 * Always validate user input to avoid runtime issues
 * `finally` is good for cleanup
 * Avoid throwing raw strings, prefer Error objects
 * Know error types: SyntaxError, TypeError, ReferenceError, etc.
 * JSON.parse and DOM-related APIs often throw
 */
