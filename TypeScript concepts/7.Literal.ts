/*
 * 1. String Literal Types - TypeScript's literal types allow developers to specify exact values for variables, function parameters, or properties, enhancing type safety by ensuring variables can only hold predefined values.
 
* Restrict variables to specific string values
 */

// Basic string literal type
type UserRoleType = "admin" | "developer" | "tester" | "user";

// Using string literal type
const literalUserRole: UserRoleType = "developer";  // Valid
// const invalidRole: UserRoleType = "manager";  // Error: Type '"manager"' is not assignable to type 'UserRoleType'

// String literal type with function parameter
function assignRole(role: UserRoleType): string {
    return `Assigned role: ${role}`;
}
console.log(assignRole("developer"));  // Valid
// console.log(assignRole("manager"));  // Error

/**
 * 2. Numeric Literal Types
 * Restrict variables to specific numeric values
 */

// Basic numeric literal type
type DiceValue = 1 | 2 | 3 | 4 | 5 | 6;

// Using numeric literal type
const literalDiceRoll: DiceValue = 4;  // Valid
// const invalidRoll: DiceValue = 7;  // Error: Type '7' is not assignable to type 'DiceValue'

// Numeric literal type with function
function rollDice(): DiceValue {
    return 4;  // Valid
    // return 7;  // Error
}

/**
 * 3. Boolean Literal Types
 * Restrict variables to specific boolean values
 */

// Boolean literal type
type Success = true;
type Failure = false;

// Using boolean literal types
const literalOperationSuccess: Success = true;  // Valid
// const operationFailure: Success = false;  // Error: Type 'false' is not assignable to type 'true'

/**
 * 4. Combined Literal Types
 * Using multiple literal types together
 */

// Combined string and numeric literals
type UserStatus = "active" | "inactive" | 0 | 1;

// Using combined literal types
const literalUserStatus: UserStatus = "active";  // Valid
const literalNumericStatus: UserStatus = 1;      // Valid
// const invalidStatus: UserStatus = "pending";  // Error

/**
 * 5. Literal Types with Type Aliases
 * Creating reusable literal type combinations
 */

// Type alias for user permissions
type Permission = "read" | "write" | "execute";

// Type alias for user access level
type AccessLevel = "basic" | "premium" | "admin";

// Combined type alias
type UserAccess = {
    permission: Permission;
    level: AccessLevel;
};

// Using combined type alias
const literalUserAccess: UserAccess = {
    permission: "write",
    level: "admin"
};

/**
 * 6. Literal Types with Union Types
 * Combining literal types with other types
 */

// Union type with literal and primitive types
type UserId = string | number;
type UserName = string;
type UserAge = number;

// Combined type with literals and primitives
type UserProfile = {
    id: UserId;
    name: UserName;
    age: UserAge;
    status: "active" | "inactive";
};

// Using the combined type
const literalUserProfile: UserProfile = {
    id: "T123",
    name: "Tanish",
    age: 25,
    status: "active"
};

/**
 * 7. Literal Types with Const Assertions
 * Using const assertions to create literal types
 */

// Const assertion
const colorArray = ["red", "green", "blue"] as const;
type ColorType = typeof colorArray[number];  // "red" | "green" | "blue"

// Using const assertion type
const literalColor: ColorType = "blue";  // Valid
// const invalidColor: ColorType = "yellow";  // Error

/**
 * 8. Literal Types with Template Literals
 * Using template literals with literal types
 */

// Template literal type
type Greeting = `Hello, ${string}!`;
type Welcome = `Welcome, ${string}!`;

// Using template literal types
const literalGreeting: Greeting = "Hello, Tanish!";  // Valid
const literalWelcome: Welcome = "Welcome, Tanish!";  // Valid
// const invalidGreeting: Greeting = "Hi, Tanish!";  // Error

/**
 * 9. Literal Types Best Practices
 */

// Use descriptive names for literal types
type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";
type HttpStatus = 200 | 201 | 400 | 401 | 403 | 404 | 500;

// Combine with interfaces for better organization
interface ApiResponse<T> {
    method: HttpMethod;
    status: HttpStatus;
    data: T;
}

// Example usage of best practices
function demonstrateLiterals(): void {
    console.log("\nLiteral Types Demonstration:");
    console.log("User Role:", literalUserRole);
    console.log("Dice Roll:", literalDiceRoll);
    console.log("Operation Success:", literalOperationSuccess);
    console.log("User Status:", literalUserStatus);
    console.log("User Access:", literalUserAccess);
    console.log("User Profile:", literalUserProfile);
    console.log("Favorite Color:", literalColor);
    console.log("Greeting:", literalGreeting);
}

// Run the demonstration
demonstrateLiterals();