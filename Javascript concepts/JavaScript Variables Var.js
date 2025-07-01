// var variable = value;

// Features of var Keyword:

// 1. Function Scope - Variables declared using var are function-scoped. This means they are accessible anywhere within the function they are declared, even before their declaration due to hoisting.
function test() {
    var localVar = "I am local";
    console.log(localVar);
}
// console.log(localVar); // ReferenceError: localVar is not defined

// 2. Global Scope - Variables declared using var are accessible anywhere in the code, even before their declaration due to hoisting.
console.log(globalVar); // Accessible due to hoisting, even before declaration but not in strict mode. 
var globalVar = "I'm Global";
console.log(globalVar);

// 3. Re-declaration of Variables - Variables declared using var can be re-declared within the same scope without causing errors.
var x = 10;
var x = 20;
console.log(x); // Output: 20

// 4. Hoisting - Variables declared using var are hoisted to the top of their scope, which means they are moved to the top of the current scope before code execution.
console.log(hoistedVar); // Output: undefined
var hoistedVar = "Hoisted!";

// Since the declaration is hoisted but not initialized, it prints undefined before the variable is assigned its value.

// 5. No Block Scope - Unlike let and const, var does not have block scope. Variables declared with var inside a block (like an if or for loop) are accessible outside that block.

if (true) {
    var blockVar = "I am block scoped";
}
console.log(blockVar); // Output: "I am block scoped"

// 6. Global Object Property - Variables declared using var are properties of the global object, which means they are attached to var globalVar = "I'm Global";
console.log(module.exports.globalVar); // Output: "I'm Global" in browsers

// 7. Performance Considerations - Using var can lead to unexpected bugs due to its scoping behavior. It's recommended to use let and const instead.

// Inefficient loop 

var a = new Array(10).fill(0);
console.time('Execution time')
for (var i = 0; i < a.length; i++) {
    console.log(i)
}
console.timeEnd('Execution time')



// Optimized loop 

var len = a.length;
console.time('Execution time')
for (var i = 0; i < len; i++) {
    console.log(i)
}
console.timeEnd('Execution time')

// In this example, storing arr.length in a variable improves performance, particularly for large arrays, by avoiding recalculation in each iteration.

// 8. Backward Compatibility

// 9. var used with setTimeout() - When used inside loops with setTimeout(), var can cause unexpected behavior due to its function scope. The value of the variable will be shared across all iterations of the loop, leading to the same result for each setTimeout() call.

for(var i=0;i<=4;i++)
{
    setTimeout(()=>{
        console.log(i)
    },1000)
}