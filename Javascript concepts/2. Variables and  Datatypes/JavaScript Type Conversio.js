// === Understanding Type Conversion ===
// Type conversion is like translating between languages: sometimes you explicitly translate (e.g., using a dictionary),
// and sometimes the context guesses the meaning (automatic conversion). In JavaScript, variables can change types
// to fit operations, but this can lead to unexpected results if you're not careful.
// - Explicit conversion: You use functions like Number(), String(), or toString() to change types.
// - Automatic conversion: JavaScript tries to "help" by converting types during operations (e.g., "5" + 2 becomes "52").
// Why confusing? JavaScript's automatic conversions can produce surprising results (e.g., "5" - 2 = 3, but "5" + 2 = "52").
// Tip: Always be explicit with conversions when possible to avoid surprises.

console.log("=== JavaScript Type Conversion Examples ===");

// === Converting Strings to Numbers ===
// Use Number(), parseInt(), parseFloat(), or the unary + operator to convert strings to numbers.
// Numeric strings convert to numbers; non-numeric strings become NaN.

console.log("\n=== Strings to Numbers ===");
console.log(Number("3.14")); // 3.14
// Reason: "3.14" is a numeric string, so Number() converts it to a floating-point number.
// Logic: Useful for parsing user input or data from strings.

console.log(Number("")); // 0
// Reason: An empty string is treated as 0 in numeric context.
// Logic: This can be unexpected; always validate inputs.

console.log(Number("John")); // NaN
// Reason: "John" is non-numeric, so Number() returns NaN (Not a Number).
// Logic: NaN indicates a failed conversion, so check for it in code.

console.log(parseFloat("3.14")); // 3.14
// Reason: parseFloat() extracts the first valid floating-point number from a string.
// Logic: Ignores trailing non-numeric characters (e.g., "3.14px" → 3.14).

console.log(parseInt("42")); // 42
// Reason: parseInt() extracts the first valid integer from a string.
// Logic: Useful for whole numbers; ignores decimals (e.g., "42.99" → 42).

let y = "5";
let x = +y;
console.log(x); // 5
// Reason: The unary + operator converts a string to a number (like Number()).
// Logic: A concise way to convert, but less readable for beginners.

console.log(+"John"); // NaN
// Reason: Non-numeric strings convert to NaN with the unary + operator.
// Logic: Always validate inputs to handle NaN cases.

// === Converting Numbers to Strings ===
// Use String() or toString() to convert numbers to strings.
// Useful for display or concatenation.

console.log("\n=== Numbers to Strings ===");
let num = 123;
console.log(String(num)); // "123"
// Reason: String() converts any value to its string representation.
// Logic: Converts the number to a string without changing its value.

console.log(num.toString()); // "123"
// Reason: toString() is a method on numbers that returns their string form.
// Logic: Same result as String(), but called on the number itself.

console.log(String(100 + 23)); // "123"
// Reason: The expression (100 + 23) evaluates to 123, then String() converts it.
// Logic: Works on expressions, not just variables.

console.log((123).toString()); // "123"
// Reason: toString() works on number literals (parentheses needed for syntax).
// Logic: Same as above, but directly on a literal.

console.log(num.toFixed(2)); // "123.00"
// Reason: toFixed(2) formats the number with 2 decimal places as a string.
// Logic: Useful for currency or precise decimal display.

console.log(num.toExponential(2)); // "1.23e+2"
// Reason: toExponential(2) uses scientific notation with 2 decimal places.
// Logic: Used for large or small numbers in scientific contexts.

console.log(num.toPrecision(4)); // "123.0"
// Reason: toPrecision(4) formats the number to 4 significant digits as a string.
// Logic: Controls the total length of the number’s string representation.

// === Converting Dates to Numbers ===
// Use Number() or getTime() to convert a Date to milliseconds since Jan 1, 1970 (Unix epoch).

console.log("\n=== Dates to Numbers ===");
let d = new Date();
console.log(Number(d)); // e.g., 1749577500000
// Reason: Number() converts a Date to its numeric timestamp (milliseconds).
// Logic: Useful for calculations involving time differences.

console.log(d.getTime()); // e.g., 1749577500000
// Reason: getTime() returns the same timestamp as Number(d).
// Logic: Standard method for accessing a Date’s numeric value.

// === Converting Numbers to Dates ===
// Use the Date constructor with a millisecond timestamp to create a Date.

