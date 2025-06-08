// === The toString() Method ===
// The toString() method converts a variable or value to a string.
// It is a built-in method for many JavaScript data types, including numbers, arrays, dates, functions, and objects.
// Use cases: displaying data, ensuring type compatibility, debugging, and customizing object representations.

console.log("=== toString() Method Examples ===");

// === Array toString() ===
// For arrays, toString() converts elements to a comma-separated string.
// The method joins all elements with commas, without modifying the original array.

console.log("\n=== Array toString() ===");
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let myList = fruits.toString();
console.log(myList); // "Banana,Orange,Apple,Mango"
// Reason: toString() converts each element to a string and joins them with commas.
// Logic: The array's elements are concatenated into a single string, useful for display or logging.

console.log(fruits); // ["Banana", "Orange", "Apple", "Mango"]
// Reason: The original array remains unchanged; toString() returns a new string.

// === Date toString() ===
// For Date objects, toString() returns a human-readable string representing the date and time.
// The format depends on the JavaScript environment and locale.

console.log("\n=== Date toString() ===");
const d = new Date();
let dateText = d.toString();
console.log(dateText); // e.g., "Sun Jun 08 2025 18:20:00 GMT+0530 (India Standard Time)"
// Reason: toString() formats the Date object into a readable string, including date, time, and timezone.
// Logic: Useful for displaying dates in user interfaces or logs. Output format may vary by environment.

// === Number toString() ===
// For numbers, toString() converts the number to a string.
// An optional radix parameter specifies the base (e.g., 2 for binary, 10 for decimal).

console.log("\n=== Number toString() ===");
let x = 123;
let numberText = x.toString();
console.log(numberText); // "123"
// Reason: toString() converts the number 123 to its string representation.
// Logic: Ensures the number is treated as a string, useful for concatenation or display.

let binaryText = x.toString(2);
console.log(binaryText); // "1111011"
// Reason: toString(2) converts 123 to its binary (base-2) representation.
// Logic: The radix parameter allows conversion to different numerical bases (e.g., 2, 8, 16).
// Note: The output is still a string, not a number.

console.log(typeof numberText); // "string"
// Reason: toString() always returns a string, regardless of the input type or radix.

// === Function toString() ===
// For functions, toString() returns the source code of the function as a string.
// This includes the function declaration, parameters, and body.

console.log("\n=== Function toString() ===");
function exampleFunction(a, b) {
  return a + b;
}
let functionText = exampleFunction.toString();
console.log(functionText); // "function exampleFunction(a, b) { return a + b; }"
// Reason: toString() returns the exact source code of the function, including whitespace and comments.
// Logic: Useful for debugging or inspecting dynamically generated functions.

// === Object toString() ===
// For objects, the default toString() returns "[object Object]".
// This is not very informative, so it can be overridden for custom string representations.

console.log("\n=== Object toString() ===");
let person = {
  firstname: "John",
  lastname: "Doe"
};
let objectText = person.toString();
console.log(objectText); // "[object Object]"
// Reason: The default Object.prototype.toString() returns a generic string for objects.
// Logic: This is rarely useful, as it doesn't reflect the object's properties.

// === Customizing Object toString() ===
// To make toString() more meaningful, define a custom toString() method in the object.
// This allows control over how the object is represented as a string.

console.log("\n=== Custom Object toString() ===");
let customPerson = {
  firstname: "John",
  lastname: "Doe",
  age: 30,
  toString: function() {
    return `${this.firstname} ${this.lastname}, Age: ${this.age}`;
  }
};
let customObjectText = customPerson.toString();
console.log(customObjectText); // "John Doe, Age: 30"
// Reason: The custom toString() method returns a formatted string using the object's properties.
// Logic: Overriding toString() is useful for debugging, logging, or displaying objects in a user-friendly way.

// === Additional Example: Using toString() in Context ===
// Demonstrate toString() for type compatibility in string concatenation.

console.log("\n=== toString() in String Concatenation ===");
let num = 42;
let message = "The answer is " + num.toString();
console.log(message); // "The answer is 42"
// Reason: toString() ensures num is a string, allowing proper concatenation.
// Logic: While JavaScript often coerces types automatically, explicit toString() improves clarity.

// Implicit coercion (for comparison)
let implicitMessage = "The answer is " + num;
console.log(implicitMessage); // "The answer is 42"
// Reason: JavaScript automatically coerces num to a string during concatenation.
// Logic: Explicit toString() is preferred for readability and control.

// === Edge Cases ===

/* uncomment to test the behavior of toString() with edge cases */
// Explore what happens with null, undefined, or invalid radix.

console.log("\n=== Edge Cases ===");
console.log((null).toString()); // TypeError: Cannot read properties of null
// Reason: null has no toString() method, causing a TypeError.
// Logic: Always ensure the value is not null before calling toString().

console.log((undefined).toString()); // TypeError: Cannot read properties of undefined
// Reason: undefined has no toString() method, causing a TypeError.
// Logic: Check for undefined values to avoid errors.

let num2 = 123;
console.log(num2.toString(37)); // RangeError: toString() radix argument must be between 2 and 36
// Reason: The radix must be between 2 and 36 (inclusive); 37 is invalid.
// Logic: Validate the radix parameter when using toString() with numbers.