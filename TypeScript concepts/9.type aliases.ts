/*
 * 1. Basic Type Aliases
 * Creating simple type aliases for primitive types
 */

// Basic type alias for primitive types
type PrimitiveType = number | string | boolean;

// Using the type alias
const primitiveValue: PrimitiveType = 42;  // Valid
const stringValue: PrimitiveType = "Hello";  // Valid
const booleanValue: PrimitiveType = true;  // Valid
// const functionValue: PrimitiveType = () => {};  // Error: Type '() => void' is not assignable to type 'PrimitiveType'

/**
 * 2. Function Type Aliases
 * Creating type aliases for function signatures
 */

// Type alias for a function that takes a number and returns a string
type NumberToString = (num: number) => string;

// Using the function type alias
const convertToString: NumberToString = (num) => `The number is: ${num}`;
console.log(convertToString(42));  // Output: "The number is: 42"

/**
 * 3. Object Type Aliases
 * Creating type aliases for object structures
 */

// Type alias for a user object
type UserInfo = {
    id: number;
    name: string;
    email?: string;  // Optional property
    readonly createdAt: Date;  // Read-only property
};

// Using the object type alias
const tanishInfo: UserInfo = {
    id: 1,
    name: "Tanish",
    email: "tanish@example.com",
    createdAt: new Date()
};

/**
 * 4. Union Type Aliases
 * Creating type aliases for union types
 */

// Type alias for ID that can be either string or number
type ID = string | number;

// Using the union type alias
const userId: ID = "T123";  // Valid
const numericId: ID = 123;  // Valid
// const booleanId: ID = true;  // Error: Type 'boolean' is not assignable to type 'ID'

/**
 * 5. String Literal Type Aliases
 * Creating type aliases for specific string values
 */

// Type alias for status values
type ApplicationStatus = "pending" | "approved" | "rejected";

// Using the string literal type alias
const applicationStatus: ApplicationStatus = "pending";  // Valid
// const invalidStatus: ApplicationStatus = "processing";  // Error: Type '"processing"' is not assignable to type 'ApplicationStatus'

/**
 * 6. Complex Type Aliases
 * Creating type aliases for complex type combinations
 */

// Type alias for a response object
type ResponseWrapper<T> = {
    status: ApplicationStatus;
    data: T;
    message?: string;
    timestamp: Date;
};

// Using the complex type alias
const userResponse: ResponseWrapper<UserInfo> = {
    status: "approved",
    data: tanishInfo,
    message: "User retrieved successfully",
    timestamp: new Date()
};

/**
 * 7. Type Alias with Intersection Types
 * Combining multiple types using intersection
 */

// Type alias combining multiple interfaces
type EmployeeInfo = {
    id: number;
    name: string;
    department: string;
    salary: number;
    startDate: Date;
    printSalary(): void;
};

type ManagerInfo = {
    teamSize: number;
    reports: EmployeeInfo[];
    approveTimeOff(): void;
};

type ManagerEmployeeInfo = EmployeeInfo & ManagerInfo;

// Using the intersection type alias
const tanishManagerInfo: ManagerEmployeeInfo = {
    id: 1,
    name: "Tanish",
    department: "Engineering",
    salary: 100000,
    startDate: new Date(),
    teamSize: 5,
    reports: [],
    printSalary(): void {
        console.log(`Salary: ${this.salary}`);
    },
    approveTimeOff(): void {
        console.log("Time off approved");
    }
};

/**
 * 8. Type Alias Best Practices
 * Demonstrating proper usage of type aliases
 */

// Use descriptive names
type UserRole = "admin" | "user" | "guest";
type UserPermissions = "read" | "write" | "execute";

// Combine related types
type UserAccessInfo = {
    role: UserRole;
    permissions: UserPermissions[];
};

// Using the combined type alias
const tanishAccessInfo: UserAccessInfo = {
    role: "admin" as const,
    permissions: ["read", "write", "execute"] as const
};

/**
 * 9. Demonstration Function
 * Showcasing all type alias examples
 */

function demonstrateTypeAliases(): void {
    console.log("\nType Aliases Demonstration:");
    console.log("1. Primitive Value:", primitiveValue);
    console.log("2. Function Result:", convertToString(42));
    console.log("3. User Info:", tanishInfo);
    console.log("4. IDs:", { userId, numericId });
    console.log("5. Status:", applicationStatus);
    console.log("6. API Response:", userResponse);
    console.log("7. Manager Info:", tanishManagerInfo);
    console.log("8. User Access:", tanishAccessInfo);
}

// Run the demonstration
demonstrateTypeAliases();
