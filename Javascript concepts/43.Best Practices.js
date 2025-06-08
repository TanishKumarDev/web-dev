// === Understanding JavaScript Best Practices ===
// JavaScript Best Practices are guidelines to write clean, efficient, and maintainable code while avoiding common errors.
// - Purpose: To enhance code reliability, readability, and performance, minimizing bugs and security risks.
// - Key Features:
//   - Avoid global variables to prevent conflicts and overwrites.
//   - Use strict equality (===) to avoid type coercion issues.
//   - Prefer primitive literals over object constructors (e.g., "" vs. new String()).
//   - Avoid dangerous functions like eval() due to security and performance concerns.
// - Why Important? These practices ensure robust, scalable code that’s easier to debug and maintain in collaborative projects.
// - Why Confusing? JavaScript’s loose typing and flexible scope can lead to subtle errors if not handled carefully.
// - Analogy: Think of best practices as a chef’s guide for cooking: following precise steps ensures a delicious, consistent dish.
// - Tip: Use tools like ESLint and strict mode to enforce best practices and catch potential issues early.

// === Avoid Global Variables ===
// Global variables are accessible everywhere and can be overwritten, causing unpredictable behavior.
console.log("\n=== Avoiding Global Variables ===");
function calculateTax() {
  // Local variables using let/const
  const price = 100;
  const taxRate = 0.2;
  return price * taxRate;
}
console.log("Tax:", calculateTax()); // "Tax: 20"
// Bad example: Global variable
// totalPrice = 100; // Global, can be overwritten
// Reason: Global variables risk conflicts, especially in large apps or with third-party scripts.
// Logic: Encapsulate variables in functions or modules using let/const to limit scope.

// === Always Declare Local Variables ===
// Undeclared variables become global in non-strict mode, which is error-prone.
console.log("\n=== Declaring Local Variables ===");
function displayMessage() {
  "use strict"; // Prevents undeclared variables
  let message = "Hello, World!"; // Local scope
  return message;
}
console.log(displayMessage()); // "Hello, World!"
// Bad example: Undeclared variable
// function badDisplay() {
//   msg = "Hello"; // Becomes global in non-strict mode
//   return msg;
// }
// Reason: Strict mode enforces declarations, reducing accidental globals.
// Logic: Always use let, const, or var inside functions to control scope.

// === Declarations on Top ===
// Declare all variables at the start of a function or script for clarity and to avoid re-declarations.
console.log("\n=== Declarations on Top ===");
function processItems() {
  // Declare all variables at the top
  let count = 0, sum = 0, discount = 0.15;
  count = 5;
  sum = count * 20;
  return sum - (sum * discount);
}
console.log("Total:", processItems()); // "Total: 85"
// Reason: Centralized declarations improve readability and prevent accidental re-declarations.
// Logic: Group declarations to make variable usage predictable.

// === Initialize Variables ===
// Initialize variables at declaration to avoid undefined values and clarify intent.
console.log("\n=== Initialize Variables ===");
let user = ""; // Initialized as string
let score = 0; // Initialized as number
const scores = []; // Initialized as array
console.log("Initial Values:", user, score, scores); // "Initial Values: '' 0 []"
// Bad example: Uninitialized variable
// let uninit;
// console.log(uninit); // undefined
// Reason: Initialization prevents undefined errors and signals data type.
// Logic: Set default values (e.g., "", 0, []) for predictable behavior.

// === Declare Objects and Arrays with const ===
// Use const for objects and arrays to prevent reassigning them to different types.
console.log("\n=== Objects and Arrays with const ===");
const product = { name: "Laptop", price: 999 };
product.price = 1099; // Allowed: Modify property
// product = "Laptop"; // Error: Reassignment not allowed
const products = ["Laptop", "Phone"];
products.push("Tablet"); // Allowed: Modify array
// products = 5; // Error: Reassignment not allowed
console.log("Product:", product, "Products:", products); // "Product: {name: 'Laptop', price: 1099} Products: ['Laptop', 'Phone', 'Tablet']"
// Reason: const ensures type safety while allowing internal modifications.
// Logic: Use const for objects/arrays to prevent accidental type changes.

// === Avoid new Object() and Similar Constructors ===
// Use literals (e.g., {}, [], "") instead of new Object(), new Array(), etc., for simplicity and speed.
console.log("\n=== Avoid new Object() ===");
const obj = {}; // Preferred
const arr = []; // Preferred
let str1 = ""; // Preferred
let num = 0; // Preferred
let bool = false; // Preferred
console.log("Literals:", obj, arr, str1, num, bool); // "Literals: {} [] '' 0 false"
// Bad example: Using constructors
// const badObj = new Object();
// const badArr = new Array();
// Reason: Literals are concise, faster, and less prone to errors.
// Logic: Avoid constructors to simplify code and improve performance.

// === Beware of Automatic Type Conversions ===
// JavaScript’s loose typing can lead to unexpected coercion during operations.
console.log("\n=== Type Conversions ===");
let a = 10 + 5; // 15 (number)
let b = 10 + "5"; // "105" (string)
let c = "10" - 5; // 5 (number)
let d = "Hello" - "World"; // NaN
console.log("Results:", a, b, c, d); // "Results: 15 '105' 5 NaN"
// Reason: Coercion can produce strings or NaN unexpectedly.
// Logic: Use explicit conversions (e.g., Number()) and strict equality (===) to avoid surprises.

