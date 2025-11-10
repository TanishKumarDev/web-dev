// A function that accepts another function as callback
function greetUser(name, callback) {
  console.log("Hi " + name); // step 1: print greeting msg

  callback(); // step 2: Execute the callback function passed
}

// Passing a function as an argument
greetUser("Tanish", () => {
  console.log("Welcome to Node.js!"); // step 3: Runs after greetUser finishes Step 1
});

/*

👉 Line-by-Line Explanation

function greetUser(name, callback) { ... }
→ You’re defining a function that expects two parameters:

name: a string (like "Tanish")

callback: a function to call later.

console.log("Hi " + name);
→ This executes first. It greets the user.

callback();
→ Calls the callback function (the second argument you passed).

greetUser("Tanish", () => { ... })
→ You are invoking greetUser() and passing an anonymous arrow function as the callback.

Inside that callback:
console.log("Welcome to Node.js!");
→ This runs after the main function prints the greeting.
*/