// var: Function scope, hoisting
console.log("Before var declaration: x =", x); // undefined (hoisted)
var x = 10;
console.log("After var declaration: x =", x); // 10
var x = 20; // Redeclaration allowed
console.log("After redeclaration: x =", x); // 20

// let: Block scope, TDZ
// console.log("Before let declaration: y =", y); // ReferenceError: Cannot access 'y' before initialization
let y = 30;
console.log("After let declaration: y =", y); // 30
y = 40; // Reassignment allowed
console.log("After reassignment: y =", y); // 40
// let y = 50; // SyntaxError: Identifier 'y' has already been declared

// const: Block scope, TDZ, no reassignment
// console.log("Before const declaration: z =", z); // ReferenceError: Cannot access 'z' before initialization
const z = 100;
console.log("After const declaration: z =", z); // 100
// z = 200; // TypeError: Assignment to constant variable
// const z = 300; // SyntaxError: Identifier 'z' has already been declared

// Block scope example
function testScope() {
    if (true) {
        var a = "var inside block"; // Function-scoped
        let b = "let inside block"; // Block-scoped
        const c = "const inside block"; // Block-scoped
        console.log("Inside block:", a, b, c);
    }
    console.log("Outside block, var:", a); // Accessible
    // console.log("Outside block, let:", b); // ReferenceError: b is not defined
    // console.log("Outside block, const:", c); // ReferenceError: c is not defined
}
testScope();

// const with objects (mutable contents)
const person = { name: "Alice" };
person.name = "Bob"; // Allowed: modifying object contents
console.log("Modified const object:", person); // { name: "Bob" }
// person = { name: "Charlie" }; // TypeError: Assignment to constant variable