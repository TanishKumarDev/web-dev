// Nested Function Scope
function one() {
  const username = "Tanish";
  function two() {
    const website = "YouTube";
    console.log(username); // Access parent variable
  }
  // console.log(website); // Error: website is not defined
  two();
}
one();
// Output: Tanish

// Nested if Scope
if (true) {
  const username = "Tanish";
  if (username === "Tanish") {
    const website = " YouTube";
    console.log(username + website); // Access both
  }
  // console.log(website); // Error: website is not defined
}
// console.log(username); // Error: username is not defined
// Output: Tanish YouTube

// Hoisting: Function Declaration
console.log(addOne(5)); // Output: 6
function addOne(num) {
  return num + 1;
}

// Hoisting: Function Expression
// console.log(addTwo(5)); // Error: Cannot access 'addTwo' before initialization
const addTwo = function(num) {
  return num + 2;
};
console.log(addTwo(5)); // Output: 7

// Reference: MDN for Scope, Closures, and Hoisting
// https://developer.mozilla.org/en-US/docs/Glossary/Scope
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures
// https://developer.mozilla.org/en-US/docs/Glossary/Hoisting
