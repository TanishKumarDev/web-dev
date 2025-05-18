// Constant: Cannot be reassigned
const accountId = 144553;
// accountId = 2; // Error: Assignment to constant variable
console.log(accountId); // Output: 144553

// Let: Block-scoped, reassignable
let accountEmail = "tanish@google.com";
console.log(accountEmail); // Output: tanish@google.com
accountEmail = "new@google.com"; // Reassignment allowed
console.log(accountEmail); // Output: new@google.com

// Var: Avoid due to scope issues
var accountPassword = "12345";
accountPassword = "2121"; // Reassignment allowed, but risky
console.log(accountPassword); // Output: 2121

// Implicit var: Bad practice, avoid
accountCity = "Jaipur";
accountCity = "Bangalore"; // Reassignment allowed
console.log(accountCity); // Output: Bangalore

// Undefined variable
let accountState; // No value assigned
console.log(accountState); // Output: undefined

// Display all variables in a table
console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);