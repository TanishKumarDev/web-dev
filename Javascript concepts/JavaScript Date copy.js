// -----------------------------------------------------------------------------
// ✅ JavaScript Date - Complete Guide
// -----------------------------------------------------------------------------

// JavaScript Date objects represent a moment in time (milliseconds since Unix Epoch: Jan 1, 1970, 00:00:00 UTC).
// This cheat sheet covers creation, formatting, manipulation, validation, comparisons, and interview tips.
// Note: Outputs assume current date is July 18, 2025, 10:48 AM IST.

// -----------------------------
// 1. Creating JavaScript Date Objects
// -----------------------------

// Current date and time
const now = new Date();
console.log("Now:", now.toString()); // Output: Fri Jul 18 2025 10:48:00 GMT+0530 (India Standard Time)

// From ISO string (recommended format)
const dateFromString = new Date("2024-12-31");
console.log("Date from String:", dateFromString.toDateString()); // Output: Tue Dec 31 2024

// From components (year, month (0-based), day, hours, minutes, seconds, milliseconds)
const dateFromComponents = new Date(2025, 5, 25); // June 25, 2025
console.log("Date from Components:", dateFromComponents.toDateString()); // Output: Wed Jun 25 2025

const dateWithTime = new Date(2025, 5, 25, 14, 30, 0); // June 25, 2025, 14:30:00
console.log("Date with Time:", dateWithTime.toString()); // Output: Wed Jun 25 2025 14:30:00 GMT+0530 (India Standard Time)

// From milliseconds since Unix Epoch
const epochDate = new Date(0);
console.log("Epoch:", epochDate.toUTCString()); // Output: Thu Jan 01 1970 00:00:00 GMT+0000 (UTC)

// Pitfall: Invalid date strings return `Invalid Date`
const invalidDate = new Date("invalid");
console.log("Invalid Date:", invalidDate.toString()); // Output: Invalid Date

// Pitfall: Months are 0-based (0 = January, 11 = December)
const wrongMonth = new Date(2025, 12, 1); // Becomes Jan 1, 2026
console.log("Wrong Month:", wrongMonth.toDateString()); // Output: Thu Jan 01 2026

// -----------------------------
// 2. Date Constructor Property
// -----------------------------

// `constructor` property points to the Date function
const date = new Date();
console.log("Constructor Check:", date.constructor === Date); // Output: true

// Use case: Verify object type in inheritance
class CustomDate extends Date {}
const customDate = new CustomDate();
console.log("Custom Constructor:", customDate.constructor === CustomDate); // Output: true

// Pitfall: Avoid modifying `Date.prototype.constructor` to prevent unexpected behavior

// -----------------------------
// 3. Date.now() Method
// -----------------------------

// Returns current timestamp in milliseconds since Unix Epoch
const timestamp = Date.now();
console.log("Current Timestamp:", timestamp); // Output: ~1755496080000 (Jul 18, 2025, 10:48 AM IST)

// Use case: Measure operation time
const start = Date.now();
const end = Date.now();
console.log("Operation Time:", `${end - start} ms`); // Output: Operation Time: 0 ms

// Pitfall: Relies on system clock, which may be inaccurate if misconfigured

// -----------------------------
// 4. Date.parse() Method
// -----------------------------

// Parses date string to milliseconds since Unix Epoch
const parsed = Date.parse("2025-07-18");
console.log("Parsed Date:", parsed); // Output: 1755494400000 (Jul 18, 2025, 00:00:00 UTC)

// Parse ISO string with time
const parsedWithTime = Date.parse("2025-07-18T10:30:00Z");
console.log("Parsed with Time:", parsedWithTime); // Output: 1755510600000 (Jul 18, 2025, 10:30:00 UTC)

// Create Date from parsed value
const parsedDate = new Date(Date.parse("2025-07-18"));
console.log("Date from Parsed:", parsedDate.toDateString()); // Output: Fri Jul 18 2025

// Pitfall: Invalid strings return `NaN`
console.log("Invalid Parse:", Date.parse("invalid")); // Output: NaN

// Pitfall: Non-ISO formats (e.g., "07/18/2025") may fail in some browsers
console.log("Non-ISO Parse:", Date.parse("07/18/2025")); // Output: Varies by browser

// -----------------------------
// 5. Date.UTC() Method
// -----------------------------

