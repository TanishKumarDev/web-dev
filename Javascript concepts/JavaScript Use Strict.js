// -----------------------------------------------------------------------------
// ✅ 1. What is "use strict"?
// -----------------------------------------------------------------------------

/**
 * "use strict" is a directive that enables **Strict Mode** in JavaScript.
 * It was introduced in ES5 (ECMAScript 2009) to catch **common coding mistakes**
 * and **unsafe actions** (like assigning to undeclared variables).
 * 
 * It must be the **first statement** in a file or function.
 */

"use strict";

// -----------------------------------------------------------------------------
// ✅ 2. Benefits of Strict Mode
// -----------------------------------------------------------------------------

/**
 * 🔹 Prevents use of undeclared variables
 * 🔹 Eliminates silent JavaScript errors
 * 🔹 Disallows duplicate parameter names
 * 🔹 Makes `this` undefined in functions (not global)
 * 🔹 Protects reserved keywords for future JS versions
 */

// -----------------------------------------------------------------------------
// ✅ 3. Using "use strict"
// -----------------------------------------------------------------------------

// Global strict mode
"use strict";

// or local to a function
function test() {
  "use strict";
  // function body
}

// -----------------------------------------------------------------------------
// ✅ 4. Example: Preventing Undeclared Variables
// -----------------------------------------------------------------------------

// Without strict mode (default JS behavior):
x = 10; // ✅ Creates global variable (bad practice)

// With strict mode:
"use strict";
// y = 20; // ❌ ReferenceError: y is not defined

// -----------------------------------------------------------------------------
// ✅ 5. Example: Preventing Assignment to Read-Only or Reserved Properties
// -----------------------------------------------------------------------------

// Object.defineProperty makes prop non-writable
const obj = {};
Object.defineProperty(obj, "id", { value: 101, writable: false });

// obj.id = 200; // ❌ TypeError in strict mode

// -----------------------------------------------------------------------------
// ✅ 6. Example: Duplicate Parameter Names
// -----------------------------------------------------------------------------

// function sum(a, a) { return a + a; } // ❌ SyntaxError in strict mode

// -----------------------------------------------------------------------------
// ✅ 7. Example: `this` in Regular Functions
// -----------------------------------------------------------------------------

function regular() {
  console.log(this); // ❌ undefined in strict mode (was global object in non-strict)
}
regular();

// -----------------------------------------------------------------------------
// ✅ 8. Example: Reserved Keywords
// -----------------------------------------------------------------------------

// let interface = "abc"; // ❌ SyntaxError in strict mode

// -----------------------------------------------------------------------------
// ✅ 9. Summary – When to Use
// -----------------------------------------------------------------------------

/**
 * ✅ Use `"use strict"` at the beginning of your scripts or functions
 * ✅ It helps write cleaner, safer code
 * ✅ It's required for ES6 modules (implied strict mode)
 * ✅ Helps catch bugs early and enforces best practices
 */

// -----------------------------------------------------------------------------
// ✅ 10. Interview Tip
// -----------------------------------------------------------------------------

/**
 * Common question:
 * Q: What is "use strict" in JS and what does it do?
 * A:
 * - It enables strict mode.
 * - Catches common mistakes (like undeclared variables).
 * - Makes JS behavior more predictable.
 * - Prevents unsafe operations.
 */

