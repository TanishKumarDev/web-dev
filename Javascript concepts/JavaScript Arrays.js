// -----------------------------------------------------------------------------
// ✅ JavaScript Arrays - Overview, Syntax, Use Cases, Features, Pitfalls
// -----------------------------------------------------------------------------

// -----------------------------
// 1. Creating Arrays
// -----------------------------

// Using array literal (recommended)
const cars = ["Saab", "Volvo", "BMW"];

// Declaring with line breaks (also valid)
const carsMultiLine = [
  "Saab",
  "Volvo",
  "BMW"
];

// Empty array + assignment
const carsEmpty = [];
carsEmpty[0] = "Saab";
carsEmpty[1] = "Volvo";
carsEmpty[2] = "BMW";

// Using new Array() - not recommended
const carsNew = new Array("Saab", "Volvo", "BMW");

// Creates array with 1 element (NOT 40 empty items)
const oneElement = [40]; 

// Creates array with 40 undefined items (careful!)
const fortyElements = new Array(40);


// -----------------------------
// 2. Array Characteristics
// -----------------------------

/**
 * - Arrays are objects (`typeof` returns `"object"`)
 * - Elements are ordered (zero-indexed)
 * - Can hold mixed types (numbers, strings, objects, functions)
 * - Dynamic sizing
 * - Arrays ≠ objects (in usage, index access, behavior)
 */

const mixedArray = [
  42,
  "text",
  { name: "Tanish" },
  [1, 2, 3],
  function greet() { return "Hello"; }
];

console.log(mixedArray[2].name);   // "Tanish"
console.log(mixedArray[3][1]);     // 2
console.log(mixedArray[4]());      // "Hello"


// -----------------------------
// 3. Accessing & Modifying Arrays
// -----------------------------

const fruits = ["Banana", "Orange", "Apple", "Mango"];

let firstFruit = fruits[0];              // Banana
let lastFruit = fruits[fruits.length-1]; // Mango

// Change value
fruits[0] = "Lemon";

// Add using push() or length
fruits.push("Kiwi");
fruits[fruits.length] = "Pineapple";

// Dangerous: High index creates holes
fruits[10] = "Dragonfruit"; // indexes 5 to 9 are undefined


// -----------------------------
// 4. Array Properties and Methods
// -----------------------------

console.log(fruits.length);       // Total elements (includes undefined)
console.log(fruits.toString());   // Converts to CSV string
console.log(fruits.sort());       // Alphabetical sort


// -----------------------------
// 5. Looping Through Arrays
// -----------------------------

// Classic for loop
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// forEach method
fruits.forEach(function(value) {
  console.log("Fruit:", value);
});


// -----------------------------
// 6. Arrays vs Objects
// -----------------------------

// Array = numeric indices
const personArray = ["John", "Doe", 46];
console.log(personArray[0]); // John

// Object = named properties
const personObj = { firstName: "John", lastName: "Doe", age: 46 };
console.log(personObj.firstName); // John

// Avoid using arrays as associative containers:
const wrong = [];
wrong["name"] = "John";
console.log(wrong.length);  // 0 — doesn't count string keys
console.log(wrong[0]);      // undefined


// -----------------------------
// 7. Type Checking for Arrays
// -----------------------------

const fruits2 = ["Apple", "Banana"];

console.log(typeof fruits2);            // object
console.log(Array.isArray(fruits2));    // true ✅ (ES5+)
console.log(fruits2 instanceof Array);  // true ✅


// -----------------------------
// 8. Nested Arrays & Objects
// -----------------------------

const myObj = {
  name: "John",
  cars: [
    { name: "Ford", models: ["Fiesta", "Focus", "Mustang"] },
    { name: "BMW", models: ["320", "X3", "X5"] },
    { name: "Fiat", models: ["500", "Panda"] }
  ]
};

// Accessing nested models
myObj.cars.forEach((car) => {
  console.log("Brand:", car.name);
  car.models.forEach((model) => {
    console.log("Model:", model);
  });
});


// -----------------------------
// 9. Quiz / Pitfall
// -----
