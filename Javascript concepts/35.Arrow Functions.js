// === Understanding Arrow Functions ===
// Arrow functions, introduced in ES6 (2015), provide a concise syntax for writing functions and have unique behavior for `this`.
// - Syntax: `(parameters) => expression` or `(parameters) => { statements }`.
// - Key Features:
//   - Shorter syntax: Omit `function`, `return`, and curly braces for single expressions.
//   - No `this` binding: `this` is inherited from the surrounding lexical scope, not the caller.
//   - No `arguments` object or own `prototype`.
// - Browser Support: Fully supported in modern browsers (Chrome 45+, Edge 12+, Firefox 22+, Safari 10+, Opera 32+).
// Why confusing? The fixed `this` behavior differs from regular functions, leading to unexpected results in certain contexts (e.g., object methods, event handlers).
// Analogy: Think of arrow functions as sticky notes that borrow the context (`this`) of the room they’re written in, not the person reading them.
// Tip: Use arrow functions for concise callbacks and when you want `this` to remain consistent with the surrounding scope; use regular functions for dynamic `this` (e.g., object methods).

console.log("=== JavaScript Arrow Function Examples ===");

// === Basic Arrow Function Syntax ===
// Arrow functions simplify function expressions with a shorter syntax.

console.log("\n=== Basic Arrow Function Syntax ===");
const multiply = (a, b) => a * b;
console.log(multiply(3, 4)); // 12
// Reason: The arrow function returns the result of `a * b` directly, omitting `return` and curly braces.
// Logic: For single-expression functions, arrow functions implicitly return the expression’s value.

// Single-statement arrow function
const hello = () => "Hello World!";
console.log(hello()); // "Hello World!"
// Reason: Curly braces and `return` are optional for single-statement arrow functions.
// Logic: Simplifies writing functions that return a value immediately.

// Single parameter (no parentheses)
const greet = name => "Hello " + name;
console.log(greet("Alice")); // "Hello Alice"
// Reason: Parentheses are optional for a single parameter.
// Logic: Makes the syntax even more concise for simple functions.

// Multiple statements require curly braces and explicit return
const addAndLog = (a, b) => {
  console.log(`Adding ${a} and ${b}`);
  return a + b;
};
console.log(addAndLog(5, 6)); // Logs: "Adding 5 and 6", Returns: 11
// Reason: Multiple statements require curly braces and an explicit `return` if a value is returned.
// Logic: Behaves like a regular function body but with arrow syntax.

// === Arrow Functions vs. Regular Functions ===
// Arrow functions differ from regular functions in syntax and behavior.

console.log("\n=== Arrow vs. Regular Functions ===");
const regularFunction = function() {
  return "Regular function";
};
const arrowFunction = () => "Arrow function";
console.log(regularFunction()); // "Regular function"
console.log(arrowFunction()); // "Arrow function"
// Reason: Both achieve the same result, but arrow functions are more concise.
// Logic: Arrow functions are ideal for short, simple operations.

// === this in Arrow Functions ===
// Arrow functions do not bind their own `this`; they inherit `this` from the surrounding lexical scope.

console.log("\n=== this in Arrow Functions ===");
const person = {
  name: "John",
  regularMethod: function() {
    return this.name;
  },
  arrowMethod: () => {
    return this.name;
  }
};
console.log(person.regularMethod()); // "John"
console.log(person.arrowMethod()); // undefined (or window.name in non-strict mode)
// Reason: regularMethod binds `this` to the `person` object; arrowMethod uses `this` from the global scope (window or undefined in strict mode).
// Logic: Arrow functions don’t create their own `this`, making them unsuitable for object methods needing dynamic `this`.

// === this in Event Handlers ===
// Arrow functions in event handlers use the `this` of the surrounding scope, not the event target.

console.log("\n=== this in Event Handlers ===");
// Simulated event handler (since browser environment is needed for real events)
const button = {
  text: "Click Me",
  regularHandler: function() {
    console.log(this.text); // "Click Me"
  },
  arrowHandler: () => {
    console.log(this.text); // undefined (or window.text)
  }
};
button.regularHandler();
button.arrowHandler();
// Reason: regularHandler sets `this` to the button object; arrowHandler uses `this` from the global scope.
// Logic: Avoid arrow functions in event handlers if you need `this` to refer to the event target.

// Example from W3Schools (simulated for non-browser environment)
const eventSim = {
  demo: { innerHTML: "" },
  addContent: function(content) {
    this.demo.innerHTML += content;
    return this.demo.innerHTML;
  }
};
const regularHello = function() {
  return eventSim.addContent(this);
};
const arrowHello = () => {
  return eventSim.addContent(this);
};
console.log(regularHello.call(window)); // "[object Window]"
console.log(arrowHello()); // undefined (or window in non-strict mode)
// Reason: regularHello binds `this` to the caller (window); arrowHello uses the global `this`.
// Logic: Arrow functions maintain the `this` of their definition context, not the caller.

// === No arguments Object in Arrow Functions ===
// Arrow functions do not have their own `arguments` object.

