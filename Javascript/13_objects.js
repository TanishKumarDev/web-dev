```javascript
// File: 02_basics/04_objects.js
// Purpose: Practice advanced JavaScript object declaration, nesting, and methods

// Singleton Object (Constructor)
const tinderUser = new Object();
tinderUser.id = "123abc";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false;
console.log(tinderUser); // Output: { id: "123abc", name: "Sammy", isLoggedIn: false }

// Non-Singleton Object (Literal)
const tinderUser2 = {};
tinderUser2.id = "123abc";
tinderUser2.name = "Sammy";
tinderUser2.isLoggedIn = false;
console.log(tinderUser2); // Output: { id: "123abc", name: "Sammy", isLoggedIn: false }

// Nested Objects
const regularUser = {
  email: "sam@gmail.com",
  fullName: {
    userFullName: {
      firstName: "Hitesh",
      lastName: "Choudhary"
    }
  }
};
console.log(regularUser.fullName); // Output: { userFullName: { firstName: "Hitesh", lastName: "Choudhary" } }
console.log(regularUser.fullName.userFullName.firstName); // Output: "Hitesh"

// Merging Objects (Incorrect: Nesting)
const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "c", 4: "d" };
const obj3 = { obj1, obj2 };
console.log(obj3); // Output: { obj1: { 1: "a", 2: "b" }, obj2: { 3: "c", 4: "d" } }

// Merging Objects (Object.assign)
const obj4 = Object.assign({}, obj1, obj2);
console.log(obj4); // Output: { 1: "a", 2: "b", 3: "c", 4: "d" }
console.log(obj1); // Output: { 1: "a", 2: "b" } (unchanged)

// Merging Objects (Spread Operator)
const obj5 = { ...obj1, ...obj2 };
console.log(obj5); // Output: { 1: "a", 2: "b", 3: "c", 4: "d" }

// Array of Objects
const users = [
  { id: 1, email: "h@gmail.com" },
  { id: 2, email: "s@gmail.com" }
];
console.log(users[0].email); // Output: "h@gmail.com"

// Object Methods
console.log(Object.keys(tinderUser)); // Output: ["id", "name", "isLoggedIn"]
console.log(Object.values(tinderUser)); // Output: ["123abc", "Sammy", false]
console.log(Object.entries(tinderUser)); // Output: [["id", "123abc"], ["name", "Sammy"], ["isLoggedIn", false]]
console.log(tinderUser.hasOwnProperty("isLoggedIn")); // Output: true
console.log(tinderUser.hasOwnProperty("isLoggedOut")); // Output: false

// Reference: MDN for Object Methods
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/values
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty
```