// -----------------------------------------------------------------------------
// ✅ JavaScript Arrays - Overview, Syntax, Use Cases, Features, Pitfalls
// -----------------------------------------------------------------------------

// JavaScript arrays are dynamic, ordered collections that store mixed data types.
// This cheat sheet covers creation, manipulation, key methods, and interview tips.

// -----------------------------
// 1. Creating Arrays
// -----------------------------

// Using array literal (recommended for simplicity and readability)
const fruits = ["Apple", "Banana", "Orange"];

// Declaring with line breaks (valid for clarity with large arrays)
const fruitsMultiLine = [
    "Mango",
    "Pineapple",
    "Grape"
];

// Empty array with manual assignment
const emptyArray = [];
emptyArray[0] = "Kiwi";
emptyArray[1] = "Lemon";
console.log(emptyArray); // Output: ["Kiwi", "Lemon"]

// Using Array constructor (less common, creates sparse arrays if size specified)
const carsNew = new Array("Ford", "Toyota", "Honda");
console.log(carsNew); // Output: ["Ford", "Toyota", "Honda"]

// Create array of specific size with undefined elements (sparse array)
const sparseArray = new Array(3);
console.log(sparseArray); // Output: [ <3 empty items> ]

// Create array of specific size with filled values (recommended)
const filledArray = Array(3).fill(0);
console.log(filledArray); // Output: [0, 0, 0]

// Single element array (avoid confusion with size)
const singleElement = [40];
console.log(singleElement); // Output: [40]

// Mixed types (arrays can hold any data type)
const mixedArray = [
    42,
    "text",
    { name: "Tanish" },
    [1, 2, 3],
    function greet() { return "Hello"; }
];
console.log(mixedArray[2].name, mixedArray[3][1], mixedArray[4]());
// Output: Tanish 2 Hello

// Pitfall: Sparse arrays with `new Array(n)` have empty slots, not `undefined`
console.log(sparseArray[0]); // Output: undefined

// -----------------------------
// 2. Array Characteristics
// -----------------------------

/**
 * - Arrays are objects (`typeof` returns "object")
 * - Zero-indexed, ordered elements
 * - Dynamic sizing (grow/shrink automatically)
 * - Can store mixed data types (numbers, strings, objects, etc.)
 * - Not the same as objects (arrays use numeric indices, objects use keys)
 */

console.log(typeof fruits); // Output: object
console.log(fruits.length); // Output: 3
console.log(fruits instanceof Array); // Output: true

// -----------------------------
// 3. Accessing & Modifying Arrays
// -----------------------------

// Accessing first and last elements
const colors = ["Red", "Green", "Blue", "Yellow"];
let firstColor = colors[0]; // First element
let lastColor = colors[colors.length - 1]; // Last element
console.log(firstColor, lastColor); // Output: Red Yellow

// Using `at()` for modern access (ES2022)
console.log(colors.at(-1)); // Output: Yellow (last element)

// Modifying elements
colors[0] = "Purple"; // Change first element
console.log(colors); // Output: ["Purple", "Green", "Blue", "Yellow"]

// Dangerous: Assigning high index creates sparse array with undefined slots
colors[10] = "Black";
console.log(colors); // Output: ["Purple", "Green", "Blue", "Yellow", <6 empty items>, "Black"]

// Pitfall: Accessing out-of-bounds indices returns `undefined`
console.log(colors[20]); // Output: undefined

// -----------------------------
// 4. Appending Elements to an Array
// -----------------------------

// Append to end with `push` (mutates array)
const numbers = [1, 2];
numbers.push(3);
console.log(numbers); // Output: [1, 2, 3]

// Append multiple elements
numbers.push(4, 5);
console.log(numbers); // Output: [1, 2, 3, 4, 5]

// Append to start with `unshift` (mutates array)
numbers.unshift(0);
console.log(numbers); // Output: [0, 1, 2, 3, 4, 5]

// Append using spread operator (non-mutating)
const newNumbers = [...numbers, 6];
console.log(newNumbers); // Output: [0, 1, 2, 3, 4, 5, 6]

