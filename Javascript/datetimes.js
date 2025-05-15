// File: 07_dates_in_js.js
// Purpose: Practice examples for Date and Time in JavaScript (Chai aur Code)
// All examples from the YouTube video consolidated here

// 1. Creating a Basic Date Object
// Represents current date and time
let myDate = new Date();
console.log("Current Date:", myDate); // Output: e.g., 2025-05-15T18:42:00.000Z (current date/time)

// 2. Converting Date to Different String Formats
console.log("\n--- String Conversion Methods ---");
console.log("toString():", myDate.toString()); // e.g., Thu May 15 2025 00:12:00 GMT+0530
console.log("toDateString():", myDate.toDateString()); // e.g., Thu May 15 2025
console.log("toISOString():", myDate.toISOString()); // e.g., 2025-05-15T18:42:00.000Z
console.log("toLocaleString():", myDate.toLocaleString()); // e.g., 5/15/2025, 12:12:00 AM

// 3. Checking Type of Date Object (Interview Question)
console.log("\n--- Type of Date ---");
console.log("typeof myDate:", typeof myDate); // Output: object

// 4. Declaring Specific Dates
console.log("\n--- Declaring Specific Dates ---");
// Method 1: Using year, month (0-based), day
let myCreatedDate1 = new Date(2023, 0, 23); // Jan 23, 2023
console.log("Specific Date (2023, 0, 23):", myCreatedDate1.toDateString()); // Mon Jan 23 2023

// Method 2: With time (year, month, day, hour, minute)
let myCreatedDate2 = new Date(2023, 0, 23, 5, 3); // Jan 23, 2023, 05:03
console.log("Specific Date with Time:", myCreatedDate2.toString()); // Mon Jan 23 2023 05:03:00

// Method 3: Using string format (YYYY-MM-DD, 1-based months)
let myCreatedDate3 = new Date("2023-01-14"); // Jan 14, 2023
console.log("String Format (2023-01-14):", myCreatedDate3.toDateString()); // Sat Jan 14 2023

// Method 4: Alternative string format (MM-DD-YYYY, common in India)
let myCreatedDate4 = new Date("01-14-2023"); // Jan 14, 2023
console.log("String Format (01-14-2023):", myCreatedDate4.toDateString()); // Sat Jan 14 2023

// 5. Working with Timestamps
console.log("\n--- Timestamps ---");
// Get current timestamp (milliseconds since Jan 1, 1970)
let myTimestamp = Date.now();
console.log("Current Timestamp (ms):", myTimestamp); // e.g., 1741906920000

// Convert timestamp to seconds (Interview Question)
let seconds = Math.floor(myTimestamp / 1000);
console.log("Timestamp in Seconds:", seconds); // e.g., 1741906920

// Get timestamp from a specific date
let createdDateTimestamp = myCreatedDate1.getTime();
console.log("Timestamp of Jan 23, 2023 (ms):", createdDateTimestamp); // e.g., 1674432000000

// 6. Extracting Specific Date Parts
console.log("\n--- Extracting Date Parts ---");
let date = new Date();
console.log("Year:", date.getFullYear()); // e.g., 2025
console.log("Month (0-based):", date.getMonth()); // e.g., 4 (May)
console.log("Month (1-based for display):", date.getMonth() + 1); // e.g., 5
console.log("Day of Month:", date.getDate()); // e.g., 15
console.log("Hours:", date.getHours()); // e.g., 0
console.log("Minutes:", date.getMinutes()); // e.g., 12
console.log("Seconds:", date.getSeconds()); // e.g., 0

// 7. Custom Formatting with toLocaleString()
console.log("\n--- Custom Formatting with toLocaleString ---");
// Basic local format
console.log("Default Locale:", date.toLocaleString("en-US")); // e.g., 5/15/2025, 12:12:00 AM

// Custom format with options
let options = {
  weekday: "long", // e.g., Thursday
  year: "numeric", // e.g., 2025
  month: "long", // e.g., May
  day: "numeric", // e.g., 15
};
console.log("Custom Format (en-US):", date.toLocaleString("en-US", options)); // Thursday, May 15, 2025

// Custom format with time zone
let optionsWithTimeZone = {
  weekday: "short",
  year: "2-digit",
  month: "short",
  day: "numeric",
  timeZone: "Asia/Kolkata",
};
console.log("Custom Format with Time Zone:", date.toLocaleString("en-US", optionsWithTimeZone)); // Thu, May 15, 25

// 8. String Interpolation for Custom Display
console.log("\n--- String Interpolation ---");
let formattedDate = `Today is ${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
console.log("Custom Display:", formattedDate); // e.g., Today is 15/5/2025

// 9. Practical Example: Comparing Dates
console.log("\n--- Comparing Dates ---");
let date1 = new Date("2023-01-01");
let date2 = new Date("2023-02-01");
let timestamp1 = date1.getTime();
let timestamp2 = date2.getTime();
if (timestamp1 < timestamp2) {
  console.log("Date1 is earlier than Date2");
} else {
  console.log("Date2 is earlier than Date1");
} // Output: Date1 is earlier than Date2

// 10. Note on Temporal API (Future Feature)
// Temporal API is a proposed feature to simplify date/time handling.
// Example (not yet available): Temporal.Now.instant()
// Not implemented as of 2023; use existing Date object for now.