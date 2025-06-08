// === Understanding JavaScript Style Guide ===
// A JavaScript Style Guide provides coding conventions to ensure consistent, readable, and maintainable code.
// - Purpose: To standardize code formatting, naming, and structure across projects for better collaboration and quality.
// - Key Features:
//   - Rules for naming variables/functions (e.g., camelCase), spacing, indentation, and statement structure.
//   - Guidelines for file naming, script loading, and HTML element access.
//   - Focus on readability, maintainability, and avoiding common errors.
// - Why Important? Consistent conventions improve code readability, reduce errors, and make maintenance easier.
// - Why Confusing? Different teams/projects may use varying conventions (e.g., camelCase vs. underscores), causing confusion.
// - Analogy: Think of a style guide as a recipe book for coding: it ensures everyone follows the same steps for a consistent result.
// - Tip: Adopt a popular style guide (e.g., Airbnb, Google) or W3Schools’ conventions and stick to it across projects.

// === Variable and Function Naming ===
// Use camelCase for variables and functions, starting with a letter. Avoid $ or reserved words.
console.log("\n=== Variable Naming ===");
let firstName = "John"; // camelCase: clear and standard in JavaScript
let lastName = "Doe";
function calculateTotal(price, tax) { // camelCase for functions
  return price + (price * tax);
}
console.log("Full Price:", calculateTotal(19.90, 0.20)); // "Full Price: 23.88"
// Reason: camelCase is widely used in JavaScript (e.g., jQuery, Node.js) and improves readability.
// Logic: Consistent naming prevents confusion and aligns with JavaScript libraries.
// Avoid: let first_name (underscores), let FirstName (PascalCase), let $name (library conflicts).

// === Spaces Around Operators and Commas ===
// Always add spaces around operators (+, -, *, /, =) and after commas for clarity.
console.log("\n=== Spaces Around Operators ===");
let x = 10 + 5; // Spaces around +
const myArray = ["Volvo", "Saab", "Fiat"]; // Spaces after commas
console.log("Sum:", x, "Array:", myArray); // "Sum: 15 Array: ['Volvo', 'Saab', 'Fiat']"
// Reason: Spaces improve readability and prevent errors in complex expressions.
// Logic: Clear spacing makes code easier to scan and maintain.

// === Code Indentation ===
// Use 2 spaces for indentation (not tabs) to ensure consistency across editors.
console.log("\n=== Code Indentation ===");
function toCelsius(fahrenheit) {
  return (5 / 9) * (fahrenheit - 32); // 2-space indentation
}
console.log("Celsius:", toCelsius(77)); // "Celsius: 25"
// Reason: Tabs vary across editors; 2 spaces are a standard, compact choice.
// Logic: Consistent indentation visually organizes code blocks.

// === Statement Rules ===
// - Simple statements: End with a semicolon.
// - Complex statements (functions, loops, conditionals): Opening bracket on the same line, closing bracket on a new line, no semicolon.
console.log("\n=== Statement Rules ===");
const cars = ["Volvo", "Saab", "Fiat"]; // Semicolon for simple statement
if (cars.length > 2) { // Opening bracket on same line
  console.log("More than 2 cars"); // "More than 2 cars"
} // Closing bracket on new line, no semicolon
// Reason: Semicolons clarify statement endings; bracket rules enhance readability.
// Logic: Prevents automatic semicolon insertion issues in JavaScript.

// === Object Definitions ===
// - Use colon + space for properties, quotes for string values, no comma after the last property, end with semicolon.
console.log("\n=== Object Definitions ===");
const person = {
  firstName: "John", // Colon + space, quotes for strings
  lastName: "Doe",
  age: 50, // No quotes for numbers
  eyeColor: "blue" // No trailing comma
}; // Semicolon at end
console.log("Person:", person.firstName, person.lastName); // "Person: John Doe"
// Short object example
const shortPerson = { firstName: "Jane", lastName: "Doe" }; // Compressed, spaces between properties
console.log("Short Person:", shortPerson); // "Short Person: {firstName: 'Jane', lastName: 'Doe'}"
// Reason: Consistent formatting makes objects easy to read and less error-prone.
// Logic: Clear rules avoid syntax errors and improve team collaboration.

// === Line Length ===
// Keep lines under 80 characters, breaking after operators or commas if needed.
console.log("\n=== Line Length ===");
document.getElementById("demo").innerHTML = 
  "Hello Dolly."; // Break after operator
// Reason: Short lines improve readability, especially in editors or small screens.
// Logic: Breaking after operators/commas keeps code logical and scannable.

// === Naming Conventions Comparison ===
// - camelCase: Used by JavaScript, jQuery, and most libraries (e.g., myVariable).
// - Underscores: Common in SQL/PHP (e.g., my_variable).
// - PascalCase: Used in C# or for classes (e.g., MyClass).
// - Hyphens: Used in CSS/HTML (e.g., data-id), not valid in JavaScript.
console.log("\n=== Naming Conventions ===");
let userName = "Alice"; // camelCase: JavaScript standard
let USER_NAME = "GLOBAL"; // UPPERCASE: For constants or globals
console.log("User:", userName, "Constant:", USER_NAME); // "User: Alice Constant: GLOBAL"
// Avoid: let user-name (invalid), let $name (conflicts with libraries).
// Reason: Consistent naming prevents errors and aligns with JavaScript ecosystem.
// Logic: Choose camelCase for variables/functions, UPPERCASE for constants.

