// === Understanding JSON ===
// JSON (JavaScript Object Notation) is a lightweight, text-based format for storing and exchanging data.
// - Purpose: Used to send data between servers and clients (e.g., web apps) due to its simplicity and readability.
// - Key Features:
//   - Syntax mirrors JavaScript object literals but is text-only and language-independent.
//   - Data is structured as name/value pairs, objects (in {}), and arrays (in []).
//   - Names must be in double quotes; values can be strings, numbers, booleans, null, objects, or arrays.
// - Usage: Commonly parsed into JavaScript objects using `JSON.parse()` and converted back to JSON with `JSON.stringify()`.
// Why confusing? JSON’s strict syntax (e.g., double quotes for names) differs slightly from JavaScript, and parsing errors can occur with invalid JSON.
// Analogy: Think of JSON as a universal postcard format: simple, readable, and usable by any system, but it must follow strict formatting rules.
// Tip: Always validate JSON data and handle parsing errors with try-catch to ensure robust applications.

console.log("=== JavaScript JSON Examples ===");

// === JSON Syntax: Objects ===
// JSON objects are written in curly braces {} with name/value pairs.

console.log("\n=== JSON Object Syntax ===");
const jsonObject = '{"firstName":"John","lastName":"Doe","age":30}';
console.log(jsonObject); // '{"firstName":"John","lastName":"Doe","age":30}'
// Reason: JSON objects use double quotes for names and separate pairs with commas.
// Logic: The text format is human-readable and can be parsed into a JavaScript object.

// === JSON Syntax: Arrays ===
// JSON arrays are written in square brackets [] and can contain objects, numbers, strings, etc.

console.log("\n=== JSON Array Syntax ===");
const jsonArray = '[{"firstName":"John","lastName":"Doe"},{"firstName":"Anna","lastName":"Smith"},{"firstName":"Peter","lastName":"Jones"}]';
console.log(jsonArray); // '[{"firstName":"John","lastName":"Doe"},...]'
// Reason: Arrays hold multiple values, often objects, in a list-like structure.
// Logic: Arrays allow grouping related records, like a list of employees.

// === Parsing JSON to JavaScript Objects ===
// Use `JSON.parse()` to convert a JSON string into a JavaScript object.

console.log("\n=== Parsing JSON ===");
const employeesText = '{"employees":[{"firstName":"John","lastName":"Doe"},{"firstName":"Anna","lastName":"Smith"},{"firstName":"Peter","lastName":"Jones"}]}';
const employeesObj = JSON.parse(employeesText);
console.log(employeesObj.employees[1].firstName + " " + employeesObj.employees[1].lastName); // "Anna Smith"
// Reason: `JSON.parse()` converts the JSON string into a native JavaScript object, allowing property access.
// Logic: Enables JavaScript to work with server-sent data as objects or arrays.

// Simulated browser example (without DOM)
const employee = employeesObj.employees[0];
console.log(`Employee: ${employee.firstName} ${employee.lastName}`); // "Employee: John Doe"
// Reason: Accesses properties of the parsed object like any JavaScript object.
// Logic: JSON’s structure mirrors JavaScript, making parsed data intuitive to use.

// === Converting JavaScript Objects to JSON ===
// Use `JSON.stringify()` to convert a JavaScript object to a JSON string.

console.log("\n=== Stringifying to JSON ===");
const jsObject = {
  employees: [
    { firstName: "Alice", lastName: "Brown" },
    { firstName: "Bob", lastName: "Green" }
  ]
};
const jsonString = JSON.stringify(jsObject);
console.log(jsonString); // '{"employees":[{"firstName":"Alice","lastName":"Brown"},{"firstName":"Bob","lastName":"Green"}]}'
// Reason: `JSON.stringify()` converts a JavaScript object into a JSON-formatted string.
// Logic: Useful for sending data to a server or storing it in a text-based format.

// === Handling Invalid JSON ===
// Parsing invalid JSON throws a `SyntaxError`, so use try-catch.

console.log("\n=== Handling Invalid JSON ===");
const invalidJson = '{firstName:"John"}'; // Missing quotes around key
try {
  JSON.parse(invalidJson);
} catch (error) {
  console.log("Error parsing JSON:", error.message); // "Error parsing JSON: Unexpected token f..."
}
// Reason: JSON requires strict syntax (e.g., double quotes for keys); invalid JSON causes parsing errors.
// Logic: Try-catch prevents crashes when dealing with potentially malformed data.

// === JSON in Real-World Use ===
// JSON is commonly used to fetch data from APIs and display it.

console.log("\n=== JSON in API Simulation ===");
// Simulated API response
const apiResponse = '{"id":1,"title":"Post Title","author":"Jane"}';
const post = JSON.parse(apiResponse);
console.log(`Post by ${post.author}: ${post.title}`); // "Post by Jane: Post Title"
// Reason: JSON is ideal for API responses due to its lightweight, universal format.
// Logic: Parsing API data allows integration with web applications.

// === JSON and Strict Mode ===
// JSON parsing and stringifying work in strict mode, as modules (which use JSON) are strict by default.

console.log("\n=== JSON in Strict Mode ===");
function parseInStrict() {
  "use strict";
  const json = '{"name":"Eve","age":28}';
  const obj = JSON.parse(json);
  return obj.name;
}
console.log(parseInStrict()); // "Eve"
// Reason: JSON operations are unaffected by strict mode, but modules using JSON inherit strict mode.
// Logic: Ensures safe variable handling when JSON is used in modular code.

// === JSON Limitations ===
// JSON cannot store functions, undefined, or complex objects like Dates directly.

console.log("\n=== JSON Limitations ===");
const complexObj = {
  name: "Test",
  date: new Date(),
  fn: () => "Function",
  undef: undefined
};
const complexJson = JSON.stringify(complexObj);
console.log(complexJson); // '{"name":"Test","date":"2025-06-08T..."}'
// Reason: `JSON.stringify()` omits functions and undefined, and converts Dates to strings.
// Logic: JSON is designed for data exchange, not for preserving JavaScript-specific types.

// === Best Practice: Working with JSON ===
// Validate JSON, handle errors, and use clear key names for readability.

console.log("\n=== Best Practice ===");
const safeJson = '{"product":"Laptop","price":999}';
let result;
try {
  result = JSON.parse(safeJson);
  console.log(`${result.product}: $${result.price}`); // "Laptop: $999"
} catch (error) {
  console.log("Invalid JSON:", error.message);
}
// Reason: Error handling ensures robust JSON parsing; clear key names improve readability.
// Logic: Makes JSON processing reliable in production environments.