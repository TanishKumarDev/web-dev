// === Understanding JavaScript Modules ===
// JavaScript modules, introduced in ES6 (2015), allow you to split code into separate files for better organization and reusability.
// - Purpose: Encapsulate code, making it easier to maintain, reuse, and avoid global scope pollution.
// - Key Features:
//   - Use `export` to share variables, functions, or classes from a file.
//   - Use `import` to access exported items in another file.
//   - Requires `<script type="module">` in HTML or module support in Node.js.
//   - Types: Named exports (multiple items) and default exports (one per file).
// - Constraints: Modules work only over HTTP(s), not file://, and operate in strict mode by default.
// Why confusing? Module syntax (`import`/`export`) differs from traditional `<script>` tags, and setup requirements can be tricky.
// Analogy: Think of modules as individual kitchen appliances (files) that can be plugged into a main system (your app) to perform specific tasks.
// Tip: Use modules to organize code into logical units, and always test in an HTTP(s) environment (e.g., local server).

console.log("=== JavaScript Modules Examples ===");

// === Named Exports (In-Line) ===
// Named exports allow exporting multiple items from a module using the `export` keyword.

console.log("\n=== Named Exports (In-Line) ===");
// Simulated person.js module
const personModule = {
  // Contents of person.js
  name: "Jesse",
  age: 40,
  // Simulating in-line exports
  exports: {
    name: "Jesse",
    age: 40
  }
};
console.log(personModule.exports.name, personModule.exports.age); // "Jesse" 40
// Reason: In-line `export const name = "Jesse"; export const age = 40;` makes `name` and `age` available for import.
// Logic: Named exports are explicitly listed, allowing selective importing in another module.

// === Named Exports (Grouped) ===
// You can group multiple exports at the bottom of a file using `export {}`.

console.log("\n=== Named Exports (Grouped) ===");
// Simulated personGrouped.js module
const personGroupedModule = (() => {
  const name = "Alice";
  const age = 25;
  // Simulating grouped export: export { name, age };
  return { exports: { name, age } };
})();
console.log(personGroupedModule.exports.name, personGroupedModule.exports.age); // "Alice" 25
// Reason: Grouped exports collect variables into a single `export` statement, achieving the same result as in-line exports.
// Logic: Useful for organizing exports at the end of a file for clarity.

// === Default Exports ===
// Default exports allow exporting a single value (function, object, etc.) per module.

console.log("\n=== Default Exports ===");
// Simulated message.js module
const messageModule = (() => {
  const message = () => {
    const name = "Jesse";
    const age = 40;
    return `${name} is ${age} years old.`;
  };
  // Simulating default export: export default message;
  return { default: message };
})();
console.log(messageModule.default()); // "Jesse is 40 years old."
// Reason: A default export is the primary value of a module, imported without curly braces.
// Logic: Only one default export is allowed per module, simplifying import for a single main item.

// === Importing Named Exports ===
// Named exports are imported using curly braces, matching the exported names.

console.log("\n=== Importing Named Exports ===");
// Simulating: import { name, age } from "./person.js";
const { name, age } = personModule.exports;
console.log(name, age); // "Jesse" 40
// Reason: Named imports use destructuring-like syntax to access specific exported items.
// Logic: Requires exact name matching, ensuring explicit and clear imports.

// Importing with aliases
const { name: personName, age: personAge } = personGroupedModule.exports;
console.log(personName, personAge); // "Alice" 25
// Reason: Aliases (e.g., `name as personName`) allow renaming imports to avoid conflicts.
// Logic: Provides flexibility when multiple modules export similar names.

// === Importing Default Exports ===
// Default exports are imported without curly braces and can be given any name.

console.log("\n=== Importing Default Exports ===");
// Simulating: import message from "./message.js";
const msg = messageModule.default;
console.log(msg()); // "Jesse is 40 years old."
// Reason: Default exports are imported without braces and can be assigned any variable name.
// Logic: Simplifies importing a module’s primary value, as the name is not fixed.

// === Modules in Strict Mode ===
// Modules automatically operate in strict mode, enforcing stricter rules.

console.log("\n=== Strict Mode in Modules ===");
// Simulated module with strict mode behavior
const strictModule = (() => {
  // undeclaredVar = 10; // Would throw ReferenceError: undeclaredVar is not defined
  const x = 10;
  return { exports: { x } };
})();
console.log(strictModule.exports.x); // 10
// Reason: Modules implicitly enable strict mode, preventing undeclared variables and other unsafe practices.
// Logic: Enhances code safety without needing an explicit "use strict" directive.