// === Loading JavaScript in HTML ===
// Use simple <script> tags without type attribute for external scripts.
console.log("\n=== Loading JavaScript ===");
// Example HTML: <script src="myscript.js"></script>
// Reason: Modern browsers assume JavaScript, making type="text/javascript" unnecessary.
// Logic: Simplifies code and follows HTML5 standards.

// === Accessing HTML Elements ===
// Use consistent naming (e.g., camelCase) for element IDs to avoid errors.
console.log("\n=== Accessing HTML Elements ===");
const element = document.getElementById("demo"); // Correct: Matches HTML ID
// const wrongElement = document.getElementById("Demo"); // Error if ID is "demo"
// Reason: JavaScript is case-sensitive; mismatched IDs cause null references.
// Logic: Match HTML ID naming (lowercase recommended) to JavaScript conventions.

// === File Naming Conventions ===
// - Use .js for JavaScript files, .html for HTML, .css for CSS.
// - Use lowercase file names (e.g., script.js, not Script.js).
console.log("\n=== File Naming ===");
// Example: script.js, not Script.js or script.JS
// Reason: Many servers (e.g., Apache) are case-sensitive; lowercase avoids errors.
// Logic: Consistent lowercase naming ensures portability across systems.

// === Performance Considerations ===
// - Development: Prioritize readability with spaces, indentation, and comments.
// - Production: Minify code (remove spaces/comments) for faster loading.
console.log("\n=== Performance Example ===");
function exampleFunction() {
  let result = 0; // Readable in development
  for (let i = 0; i < 5; i++) {
    result += i;
  }
  return result;
}
console.log("Result:", exampleFunction()); // "Result: 10"
// Minified version: function exampleFunction(){let r=0;for(let i=0;i<5;i++)r+=i;return r;}
// Reason: Readable code aids debugging; minified code optimizes performance.
// Logic: Use tools like UglifyJS or Webpack for production minification.

// === Best Practices for Style Guide ===
// 1. Adopt a consistent style guide (e.g., W3Schools, Airbnb, or Google).
// 2. Use camelCase for variables/functions, UPPERCASE for constants.
// 3. Always use 2-space indentation and spaces around operators/commas.
// 4. End simple statements with semicolons; avoid for complex blocks.
// 5. Keep lines < 80 characters and break logically.
// 6. Use lowercase file names and match HTML IDs to JavaScript naming.
console.log("\n=== Best Practice Example ===");
const user = {
  name: "Bob",
  age: 30
}; // Semicolon, no trailing comma
function greetUser(person) {
  return `Hello, ${person.name}!`; // 2-space indent, spaces around operator
}
console.log(greetUser(user)); // "Hello, Bob!"
// Reason: Consistent conventions prevent errors and improve team workflows.
// Logic: Clear, predictable code is easier to read and maintain.

// === Real-World Scenario: Applying Style Guide ===
// Simulate a small project with consistent conventions.
console.log("\n=== Real-World Example ===");
const products = [
  { id: 1, name: "Laptop", price: 999 },
  { id: 2, name: "Phone", price: 499 }
];
function displayProducts(items) {
  let output = "";
  for (let i = 0; i < items.length; i++) {
    output += `${items[i].name}: $${items[i].price}\n`;
  }
  return output;
}
console.log(displayProducts(products)); // "Laptop: $999\nPhone: $499"
// Reason: Follows camelCase, 2-space indentation, semicolons, and clear structure.
// Logic: Consistent style makes the code easy to understand and extend.

// === Common Pitfalls to Avoid ===
// - Inconsistent naming (e.g., mixing camelCase and underscores).
// - Missing semicolons in simple statements (can cause ASI issues).
// - Trailing commas in objects (invalid in older browsers).
// - Long lines (> 80 characters) reducing readability.
// - Case mismatches in HTML IDs or file names.
console.log("\n=== Avoiding Pitfalls ===");
try {
  const badObject = { name: "Test", }; // Trailing comma (avoid)
  console.log(badObject);
} catch (error) {
  console.log("Error:", error.message); // May fail in older browsers
}
// Corrected
const goodObject = { name: "Test" }; // No trailing comma
console.log("Correct Object:", goodObject); // "Correct Object: {name: 'Test'}"

// === Recommended Style Guides ===
// - Airbnb JavaScript Style Guide: Strict, widely used, emphasizes readability.
// - Google JavaScript Style Guide: Balanced, clear rules for large projects.
// - W3Schools: Simple, beginner-friendly, as shown in this example.
// Tip: Use linters (e.g., ESLint) to enforce style rules automatically.