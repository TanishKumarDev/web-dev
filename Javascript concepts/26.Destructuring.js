// === Understanding Destructuring ===
// Destructuring is like unpacking a suitcase: you take specific items (values) out and assign them to containers (variables).
// It simplifies extracting data from objects, arrays, or other iterables without manually accessing each element.
// - Object destructuring: Extracts properties into variables using property names.
// - Array destructuring: Extracts elements into variables based on position.
// Why useful? Reduces code verbosity and makes assignments clearer.
// Tip: Use destructuring for clean code, but ensure the source (object/array) exists to avoid errors.

console.log("=== JavaScript Destructuring Examples ===");

// === Object Destructuring ===
// Unpack object properties into variables using property names.
// Syntax: let {property1, property2} = object;

console.log("\n=== Object Destructuring ===");
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50
};
let {firstName, lastName} = person;
console.log(firstName, lastName); // "John Doe"
// Reason: The variables firstName and lastName are assigned the values of person.firstName and person.lastName.
// Logic: Matches property names in the object to variable names in the destructuring syntax.

let {lastName: ln, firstName: fn} = person;
console.log(fn, ln); // "John Doe"
// Reason: Property aliases (lastName: ln) rename the extracted values to new variable names.
// Logic: Useful when you want different variable names than the object’s property names.

// Order doesn’t matter
let {age, firstName: fname} = person;
console.log(fname, age); // "John 50"
// Reason: Object destructuring matches by property name, not position.
// Logic: Flexible, as long as property names exist in the object.

// Note: Destructuring is non-destructive; the original object remains unchanged.
console.log(person); // {firstName: "John", lastName: "Doe", age: 50}

// === Object Default Values ===
// Set default values for missing properties to avoid undefined.

console.log("\n=== Object Default Values ===");
let {firstName: f, lastName: l, country = "US"} = person;
console.log(f, l, country); // "John Doe US"
// Reason: country isn’t in person, so it uses the default value "US".
// Logic: Prevents undefined errors for optional properties.

// === String Destructuring ===
// Unpack string characters (as iterables) into variables.

console.log("\n=== String Destructuring ===");
let name = "W3Schools";
let [a1, a2, a3, a4, a5] = name;
console.log(a1, a2, a3, a4, a5); // "W 3 S c h"
// Reason: Strings are iterables; each character is assigned to a variable by position.
// Logic: Useful for extracting specific characters without substring methods.

// === Array Destructuring ===
// Unpack array elements into variables based on position.
// Syntax: let [var1, var2] = array;

console.log("\n=== Array Destructuring ===");
const fruits = ["Bananas", "Oranges", "Apples", "Mangos"];
let [fruit1, fruit2] = fruits;
console.log(fruit1, fruit2); // "Bananas Oranges"
// Reason: The first two elements are assigned to fruit1 and fruit2 based on their positions.
// Logic: Matches array indices (0, 1) to variables in order.

// === Skipping Array Values ===
// Use commas to skip elements during destructuring.

console.log("\n=== Skipping Array Values ===");
let [f1,,,f2] = fruits;
console.log(f1, f2); // "Bananas Mangos"
// Reason: The commas skip elements at indices 1 and 2, assigning index 0 to f1 and index 3 to f2.
// Logic: Allows selective extraction of array elements.

// === Array Position Values ===
// Use index-based destructuring to extract specific positions.

console.log("\n=== Array Position Values ===");
let {[0]: pos1, [1]: pos2} = fruits;
console.log(pos1, pos2); // "Bananas Oranges"
// Reason: The syntax [0]: pos1 targets the element at index 0, assigning it to pos1.
// Logic: Explicitly targets array indices, similar to regular destructuring but with index notation.

// === The Rest Property ===
// Collect remaining elements into a new array using ...rest.

console.log("\n=== Rest Property ===");
const numbers = [10, 20, 30, 40, 50, 60, 70];
const [a, b, ...rest] = numbers;
console.log(a, b, rest); // 10 20 [30, 40, 50, 60, 70]
// Reason: a and b get the first two elements; ...rest collects the remaining elements into an array.
// Logic: Useful for splitting arrays into parts (e.g., head and tail).

// === Destructuring Maps ===
// Iterate over Map entries using destructuring in a for...of loop.

console.log("\n=== Destructuring Maps ===");
const fruitsMap = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);
let text = "";
for (const [key, value] of fruitsMap) {
  text += key + " is " + value + ", ";
}
console.log(text); // "apples is 500, bananas is 300, oranges is 200, "
// Reason: Each Map entry is an array [key, value]; destructuring unpacks it into key and value variables.
// Logic: Simplifies iteration over key-value pairs in Maps.

// === Swapping Variables ===
// Swap two variables using array destructuring.

console.log("\n=== Swapping Variables ===");
let first = "John";
let last = "Doe";
[first, last] = [last, first];
console.log(first, last); // "Doe John"
// Reason: Destructuring assigns last to first and first to last in one step.
// Logic: Eliminates the need for a temporary variable in swapping.

// === Exercise: const fruits = ['Apple', 'Banana', 'Cherry']; let [x, y] = fruits; ===
console.log("\n=== Exercise Result ===");
const exerciseFruits = ['Apple', 'Banana', 'Cherry'];
let [x, y] = exerciseFruits;
console.log(x); // "Apple"
// Reason: Array destructuring assigns the first element (index 0) to x, so x is "Apple".
// Logic: The variable x takes the value at index 0; y takes index 1 ("Banana").
// Correct Answer: Apple