// Object Literal Declaration
const jsUser = {
  name: "Tanish",
  age: 18,
  location: "Jaipur",
  email: "Tanish@google.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Saturday"],
  "full name": "Tanish Choudhary"
};

// Accessing Properties
console.log(jsUser.name); // Output: "Tanish"
console.log(jsUser["email"]); // Output: "Tanish@google.com"
console.log(jsUser["full name"]); // Output: "Tanish Choudhary"

// Symbol as Key
const mySym = Symbol("key1");
jsUser[mySym] = "myKey1";
console.log(jsUser[mySym]); // Output: "myKey1"
console.log(jsUser); // Output: { name: "Tanish", ..., [Symbol(key1)]: "myKey1" }
// Incorrect: jsUser.mySym = "myKey1"; // Creates string key, not symbol

// Modifying Object
jsUser.email = "Tanish@chatgpt.com";
console.log(jsUser.email); // Output: "Tanish@chatgpt.com"

// Freezing Object
Object.freeze(jsUser);
jsUser.email = "Tanish@microsoft.com";
console.log(jsUser.email); // Output: "Tanish@chatgpt.com" (no change)

// Adding Functions
jsUser.greeting = function() {
  console.log("Hello JS User");
};
console.log(jsUser.greeting); // Output: [Function: greeting]
console.log(jsUser.greeting()); // Output: "Hello JS User" (undefined in Node.js)

jsUser.greetingTwo = function() {
  console.log(`Hello JS User, ${this.name}`);
};
console.log(jsUser.greetingTwo()); // Output: "Hello JS User, Tanish" (undefined in Node.js)

// Reference: MDN for Objects and Symbols
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze
