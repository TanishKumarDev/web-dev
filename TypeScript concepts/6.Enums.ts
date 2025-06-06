/*
    Enums are a way to group related constants together.

 * 1. Numeric Enums
 * Default behavior: values start from 0 and auto-increment
 */

// Basic numeric enum
enum UserRole {
    Admin,      // 0
    Developer,  // 1
    Tester,     // 2
    User        // 3
}

// Using the enum
const tanishRole: UserRole = UserRole.Developer;
console.log("Tanish's role:", tanishRole);  // Output: 1

/**
 * 2. Numeric Enums with Custom Values
 * You can specify custom starting values
 */

// Enum with custom starting value
enum ProjectStatus {
    Planning = 1,    // Start from 1
    InProgress,      // 2
    Review,          // 3
    Completed        // 4
}

// Using the enum with custom values
const currentProject: ProjectStatus = ProjectStatus.InProgress;
console.log("Project status:", currentProject);  // Output: 2

/**
 * 3. Numeric Enums with Explicit Values
 * Each member can have a specific value
 */

// Enum with explicit values
enum Priority {
    Low = 100,
    Medium = 200,
    High = 300,
    Critical = 400
}

// Using the enum with explicit values
const taskPriority: Priority = Priority.High;
console.log("Task priority:", taskPriority);  // Output: 300

/**
 * 4. String Enums
 * Each member is assigned a string value
 */

// String enum
enum UserType {
    Admin = "ADMIN",
    Developer = "DEVELOPER",
    Tester = "TESTER",
    User = "USER"
}

// Using the string enum
const tanishType: UserType = UserType.Developer;
console.log("Tanish's type:", tanishType);  // Output: "DEVELOPER"

/**
 * 5. Const Enums
 * More efficient as they are removed during compilation
 */

// Const enum
const enum Department {
    Engineering = "ENG",
    Marketing = "MKT",
    Sales = "SLS",
    HR = "HR"
}

// Using the const enum
const tanishDepartment: Department = Department.Engineering;
console.log("Tanish's department:", tanishDepartment);  // Output: "ENG"

/**
 * 6. Heterogeneous Enums
 * Mix of numeric and string values (not recommended)
 */

// Heterogeneous enum
enum Status {
    Active = 1,
    Inactive = "INACTIVE",
    Pending = 2,
    Cancelled = "CANCELLED"
}
// we can use both numeric and string values in a heterogeneous enum. : not recommended

// Using the heterogeneous enum
const userStatus: Status = Status.Active;
console.log("User status:", userStatus);  // Output: 1

/**
 * 7. Enum with Computed Values
 * Using expressions to compute enum values
 */

// Enum with computed values
enum FilePermission {
    Read = 1 << 0,    // 1
    Write = 1 << 1,   // 2
    Execute = 1 << 2  // 4
}

// Using the computed enum
const fileAccess: FilePermission = FilePermission.Read | FilePermission.Write;
console.log("File access:", fileAccess);  // Output: 3

/**
 * 8. Enum Best Practices
 */

// Use descriptive names
enum UserState {
    Online = "ONLINE",
    Offline = "OFFLINE",
    Away = "AWAY",
    Busy = "BUSY"
}

// Use const enums for better performance
const enum NotificationType {
    Email = "EMAIL",
    SMS = "SMS",
    Push = "PUSH"
}

// Example usage of best practices
function demonstrateEnums(): void {
    console.log("\nEnum Demonstration:");
    console.log("User Role:", UserRole[tanishRole]);
    console.log("Project Status:", ProjectStatus[currentProject]);
    console.log("Task Priority:", Priority[taskPriority]);
    console.log("User Type:", tanishType);
    console.log("Department:", tanishDepartment);
    console.log("User State:", UserState.Online);
    console.log("Notification Type:", NotificationType.Email);
}

// Run the demonstration
demonstrateEnums();