// === Use === for Comparisons ===
// Strict equality (===) checks both value and type, avoiding coercion issues.
console.log("\n=== Strict Equality ===");
console.log("0 == '':", 0 == ""); // "0 == '': true" (coercion)
console.log("1 == '1':", 1 == "1"); // "1 == '1': true" (coercion)
console.log("1 === '1':", 1 === "1"); // "1 === '1': false" (no coercion)
console.log("true === true:", true === true); // "true === true: true"
// Reason: Loose equality (==) coerces types, hiding bugs; === is precise.
// Logic: Always use === unless coercion is intentionally needed.

// === Use Parameter Defaults ===
// Default parameters prevent undefined errors in functions.
console.log("\n=== Parameter Defaults ===");
function addItems(count, multiplier = 2) { // Default multiplier
  return count * multiplier;
}
console.log("Add:", addItems(3)); // "Add: 6"
console.log("Add:", addItems(3, 5)); // "Add: 15"
// Older approach
function oldAddItems(count, multiplier) {
  multiplier = multiplier === undefined ? 2 : multiplier;
  return count * multiplier;
}
console.log("Old Add:", oldAddItems(3)); // "Old Add: 6"
// Reason: Defaults make functions robust and reduce error handling.
// Logic: Use ES2015 default parameters for cleaner, safer code.

// === End Switches with Defaults ===
// Always include a default case in switch statements to handle unexpected values.
console.log("\n=== Switch Defaults ===");
function getStatus(code) {
  let status;
  switch (code) {
    case 1:
      status = "Active";
      break;
    case 2:
      status = "Inactive";
      break;
    default:
      status = "Unknown"; // Handles invalid codes
  }
  return status;
}
console.log("Status:", getStatus(1)); // "Status: Active"
console.log("Status:", getStatus(99)); // "Status: Unknown"
// Reason: Default cases ensure robustness for unexpected inputs.
// Logic: Always include default to cover edge cases.

// === Avoid Number, String, and Boolean as Objects ===
// Use primitives instead of object wrappers for better performance and comparison.
console.log("\n=== Avoid Primitive Objects ===");
let str = "Hello"; // Primitive
let strObj = new String("Hello"); // Object
console.log("str === strObj:", str === strObj); // "str === strObj: false"
// Bad: Object comparison
let strObj2 = new String("Hello");
console.log("strObj == strObj2:", strObj == strObj2); // "strObj == strObj2: false"
// Reason: Object wrappers are slower and fail strict equality checks.
// Logic: Use primitives (e.g., "", 0, false) for simplicity and consistency.

// === Avoid Using eval() ===
// eval() executes strings as code, posing security risks and performance issues.
console.log("\n=== Avoid eval() ===");
const dynamicCode = "console.log('Dynamic')";
try {
  // eval(dynamicCode); // Avoid: Could be malicious
  console.log("Use functions instead");
} catch (error) {
  console.log("Error:", error.message);
}
// Safe alternative
const safeDynamic = () => console.log("Dynamic");
safeDynamic(); // "Dynamic"
// Reason: eval() allows arbitrary code, which can be exploited or slow.
// Logic: Use functions or safer alternatives like JSON.parse().

// === Best Practices in Action: Real-World Example ===
// Combine practices in a practical example.
console.log("\n=== Real-World Example ===");
const calculateOrder = (items = [], discount = 0) => {
  "use strict";
  const orderItems = [...items]; // Local copy, const
  let total = 0;
  for (let i = 0; i < orderItems.length; i++) {
    total += Number(orderItems[i].price); // Avoid coercion
  }
  return total - discount;
};
const order = [{ price: "100" }, { price: "50" }]; // No trailing comma
console.log("Order Total:", calculateOrder(order, 20)); // "Order Total: 130"
// Reason: Uses strict mode, local variables, defaults, and explicit conversions.
// Logic: Robust code avoids common errors and scales well.

// === Common Pitfalls to Avoid ===
// - Global variables: Cause conflicts in larger apps.
// - Loose equality (==): Leads to coercion-related bugs.
// - Uninitialized variables: Result in undefined errors.
// - Object constructors (new Object()): Add complexity and slow execution.
// - Missing switch defaults: Fail to handle edge cases.
// - eval(): Introduces security and performance risks.
console.log("\n=== Avoiding Pitfalls ===");
const safeProcess = () => {
  "use strict";
  let count = 0; // Initialized, local
  if (count === 0) { // Strict equality
    return "Zero items";
  }
  return "Some items";
};
console.log(safeProcess()); // "Zero items"
// Reason: Adheres to best practices, avoiding common errors.
// Logic: Consistent, safe coding prevents bugs and improves maintainability.

// === Recommended Tools ===
// - ESLint: Enforces best practices (e.g., no-eval, eqeqeq).
// - Prettier: Ensures consistent formatting alongside best practices.
// - Browser DevTools: Inspect type coercion or scope issues.
// Tip: Configure ESLint with `eslint-config-airbnb` for strict best practices.