// Returns milliseconds for a UTC date
const utcDate = Date.UTC(2025, 6, 18); // July 18, 2025, 00:00:00 UTC
console.log("UTC Timestamp:", utcDate); // Output: 1755494400000

// With time
const utcDateWithTime = Date.UTC(2025, 6, 18, 10, 30, 0);
console.log("UTC with Time:", utcDateWithTime); // Output: 1755510600000

// Create Date from UTC
const dateFromUTC = new Date(Date.UTC(2025, 6, 18));
console.log("Date from UTC:", dateFromUTC.toUTCString()); // Output: Fri, 18 Jul 2025 00:00:00 GMT

// Pitfall: Months are 0-based
console.log("Wrong UTC Month:", Date.UTC(2025, 12, 1)); // Output: 1767225600000 (Jan 1, 2026)

// Pitfall: Invalid inputs return `NaN`
console.log("Invalid UTC:", Date.UTC(2025, 13, 1)); // Output: NaN

// -----------------------------
// 6. getDate() Method
// -----------------------------

// Returns day of the month (1–31) in local time
const dateForGet = new Date("2025-07-18");
console.log("Day of Month:", dateForGet.getDate()); // Output: 18

// Use case: Extract day for display
const today = new Date();
console.log("Today's Date:", today.getDate()); // Output: 18 (Jul 18, 2025)

// Pitfall: Returns `NaN` for invalid dates
console.log("Invalid getDate:", new Date("invalid").getDate()); // Output: NaN

// -----------------------------
// 7. getDay() Method
// -----------------------------

// Returns day of the week (0–6, 0 = Sunday) in local time
const dateForDay = new Date("2025-07-18");
console.log("Day of Week:", dateForDay.getDay()); // Output: 4 (Friday, Jul 18, 2025)

// Use case: Display weekday
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
console.log("Weekday:", days[dateForDay.getDay()]); // Output: Friday

// Pitfall: Returns `NaN` for invalid dates
console.log("Invalid getDay:", new Date("invalid").getDay()); // Output: NaN

// -----------------------------
// 8. Check if Date is Today
// -----------------------------

// Function to check if a date is today (same year, month, day)
function isToday(date) {
    if (!(date instanceof Date) || isNaN(date.getTime())) return false;
    const today = new Date();
    return (
        date.getFullYear() === today.getFullYear() &&
        date.getMonth() === today.getMonth() &&
        date.getDate() === today.getDate()
    );
}

console.log("Is Today (2025-07-18):", isToday(new Date("2025-07-18"))); // Output: true
console.log("Is Today (2025-07-19):", isToday(new Date("2025-07-19"))); // Output: false

// Pitfall: Ignores time; only compares year, month, day
console.log("Is Today with Time:", isToday(new Date("2025-07-18T23:59:59"))); // Output: true

// Pitfall: Invalid dates return false
console.log("Is Today Invalid:", isToday(new Date("invalid"))); // Output: false

// -----------------------------
// 9. Check if Date is Between Two Dates
// -----------------------------

// Function to check if a date is between two dates (inclusive)
function isBetween(date, start, end) {
    if (!(date instanceof Date) || isNaN(date.getTime())) return false;
    if (!(start instanceof Date) || isNaN(start.getTime())) return false;
    if (!(end instanceof Date) || isNaN(end.getTime())) return false;
    return date.getTime() >= start.getTime() && date.getTime() <= end.getTime();
}

const targetDate = new Date("2025-07-18");
const startDate = new Date("2025-07-01");
const endDate = new Date("2025-07-31");
console.log("Is Between:", isBetween(targetDate, startDate, endDate)); // Output: true

// Exclusive range
function isBetweenExclusive(date, start, end) {
    return date.getTime() > start.getTime() && date.getTime() < end.getTime();
}
console.log("Is Between Exclusive:", isBetweenExclusive(targetDate, startDate, endDate)); // Output: true
console.log("Boundary Check:", isBetweenExclusive(new Date("2025-07-01"), startDate, endDate)); // Output: false

// Pitfall: Invalid dates cause issues
console.log("Invalid Range Check:", isBetween(new Date("invalid"), startDate, endDate)); // Output: false

// -----------------------------
// 10. Date Formats
// -----------------------------