console.log("\n=== No arguments Object ===");
const regularArgs = function() {
  return arguments[0];
};
const arrowArgs = () => {
  // return arguments[0]; // ReferenceError: arguments is not defined
  return "No arguments in arrow functions";
};
console.log(regularArgs("test")); // "test"
console.log(arrowArgs("test")); // "No arguments in arrow functions"
// Reason: Arrow functions don’t have an `arguments` object; use rest parameters (...args) instead.
// Logic: Limits arrow functions’ flexibility for variable arguments but encourages modern syntax.

// Using rest parameters
const arrowRest = (...args) => args[0];
console.log(arrowRest("test")); // "test"
// Reason: Rest parameters provide a modern alternative to the `arguments` object.
// Logic: Explicitly collects arguments into an array, improving clarity.

// === Arrow Functions in Callbacks ===
// Arrow functions are great for concise callbacks, especially when preserving `this`.

console.log("\n=== Arrow Functions in Callbacks ===");
const counter = {
  count: 0,
  increment: function() {
    setTimeout(() => {
      this.count++;
      console.log(this.count); // 1
    }, 100);
  }
};
counter.increment();
// Reason: The arrow function in setTimeout inherits `this` from the `increment` method (counter object).
// Logic: Arrow functions ensure `this` remains consistent in asynchronous callbacks.

// === Best Practice: Choosing Arrow vs. Regular Functions ===
// Use arrow functions for concise syntax and fixed `this`; use regular functions for dynamic `this`.

console.log("\n=== Best Practice ===");
const bestPractice = {
  name: "Best",
  safeCallback: function() {
    setTimeout(() => {
      console.log(this.name); // "Best"
    }, 100);
  },
  unsafeCallback: function() {
    setTimeout(function() {
      console.log(this.name); // undefined (or window.name)
    }, 100);
  }
};
bestPractice.safeCallback();
bestPractice.unsafeCallback();
// Reason: Arrow functions preserve `this` from the surrounding scope; regular functions bind `this` to the caller (undefined in setTimeout).
// Logic: Use arrow functions in callbacks to avoid `this` binding issues, but avoid them in object methods needing dynamic `this`.


/*
## 💡 What is an Arrow Function?

Arrow functions are a shorter syntax for writing functions, introduced in **ES6 (2015)**:

```js
// Traditional function
function add(a, b) {
  return a + b;
}

// Arrow function
const add = (a, b) => a + b;

// Arrow function
const add = (a, b) => a + b;
```

✅ **Both do the same thing.** But arrow functions bring more than just shorter syntax.

---

## 🔍 Why Arrow Functions Were Introduced

### 1. ✅ **Lexical `this` Binding**

This is **THE BIGGEST REASON** arrow functions exist.

In normal functions, `this` is dynamic. It changes depending on how the function is called.

Arrow functions **do not have their own `this`**. Instead, they **inherit `this` from the surrounding (lexical) scope**.

### 🔥 Example:

```js
function Timer() {
  this.seconds = 0;

  setInterval(function () {
    this.seconds++; // ❌ Error: `this` is not what you think
    console.log(this.seconds);
  }, 1000);
}
```

The `this` inside `setInterval` refers to the global object (or `undefined` in strict mode), **not the Timer instance**.

✅ Fix using arrow function:

```js
function Timer() {
  this.seconds = 0;

  setInterval(() => {
    this.seconds++; // ✅ Works! `this` is inherited from Timer
    console.log(this.seconds);
  }, 1000);
}
```

---

## ✨ Other Reasons to Use Arrow Functions

### 2. ✅ **Shorter and Cleaner Syntax**

Especially useful for one-liner functions like callbacks and array methods.

```js
[1, 2, 3].map(x => x * 2); // [2, 4, 6]
```

### 3. ✅ **No `arguments` Object**

Arrow functions don’t have their own `arguments` — they inherit it too.

This is useful when you want to forward parameters without messing with arguments.

---

## 🚫 When *Not* to Use Arrow Functions

Arrow functions are **not always the right choice**:

| ❌ Don’t use arrow function when...         | ✅ Use normal function when...                   |
| ------------------------------------------ | ----------------------------------------------- |
| You need your own `this`                   | You’re creating object methods that use `this`  |
| You need `arguments`                       | Function needs access to `arguments` object     |
| You're using them as constructor functions | Arrow functions can’t be used with `new`        |
| You want dynamic `this` behavior           | Use regular functions when `this` needs to vary |

---

## 🚀 Summary

| Feature                | Arrow Function                | Regular Function                   |
| ---------------------- | ----------------------------- | ---------------------------------- |
| Syntax                 | Concise (`(x) => x + 1`)      | Verbose (`function(x) {}`)         |
| `this`                 | Lexical (inherits from scope) | Dynamic (based on how it’s called) |
| `arguments`            | Inherited                     | Has its own                        |
| Usable as constructor? | ❌ No                          | ✅ Yes                              |
| Great for callbacks?   | ✅ Yes                         | ✅ Yes                              |

*/