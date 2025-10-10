// 1. Declare Type and Value Together

let username: string = "John";
const age: number = 30;

console.log("Username:", username);

// 2. Declare Type Without Value

let city:  string;
console.log("City:");

// 3. Declare Value Without Type

let country = "INDIA";
console.log("country")

// Variable Declaration Keywords

// var
function testVar(){
    var globalVar = "I'm funtional-scoped var";
    console.log(globalVar)
}
testVar();

// let 
let count  = 5;
if(count > 0){
    let msg = "count positive"
    console.log(msg);
}

// const 
const pi = 3.14;
console.log(pi);


// Type Annotations
// Type annotations allow you to explicitly define the type of a variable, improving code clarity and reducing the risk of errors. Using explicit types helps TypeScript catch errors during development and ensures better maintainability.

// 1. Declare Type and Value Together
let anotherUsername: string = "Tanish";
let anotherAge: number = 25;
let isActive: boolean = true;

function greetUser(anotherUsername: string, anotherAge: number): string{
    return `Hello, ${anotherUsername}! You are ${anotherAge} years old.`
}

let greeting  = greetUser(anotherUsername, anotherAge);
console.log(greeting);

// Variable Scopes

// 1. Local Scope
function testLocalScope(){
    let localVar = "I'm local-scoped";
    console.log(localVar);
}
// 2. Global Scope
let globalVar = "I'm global-scoped";
function testGlobalScope(){
    console.log(globalVar);
}
// 3. Class Scope
class Employee{
    salary: number = 50000;
    printSalary(): void {
        console.log("Salary:", this.salary);
    }
}
const emp = new Employee();
emp.printSalary();
