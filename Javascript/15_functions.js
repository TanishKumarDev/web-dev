// Basic Function
function sayMyName() {
  console.log("H");
  console.log("I");
  console.log("T");
  console.log("E");
  console.log("S");
  console.log("H");
}
sayMyName(); // Output: H I T E S H (each on new line)

// Function with Parameters (No Return)
function addTwoNumbers(number1, number2) {
  console.log(number1 + number2);
}
const result1 = addTwoNumbers(3, 5); // Output: 8
console.log(result1); // Output: undefined

// Function with Return
function addTwoNumbers(number1, number2) {
  return number1 + number2;
}
const result2 = addTwoNumbers(3, 5);
console.log(result2); // Output: 8

// Parameter Validation
function loginUserMessage(username) {
  if (!username) {
    console.log("Please enter a username");
    return;
  }
  return `${username} just logged in`;
}
console.log(loginUserMessage()); // Output: "Please enter a username"
console.log(loginUserMessage("Hitesh")); // Output: "Hitesh just logged in"

// Default Parameters
function loginUserMessage(username = "sam") {
  return `${username} just logged in`;
}
console.log(loginUserMessage()); // Output: "sam just logged in"
console.log(loginUserMessage("Hitesh")); // Output: "Hitesh just logged in"

// Reference: MDN for Functions
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else