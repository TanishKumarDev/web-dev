// Basic Named IIFE
(function chai() {
  console.log("DB CONNECTED");
})();
// Output: DB CONNECTED

// Unnamed IIFE
(function() {
  console.log("DB CONNECTED");
})();
// Output: DB CONNECTED

// Arrow Function IIFE
(() => {
  console.log("DB CONNECTED");
})();
// Output: DB CONNECTED

// Parameterized IIFE
((name) => {
  console.log(`DB CONNECTED TO ${name}`);
})("Tanish");
// Output: DB CONNECTED TO Tanish

// Multiple IIFEs with Semicolon
(function() {
  console.log("First IIFE");
})();
(function() {
  console.log("Second IIFE");
})();
// Output: First IIFE
// Output: Second IIFE

// Reference: MDN for IIFE and Scope
// https://developer.mozilla.org/en-US/docs/Glossary/IIFE
// https://developer.mozilla.org/en-US/docs/Glossary/Scope