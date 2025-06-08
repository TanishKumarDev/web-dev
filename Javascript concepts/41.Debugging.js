// === Understanding JavaScript Debugging ===
// Debugging is the process of identifying, analyzing, and fixing errors (bugs) in your code.
// - Purpose: To ensure your JavaScript code runs as intended by finding and resolving syntax, logical, or runtime errors.
// - Key Features:
//   - Modern browsers have built-in debugging tools (e.g., Chrome DevTools, Firefox Developer Tools) accessible via F12.
//   - Tools include the Console for logging, Breakpoints for pausing code, and variable inspection.
//   - Common methods: `console.log()`, `debugger` keyword, and error stack traces.
// - Why Important? Errors are inevitable. Debugging helps you understand code flow, catch issues early, and improve reliability.
// - Why Confusing? Errors may not always produce clear messages, and logical errors (e.g., wrong output) require tracing code execution.
// - Analogy: Debugging is like detective work—using clues (logs, breakpoints) to find and fix the culprit (bug) in your code.
// - Tip: Start with `console.log()` for quick checks, use breakpoints for complex issues, and always read error messages carefully.

// === Common Types of Errors ===
// 1. Syntax Errors: Code violates JavaScript grammar (e.g., missing parentheses).
// 2. Runtime Errors: Code fails during execution (e.g., accessing undefined variables).
// 3. Logical Errors: Code runs but produces incorrect results (e.g., wrong calculations).
console.log("\n=== Types of Errors ===");

// Syntax Error Example
// console.log("Hello" // Missing closing parenthesis
// Reason: Syntax errors prevent code from running and are caught by the JavaScript engine.
// Logic: Check for typos, missing punctuation, or incorrect syntax.

// Runtime Error Example
try {
  const undefinedVar = someVariable; // ReferenceError: someVariable is not defined
} catch (error) {
  console.log("Runtime Error:", error.message); // "Runtime Error: someVariable is not defined"
}
// Reason: Runtime errors occur when code tries to perform invalid operations.
// Logic: Use try-catch to handle potential runtime errors gracefully.

// Logical Error Example
const price = 100;
const tax = 0.1;
const total = price + tax; // Logical error: Should multiply tax by price
console.log("Logical Error Total:", total); // "Logical Error Total: 100.1" (Expected ~110)
// Reason: Code runs but gives wrong output due to incorrect logic.
// Logic: Use debugging tools to trace variable values and logic flow.

// === Debugging with console.log() ===
// The `console.log()` method outputs data to the browser's Console, useful for quick checks.
console.log("\n=== Using console.log() ===");
let a = 5;
let b = 6;
let c = a + b;
console.log("Result of a + b:", c); // "Result of a + b: 11"
// Reason: Displays variable values or messages in the Console for inspection.
// Logic: Helps verify values at specific points in the code.

// === Setting Breakpoints in Browser DevTools ===
// Breakpoints pause code execution, allowing you to inspect variables and step through code.
// - How: Open DevTools (F12), go to the "Sources" tab, click a line number to set a breakpoint.
// - Example: Simulate a breakpoint by pausing at a specific line (manually shown below).
console.log("\n=== Simulating Breakpoints ===");
function calculateTotal(items, discount) {
  console.log("Items:", items); // Inspect items
  // Breakpoint here: Check `items` and `discount`
  const subtotal = items.reduce((sum, item) => sum + item.price, 0);
  console.log("Subtotal:", subtotal); // Inspect subtotal
  // Breakpoint here: Verify subtotal calculation
  const final = subtotal - discount;
  return final;
}
const cart = [{ price: 50 }, { price: 30 }];
console.log("Final Total:", calculateTotal(cart, 10)); // "Final Total: 70"
// Reason: Breakpoints let you pause and inspect variables at specific points.
// Logic: Use DevTools to step through code and catch logical errors.

// === Using the debugger Keyword ===
// The `debugger` keyword pauses execution and opens DevTools (if available) at that point.
console.log("\n=== Using debugger Keyword ===");
let x = 15 * 5;
debugger; // Execution pauses here if DevTools is open
console.log("Result:", x); // "Result: 75"
// Reason: Acts like a programmatic breakpoint, invoking the debugger.
// Logic: Useful for pausing code without manually setting breakpoints in DevTools.
// Note: Has no effect if DevTools is closed.

