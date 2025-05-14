// 📌 1. Decision-Making Statements

// JavaScript if Statement
const age = 18;
if (age >= 18) {
    console.log("u can vote");  // Executes if age is 18 or more
}

// JavaScript if...else Statement
const score = 40;
if (score >= 50) {
    console.log("you passed");
} else {
    console.log("you failed");  // Executes when score is less than 50
}

// JavaScript if...else if...else Statement
const temp = 25;
if (temp > 30) {
    console.log("It's hot.");
} else if (temp >= 20) {
    console.log("It's warm.");  // Executes when temp is between 20-30
} else {
    console.log("It's cold.");
}

// 📌 2. Loops

// JavaScript for loop
for (let i = 1; i <= 5; i++) {
    console.log(i);  // Prints numbers 1 to 5
}

// JavaScript while loop
let i = 1;
while (i <= 5) {
    console.log(i);
    i++;  // Prints numbers 1 to 5
}

// JavaScript do...while loop
let k = 1;
do {
    console.log(k);  // Prints numbers 1 to 5
    k++;
} while (k <= 5);

// 📌 3. Branching Statements

// JavaScript return Statement
function add(a, b) {
    return a + b;
}
const res = add(5, 3);
console.log(res);  // Outputs 8

// JavaScript break Statement
for (let i = 1; i <= 5; i++) {
    if (i === 3) break;  // Exits loop when i equals 3
    console.log(i);
}

// JavaScript continue Statement
for (let i = 1; i <= 5; i++) {
    if (i === 3) continue;  // Skips printing 3
    console.log(i);
}

// 📌 4. Switching Statements
const day = "Saturday";
switch (day) {
    case "Monday":
        console.log("Start of the week");
        break;
    case "Friday":
        console.log("End of the week");
        break;
    default:
        console.log("It's a regular day.");  // Default case when no match
}
