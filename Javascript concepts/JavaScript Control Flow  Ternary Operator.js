/*
// Ternary Operators

The Ternary Operator in JavaScript is a shortcut for writing simple if-else statements. It’s also known as the Conditional Operator because it works based on a condition. The ternary operator allows you to quickly decide between two values depending on whether a condition is true or false.
*/

let age = 18 ;
let  result = (age >= 18 ) ? "You can vote" : "You can't vote"
console.log(result)

// Nested Ternary Operators

let day = 3;
let greeting = (day == 1) ? "Start of week" : 
               (day == 2) ? "Middle of week" : 
               (day == 3) ? "Middle of week" : 
               (day == 4) ?"End of week":
               "weekend";

console.log(greeting);

// Ternary Operator in Functions
function checkAge(age) {
    return (age >= 18 ) ? "Adult" : "Minor";
}

console.log(checkAge(20));
console.log(checkAge(10));

// Using the Ternary Operator with Function Calls
function sayHello(name){
    console.log(`Hello, ${name}!`);
}

function sayGoodbye(name){
    console.log(`Goodbye, ${name}!`);
}

let isLeaving = false;
let name = "Tanish";

(isLeaving) ? sayHello(name) : sayGoodbye(name);

