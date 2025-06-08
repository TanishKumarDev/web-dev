// === Understanding JavaScript Performance ===
// JavaScript performance optimization focuses on writing code that runs faster and uses fewer resources.
// - Purpose: To improve execution speed, reduce page load times, and enhance user experience, especially on resource-constrained devices.
// - Key Features:
//   - Minimize loop overhead, reduce DOM access, and avoid unnecessary variables.
//   - Optimize script loading and avoid problematic constructs like `with`.
// - Why Important? Faster code improves responsiveness, reduces latency, and enhances scalability in web applications.
// - Why Confusing? Performance issues (e.g., slow loops, excessive DOM access) may not be obvious until they impact users.
// - Analogy: Think of JavaScript optimization as tuning a car engine: small adjustments (e.g., caching values) boost speed and efficiency.
// - Tip: Profile code with browser DevTools (e.g., Chrome’s Performance tab) to identify bottlenecks.

// === Reduce Activity in Loops ===
// Accessing properties like array.length inside a loop adds overhead for each iteration.
console.log("\n=== Optimize Loops ===");
const arr = [1, 2, 3, 4, 5];
// Bad: Accessing length every iteration
function slowLoop() {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
console.log("Slow Loop:", slowLoop()); // "Slow Loop: 15"
// Better: Cache length outside loop
function fastLoop() {
  let sum = 0;
  const len = arr.length; // Cache length
  for (let i = 0; i < len; i++) {
    sum += arr[i];
  }
  return sum;
}
console.log("Fast Loop:", fastLoop()); // "Fast Loop: 15"
// Reason: Accessing length repeatedly is slower, especially for large arrays.
// Logic: Cache constant values outside loops to reduce redundant computations.

// === Reduce DOM Access ===
// DOM operations are slow compared to JavaScript computations. Cache DOM references for reuse.
console.log("\n=== Reduce DOM Access ===");
const obj = document.getElementById("demo"); // Cache DOM reference
obj.innerHTML = "Hello"; // Fast: Single DOM access
// Bad: Repeated DOM access
// document.getElementById("demo").innerHTML = "Hello"; // Slow: Accesses DOM again
// Reason: Each DOM access (e.g., getElementById) involves querying the page, which is costly.
// Logic: Store DOM elements in variables for multiple uses to minimize overhead.

// === Reduce DOM Size ===
// A smaller DOM (fewer elements) improves page load and rendering speed.
console.log("\n=== Reduce DOM Size ===");
// Example: Avoid unnecessary elements
// Bad: <div><div><div>Hello</div></div></div>
// Better: <div>Hello</div>
// Simulated DOM search
const elements = document.getElementsByTagName("div"); // Faster with fewer divs
console.log("Div Count:", elements.length); // Fewer elements = faster
// Reason: Large DOMs slow down queries (e.g., getElementsByTagName) and rendering.
// Logic: Simplify HTML structure and minimize nested elements, especially for mobile.

// === Avoid Unnecessary Variables ===
// Don’t create variables for one-time calculations that can be done directly.
console.log("\n=== Avoid Unnecessary Variables ===");
const firstName = "John";
const lastName = "Doe";
// Bad: Unnecessary variable
const fullName = firstName + " " + lastName;
document.getElementById("demo").innerHTML = fullName;
// Better: Direct computation
document.getElementById("demo").innerHTML = firstName + " " + lastName;
// Reason: Extra variables increase memory usage and clutter code.
// Logic: Skip intermediate variables for simple operations to save resources.

// === Delay JavaScript Loading ===
// Load scripts after the page renders to avoid blocking HTML parsing.
console.log("\n=== Delay Script Loading ===");
// Example HTML: Place script at bottom of <body>
// <body>
//   <h1>Content</h1>
//   <script src="myscript.js"></script>
// </body>
// Alternative: Use defer
// <script defer src="myscript.js"></script>
// Programmatic loading
window.onload = function() {
  const element = document.createElement("script");
  element.src = "myscript.js";
  document.body.appendChild(element);
  console.log("Script loaded after page"); // "Script loaded after page"
};
// Reason: Scripts block rendering and downloads; delaying them prioritizes page content.
// Logic: Use <script defer>, bottom placement, or dynamic loading for non-critical scripts.

// === Avoid Using with ===
// The `with` keyword slows down execution and is banned in strict mode.
console.log("\n=== Avoid with Keyword ===");
const user = { name: "John", age: 30 };
// Bad: Using with
// with (user) {
//   console.log(name, age); // Slow and ambiguous
// }
// Better: Explicit access
console.log(user.name, user.age); // "John 30"
// Reason: `with` creates scope ambiguity, slowing variable resolution.
// Logic: Use explicit object references for clarity and speed.

// === Best Practices for Performance ===
// 1. Cache loop invariants (e.g., array.length) outside loops.
// 2. Store DOM references in variables for reuse.
// 3. Minimize DOM size by simplifying HTML structure.
// 4. Avoid unnecessary variables for simple operations.
// 5. Delay script loading with defer or dynamic loading.
// 6. Avoid `with` and use strict mode for faster, safer code.
console.log("\n=== Best Practices Example ===");
function processItems(items) {
  "use strict";
  const len = items.length; // Cache length
  const output = document.getElementById("output"); // Cache DOM
  let result = "";
  for (let i = 0; i < len; i++) {
    result += items[i]; // No unnecessary variables
  }
  output.innerHTML = result;
  return result;
}
const items = ["A", "B", "C"];
console.log("Processed:", processItems(items)); // "Processed: ABC"
// Reason: Combines caching, minimal DOM access, and strict mode.
// Logic: Optimized code runs faster and uses fewer resources.

// === Real-World Scenario: Optimizing a List Renderer ===
// Simulate rendering a list efficiently.
console.log("\n=== Real-World Example ===");
function renderList(data) {
  "use strict";
  const container = document.getElementById("list"); // Cache DOM
  const len = data.length; // Cache length
  let html = ""; // Avoid DOM updates in loop
  for (let i = 0; i < len; i++) {
    html += `<li>${data[i].name}</li>`; // Build string
  }
  container.innerHTML = html; // Single DOM update
  return html;
}
const data = [{ name: "Item 1" }, { name: "Item 2" }];
console.log("Rendered:", renderList(data)); // "Rendered: <li>Item 1</li><li>Item 2</li>"
// Reason: Minimizes DOM updates, caches length, and uses strict mode.
// Logic: Efficient rendering improves performance for large lists.

// === Common Performance Pitfalls ===
// - Accessing array.length in loops: Adds overhead per iteration.
// - Repeated DOM queries: Slows execution significantly.
// - Large DOM: Increases rendering and query times.
// - Unnecessary variables: Wastes memory for simple tasks.
// - Early script loading: Blocks page rendering.
// - Using `with`: Slows scope resolution and breaks strict mode.

// === Recommended Tools ===
// - Chrome DevTools (Performance tab): Profile code to find bottlenecks.
// - Lighthouse: Audit page performance, including JavaScript.
// - ESLint (performance rules): Catch inefficient patterns.
// - Minifiers (e.g., UglifyJS): Reduce code size for production.
// Tip: Test performance with realistic data sizes to identify issues.