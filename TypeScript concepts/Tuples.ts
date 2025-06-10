/**
 * TypeScript "Tuples" References
 */

/**
 * 1. Introduction to Tuples
 * Definition: A tuple is a typed array with a pre-defined length and specific types for each index.
 * Logic: Enforces a fixed structure where each position has a known type, unlike regular arrays.
 * Reason: Provides type safety for collections with mixed, ordered data.
 * Use Case: Representing structured data like coordinates, API responses, or state pairs.
 * Key Points:
 *   - Fixed length and types
 *   - Extends array functionality
 *   - Order matters
 * Important Note: Tuples are a TypeScript feature, not native to JavaScript.
 */

// Example: Defining a Tuple
let ourTuple: [number, boolean, string];
ourTuple = [5, false, 'Coding God was here'];
console.log(ourTuple);

// Example: Incorrect Initialization
let badTuple: [number, boolean, string];
// badTuple = [false, 'Coding God was mistaken', 5]; // Error: Type 'boolean' is not assignable to type 'number', etc.
console.log(badTuple);

/**
 * 2. Readonly Tuples
 * Definition: A tuple with the 'readonly' modifier prevents changes after initialization.
 * Logic: Restricts methods like push or pop, ensuring the tuple remains immutable.
 * Reason: Protects data integrity for fixed, unchangeable collections.
 * Use Case: Constant data, such as configuration values or fixed records.
 * Key Points:
 *   - Syntax: readonly [type1, type2, ...]
 *   - No type safety beyond initial values
 *   - Common in React useState
 * Important Note: Without 'readonly', tuples allow unsafe additions like push.
 */

// Example: Tuple Without Readonly
let mutableTuple: [number, boolean, string] = [5, false, 'Coding God was here'];
mutableTuple.push('Something new and wrong'); // No error, but unsafe
console.log(mutableTuple);

// Example: Readonly Tuple
const ourReadonlyTuple: readonly [number, boolean, string] = [5, true, 'The Real Coding God'];
// ourReadonlyTuple.push('Coding God took a day off'); // Error: Property 'push' does not exist on type 'readonly [number, boolean, string]'
console.log(ourReadonlyTuple);

/**
 * 3. Named Tuples
 * Definition: Tuples with labeled elements for better context and readability.
 * Logic: Assign names to each index, clarifying the purpose of each value.
 * Reason: Improves code documentation and understanding of tuple structure.
 * Use Case: Representing points (e.g., x, y coordinates) or structured pairs.
 * Key Points:
 *   - Syntax: [name: type, name: type]
 *   - Enhances readability
 *   - Still enforces type and order
 * Important Note: Names are for clarity, not part of the runtime code.
 */

// Example: Named Tuple
const graph: [x: number, y: number] = [55.2, 41.3];
console.log(graph);

/**
 * 4. Destructuring Tuples
 * Definition: Extracting tuple elements into individual variables using destructuring.
 * Logic: Breaks down a tuple into named variables, matching the order of types.
 * Reason: Simplifies access to tuple values for cleaner, more readable code.
 * Use Case: Unpacking coordinates, state values, or API response pairs.
 * Key Points:
 *   - Syntax: const [var1, var2] = tuple
 *   - Order must match tuple structure
 *   - Works because tuples are arrays
 * Important Note: Destructuring relies on position, not names in named tuples.
 */

// Example: Destructuring Tuple
const coordinates: [number, number] = [55.2, 41.3];
const [x, y] = coordinates;
console.log(x, y);
