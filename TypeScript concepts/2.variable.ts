
// 1. Basic Variable Declaration with Type and Value
// TypeScript allows you to explicitly declare both type and value in a single statement
let myname: string = 'tanish'  // Explicitly typed string variable
const age: number = 25;        // Constant number variable (cannot be reassigned)

console.log(myname, age)

// 2. Type Declaration Without Initial Value
// You can declare a variable with a type but assign value later
// Note: TypeScript will warn if you try to use the variable before assignment
let city: string;
// console.log(city);  // This would cause a TypeScript error - variable used before assignment

// 3. Type Inference
// TypeScript can infer types from the initial value
// No need to explicitly declare type when value is assigned
let country = 'india'  // TypeScript infers this as string
console.log(country);

/**
 * Variable Declaration Keywords in TypeScript
 * TypeScript supports three ways to declare variables:
 * 1. var (function-scoped, older way)
 * 2. let (block-scoped, recommended for variables that will change)
 * 3. const (block-scoped, for values that won't be reassigned)
 */

// 1. var - function-scoped variable (avoid using in modern TypeScript)
var globalvar: number = 10;
console.log(globalvar)

// 2. let - block-scoped variable (preferred for mutable variables)
let globallet: number = 10;
console.log(globallet)

// 3. const - block-scoped constant (preferred for immutable values)
const globalConst: number = 10;
console.log(globalConst)

/**
 * Type Annotations in TypeScript
 * TypeScript's type system helps catch errors during development
 * by enforcing type checking at compile time
 */
let employeeName: string = 'Tanish Kr'    // String type annotation
let employeeAge: number = 30              // Number type annotation
const employeeCompany: string = 'Google'   // Constant with string type

console.log(employeeName, employeeAge, employeeCompany)

/**
 * Variable Scopes in TypeScript
 * TypeScript supports three types of variable scopes:
 * 1. Local (Function) Scope
 * 2. Global Scope
 * 3. Class Scope
 */

// 1. Local Scope - Variables declared inside a function
function example(){
    let localVar: number = 100  // Only accessible within this function
    console.log(localVar)
}

// 2. Global Scope - Variables accessible throughout the program
let globalVar1: string = 'accessible everywhere'
console.log(globalVar1)

// 3. Class Scope - Variables declared within a class
class Employee {
    salary: number = 50000;  // Class property with type annotation
    printSalary(): void {    // Method with void return type
        console.log(`Salary: ${this.salary}`);
    }
}

const emp = new Employee();
emp.printSalary(); // Output: Salary: 50000

/**
 * Comprehensive Example of Variables in TypeScript
 * Demonstrating different scopes and access modifiers
 */

let globalVar: number = 10;  // Global variable

class Geeks {
    private classVar: number = 11;  // Private class variable (only accessible within class)

    assignNum(): void {
        let localVar: number = 12;  // Local variable within method
        console.log('Local Variable: ' + localVar);
    }
}

console.log('Global Variable: ' + globalVar);

let obj = new Geeks();
obj.assignNum();