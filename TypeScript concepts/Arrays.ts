/**
 * TypeScript "Arrays" References
 * A Comprehensive Guide to TypeScript Arrays
 * Organized by topics with examples, logic, reasons, notes, key points, definitions, and use cases
 */

/**
 * 1. Introduction to TypeScript Arrays
 * Definition: Arrays in TypeScript are collections of values, with specific syntax for typing.
 * Logic: TypeScript adds type annotations to ensure all elements in an array conform to a specified type.
 * Reason: Enhances type safety, preventing incorrect data types from being added.
 * Use Case: Storing lists of similar items, like names, numbers, or objects.
 * Key Points:
 *   - Syntax: type[] or Array<type>
 *   - Ensures type consistency
 *   - Builds on JavaScript arrays
 * Important Note: TypeScript arrays extend JavaScript array functionality with type checking.
 */

// Example: Basic Array Typing
const names: string[] = [];
names.push("Dylan"); // No error—string matches type
// names.push(3); // Error: Argument of type 'number' is not assignable to parameter of type 'string'
console.log(names);

/**
 * 2. Readonly Arrays
 * Definition: The 'readonly' keyword prevents modifications to an array after initialization.
 * Logic: Restricts methods like push, pop, or splice, making the array immutable.
 * Reason: Protects data integrity when an array shouldn’t change (e.g., constants).
 * Use Case: Fixed lists, such as configuration values or predefined options.
 * Key Points:
 *   - Syntax: readonly type[]
 *   - Blocks mutating methods
 *   - Immutable after creation
 * Important Note: Remove 'readonly' to allow modifications, but use cautiously.
 */

// Example: Readonly Array
const readonlyNames: readonly string[] = ["Dylan"];
// readonlyNames.push("Jack"); // Error: Property 'push' does not exist on type 'readonly string[]'
console.log(readonlyNames);

/**
 * 3. Type Inference
 * Definition: TypeScript infers the type of an array based on its initial values.
 * Logic: When values are assigned, TypeScript automatically determines the array’s type.
 * Reason: Simplifies coding by reducing the need for explicit type declarations.
 * Use Case: Quick prototyping or when array content is predictable.
 * Key Points:
 *   - Infers type from values
 *   - Still enforces type safety
 *   - Useful for simple arrays
 * Important Note: Explicit typing is preferred for clarity in complex projects.
 */

// Example: Type Inference
const numbers = [1, 2, 3]; // Inferred to type number[]
numbers.push(4); // No error—number matches inferred type
// numbers.push("2"); // Error: Argument of type 'string' is not assignable to parameter of type 'number'
let head: number = numbers[0]; // No error—type is number
console.log(numbers, head);


// Exercise: Prevent the array from being changed
const namesExercise: readonly string[] = ["Dylan"];
// namesExercise.push("Jack"); // Error: Property 'push' does not exist on type 'readonly string[]'
console.log(namesExercise);