// Pitfall: `unshift` is slower for large arrays due to index shifting
// Performance: `push` is O(1), `unshift` is O(n)

// -----------------------------
// 5. Removing Elements from an Array
// -----------------------------

// Remove from end with `pop` (mutates array, returns removed element)
const animals = ["Cat", "Dog", "Bird"];
const popped = animals.pop();
console.log(animals, popped); // Output: ["Cat", "Dog"] "Bird"

// Remove from start with `shift` (mutates array, returns removed element)
const shifted = animals.shift();
console.log(animals, shifted); // Output: ["Dog"] "Cat"

// Remove by index with `splice` (mutates array, returns removed elements)
const nums = [1, 2, 3, 4];
nums.splice(1, 2); // Remove 2 elements starting at index 1
console.log(nums); // Output: [1, 4]

// Remove by condition with `filter` (non-mutating, returns new array)
const filtered = nums.filter(x => x !== 1);
console.log(filtered); // Output: [4]

// Pitfall: `pop` or `shift` on empty array returns `undefined`
console.log([].pop()); // Output: undefined

// -----------------------------
// 6. Basic Array Methods
// -----------------------------

// Common mutating methods
const items = ["Pen", "Book", "Ruler"];
items.push("Eraser"); // Add to end
items.pop(); // Remove from end
items.unshift("Pencil"); // Add to start
items.shift(); // Remove from start
items.splice(1, 1, "Notebook"); // Replace at index 1
console.log(items); // Output: ["Pen", "Notebook"]

// Other basic methods
console.log(items.length); // Output: 2 (total elements)
console.log(items.toString()); // Output: Pen,Notebook (CSV string)
console.log(items.sort()); // Output: ["Notebook", "Pen"] (alphabetical sort)

// Pitfall: `sort` mutates array; use `[...arr].sort()` for non-mutating
console.log([...items].sort()); // Output: ["Notebook", "Pen"]

// -----------------------------
// 7. Best-Known Array Methods
// -----------------------------

// Non-mutating methods for functional programming
const scores = [10, 20, 30, 40];

// forEach: Execute function for each element (no return)
scores.forEach((val, i) => console.log(`Score ${i}: ${val}`));
// Output: Score 0: 10, Score 1: 20, Score 2: 30, Score 3: 40

// map: Create new array with transformed elements
const doubled = scores.map(x => x * 2);
console.log(doubled); // Output: [20, 40, 60, 80]

// filter: Create new array with elements passing condition
const highScores = scores.filter(x => x > 20);
console.log(highScores); // Output: [30, 40]

// reduce: Reduce array to a single value
const sum = scores.reduce((acc, val) => acc + val, 0);
console.log(sum); // Output: 100

// find: Return first element matching condition
const firstHigh = scores.find(x => x > 20);
console.log(firstHigh); // Output: 30

// some: Check if any element passes condition
const hasLow = scores.some(x => x < 20);
console.log(hasLow); // Output: true

// every: Check if all elements pass condition
const allPositive = scores.every(x => x > 0);
console.log(allPositive); // Output: true

// Pitfall: `forEach` returns `undefined`, not a new array
console.log(scores.forEach(x => x * 2)); // Output: undefined

// -----------------------------
// 8. forEach Method
// -----------------------------

// Iterates over array, executing callback for each element
const names = ["Alice", "Bob", "Charlie"];
names.forEach((name, index, array) => {
    console.log(`${index}: ${name}, Array: ${array}`);
});
// Output: 0: Alice, Array: Alice,Bob,Charlie
//         1: Bob, Array: Alice,Bob,Charlie
//         2: Charlie, Array: Alice,Bob,Charlie

// Modify array (mutating if callback alters elements)
const numsToDouble = [1, 2, 3];
numsToDouble.forEach((val, i) => numsToDouble[i] = val * 2);
console.log(numsToDouble); // Output: [2, 4, 6]

// Pitfall: Avoid modifying array length in `forEach` to prevent infinite loops
// numsToDouble.forEach((val, i) => numsToDouble.push(val)); // Infinite loop risk