console.log("\n=== Numbers to Dates ===");
let timestamp = 1749577500000;
let dateFromNum = new Date(timestamp);
console.log(dateFromNum.toString()); // e.g., "Sun Jun 08 2025 18:25:00 GMT+0530"
// Reason: The Date constructor accepts milliseconds to create a Date object.
// Logic: Converts a numeric timestamp back to a readable date.

// === Converting Booleans to Numbers ===
// Use Number() to convert true to 1 and false to 0.

console.log("\n=== Booleans to Numbers ===");
console.log(Number(false)); // 0
// Reason: false is treated as 0 in numeric context.
// Logic: Useful for counting truthy values or calculations.

console.log(Number(true)); // 1
// Reason: true is treated as 1 in numeric context.
// Logic: Simple and predictable conversion.

// === Converting Numbers to Booleans ===
// Use Boolean() to convert numbers to booleans (0 → false, non-zero → true).

console.log("\n=== Numbers to Booleans ===");
console.log(Boolean(0)); // false
// Reason: 0 is considered falsy in JavaScript.
// Logic: Only 0 converts to false; all other numbers are true.

console.log(Boolean(42)); // true
// Reason: Non-zero numbers are truthy.
// Logic: Predictable for conditionals or logical operations.

// === Converting Booleans to Strings ===
// Use String() or toString() to convert booleans to "true" or "false".

console.log("\n=== Booleans to Strings ===");
console.log(String(true)); // "true"
// Reason: String() converts the boolean to its string representation.
// Logic: Useful for display or concatenation.

console.log(false.toString()); // "false"
// Reason: toString() on a boolean returns its string form.
// Logic: Same as String(), but called on the boolean itself.

// === Automatic Type Conversion ===
// JavaScript automatically converts types during operations, which can be confusing.
// Analogy: It’s like a chef guessing ingredients without a recipe—sometimes it works, sometimes it doesn’t.

console.log("\n=== Automatic Type Conversion ===");
console.log(5 + null); // 5
// Reason: null is converted to 0, so 5 + 0 = 5.
// Logic: Numeric operations convert null to 0.

console.log("5" + null); // "5null"
// Reason: + with a string triggers string concatenation; null becomes "null".
// Logic: Be cautious with +; it prioritizes strings.

console.log("5" + 2); // "52"
// Reason: 2 is converted to "2", then concatenated with "5".
// Logic: + often leads to strings, not numbers.

console.log("5" - 2); // 3
// Reason: - triggers numeric conversion; "5" becomes 5, so 5 - 2 = 3.
// Logic: -, *, /, etc., try to convert to numbers.

console.log("5" * "2"); // 10
// Reason: * converts both "5" and "2" to numbers (5 and 2), so 5 * 2 = 10.
// Logic: Multiplication enforces numeric context.

// === Automatic String Conversion ===
// When outputting objects, arrays, or dates, JavaScript calls toString() automatically.

console.log("\n=== Automatic String Conversion ===");
let myVar = { name: "Fjohn" };
console.log(String(myVar)); // "[object Object]"
// Reason: Default toString() for objects returns "[object Object]".
// Logic: Override toString() for custom output.

myVar = [1, 2, 3, 4];
console.log(String(myVar)); // "1,2,4"
// Reason: Array’s toString() joins elements with commas.
// Logic: Arrays convert nicely to comma-separated strings.

myVar = new Date();
console.log(String(myVar)); // e.g., "Sun Jun 08 2025 18:25:00 GMT+0530"
// Reason: Date’s toString() formats the date and time.
// Logic: Automatic for display in console or DOM.

// === Type Conversion Table ===
// Key Notes from the Table:
// - false → 0, "false", false
// - true → 1, "true", true
// - "" → 0, "", false
// - "20" → 20, "20", true
// - "twenty" → NaN, "twenty", true
// - [] → 0, "", true
// - null → 0, "null", false
// - undefined → NaN, "undefined", false
// Common Pitfalls:
// - Empty arrays convert to 0 (Number) but true (Boolean).
// - Non-numeric strings become NaN (Number) but true (Boolean).
// Tip: Use explicit conversions to avoid red surprises in the table).

// === Exercise: let x = Number(55.21); ===
console.log("\n=== Exercise Result ===");
let exerciseX = Number(55.21);
console.log(exerciseX); // 55.21
// Reason: Number(55.21) converts the numeric literal 55.21 to a number (no change).
// Logic: The input is already a number, so Number() returns it as-is.
// Correct Answer: 55.21