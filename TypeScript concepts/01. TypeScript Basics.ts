/**
 * A Comprehensive Guide to TypeScript Introduction
 */

/**
 * 1. What is TypeScript?
 * Definition: TypeScript is a syntactic superset of JavaScript that adds optional static typing.
 * Logic: Extends JavaScript by allowing type annotations for variables, functions, and more.
 * Reason: Catches errors early, improves code clarity, and supports large-scale apps.
 * Use Case: Building complex web apps, especially for teams or long-term projects.
 * Key Points:
 *   - Superset: All JavaScript is valid TypeScript
 *   - Static typing: Checks types at compile time
 *   - Developed by Microsoft, open-source
 * Important Note: TypeScript code needs compilation to JavaScript for browsers.
 */

// Example: Basic TypeScript
let myString: string = "Hello from TypeScript";
console.log(myString);

/**
 * 2. Key Features of TypeScript
 * Definition: Core capabilities that enhance JavaScript for better development.
 * Logic: Adds tools like static typing, classes, and modules to improve structure.
 * Reason: Boosts code quality, developer experience, and compatibility with modern JS.
 * Use Case: Large projects needing robust, maintainable, and scalable code.
 * Key Points:
 *   - Static Type Checking: Optional type assignments
 *   - Class-Based Objects: True object-oriented programming
 *   - Modularity: Organize code in reusable pieces
 *   - ES6 Features: Supports arrow functions, etc.
 *   - Syntactical Sugaring: Cleaner, high-level syntax
 * Important Note: Features make TypeScript ideal for complex apps.
 */

// Example: Class in TypeScript
class Person {
  constructor(public name: string, private age: number) {}
  greet() {
    return `Hello, ${this.name}`;
  }
}
const person = new Person("John", 30);
console.log(person.greet());

/**
 * 3. TypeScript vs. JavaScript
 * Definition: Comparison of TypeScript and JavaScript characteristics.
 * Logic: TypeScript adds compile-time checks and advanced features; JavaScript is simpler.
 * Reason: TypeScript suits big projects; JavaScript fits quick, small tasks.
 * Use Case: Choose TypeScript for reliability, JavaScript for fast prototyping.
 * Key Points:
 *   - Typing: Static vs. dynamic
 *   - Errors: Compile-time vs. runtime
 *   - Tooling: Advanced vs. basic
 * Important Note: TypeScript compiles to JavaScript for execution.
 */

// Example: Type Safety
let num: number = 5;
// num = "five"; // Error: Type 'string' is not assignable to type 'number'
console.log(num);

/**
 * 4. Why Use TypeScript?
 * Definition: Reasons TypeScript is valuable for development.
 * Logic: Improves error detection, code design, and tooling support.
 * Reason: Saves time, reduces bugs, and scales well for teams.
 * Use Case: Adopted by frameworks (e.g., Angular) and companies like Google.
 * Key Points:
 *   - Better Code Quality: Static typing and interfaces
 *   - Developer Experience: Real-time error detection
 *   - Popularity: Used by tech giants, active community
 * Important Note: Enhances productivity in large, complex projects.
 */

/**
 * 5. How to Use TypeScript?
 * Definition: Process to integrate and run TypeScript in projects.
 * Logic: Write TypeScript, compile to JavaScript, and include in HTML.
 * Reason: Browsers don’t read TypeScript; compilation makes it compatible.
 * Use Case: Local projects, web apps, with editors like VS Code.
 * Key Points:
 *   - Compiler: Install tsc via npm
 *   - Transpile: Convert .ts to .js
 *   - Editor Support: Real-time errors in VS Code
 * Important Note: Setup is simple with npm and a basic HTML file.
 */

// Example: TypeScript to HTML
let myVar: string = "Hello from ts";
console.log(myVar);
// Steps:
// 1. Save as 'types.ts'
// 2. Run `tsc types.ts` to get 'types.js'
// 3. Add <script src="types.js"></script> to HTML
// 4. Open HTML in browser to see output