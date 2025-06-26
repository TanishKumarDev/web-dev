// ==================================================
// ✅ JavaScript Debugging - Concepts, Tools, Practice
// ==================================================

/**
 * 🔸 Debugging is the process of finding and fixing errors (bugs) in your code.
 * 🔸 Tools: console.log, debugger, browser DevTools, breakpoints, error handling
 */

// ------------------------------------------
// 1. Using console.log()
// ------------------------------------------

const user = {
  name: "Tanish",
  age: 21,
  isAdmin: false
};

console.log("🔍 Checking user object:", user);  // basic logging
console.log("User name:", user.name);
console.log("Type of isAdmin:", typeof user.isAdmin);

// ------------------------------------------
// 2. Console Methods
// ------------------------------------------

console.warn("⚠️ Warning: Age is not verified!");
console.error("❌ Error: User not authenticated!");

console.table(user); // displays as table

// Grouping logs
console.group("User Details");
console.log("Name:", user.name);
console.log("Age:", user.age);
console.groupEnd();

// ------------------------------------------
// 3. The debugger Keyword
// ------------------------------------------

function calculateDiscount(price, discount) {
  const discountedPrice = price - price * discount;

  debugger; // ✅ triggers browser devtools if open

  return discountedPrice;
}

console.log("Discounted:", calculateDiscount(1000, 0.2));

// ------------------------------------------
// 4. Intentional Bug Example + Debugging
// ------------------------------------------

function getUserStatus(user) {
  // Intentional bug: typo in property name
  if (user.isAdmn) {
    return "Admin";
  } else {
    return "Guest";
  }
}

console.log(getUserStatus(user)); // undefined → Guest (should be Admin)

// How to fix it:
// Use console.log before condition
// Or use debugger inside function

// ------------------------------------------
// 5. Breakpoints in DevTools (Browser)
// ------------------------------------------

/**
 * 1. Open your browser DevTools (F12)
 * 2. Go to "Sources" tab
 * 3. Set breakpoints by clicking line numbers
 * 4. Refresh page or trigger functions
 * 5. Use Step Over (F10), Step Into (F11) to navigate
 */

// ------------------------------------------
// 6. Error Handling
// ------------------------------------------

try {
  // Intentional error
  let result = x + 1; // x is not defined
} catch (error) {
  console.error("Caught an error:", error.message);
  // Optional: send error logs to server
}

// ------------------------------------------
// 7. Using typeof / console.assert
// ------------------------------------------

const age = "21"; // bug: should be number

console.assert(typeof age === "number", "❌ Age should be a number");

// ------------------------------------------
// 8. Debugging Tips for Interviews / Projects
// ------------------------------------------

/**
 * ✅ Always check error stack trace in console
 * ✅ Use small console.log blocks to trace flow
 * ✅ Isolate code in small functions to debug easily
 * ✅ Use browser DevTools or VSCode breakpoints
 * ✅ For async bugs, use .catch(), try/catch, and log responses
 */

// ------------------------------------------
// 9. Debugging in Node.js (Terminal)
// ------------------------------------------

/**
 * - You can debug in Node using:
 *    node inspect file.js
 * - Or with VSCode using breakpoints
 * - Or use console.log + `--watch` for live reload
 */