// === Combining Named and Default Exports ===
// A module can have both named and default exports.

console.log("\n=== Combining Named and Default Exports ===");
// Simulated combined.js module
const combinedModule = (() => {
  const defaultFn = () => "Default export";
  const namedValue = "Named export";
  return { default: defaultFn, exports: { namedValue } };
})();
const combinedDefault = combinedModule.default;
const { namedValue } = combinedModule.exports;
console.log(combinedDefault()); // "Default export"
console.log(namedValue); // "Named export"
// Reason: A module can export one default value and multiple named values.
// Logic: Allows flexibility to export a primary value alongside secondary ones.

// === Module Constraints ===
// Modules require an HTTP(s) environment and `<script type="module">` in browsers.

console.log("\n=== Module Constraints ===");
// Example (commented, as it requires a browser environment):
// <script type="module">
//   import message from "./message.js";
//   console.log(message()); // Would work over HTTP(s)
// </script>
// Reason: Modules don’t work with file:// due to CORS restrictions; require HTTP(s) and type="module".
// Logic: Ensures secure loading of scripts in a browser environment.

// === Best Practice: Using Modules ===
// Organize code into small, focused modules; use default exports for primary values and named exports for utilities.

console.log("\n=== Best Practice ===");
// Simulated utility.js module
const utilityModule = (() => {
  const add = (a, b) => a + b;
  const subtract = (a, b) => a - b;
  return { default: add, exports: { subtract } };
})();
const addFn = utilityModule.default;
const { subtract } = utilityModule.exports;
console.log(addFn(5, 3)); // 8
console.log(subtract(5, 3)); // 2
// Reason: Splitting code into modules improves maintainability; default exports highlight the main functionality.
// Logic: Use clear, descriptive names for exports to make imports intuitive.


/**
 * JavaScript Modules — What, Why, and How
 * 
 * What is a Module?
 * A module is a self-contained file (or piece of code) that encapsulates functionality — variables, functions, classes, etc. — and exports them so they can be imported and reused elsewhere.
 * 
 * Think: "One file = one responsibility."
 * 
 * Why Do We Need Modules?
 * Before modules, JS codebases had:
 * - Global variables polluting the namespace
 * - Dependencies and functions all in one file
 * - Code duplication across files
 * 
 * Modules solve that by:
 * - Keeping code organized
 * - Avoiding global scope pollution
 * - Making functions/classes reusable
 * - Enabling lazy loading, caching, and dependency management
 * 
 * Two Main Module Systems in JavaScript
 * 
 * 1. ES Modules (ESM) — Modern Standard (since ES6)
 * // math.js
 * export function add(a, b) {
 *   return a + b;
 * }
 * 
 * // main.js
 * import { add } from './math.js';
 * console.log(add(2, 3)); // 5
 * 
 * Key Points:
 * - Uses import / export
 * - Native support in browsers & modern Node.js
 * - Can export multiple things or a default export:
 * 
 * export default function greet() { ... }
 * 
 * 2. CommonJS (CJS) — Older (used in Node.js)
 * // math.js
 * function add(a, b) {
 *   return a + b;
 * }
 * module.exports = { add };
 * 
 * // main.js
 * const { add } = require('./math');
 * console.log(add(2, 3)); // 5
 * 
 * Key Points:
 * - Uses require / module.exports
 * - Only supported in Node.js (not browsers natively)
 * - Still heavily used in older codebases
 * 
 * Module Syntax Quick Reference
 * Feature         ES Modules           CommonJS
 * Export          export / export default   module.exports
 * Import          import                   require()
 * Scope           Always strict mode       Can be sloppy
 * Used in         Browsers, Node (modern)  Node.js only
 * File extension  .js or .mjs              .js
 * 
 * When Should You Use Modules?
 * Always when:
 * - Building anything real (web apps, backends, packages)
 * - You want maintainability, testing, scaling
 * - Working in React, Vue, Node.js, etc.
 * 
 * Example File Structure Using Modules
 * /project
 *   ├── index.js
 *   ├── utils/
 *   │   └── math.js         ← exports functions
 *   └── components/
 *       └── User.js         ← exports a class or React component
 * 
 * Final Thoughts
 * Benefit         Result
 * Modularity      Better code organization
 * Reusability     DRY (Don’t Repeat Yourself) principle
 * Encapsulation   Avoid polluting global scope
 * Maintainability Easier to test and debug
 */
