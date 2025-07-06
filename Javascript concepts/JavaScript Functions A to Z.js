/*******************************
JavaScript Functions - Master Reference
********************************/

/*
What is a Function in JS?
A function is a reusable block of code that performs a task when called.

Benefits:
- Reuse code logic
- Better organization
- Testable & maintainable
*/

// 1. Function Declaration
function greet(name) {
  return `Hello, ${name}!`;
}
console.log(greet("Tanish")); // Output: Hello, Tanish!

// 2. Function Expression
const multiply = function (a, b) {
  return a * b;
};
console.log(multiply(4, 5)); // Output: 20

// 3. Arrow Functions (ES6)
const divide = (a, b) => a / b;
console.log(divide(10, 2)); // Output: 5

// 4. IIFE
(function () {
  console.log("IIFE runs immediately!");
})();

// 5. Callback Function
function processNum(num, callback) {
  return callback(num);
}
const double = (n) => n * 2;
console.log(processNum(10, double)); // Output: 20

// 6. Anonymous Function
setTimeout(function () {
  console.log("This runs after 1 second");
}, 1000);

// 7. Nested Functions (Closures)
function outer(x) {
  function inner(y) {
    return x + y;
  }
  return inner;
}
const add10 = outer(10);
console.log(add10(5)); // Output: 15

// 8. Pure Function
function add(a, b) {
  return a + b;
}
console.log(add(1, 2)); // Output: 3

// 9. Function Constructor
function Person(name) {
  this.name = name;
}
const user1 = new Person("Tanish");
console.log(user1.name); // Output: Tanish

// 10. Method
const user = {
  name: "Rahul",
  greet: function () {
    return `Hi, I'm ${this.name}`;
  },
};
console.log(user.greet()); // Output: Hi, I'm Rahul

// 11. Parameters vs Arguments
function intro(name, age) {
  return `${name} is ${age} years old.`;
}
console.log(intro("Tanish", 21));

// 12. Default Parameters
function sayHi(name = "Guest") {
  return `Hi, ${name}`;
}
console.log(sayHi()); // Output: Hi, Guest

// 13. Rest Parameters
function total(...numbers) {
  return numbers.reduce((acc, val) => acc + val, 0);
}
console.log(total(1, 2, 3, 4)); // Output: 10

// 14. Spread Operator
const nums = [1, 2, 3];
console.log(Math.max(...nums)); // Output: 3

// 15. Recursion
function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}
console.log(factorial(5)); // Output: 120

// 16. Higher-Order Functions
function twice(fn, val) {
  return fn(fn(val));
}
const triple = (x) => x * 3;
console.log(twice(triple, 2)); // Output: 18

// 17. Arrow Functions & this context
const obj = {
  name: "JavaScript",
  regular: function () {
    console.log("Regular:", this.name);
  },
  arrow: () => {
    console.log("Arrow:", this.name);
  },
};
obj.regular();
obj.arrow();

// 18. Call by Value (Primitives)
let num = 5;
function change(val) {
  val = 10;
}
change(num);
console.log(num); // Still 5

// 19. Call by Reference (Objects)
let student = { name: "Aman" };
function rename(obj) {
  obj.name = "Rohan";
}
rename(student);
console.log(student.name); // Output: Rohan

// 20. Function Hoisting
hoistMe();
function hoistMe() {
  console.log("Function hoisted!");
}

// 21. Return vs console.log
function justLog() {
  console.log("Logged");
}

function justReturn() {
  return "Returned";
}

justLog();
console.log(justReturn());

// 22. Generator Function
function* countUp() {
  yield 1;
  yield 2;
  yield 3;
}
const gen = countUp();
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
console.log(gen.next().value); // 3

// FINAL SUMMARY
console.log("JS Function Mastery Complete!");
