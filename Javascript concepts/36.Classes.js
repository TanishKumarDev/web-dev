// === Understanding JavaScript Classes ===
// JavaScript Classes, introduced in ES6 (2015), are templates for creating objects with shared properties and methods.
// - Purpose: Provide a cleaner, more structured syntax for object-oriented programming compared to constructor functions.
// - Key Features:
//   - Defined with the `class` keyword.
//   - Must include a `constructor()` method to initialize object properties.
//   - Methods are defined inside the class and shared by all instances.
// - Not True Classes: JavaScript classes are syntactic sugar over prototype-based inheritance.
// - Browser Support: Fully supported in modern browsers (Chrome 49+, Edge 12+, Firefox 45+, Safari 9+, Opera 36+).
// Why confusing? Classes look like traditional OOP (e.g., Java), but rely on JavaScript’s prototype system, which can surprise developers.
// Analogy: Think of a class as a blueprint for building houses (objects) with the same layout (properties and methods).
// Tip: Use classes for organized, reusable code, but understand they’re built on prototypes under the hood.

console.log("=== JavaScript Classes Examples ===");

// === Basic Class Syntax ===
// A class is defined with the `class` keyword and typically includes a `constructor` method.

console.log("\n=== Basic Class Syntax ===");
class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
}
const myCar1 = new Car("Ford", 2014);
const myCar2 = new Car("Audi", 2019);
console.log(myCar1.name, myCar1.year); // "Ford" 2014
console.log(myCar2.name, myCar2.year); // "Audi" 2019
// Reason: The `constructor` method is called automatically with `new`, setting `this.name` and `this.year` for each instance.
// Logic: The class acts as a template, and `new Car()` creates objects with the specified properties.

// === Constructor Method ===
// The `constructor` method initializes object properties and is called automatically when an object is created.

console.log("\n=== Constructor Method ===");
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
const person1 = new Person("Alice", 25);
console.log(person1.name, person1.age); // "Alice" 25
// Reason: The `constructor` sets `this.name` and `this.age` for the new object.
// Logic: Without a defined constructor, JavaScript provides an empty one, but defining it allows custom initialization.

// Empty constructor example
class EmptyClass {
  constructor() {}
}
const emptyObj = new EmptyClass();
console.log(emptyObj); // {}
// Reason: If no constructor is defined, JavaScript adds an empty constructor.
// Logic: Ensures all classes can be instantiated, even without explicit initialization.

// === Class Methods ===
// Methods defined in a class are shared across all instances and added to the prototype.

console.log("\n=== Class Methods ===");
class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
  age() {
    const date = new Date();
    return date.getFullYear() - this.year;
  }
}
const myCar = new Car("Ford", 2014);
console.log(myCar.age()); // 11 (assuming current year is 2025)
// Reason: The `age` method calculates the car’s age using `this.year` and the current year.
// Logic: Methods are stored on the class’s prototype, making them memory-efficient for all instances.

// Method with parameters
class Vehicle {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
  age(currentYear) {
    return currentYear - this.year;
  }
}
const myVehicle = new Vehicle("Toyota", 2018);
console.log(myVehicle.age(2025)); // 7
// Reason: The `age` method accepts a parameter (`currentYear`) to calculate the age dynamically.
// Logic: Methods can take arguments like regular functions, enhancing flexibility.

// === Classes and this ===
// The `this` keyword in class methods refers to the instance of the class.

console.log("\n=== this in Classes ===");
class Student {
  constructor(name) {
    this.name = name;
  }
  introduce() {
    return `Hi, I am ${this.name}`;
  }
}
const student = new Student("Bob");
console.log(student.introduce()); // "Hi, I am Bob"
// Reason: `this` in `introduce` refers to the `student` instance, accessing its `name` property.
// Logic: Classes use `this` to reference instance-specific data, similar to object methods.

// === Classes Are Not Hoisted ===
// Unlike function declarations, class declarations are not hoisted.

console.log("\n=== Classes Are Not Hoisted ===");
// const car = new Truck("Volvo", 2020); // ReferenceError: Cannot access 'Truck' before initialization
class Truck {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
}
// Reason: Class declarations are not hoisted, so they must be defined before use.
// Logic: Prevents accessing uninitialized classes, ensuring code clarity.

// === Strict Mode in Classes ===
// Classes automatically operate in strict mode, enforcing stricter rules.

console.log("\n=== Strict Mode in Classes ===");
class StrictClass {
  constructor(name) {
    this.name = name;
    // undeclaredVar = 10; // ReferenceError: undeclaredVar is not defined
  }
}
const strictObj = new StrictClass("Test");
console.log(strictObj.name); // "Test"
// Reason: Classes implicitly enable strict mode, requiring explicit variable declarations.
// Logic: Enhances code safety by catching errors like undeclared variables.

