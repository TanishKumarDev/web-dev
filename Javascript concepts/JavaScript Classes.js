// -----------------------------------------------------------------------------
// ✅ 1. What Are JavaScript Classes?
// -----------------------------------------------------------------------------

/**
 * JavaScript classes are templates for creating objects.
 * They were introduced in ES6 (2015).
 * Classes are a **syntactical sugar** over JavaScript's prototype-based inheritance.
 */

// -----------------------------------------------------------------------------
// ✅ 2. Defining a Class
// -----------------------------------------------------------------------------

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.`);
  }
}

// Creating an instance
const person1 = new Person("Tanish", 22);
person1.greet(); // Hi, I'm Tanish and I'm 22 years old.

// -----------------------------------------------------------------------------
// ✅ 3. Class Expressions (Optional Syntax)
// -----------------------------------------------------------------------------

// Anonymous class
const Animal = class {
  constructor(type) {
    this.type = type;
  }
  speak() {
    console.log(`${this.type} makes a sound.`);
  }
};

const dog = new Animal("Dog");
dog.speak(); // Dog makes a sound.

// -----------------------------------------------------------------------------
// ✅ 4. Adding Methods
// -----------------------------------------------------------------------------

/**
 * Methods in classes are added to the prototype.
 * All instances share the same method (memory efficient).
 */

// -----------------------------------------------------------------------------
// ✅ 5. Getters and Setters
// -----------------------------------------------------------------------------

class User {
  constructor(name) {
    this._name = name;
  }

  get name() {
    return this._name.toUpperCase();
  }

  set name(newName) {
    this._name = newName.trim();
  }
}

const user1 = new User(" tanish ");
console.log(user1.name); // TANISH

user1.name = " Rahul ";
console.log(user1.name); // RAHUL

// -----------------------------------------------------------------------------
// ✅ 6. Static Methods and Properties
// -----------------------------------------------------------------------------

class MathHelper {
  static PI = 3.14159;

  static square(x) {
    return x * x;
  }
}

console.log(MathHelper.square(5)); // 25
console.log(MathHelper.PI);        // 3.14159

// Static methods are called on the class itself, not the instance

// -----------------------------------------------------------------------------
// ✅ 7. Inheritance with `extends` and `super()`
// -----------------------------------------------------------------------------

class Vehicle {
  constructor(brand) {
    this.brand = brand;
  }

  drive() {
    console.log(`${this.brand} is driving.`);
  }
}

class Car extends Vehicle {
  constructor(brand, model) {
    super(brand); // call parent constructor
    this.model = model;
  }

  info() {
    console.log(`Car: ${this.brand} ${this.model}`);
  }
}

const myCar = new Car("BMW", "X5");
myCar.drive(); // BMW is driving.
myCar.info();  // Car: BMW X5

// -----------------------------------------------------------------------------
// ✅ 8. Class Fields (Public & Private)
// -----------------------------------------------------------------------------

// Public field
class Demo {
  value = 10;
}

// Private field (with #)
class Secret {
  #password = "abc123";

  reveal() {
    return this.#password;
  }
}

const s = new Secret();
// console.log(s.#password); ❌ SyntaxError
console.log(s.reveal()); // ✅ abc123

// -----------------------------------------------------------------------------
// ✅ 9. instanceof Operator
// -----------------------------------------------------------------------------

console.log(myCar instanceof Car);     // true
console.log(myCar instanceof Vehicle); // true

// -----------------------------------------------------------------------------
// ✅ 10. Interview Tips / Notes
// -----------------------------------------------------------------------------

/**
 * - Classes use prototype-based inheritance.
 * - Constructor is the method that runs on object creation via `new`.
 * - `super()` must be called before using `this` in child class constructors.
 * - Class methods (not static) are shared across instances.
 * - Use `#` for private fields (ES2022).
 * - Static methods are utility-like functions that don't need object context.
 */

// -----------------------------------------------------------------------------
// ✅ 11. Use Cases for Classes
// -----------------------------------------------------------------------------

/**
 * - When modeling real-world entities (User, Car, Product).
 * - When you want reusable blueprints.
 * - When organizing logic in OOP (object-oriented programming) style.
 */

// -----------------------------------------------------------------------------
// ✅ Summary
// -----------------------------------------------------------------------------

/**
 * 🔹 Use `class` and `constructor` to define object blueprints.
 * 🔹 Use `extends` for inheritance, and `super()` to call base class constructor.
 * 🔹 Use static methods for utility functions.
 * 🔹 Use getters/setters for encapsulation.
 * 🔹 Use `#` for true private fields.
 */