// === Accessing Browser DevTools ===
// - Chrome: F12 → "Console" or "Sources" tab.
// - Firefox: F12 → "Web Console" or "Debugger" tab.
// - Edge: F12 → "Console" or "Sources" tab.
// - Safari: Enable "Develop" menu, then "Show Error Console".
console.log("\n=== DevTools Example ===");
function divide(a, b) {
  if (b === 0) {
    console.error("Error: Division by zero!"); // Logs to Console
    return null;
  }
  return a / b;
}
console.log("Division Result:", divide(10, 0)); // "Error: Division by zero!" "Division Result: null"
// Reason: Console in DevTools shows errors, warnings, and logs.
// Logic: Use `console.error()` or `console.warn()` for better error visibility.

// === Debugging Logical Errors ===
// Logical errors require tracing code flow and verifying outputs.
console.log("\n=== Debugging Logical Errors ===");
function calculateAverage(numbers) {
  // Logical error: Incorrectly dividing by fixed number
  const sum = numbers.reduce((acc, num) => acc + num, 0);
  return sum / 2; // Wrong: Should divide by numbers.length
}
const scores = [10, 20, 30];
console.log("Incorrect Average:", calculateAverage(scores)); // "Incorrect Average: 30" (Expected: 20)
// Fix: Divide by numbers.length
function fixedAverage(numbers) {
  const sum = numbers.reduce((acc, num) => acc + num, 0);
  return sum / numbers.length;
}
console.log("Correct Average:", fixedAverage(scores)); // "Correct Average: 20"
// Reason: Logical errors produce wrong results but no error messages.
// Logic: Use `console.log()` or breakpoints to trace calculations.

// === Best Practices for Debugging ===
// 1. Use `console.log()` for quick checks but avoid cluttering code.
// 2. Set breakpoints in DevTools for complex logic inspection.
// 3. Use `try-catch` for runtime errors to prevent crashes.
// 4. Read error messages and stack traces carefully—they point to the issue.
// 5. Test small code sections to isolate bugs.
console.log("\n=== Best Practice Example ===");
function processData(data) {
  try {
    if (!Array.isArray(data)) {
      throw new Error("Input must be an array");
    }
    console.log("Processing data:", data); // Log for inspection
    return data.map(item => item * 2);
  } catch (error) {
    console.error("Error:", error.message); // Log error to Console
    return [];
  }
}
console.log("Processed:", processData([1, 2, 3])); // "Processed: [2, 4, 6]"
console.log("Processed:", processData("invalid")); // "Error: Input must be an array" "Processed: []"
// Reason: Combines error handling, logging, and clear feedback.
// Logic: Ensures robust code that handles errors gracefully.

// === Common Debugging Tools ===
// - console.log(): Displays values or messages.
// - console.error(): Highlights errors in red.
// - console.table(): Displays arrays/objects in a table format for clarity.
console.log("\n=== Using console.table() ===");
const users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 }
];
console.table(users); // Displays a formatted table in Console
// Reason: `console.table()` improves readability for complex data.
// Logic: Useful for inspecting arrays or objects during debugging.

// === Real-World Debugging Scenario ===
// Simulate debugging an API fetch operation.
console.log("\n=== Debugging API Fetch ===");
async function fetchData() {
  try {
    // Simulated API response
    const response = { data: [{ id: 1, name: "John" }, { id: 2, name: "Jane" }] };
    console.log("API Response:", response); // Log response for inspection
    return response.data;
  } catch (error) {
    console.error("Fetch Error:", error.message);
    return [];
  }
}
fetchData().then(data => console.log("Fetched Data:", data)); // "Fetched Data: [{id: 1, name: 'John'}, ...]"
// Reason: Debugging async code requires logging and error handling.
// Logic: Trace async operations with logs and verify data flow.

// === Debugging Tips for Beginners ===
// - Start with `console.log()` to check variable values.
// - Use DevTools to set breakpoints and step through code.
// - Test code incrementally to catch errors early.
// - Google error messages for solutions and explanations.
// - Keep code modular to isolate bugs easily.

// === Answer to Exercise ===
// What is a common method to display information in the debugger window?
// Answer: console.log()
// Reason: `console.log()` outputs data to the Console in DevTools, making it ideal for debugging.