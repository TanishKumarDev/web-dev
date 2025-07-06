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

// Common Code Blocks
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