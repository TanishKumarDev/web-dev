/**
 * TypeScript "Special Types" References
 */

/**
 * 1. Type: any
 * Definition: A special type that disables type checking, allowing any type to be assigned or used.
 * Logic: Bypasses TypeScript's type system, treating the variable as if it can hold any value.
 * Reason: Useful for quick fixes or when working with dynamic data where types are unpredictable.
 * Use Case: Handling third-party library outputs, JSON data, or legacy JavaScript code.
 * Key Points:
 *   - Disables type safety
 *   - Allows any operation (e.g., method calls, assignments)
 *   - Impacts tooling (e.g., no autocompletion)
 * Important Note: Avoid 'any' when possible—undermines TypeScript's purpose of type safety.
 */

// Example: Without 'any' (Throws Errors)
let u = true;
// u = "string"; // Error: Type 'string' is not assignable to type 'boolean'.
// Math.round(u); // Error: Argument of type 'boolean' is not assignable to parameter of type 'number'.

// Example: With 'any'
let v: any = true;
v = "string"; // No error—'any' allows any type
Math.round(v); // No error—'any' permits this, but risky at runtime
console.log(v);

/**
 * 2. Type: unknown
 * Definition: A safer alternative to 'any', representing a value of unknown type.
 * Logic: Allows assignment of any value but restricts operations until the type is checked or cast.
 * Reason: Enforces type safety by requiring explicit checks or casting before use.
 * Use Case: Handling API responses or user inputs where the type is initially unclear.
 * Key Points:
 *   - Safer than 'any'
 *   - Requires type checking or casting (using 'as')
 *   - Prevents direct operations on unknown values
 * Important Note: Use type guards (e.g., typeof, instanceof) for secure handling.
 */

// Example: Using 'unknown'
let w: unknown = 1;
w = "string"; // No error—can assign any value
w = {
  runANonExistentMethod: () => {
    console.log("I think therefore I am");
  }
} as { runANonExistentMethod: () => void };
// w.runANonExistentMethod(); // Error: Object is of type 'unknown'.
if (typeof w === 'object' && w !== null) {
  (w as { runANonExistentMethod: Function }).runANonExistentMethod(); // Safe after check and cast
}

/**
 * 3. Type: never
 * Definition: A type that represents a value that never occurs.
 * Logic: Throws an error if assigned, or used in functions that never return (e.g., throw errors, infinite loops).
 * Reason: Helps TypeScript analyze code paths, especially in advanced generics and control flow.
 * Use Case: Exhaustive checks in unions, error-throwing functions, or infinite processes.
 * Key Points:
 *   - Cannot assign any value to 'never'
 *   - Common in advanced generics
 *   - Signals unreachable code
 * Important Note: Rarely used standalone—most useful in complex type scenarios.
 */

// Example: Using 'never'
// let x: never = true; // Error: Type 'boolean' is not assignable to type 'never'.

// Example: Function with 'never'
function throwError(message: string): never {
  throw new Error(message);
}
// Usage: throwError("Something went wrong"); // Never returns

/**
 * 4. Type: undefined & null
 * Definition: Types representing JavaScript's 'undefined' and 'null' primitives.
 * Logic: 'undefined' for uninitialized variables; 'null' for intentional absence of value.
 * Reason: Allows explicit handling of missing or unassigned values.
 * Use Case: Optional function parameters, unset object properties, or API responses.
 * Key Points:
 *   - 'undefined': Variable declared but not assigned
 *   - 'null': Explicitly no value
 *   - Behavior depends on 'strictNullChecks' in tsconfig.json
 * Important Note: Enable 'strictNullChecks' for safer type handling.
 */

// Example: Using 'undefined' and 'null'
let y: undefined = undefined;
let z: null = null;
console.log(y, z);

// Example: With strictNullChecks
let optionalValue: string | null = null; // Allowed with union type
optionalValue = "Now a string";
console.log(optionalValue);
