// 💡 What is a Function?
// A function is a reusable block of code that performs a specific task.

function greet(name){
    console.log("Hi " + name + "!");
}
greet("Tanish"); // "tanish" is passing arguments

// ✅ Types of Functions in JavaScript
// 1. 🧾 Function Declaration (Named Function)
function add(a,b){
    return a+b;
}
console.log(add(5, 3));


// 2. 🧠 Function Expression (Anonymous Function) : Stored in a variable:

const subtract = function(a,b){
    return a-b;
};
console.log(subtract(10,5));

// 3. ⚡ Arrow Function (ES6)
const multiply = (a,b) => a*b;
console.log(multiply(2,2));

// 4. 🧩 Function with Default Parameters
function greetUser(myname = "Guest"){
    console.log("welcome, "+ myname);
}
greetUser();
greetUser("tanish");

// 5. 🧺 Function Returning a Value
function getFullName(firstName, lastName){
    return firstName + " " + lastName;
}

let fullname = getFullName("tanish", "kumar");
console.log(fullname);

// 6. 🌀 Nested Functions (Closure Basics)
function outer(){
    let count = 0;

    function inner(){
        count++;
        console.log(count);
    }
    return inner;
}
const counter = outer();
counter();
counter();
counter();

// ✅ Extra: arguments Object (for older functions)
function showArgs() {
  console.log(arguments); // array-like object
}

showArgs(1, 2, 3);