// Formatting methods for readable output
const sampleDate = new Date("2025-06-25T15:30:00Z");
console.log("toString():", sampleDate.toString()); // Output: Wed Jun 25 2025 21:00:00 GMT+0530 (India Standard Time)
console.log("toDateString():", sampleDate.toDateString()); // Output: Wed Jun 25 2025
console.log("toTimeString():", sampleDate.toTimeString()); // Output: 21:00:00 GMT+0530 (India Standard Time)
console.log("toISOString():", sampleDate.toISOString()); // Output: 2025-06-25T15:30:00.000Z
console.log("toUTCString():", sampleDate.toUTCString()); // Output: Wed, 25 Jun 2025 15:30:00 GMT
console.log("toLocaleString():", sampleDate.toLocaleString()); // Output: 6/25/2025, 9:00:00 PM (locale-dependent)
console.log("toLocaleDateString():", sampleDate.toLocaleDateString()); // Output: 6/25/2025
console.log("toLocaleTimeString():", sampleDate.toLocaleTimeString()); // Output: 9:00:00 PM

// Pitfall: `toISOString()` converts to UTC, shifting time
// Example: 15:30:00Z (UTC) becomes 21:00:00 IST (GMT+0530)

// -----------------------------
// 11. Date get Methods – Extract Parts of Date
// -----------------------------

// Additional getter methods for local time
const d = new Date("2025-06-25T14:45:30");
console.log("Full Year:", d.getFullYear()); // Output: 2025
console.log("Month (0-11):", d.getMonth()); // Output: 5 (June)
console.log("Date:", d.getDate()); // Output: 25
console.log("Day of Week (0-6):", d.getDay()); // Output: 3 (Wednesday)
console.log("Hours:", d.getHours()); // Output: 14
console.log("Minutes:", d.getMinutes()); // Output: 45
console.log("Seconds:", d.getSeconds()); // Output: 30
console.log("Milliseconds:", d.getMilliseconds()); // Output: 0
console.log("Time since Epoch:", d.getTime()); // Output: ~1753610730000

// UTC getters
console.log("UTC Full Year:", d.getUTCFullYear()); // Output: 2025
console.log("UTC Date:", d.getUTCDate()); // Output: 25

// Pitfall: Local time methods depend on system time zone

// -----------------------------
// 12. Date set Methods – Modify Parts of Date
// -----------------------------

// Modify Date object (mutates instance)
let changeDate = new Date();
changeDate.setFullYear(2030);
changeDate.setMonth(0); // January
changeDate.setDate(1); // 1st
changeDate.setHours(9);
changeDate.setMinutes(15);
changeDate.setSeconds(0);
console.log("Modified Date:", changeDate.toString()); // Output: Wed Jan 01 2030 09:15:00 GMT+0530 (India Standard Time)

// Pitfall: Overflow auto-adjusts
changeDate.setMonth(12); // Moves to Jan next year
console.log("Overflow Month:", changeDate.toDateString()); // Output: Thu Jan 01 2031

// Pitfall: Invalid values make date invalid
changeDate.setFullYear(NaN);
console.log("Invalid Set:", changeDate.toString()); // Output: Invalid Date

// -----------------------------
// 13. Custom Date Formatting
// -----------------------------

// Custom function to format date as YYYY-MM-DD HH:MM
function formatCustomDate(dateObj) {
    const yyyy = dateObj.getFullYear();
    const mm = String(dateObj.getMonth() + 1).padStart(2, '0'); // Add 1 for 1-based month
    const dd = String(dateObj.getDate()).padStart(2, '0');
    const hh = String(dateObj.getHours()).padStart(2, '0');
    const min = String(dateObj.getMinutes()).padStart(2, '0');
    return `${yyyy}-${mm}-${dd} ${hh}:${min}`;
}

console.log("Formatted:", formatCustomDate(new Date())); // Output: 2025-07-18 10:48

// Pitfall: Ensure date is valid before formatting
console.log("Invalid Format:", formatCustomDate(new Date("invalid"))); // Output: Invalid-NaN-NaN NaN:NaN

// -----------------------------
// 14. Date Validation
// -----------------------------

// Check if Date is valid
function isValidDate(date) {
    return date instanceof Date && !isNaN(date.getTime());
}

console.log("Valid Date:", isValidDate(new Date())); // Output: true
console.log("Invalid Date:", isValidDate(new Date("invalid"))); // Output: false

// Pitfall: Invalid dates return `NaN` for `getTime()`
console.log("Invalid getTime:", new Date("invalid").getTime()); // Output: NaN

// -----------------------------
// 15. Comparing Dates
// -----------------------------

