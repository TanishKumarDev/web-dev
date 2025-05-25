// this in Object
const user = {
  username: "Tanish",
  price: 999,
  welcomeMessage: function() {
    console.log(`${this.username}, welcome to website`);
  }
};
user.welcomeMessage(); // Output: Tanish, welcome to website
user.username = "Sam";
user.welcomeMessage(); // Output: Sam, welcome to website

// this in Regular Function (Node.js)
function chai() {
  let username = "Tanish";
  console.log(this); // Output: Global object ({}, with global properties)
  console.log(this.username); // Output: undefined
}
chai();

// this in Global Scope (Node.js)
// console.log(this); // Output: {} (Node.js global object)

// this in Arrow Function
const chaiArrow = () => {
  let username = "Tanish";
  console.log(this); // Output: {} (lexical this from global scope)
  console.log(this.username); // Output: undefined
};
chaiArrow();

// Arrow Function: Explicit Return
const addTwo = (num1, num2) => {
  return num1 + num2;
};
console.log(addTwo(3, 4)); // Output: 7

// Arrow Function: Implicit Return
const addTwoImplicit = (num1, num2) => num1 + num2;
console.log(addTwoImplicit(3, 4)); // Output: 7

// Arrow Function: Implicit Return with Parentheses
const addTwoParen = (num1, num2) => (num1 + num2);
console.log(addTwoParen(3, 4)); // Output: 7

// Arrow Function: Returning Object
const getUser = () => ({ username: "Tanish" });
console.log(getUser()); // Output: { username: "Tanish" }

// Arrow Function in Array Loop
const myArray = [2, 3, 4, 5];
myArray.forEach((item) => console.log(item));
// Output: 2, 3, 4, 5

// Reference: MDN for this and Arrow Functions
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