// -----------------------------
// 9. map Method
// -----------------------------

// Creates new array with results of callback applied to each element
const prices = [100, 200, 300];
const discounted = prices.map(price => price * 0.9);
console.log(discounted); // Output: [90, 180, 270]

// Transform objects
const users = [{ id: 1, name: "A" }, { id: 2, name: "B" }];
const userIds = users.map(user => user.id);
console.log(userIds); // Output: [1, 2]

// Pitfall: `map` creates shallow copies of objects
const objArray = [{ n: 1 }];
const mapped = objArray.map(obj => obj);
mapped[0].n = 2;
console.log(objArray[0].n); // Output: 2 (original modified)

// Workaround: Deep copy objects
const deepMapped = objArray.map(obj => ({ ...obj }));
deepMapped[0].n = 3;
console.log(objArray[0].n); // Output: 2 (original unchanged)

// -----------------------------
// 10. filter Method
// -----------------------------

// Creates new array with elements passing the callback condition
const ages = [15, 20, 25, 17];
const adults = ages.filter(age => age >= 18);
console.log(adults); // Output: [20, 25]

// Filter object array based on attributes
const people = [{ name: "A", age: 20 }, { name: "B", age: 15 }];
const adultsObj = people.filter(person => person.age >= 18);
console.log(adultsObj); // Output: [{ name: "A", age: 20 }]

// Pitfall: Missing properties can cause errors
const mixedPeople = [{ age: 20 }, {}];
console.log(mixedPeople.filter(person => person.age && person.age > 18));
// Output: [{ age: 20 }]

// -----------------------------
// 11. reduce Method
// -----------------------------

// Reduces array to a single value using a callback
const values = [1, 2, 3, 4];
const product = values.reduce((acc, val) => acc * val, 1);
console.log(product); // Output: 24

// Aggregate object properties
const orders = [{ price: 10 }, { price: 20 }];
const total = orders.reduce((sum, order) => sum + order.price, 0);
console.log(total); // Output: 30

// Pitfall: Empty array without initial value causes error
// console.log([].reduce((a, b) => a + b)); // Error: no initial value
console.log([].reduce((a, b) => a + b, 0)); // Output: 0

// -----------------------------
// 12. Removing Duplicate Elements
// -----------------------------

// Using Set (simplest and most efficient)
const duplicates = [1, 1, 2, 2, 3];
const unique = [...new Set(duplicates)];
console.log(unique); // Output: [1, 2, 3]

// Using filter (alternative)
const uniqueFilter = duplicates.filter((val, i) => duplicates.indexOf(val) === i);
console.log(uniqueFilter); // Output: [1, 2, 3]

// Using reduce (less common)
const uniqueReduce = duplicates.reduce((uniq, val) => 
    uniq.includes(val) ? uniq : [...uniq, val], []);
console.log(uniqueReduce); // Output: [1, 2, 3]

// Pitfall: Objects are compared by reference in Set
const objDuplicates = [{ id: 1 }, { id: 1 }];
console.log([...new Set(objDuplicates)]); // Output: [{ id: 1 }, { id: 1 }]

// Workaround: Deduplicate objects by property
const uniqueById = objDuplicates.filter((obj, i, arr) => 
    arr.findIndex(o => o.id === obj.id) === i);
console.log(uniqueById); // Output: [{ id: 1 }]

// -----------------------------
// 13. Adding Objects to an Array
// -----------------------------

// Add object with push (mutates array)
const usersArray = [{ id: 1, name: "A" }];
usersArray.push({ id: 2, name: "B" });
console.log(usersArray); // Output: [{ id: 1, name: "A" }, { id: 2, name: "B" }]

// Add object with spread (non-mutating)
const newUsersArray = [...usersArray, { id: 3, name: "C" }];
console.log(newUsersArray); // Output: [{ id: 1, name: "A" }, { id: 2, name: "B" }, { id: 3, name: "C" }]

// Pitfall: Objects share references
const obj = { id: 1 };
const arrWithObj = [obj];
arrWithObj.push(obj);
arrWithObj[0].id = 2;
console.log(arrWithObj); // Output: [{ id: 2 }, { id: 2 }]

