// 1. Variable Type Inference

let myName = "Tanish";
let myAge = 25;

console.log(`NAME : ${myName}`)
console.log(`AGE: ${myAge}`)

// 2. Array Type Inference

const names = ["UserA", "UserB", "UserC"];
console.log(names);

// 3. Function Return Type Inference

function add(a: number, b: number) {
    return a + b;
}
console.log(add(5,10))