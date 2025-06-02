// Data types are categorized into Primitive and Non-Primitive (Reference) based on memory storage and access

// Primitive Data Types (Call by Value, Stack Memory)
// Copied when assigned; changes affect the copy, not the original
// 7 Types:
// 1. String
// 2. Number
// 3. Boolean
// 4. Null (empty value, not 0 or "")
// 5. Undefined (declared but unassigned)
// 6. Symbol (unique identifiers)
// 7. BigInt (large integers)

// Examples
let name = "Tanish"; // String
let score = 100; // Number
let scoreValue = 3.3; // Number (no separate float type)
let isLoggedIn = false; // Boolean
let temperature = null; // Null (e.g., no temperature data)
let userEmail; // Undefined (or explicitly: let userEmail = undefined)
let id = Symbol("123"); // Symbol (unique)
let anotherId = Symbol("123"); // Symbol (unique, not equal to id)
let bigNumber = 12345678901234567890n; // BigInt (append n)

// More String Examples
let firstName = "John";
let lastName = "Doe";
let fullName = firstName + " " + lastName; // String concatenation
let templateLiteral = `Hello ${firstName}!`; // Template literal
console.log(fullName); // Output: John Doe
console.log(templateLiteral); // Output: Hello John!

// More Number Examples
let integer = 42;
let float = 3.14159;
let scientific = 2.998e8; // Scientific notation
let hex = 0xFF; // Hexadecimal
let binary = 0b1010; // Binary
console.log(Number.MAX_SAFE_INTEGER); // Output: 9007199254740991
console.log(Number.MIN_SAFE_INTEGER); // Output: -9007199254740991

// More Boolean Examples
let isTrue = true;
let isFalse = false;
let truthy = Boolean(1); // true
let falsy = Boolean(0); // false
console.log(Boolean("")); // Output: false (empty string is falsy)
console.log(Boolean("hello")); // Output: true (non-empty string is truthy)

// More Symbol Examples
const sym1 = Symbol("description");
const sym2 = Symbol("description");
const sym3 = Symbol.for("shared"); // Global symbol
const sym4 = Symbol.for("shared"); // Same global symbol
console.log(sym1 === sym2); // Output: false
console.log(sym3 === sym4); // Output: true

// More BigInt Examples
let bigInt1 = 9007199254740991n;
let bigInt2 = 9007199254740992n;
console.log(bigInt1 + bigInt2); // Output: 18014398509481983n
// console.log(bigInt1 + 1); // Error: Cannot mix BigInt and Number

// Verify Symbol uniqueness
console.log(id === anotherId); // Output: false

// Non-Primitive (Reference) Data Types (Call by Reference, Heap Memory)
// Reference to memory location; changes affect the original
// 3 Main Types:
// 1. Array
// 2. Object
// 3. Function

// Examples
let heroes = ["Krish", "Shaktiman", "Nagraj"]; // Array
let myObj = {
  name: "Tanish",
  age: 22,
}; // Object
let myFunction = function () {
  console.log("Hello World");
}; // Function

// More Array Examples
let numbers = [1, 2, 3, 4, 5];
let mixed = [1, "hello", true, { key: "value" }];
let matrix = [[1, 2], [3, 4]];
console.log(numbers.length); // Output: 5
console.log(numbers[0]); // Output: 1
numbers.push(6); // Add element
console.log(numbers); // Output: [1, 2, 3, 4, 5, 6]

// More Object Examples
let person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  address: {
    street: "123 Main St",
    city: "Boston"
  },
  hobbies: ["reading", "gaming"],
  sayHello: function() {
    return `Hello, I'm ${this.firstName}`;
  }
};
console.log(person.sayHello()); // Output: Hello, I'm John
console.log(person.address.city); // Output: Boston

// More Function Examples
function add(a, b) {
  return a + b;
}
const multiply = (a, b) => a * b;
const greet = function(name) {
  return `Hello, ${name}!`;
};
console.log(add(5, 3)); // Output: 8
console.log(multiply(4, 2)); // Output: 8
console.log(greet("Alice")); // Output: Hello, Alice!

// JavaScript is Dynamically Typed
// No need to define variable types (unlike TypeScript)
let constant = 100; // Number (no type declaration needed)
constant = false; // Boolean (can change type dynamically)

// Type Checking with typeof
console.log(typeof bigNumber); // Output: bigint
console.log(typeof temperature); // Output: object (historical bug)
console.log(typeof score); // Output: number
console.log(typeof isLoggedIn); // Output: boolean
console.log(typeof userEmail); // Output: undefined
console.log(typeof id); // Output: symbol
console.log(typeof heroes); // Output: object
console.log(typeof myObj); // Output: object
console.log(typeof myFunction); // Output: function (technically object)

// Stack and Heap Memory Examples
// Primitive (Stack): Copy is provided
let myYoutubeName = "Tanishdotcom";
let anotherName = myYoutubeName;
anotherName = "CodeWithMe";
console.log(myYoutubeName); // Output: Tanishdotcom
console.log(anotherName); // Output: CodeWithMe
// Note: anotherName gets a copy; changing it doesn't affect myYoutubeName

// More Stack Memory Examples
let x = 10;
let y = x;
y = 20;
console.log(x); // Output: 10
console.log(y); // Output: 20

// Non-Primitive (Heap): Reference is provided
let userOne = {
  email: "user@google.com",
  upi: "user@ybl",
};
let userTwo = userOne;
userTwo.email = "tanish@google.com";
console.log(userOne.email); // Output: tanish@google.com
console.log(userTwo.email); // Output: tanish@google.com
// Note: userTwo gets a reference; changing userTwo.email updates userOne

// More Heap Memory Examples
let arr1 = [1, 2, 3];
let arr2 = arr1;
arr2.push(4);
console.log(arr1); // Output: [1, 2, 3, 4]
console.log(arr2); // Output: [1, 2, 3, 4]

// Deep Copy vs Shallow Copy
// Shallow Copy
let original = { a: 1, b: { c: 2 } };
let shallowCopy = { ...original };
shallowCopy.b.c = 3;
console.log(original.b.c); // Output: 3 (nested object is still referenced)

// Deep Copy
let deepCopy = JSON.parse(JSON.stringify(original));
deepCopy.b.c = 4;
console.log(original.b.c); // Output: 3 (original remains unchanged)
console.log(deepCopy.b.c); // Output: 4

// Reference: MDN for memory and data types
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures