// -----------------------------------------------------------------------------
// ✅ JavaScript Array Search Methods - Explained with Examples
// -----------------------------------------------------------------------------

const fruits = ["Apple", "Banana", "Mango", "Orange", "Banana"];

// -----------------------------
// 1. indexOf(item, startIndex)
// -----------------------------
// Returns the FIRST index of the item in the array (or -1 if not found)

console.log(fruits.indexOf("Banana"));       // 1
console.log(fruits.indexOf("Banana", 2));    // 4
console.log(fruits.indexOf("Grapes"));       // -1

// Case-sensitive
console.log(fruits.indexOf("banana"));       // -1


// -----------------------------
// 2. lastIndexOf(item, startIndex)
// -----------------------------
// Returns the LAST index of the item in the array

console.log(fruits.lastIndexOf("Banana"));   // 4
console.log(fruits.lastIndexOf("Banana", 3)); // 1


// -----------------------------
// 3. includes(item, startIndex)
// -----------------------------
// Returns true if item is present in the array

console.log(fruits.includes("Mango"));       // true
console.log(fruits.includes("Grapes"));      // false
console.log(fruits.includes("Banana", 3));   // true


// -----------------------------
// 4. find(callback)
// -----------------------------
// Returns the FIRST element that satisfies the callback condition

const numbers = [5, 12, 8, 130, 44];
const found = numbers.find(num => num > 10);
console.log(found); // 12


// -----------------------------
// 5. findIndex(callback)
// -----------------------------
// Returns the index of the FIRST element that satisfies the condition

const foundIndex = numbers.findIndex(num => num > 100);
console.log(foundIndex); // 3 (index of 130)


// -----------------------------
// 6. some(callback)
// -----------------------------
// Returns true if AT LEAST ONE element satisfies the condition

const hasLarge = numbers.some(num => num > 100);
console.log(hasLarge); // true


// -----------------------------
// 7. every(callback)
// -----------------------------
// Returns true if ALL elements satisfy the condition

const allPositive = numbers.every(num => num > 0);
console.log(allPositive); // true

const allAbove10 = numbers.every(num => num > 10);
console.log(allAbove10); // false


// -----------------------------
// 8. filter(callback)
// -----------------------------
// Returns a NEW array with ALL elements that match the condition

const filtered = numbers.filter(num => num > 50);
console.log(filtered); // [130, 44]


// -----------------------------
// 9. Searching Objects in Arrays
// -----------------------------

const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" }
];

// Find user with name === "Bob"
const userBob = users.find(user => user.name === "Bob");
console.log(userBob); // { id: 2, name: "Bob" }

// Find index of user with id === 3
const indexCharlie = users.findIndex(user => user.id === 3);
console.log(indexCharlie); // 2

// Check if some user has id > 2
const hasHighId = users.some(user => user.id > 2);
console.log(hasHighId); // true


// -----------------------------
// ✅ Summary
// -----------------------------

/**
 * ➤ indexOf(item, from): First index of item
 * ➤ lastIndexOf(item, from): Last index of item
 * ➤ includes(item, from): Boolean check
 * ➤ find(callback): First element matching condition
 * ➤ findIndex(callback): Index of first matching element
 * ➤ some(callback): Any element matches?
 * ➤ every(callback): All elements match?
 * ➤ filter(callback): All matching elements in a new array
 */

