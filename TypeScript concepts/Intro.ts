/**
 * TypeScript "----" References
 * A Comprehensive Guide to TypeScript Introduction
 * Organized by topics with examples, logic, reasons, notes, key points, definitions, and use cases
 */

/**
 * 1. What is TypeScript?
 * Definition: TypeScript is a syntactic superset of JavaScript that adds static typing.
 * Logic: Builds on JavaScript’s syntax, introducing type annotations for variables, parameters, and more.
 * Reason: Enhances JavaScript by adding type safety, catching errors before runtime.
 * Use Case: Developing large-scale applications where type clarity reduces bugs.
 * Key Points:
 *   - Superset: Shares JavaScript’s base syntax
 *   - Static typing: Types are checked at compile time
 *   - Developed by Microsoft, open-source
 * Important Note: All valid JavaScript is valid TypeScript, but not vice versa.
 */

// Example: Basic TypeScript vs. JavaScript
let greeting: string = "Hello, TypeScript!"; // TypeScript with type
let jsGreeting = "Hello, JavaScript!"; // JavaScript, no type
console.log(greeting, jsGreeting);

/**
 * 2. Why Should I Use TypeScript?
 * Definition: TypeScript addresses JavaScript’s loose typing by adding type specifications.
 * Logic: Explicit types for variables and functions clarify data flow and expectations.
 * Reason: Reduces errors, improves code readability, and enhances tooling (e.g., autocompletion).
 * Use Case: Team projects, complex apps, or when maintaining code over time.
 * Key Points:
 *   - Catches type mismatches early
 *   - JavaScript lacks type info, requiring guesswork or docs
 *   - Compile-time checking, not runtime
 * Important Note: TypeScript errors help debug before code runs, unlike JavaScript.
 */

// Example: Type Safety in Action
function addNumbers(a: number, b: number): number {
  return a + b;
}
console.log(addNumbers(5, 3)); // Works: 8
// console.log(addNumbers("5", 3)); // Error: Argument of type 'string' is not assignable to 'number'

/**
 * 3. How Do I Use TypeScript?
 * Definition: TypeScript is used via a compiler (tsc) that transpiles code to JavaScript.
 * Logic: Write TypeScript (.ts files), compile to JavaScript (.js files) for browsers to run.
 * Reason: Browsers don’t understand TypeScript; the compiler bridges this gap.
 * Use Case: Local projects, web apps, or integration with tools like Visual Studio Code.
 * Key Points:
 *   - Compiler: TypeScript Compiler (tsc)
 *   - Transpiles: Converts TypeScript to JavaScript
 *   - Editor support: VS Code shows errors in real-time
 * Important Note: Install TypeScript via npm (e.g., `npm install -g typescript`) for local use.
 */

// Example: Basic TypeScript Workflow
let user: string = "Alice";
console.log(user);
// Steps:
// 1. Save as 'example.ts'
// 2. Run `tsc example.ts` in terminal
// 3. Produces 'example.js' for browser execution
