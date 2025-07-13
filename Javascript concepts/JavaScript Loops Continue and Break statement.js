// Continue statement
console.log("Continue statement");
for(let i = 1; i <= 10; i++){
  if(i == 5){
    continue; // Skips 5
  }
  console.log(i);
}

// Working : If continue is used in a for loop, the control flow jumps to the test expression after skipping the current iteration.

// Break statement
console.log("Break statement");
for(let i = 1; i <= 10; i++){
  if(i == 5){
    break; // Exits the loop
  }
  console.log(i);
}

// Working : If break is used in a for loop, the control flow jumps to the test expression after exiting the loop.

// Continue vs Break : 
// The major difference between the continue and break statement is that the break statement breaks out of the loop completely while continue is used to break one statement and iterate to the next statement. 

// Switch Statement
let day = 1;
let dayName;

switch (day) {
  case 1:
    dayName = "Monday";
    break;
  case 2:
    dayName = "Tuesday";
    break;
  case 3:
    dayName = "Wednesday";
    break;
  case 4:
    dayName = "Thursday";
    break;
  case 5:
    dayName = "Friday";
    break;
  case 6:
    dayName = "Saturday";
    break;
  case 7:
    dayName = "Sunday";
    break;
  default:
    dayName = "Invalid day";
}
console.log(dayName);

// Switch Statement
let grades = 'C';
let result;

switch(grades){
    case 'A':
    case 'B':
    case 'C':
        result = "Good";
        break;
    case 'D':
        result = "Average";
        break;
    case 'F':
        result = "Fail";
        break;
    default:
        result = "Invalid grade";
}

console.log(result);