// === Prototype-Based Nature ===
// Classes are syntactic sugar over JavaScript’s prototype-based inheritance.

console.log("\n=== Prototype-Based Nature ===");
class Bike {
  constructor(model) {
    this.model = model;
  }
}
const myBike = new Bike("Honda");
console.log(myBike instanceof Bike); // true
console.log(Bike.prototype.isPrototypeOf(myBike)); // true
// Reason: Instances inherit methods from the class’s prototype, created automatically.
// Logic: Classes simplify prototype-based programming but rely on the same underlying mechanism.

// === Best Practice: Using Classes ===
// Use classes for organized, reusable object creation; ensure constructors initialize all necessary properties.

console.log("\n=== Best Practice ===");
class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
  display() {
    return `${this.name}: $${this.price}`;
  }
}
const product = new Product("Laptop", 999);
console.log(product.display()); // "Laptop: $999"
// Reason: Classes provide a clear structure for creating objects with consistent properties and methods.
// Logic: Encapsulates data and behavior, making code modular and maintainable.

/**
 * JavaScript OOP Concepts
 * 
 * Why Classes in JavaScript?
 *
 * TL;DR:
 *
 * JavaScript classes were introduced (in ES6) to make object-oriented programming (OOP) simpler, cleaner, and more familiar to developers from other languages like Java, C++, and Python.
 * They provide a structured way to create objects with shared behavior, encapsulation, and inheritance.
 *
 * The Big 3 Questions
 *
 * What are classes?
 *
 * Classes are syntactic sugar over JavaScript's existing prototype-based inheritance.
 * They let you define blueprints for creating objects with shared behavior.
 *
 * Example:
 * class Person {
 *   constructor(name) {
 *     this.name = name;
 *   }
 *   greet() {
 *     console.log(`Hello, I'm ${this.name}`);
 *   }
 * }
 * const user = new Person("Tanish");
 * user.greet(); // Hello, I'm Tanish
 *
 * Why do we need classes if we had prototypes?
 *
 * Before ES6, you wrote constructor functions and manually added methods to prototypes:
 *
 * function Person(name) {
 *   this.name = name;
 * }
 * Person.prototype.greet = function () {
 *   console.log(`Hi, I'm ${this.name}`);
 * };
 *
 * This worked, but:
 * - Verbose
 * - Confusing for beginners
 * - Prototype chain logic isn't intuitive
 * - Not aligned with OOP style in other languages
 *
 * Classes solve this by:
 * - Giving cleaner syntax
 * - Grouping constructor and methods together
 * - Supporting extends for inheritance
 *
 * Why are classes useful?
 *
 * 1. Encapsulation
 *    Keep related data and functions (methods) together.
 *
 * 2. Reusability with Inheritance
 *    Extend existing functionality without duplication:
 *
 *    class Developer extends Person {
 *      code() {
 *        console.log(`${this.name} is coding...`);
 *      }
 *    }
 *
 * 3. Organized Code
 *    Better structure in large codebases and projects, especially in frameworks like React, Angular, etc.
 *
 * 4. Improved Readability
 *    Looks more like traditional OOP, making it easier for teams and collaboration.
 *
 * 5. Built-in super, constructor chaining, and better this handling
 *    Makes inheritance and method overriding much easier.
 *
 * Behind the Scenes: It's Still Prototypes
 *
 * Even though you write:
 * class A {}
 *
 * Under the hood, JavaScript still uses prototypes.
 *
 * So this:
 * class A {
 *   greet() {
 *     console.log("Hi");
 *   }
 * }
 *
 * Is equivalent to:
 * function A() {}
 * A.prototype.greet = function() {
 *   console.log("Hi");
 * };
 *
 * So: syntax change, same core engine.
 *
 * When to Use Classes?
 *
 * Use Classes When:
 * - You want clear object blueprints
 * - You're modeling real-world entities
 * - You want inheritance
 * - You're using OOP-style frameworks
 *
 * Avoid Classes When:
 * - You just need utility functions
 * - You’re writing simple logic or scripts
 * - You don’t need shared behavior/state
 * - You’re using functional programming only
 *
 * Summary
 *
 * | Concept        | Description                                     |
 * | -------------- | ----------------------------------------------- |
 * | Class          | Blueprint to create objects                     |
 * | Constructor    | Special method that runs when object is created |
 * | Method         | Function inside the class                       |
 * | extends        | Inherit from another class                      |
 * | super()        | Call the parent’s constructor or method         |
 * | Under the hood | Still prototype-based (just cleaner syntax)     |
 *
 */