// Workaround: Create new object copies
arrWithObj.push({ ...obj });
console.log(arrWithObj); // Output: [{ id: 2 }, { id: 2 }, { id: 2 }]

// -----------------------------
// 14. Multidimensional Arrays
// -----------------------------

// Create and access 2D array
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(matrix[1][2]); // Output: 6 (row 1, column 2)

// Iterate 2D array
matrix.forEach(row => row.forEach(val => console.log(val)));
// Output: 1, 2, 3, 4, 5, 6, 7, 8, 9

// Transform 2D array
const doubledMatrix = matrix.map(row => row.map(val => val * 2));
console.log(doubledMatrix); // Output: [[2, 4, 6], [8, 10, 12], [14, 16, 18]]

// Pitfall: Jagged arrays (rows with different lengths)
const jagged = [[1, 2], [3]];
console.log(jagged[1][1]); // Output: undefined

// -----------------------------
// 15. Arrays vs. Objects
// -----------------------------

// Array: Numeric indices, ordered
const personArray = ["John", "Doe", 46];
console.log(personArray[0]); // Output: John

// Object: Named properties, unordered
const personObj = { firstName: "John", lastName: "Doe", age: 46 };
console.log(personObj.firstName); // Output: John

// Avoid using arrays as objects (string keys don't affect length)
const wrongArray = [];
wrongArray["key"] = "value";
console.log(wrongArray.length); // Output: 0
console.log(wrongArray["key"]); // Output: value

// -----------------------------
// 16. Type Checking for Arrays
// -----------------------------

// Check if value is an array
const checkArray = ["Apple", "Banana"];
console.log(typeof checkArray); // Output: object
console.log(Array.isArray(checkArray)); // Output: true
console.log(checkArray instanceof Array); // Output: true

// Pitfall: `typeof` returns "object" for arrays
// Use `Array.isArray` for reliable checking

// -----------------------------
// 17. Nested Arrays & Objects
// -----------------------------

// Complex nested structure
const company = {
    name: "Tech Corp",
    employees: [
        { name: "Alice", skills: ["JS", "Python"] },
        { name: "Bob", skills: ["Java", "C++"] }
    ]
};

// Access nested data
company.employees.forEach(emp => {
    console.log(`${emp.name}: ${emp.skills.join(", ")}`);
});
// Output: Alice: JS, Python
//         Bob: Java, C++

// Pitfall: Accessing undefined nested properties
console.log(company.employees[2]?.skills); // Output: undefined (safe with optional chaining)

// -----------------------------
// 18. Quiz / Pitfalls
// -----------------------------

// Quiz 1: Predict the output
const quiz1 = [1, 2, 3];
quiz1[10] = 10;
console.log(quiz1.length); // Output: 11 (includes empty slots)

// Quiz 2: Predict the output
const quiz2 = [1, 2, 3];
console.log(quiz2.map(x => x * 2).filter(x => x > 4)); // Output: [6]

// Quiz 3: Predict the output
const quiz3 = [{ x: 1 }, { x: 1 }];
console.log([...new Set(quiz3)].length); // Output: 2 (objects compared by reference)

// Quiz 4: Predict the output
const quiz4 = [1, 2, 3];
quiz4.forEach((x, i) => quiz4[i] = x + 1);
console.log(quiz4); // Output: [2, 3, 4]

// Common pitfalls:
/* 
1. Sparse arrays from high index assignments
2. Mutating arrays during iteration
3. Object references in arrays
4. Using `for...in` for arrays
5. Missing initial value in `reduce` for empty arrays
*/

// -----------------------------
// 19. Interview Tips
// -----------------------------

/**
 * - Understand mutating vs. non-mutating methods
 * - Use `Set` for deduplication
 * - Prefer `for...of` or `for` over `for...in` for arrays
 * - Handle object references carefully
 * - Know performance implications (e.g., `unshift` vs. `push`)
 * - Practice combining methods (e.g., `map` + `filter` + `reduce`)
 */