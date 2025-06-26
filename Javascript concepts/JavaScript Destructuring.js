// -----------------------------------------------------------------------------
// ✅ 1. What is Destructuring?
// -----------------------------------------------------------------------------

/**
 * Destructuring is a JavaScript expression that allows unpacking values from:
 *  - Arrays
 *  - Objects
 * ...into distinct variables
 * 
 * ➤ It helps write cleaner and more readable code.
 */

// -----------------------------------------------------------------------------
// ✅ 2. Array Destructuring
// -----------------------------------------------------------------------------

const numbers = [1, 2, 3, 4];

// Simple destructuring
const [a, b] = numbers;
console.log(a); // 1
console.log(b); // 2

// Skip elements
const [first, , third] = numbers;
console.log(third); // 3

// Rest operator
const [num1, ...rest] = numbers;
console.log(num1); // 1
console.log(rest); // [2, 3, 4]

// Swap values (interview trick)
let x = 10;
let y = 20;
[x, y] = [y, x];
console.log(x, y); // 20 10

// -----------------------------------------------------------------------------
// ✅ 3. Object Destructuring
// -----------------------------------------------------------------------------

const user = {
  name: "Tanish",
  age: 21,
  role: "developer"
};

// Basic destructuring
const { name, age } = user;
console.log(name); // Tanish
console.log(age);  // 21

// Rename variables
const { role: job } = user;
console.log(job); // developer

// Default values
const { company = "Unknown" } = user;
console.log(company); // Unknown

// -----------------------------------------------------------------------------
// ✅ 4. Nested Destructuring
// -----------------------------------------------------------------------------

const person = {
  id: 101,
  info: {
    fullName: "John Doe",
    address: {
      city: "Delhi",
      pincode: 110001
    }
  }
};

const {
  info: {
    fullName,
    address: { city }
  }
} = person;

console.log(fullName); // John Doe
console.log(city);     // Delhi

// -----------------------------------------------------------------------------
// ✅ 5. Destructuring in Function Parameters
// -----------------------------------------------------------------------------

function printUser({ name, age }) {
  console.log(`Name: ${name}, Age: ${age}`);
}
printUser(user); // Name: Tanish, Age: 21

function sum([a, b]) {
  return a + b;
}
console.log(sum([5, 15])); // 20

// -----------------------------------------------------------------------------
// ✅ 6. Mixed Destructuring
// -----------------------------------------------------------------------------

const data = {
  id: 1,
  tags: ["js", "ts", "node"],
  meta: {
    views: 100,
    likes: 10
  }
};

const {
  tags: [tag1, tag2],
  meta: { likes }
} = data;

console.log(tag1); // js
console.log(tag2); // ts
console.log(likes); // 10

// -----------------------------------------------------------------------------
// ✅ 7. Interview Tips & Use Cases
// -----------------------------------------------------------------------------

/**
 * ➤ Destructuring simplifies data extraction from arrays/objects
 * ➤ Use default values to avoid undefined
 * ➤ Use rest operator (...) to get remaining elements
 * ➤ Common in React for props: const { title } = props
 * ➤ Great for API responses, config parsing, array manipulations
 */

// -----------------------------------------------------------------------------
// ✅ 8. Summary
// -----------------------------------------------------------------------------

/**
 * ➤ Array Destructuring: [a, b] = array
 * ➤ Object Destructuring: { key } = obj
 * ➤ Use renaming, default values, nested access
 * ➤ Can be used in function params too
 */