// Compare dates using timestamps
const date1 = new Date("2025-07-18");
const date2 = new Date("2025-07-19");
console.log("Compare Dates:", date1.getTime() < date2.getTime()); // Output: true

// Component-wise comparison
console.log("Same Date:", 
    date1.getFullYear() === date2.getFullYear() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getDate() === date2.getDate()
); // Output: false

// Pitfall: Direct comparison checks object references
console.log("Reference Check:", new Date("2025-07-18") === new Date("2025-07-18")); // Output: false

// -----------------------------
// 16. Date Arithmetic
// -----------------------------

// Add/subtract time units
const dateForArithmetic = new Date("2025-07-18");
dateForArithmetic.setDate(dateForArithmetic.getDate() + 5);
console.log("Add 5 Days:", dateForArithmetic.toDateString()); // Output: Wed Jul 23 2025

dateForArithmetic.setMonth(dateForArithmetic.getMonth() - 1);
console.log("Subtract 1 Month:", dateForArithmetic.toDateString()); // Output: Mon Jun 23 2025

// Add hours using milliseconds
dateForArithmetic.setTime(dateForArithmetic.getTime() + 2 * 60 * 60 * 1000); // +2 hours
console.log("Add 2 Hours:", dateForArithmetic.toTimeString().split(" ")[0]); // Output: 02:00:00

// Pitfall: Overflow auto-adjusts
dateForArithmetic.setDate(32); // Moves to next month
console.log("Overflow Date:", dateForArithmetic.toDateString()); // Output: Sat Aug 01 2025

// -----------------------------
// 17. Nested Date Operations
// -----------------------------

// Example: Array of objects with dates
const events = [
    { name: "Meeting", date: new Date("2025-07-18") },
    { name: "Conference", date: new Date("2025-07-20") }
];

// Filter events in July 2025
const julyEvents = events.filter(event => event.date.getMonth() === 6);
console.log("July Events:", julyEvents.map(event => event.name)); // Output: ["Meeting", "Conference"]

// Pitfall: Validate dates in nested structures
const invalidEvent = { name: "Invalid", date: new Date("invalid") };
console.log("Invalid Event:", isValidDate(invalidEvent.date)); // Output: false

// -----------------------------
// 18. Quiz / Pitfalls
// -----------------------------

// Quiz 1: Predict the output
const quiz1 = new Date("2025-07-18");
console.log("Quiz 1 Month:", quiz1.getMonth()); // Output: 6 (July, 0-based)

// Quiz 2: Predict the output
const quiz2 = new Date("2025-07-18");
quiz2.setDate(32);
console.log("Quiz 2 Overflow:", quiz2.toDateString()); // Output: Fri Aug 01 2025

// Quiz 3: Predict the output
console.log("Quiz 3 Parse vs UTC:", Date.parse("2025-07-18") === Date.UTC(2025, 6, 18)); // Output: true

// Quiz 4: Predict the output
const quiz4 = new Date();
console.log("Quiz 4 Is Today:", isToday(quiz4)); // Output: true

// Common pitfalls:
// 1. 0-based months in constructors and getters
// 2. Invalid dates return `Invalid Date` or `NaN`
// 3. Time zone differences between local and UTC methods
// 4. Non-ISO string parsing varies by browser
// 5. Setter methods mutate the Date object
// 6. Direct Date object comparison checks references, not values

// -----------------------------
// 19. Summary & Interview Tips
// -----------------------------

/**
 * ➤ Use `new Date()` for creation (current, string, components, milliseconds)
 * ➤ Use `Date.now()` for quick timestamps
 * ➤ Use `Date.parse()` and `Date.UTC()` for string and UTC conversions
 * ➤ Use `getFullYear()`, `getMonth()`, `getDate()`, `getDay()`, etc., to extract parts
 * ➤ Use `setFullYear()`, `setMonth()`, `setDate()`, etc., to modify dates
 * ➤ Use `toISOString()`, `toLocaleDateString()`, etc., for formatting
 * ➤ Validate dates with `isNaN(date.getTime())`
 * ➤ Handle time zones explicitly (local vs. UTC)
 * ➤ Months are 0-indexed (0 = Jan, 11 = Dec)
 * ➤ Write reusable functions (e.g., isToday, isBetween, formatCustomDate)
 * ➤ Be ready to explain overflow, invalid dates, and time zone issues
 */