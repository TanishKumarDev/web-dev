// Basic Date Declaration
let myDate = new Date();
console.log(myDate); // Output: 2025-05-15T17:38:00.000Z (current date/time)
console.log(typeof myDate); // Output: object

// Conversion Methods
console.log(myDate.toString()); // Output: Thu May 15 2025 23:08:00 GMT+0530 (India Standard Time)
console.log(myDate.toDateString()); // Output: Thu May 15 2025
console.log(myDate.toLocaleString()); // Output: 5/15/2025, 11:08:00 PM
console.log(myDate.toISOString()); // Output: 2025-05-15T17:38:00.000Z
console.log(myDate.toJSON()); // Output: 2025-05-15T17:38:00.000Z

// Specific Date
let myCreatedDate = new Date(2023, 0, 23);
console.log(myCreatedDate.toDateString()); // Output: Mon Jan 23 2023

// Date with Time
let myCreatedDateWithTime = new Date(2023, 0, 23, 5, 3);
console.log(myCreatedDateWithTime.toLocaleString()); // Output: 1/23/2023, 5:03:00 AM

// String Format
let myDateFromString = new Date("2023-01-14"); // ISO format
console.log(myDateFromString.toDateString()); // Output: Sat Jan 14 2023
let myDateFromString2 = new Date("01/14/2023"); // MM/DD/YYYY
console.log(myDateFromString2.toDateString()); // Output: Sat Jan 14 2023

// Timestamps
let myTimeStamp = Date.now();
console.log(myTimeStamp); // Output: 1747335480000 (milliseconds)
console.log(myCreatedDate.getTime()); // Output: 1674432000000
console.log(Math.floor(Date.now() / 1000)); // Output: 1747335480 (seconds)

// Extracting Components
console.log(myDate.getMonth() + 1); // Output: 5 (May, human-readable)
console.log(myDate.getDate()); // Output: 15
console.log(myDate.getDay()); // Output: 4 (Thursday)

// Custom Formatting
console.log(myDate.toLocaleString("en-IN", {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
  timeZone: "Asia/Kolkata"
})); // Output: Thursday, May 15, 2025

// String Interpolation Example
console.log(`Date: ${myDate.getDate()}/${myDate.getMonth() + 1}/${myDate.getFullYear()}`);
// Output: Date: 15/5/2025

// Reference: MDN for Date
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
