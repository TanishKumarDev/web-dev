// Function Declaration (also called Function Definition)
function greet(name) {
  return "Hello, " + name;
}

let nameVal = "Tanish";

// Function Call
console.log(greet(nameVal)); // Output: Hello, Tanish

// Note: Function declarations are **hoisted** to the top of their scope
// So you can call them before they are declared in code

// Function Expression
// A function stored in a variable. This is NOT hoisted.

const multiply = function (x, y) {
  return x * y;
};

console.log(multiply(2, 3)); // Output: 6

// This won't work if you call multiply() before the line it's declared

// Arrow Function (ES6+)
// Shorter syntax. Useful for callbacks, concise logic, and doesn't bind 'this'.

const divide = (a, b) => {
  return a / b;
};

console.log(divide(10, 2)); // Output: 5

// For one-liners, you can omit `return` and `{}`:
const square = x => x * x;
console.log(square(4)); // Output: 16


// Immediately Invoked Function Expression (IIFE)
// It runs IMMEDIATELY when the interpreter reaches it.

(function () {
  console.log("This runs immediately!");
})();

// Modern IIFE with Arrow Function
(() => {
  console.log("Arrow IIFE!");
})();

// Callback Functions
// Passing a function as an argument to another function

function processData(data, callback) {
  return callback(data);
}

const double = (n) => n * 2;

console.log(processData(5, double)); // Output: 10

// Real-world: array methods use callbacks
const nums = [1, 2, 3];
const doubled = nums.map((n) => n * 2);
console.log(doubled); // Output: [2, 4, 6]

// Anonymous Functions
// Functions without a name, used mostly in callbacks

setTimeout(function () {
  console.log("This runs after 2 seconds!");
}, 2000);

// Same using arrow function
setTimeout(() => {
  console.log("This also runs after 2 seconds!");
}, 2000);


// Nested Functions (Closure Example)
// Inner functions can access outer function variables

function outerFun(a) {
  function innerFun(b) {
    return a + b;
  }
  return innerFun;
}

const addTen = outerFun(10); // outerFun returns innerFun with a fixed 'a' = 10
console.log(addTen(5)); // Output: 15

// This is called a CLOSURE — innerFun "remembers" 'a' even after outerFun has returned

// Pure Functions
// Same input -> same output, no side effects

function pureAdd(a, b) {
  return a + b;
}

console.log(pureAdd(1, 2)); // Output: 3

// Not pure (modifies global variable)
let total = 0;
function impureAdd(x) {
  total += x;
  return total;
}

// Recap: Arrow Function vs Normal Function
const obj = {
  name: "Tanish",
  regularFunc: function () {
    console.log("Hello from", this.name); // this = obj
  },
  arrowFunc: () => {
    console.log("Hello from", this.name); // this = window/global, not obj
  },
};

obj.regularFunc(); // Hello from Tanish
obj.arrowFunc();   // Hello from undefined

