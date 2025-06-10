/**
 * TypeScript "----" References
 * A Comprehensive Guide to TypeScript Simple Types
 * Organized by topics with examples, logic, reasons, notes, key points, definitions, and use cases
 */

/**
 * 1. Introduction to Simple Types
 * Definition: Simple types (primitives) in TypeScript are basic building blocks for data, inherited from JavaScript.
 * Logic: Provide fundamental data types to store and manipulate values like text, numbers, and true/false states.
 * Reason: Enable type safety for basic operations, catching errors during development.
 * Use Case: Storing user input, performing calculations, or tracking states (e.g., isActive).
 * Key Points:
 *   - Core primitives: boolean, number, string
 *   - Additional primitives: bigint, symbol
 * Important Note: TypeScript enhances JavaScript by adding type checks to these primitives.
 */

/**
 * 2. Core Primitive Types
 * Definition: The three main primitives in JavaScript and TypeScript.
 * Logic: Each type serves a specific purpose for handling different kinds of data.
 * Reason: Ensures variables hold expected values, preventing invalid operations.
 * Use Case: Boolean for toggles, number for math, string for text display.
 * Key Points:
 *   - boolean: true or false values
 *   - number: whole numbers and floating-point values
 *   - string: text values, e.g., "TypeScript Rocks"
 * Important Note: These are the foundation of most TypeScript programs.
 */

// Example: Core Primitives
let isActive: boolean = true;
let count: number = 42;
let message: string = "TypeScript Rocks";
console.log(isActive, count, message);

/**
 * 3. Additional Primitive Types
 * Definition: Less common primitives introduced in later JavaScript/TypeScript versions.
 * Logic: Extend capabilities for handling large numbers and unique identifiers.
 * Reason: Bigint for precise large number calculations, symbol for unique keys.
 * Use Case: Bigint for financial calculations, symbol for object property keys.
 * Key Points:
 *   - bigint: Handles larger numbers than 'number'
 *   - symbol: Creates globally unique identifiers
 * Important Note: Supported in modern JavaScript engines; check compatibility.
 */

// Example: Bigint and Symbol
let bigNumber: bigint = 12345678901234567890n; // Note the 'n' for bigint
let uniqueKey: symbol = Symbol("uniqueId");
console.log(bigNumber, uniqueKey);

/**
 * 4. Type Assignment
 * Definition: Two ways TypeScript assigns types: explicit and implicit.
 * Logic: Explicit declares the type; implicit infers it from the assigned value.
 * Reason: Explicit is clearer and intentional; implicit is faster for development.
 * Use Case: Explicit for production code, implicit for prototyping or testing.
 * Key Points:
 *   - Explicit: Write the type (e.g., let name: string)
 *   - Implicit: TypeScript infers (guesses) the type
 * Important Note: Implicit inference is called 'infer' in TypeScript.
 */

// Example: Explicit Type
let firstNameExplicit: string = "Dylan";
console.log(firstNameExplicit);

// Example: Implicit Type
let firstNameImplicit = "Dylan"; // Inferred as string
console.log(firstNameImplicit);

/**
 * 5. Error in Type Assignment
 * Definition: TypeScript throws errors when types don’t match during reassignment.
 * Logic: Enforces type consistency to prevent bugs from mismatched data.
 * Reason: Unlike JavaScript, TypeScript catches type errors before runtime.
 * Use Case: Protects against assigning a number to a string variable.
 * Key Points:
 *   - TypeScript errors on mismatch
 *   - JavaScript allows mismatches (no errors)
 * Important Note: Errors help debug early, saving time in development.
 */

// Example: Type Mismatch Error
let firstName: string = "Dylan";
// firstName = 33; // Error: Type 'number' is not assignable to type 'string'

// Example: Implicit Type Mismatch
let inferredName = "Dylan"; // Inferred as string
// inferredName = 33; // Error: Type 'number' is not assignable to type 'string'
console.log(inferredName);

/**
 * 6. Unable to Infer
 * Definition: When TypeScript can’t guess a type, it defaults to 'any'.
 * Logic: 'any' disables type checking, allowing flexibility but losing safety.
 * Reason: Common with dynamic data (e.g., JSON.parse) where type is unknown.
 * Use Case: Parsing JSON or handling unpredictable API responses.
 * Key Points:
 *   - Defaults to 'any' when type is unclear
 *   - Can be disabled with 'noImplicitAny' in tsconfig.json
 * Important Note: Avoid 'any' for better type safety and tooling support.
 */

// Example: Unable to Infer
const json = JSON.parse("55"); // Type is 'any'—could be string, number, object
console.log(typeof json); // Logs the runtime type

/**
 * 7. Boolean vs. Boolean
 * Definition: Lowercase 'boolean' is the primitive; uppercase 'Boolean' is an object wrapper.
 * Logic: Primitive is simple and efficient; object wrapper is for specific use cases.
 * Reason: Use lowercase for standard type declarations in TypeScript.
 * Use Case: Stick to 'boolean' for variables; 'Boolean' is rare and advanced.
 * Key Points:
 *   - boolean: Primitive type
 *   - Boolean: Object wrapper (avoid in most cases)
 * Important Note: Always use lowercase 'boolean' for this tutorial.
 */

// Example: Correct Usage
let isValid: boolean = true;
console.log(isValid);

