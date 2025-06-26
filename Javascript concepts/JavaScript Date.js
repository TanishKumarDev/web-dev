// -----------------------------------------------------------------------------
// ✅ JavaScript Date - Complete Guide
// -----------------------------------------------------------------------------

// -----------------------------
// 1. Creating JavaScript Date Objects
// -----------------------------

const now = new Date();                  // Current date & time
const date1 = new Date("2024-12-31");    // ISO format
const date2 = new Date(2025, 5, 25);     // Year, Month (0-based), Day
const date3 = new Date(2025, 5, 25, 14, 30, 0); // Year, Month, Day, Hour, Min, Sec
const dateFromTimestamp = new Date(0);   // Epoch (1970-01-01)

console.log("Now:", now);
console.log("Date1:", date1);
console.log("Date2:", date2);
console.log("Date3:", date3);
console.log("Epoch:", dateFromTimestamp);


// -----------------------------
// 2. JavaScript Date Formats
// -----------------------------

const sampleDate = new Date("2025-06-25T15:30:00Z");

console.log("toString():", sampleDate.toString());       // Full readable format
console.log("toDateString():", sampleDate.toDateString()); // Only date
console.log("toTimeString():", sampleDate.toTimeString()); // Only time
console.log("toISOString():", sampleDate.toISOString());   // ISO format
console.log("toUTCString():", sampleDate.toUTCString());   // UTC format
console.log("toLocaleString():", sampleDate.toLocaleString()); // Locale date & time
console.log("toLocaleDateString():", sampleDate.toLocaleDateString()); // Only date
console.log("toLocaleTimeString():", sampleDate.toLocaleTimeString()); // Only time


// -----------------------------
// 3. Date `get` Methods – Extract Parts of Date
// -----------------------------

const d = new Date("2025-06-25T14:45:30");

console.log("Full Year:", d.getFullYear());     // 2025
console.log("Month (0-11):", d.getMonth());     // 5 (June)
console.log("Date:", d.getDate());              // 25
console.log("Day of Week (0-6):", d.getDay());  // 3 (Wednesday)
console.log("Hours:", d.getHours());            // 14
console.log("Minutes:", d.getMinutes());        // 45
console.log("Seconds:", d.getSeconds());        // 30
console.log("Milliseconds:", d.getMilliseconds()); // 0
console.log("Time since Epoch:", d.getTime());  // in milliseconds


// -----------------------------
// 4. Date `set` Methods – Modify Parts of Date
// -----------------------------

let changeDate = new Date(); // current

changeDate.setFullYear(2030);
changeDate.setMonth(0);        // Jan
changeDate.setDate(1);         // 1st
changeDate.setHours(9);
changeDate.setMinutes(15);
changeDate.setSeconds(0);

console.log("Modified Date:", changeDate);


// -----------------------------
// 5. Bonus: Custom Date Formatting
// -----------------------------

function formatCustomDate(dateObj) {
  const yyyy = dateObj.getFullYear();
  const mm = String(dateObj.getMonth() + 1).padStart(2, '0');
  const dd = String(dateObj.getDate()).padStart(2, '0');
  const hh = String(dateObj.getHours()).padStart(2, '0');
  const min = String(dateObj.getMinutes()).padStart(2, '0');

  return `${yyyy}-${mm}-${dd} ${hh}:${min}`;
}

console.log("Formatted:", formatCustomDate(new Date()));


// -----------------------------
// ✅ Summary
// -----------------------------

/**
 * ➤ Use `new Date()` to create dates
 * ➤ Use `.toISOString()`, `.toLocaleDateString()`, etc., for formatting
 * ➤ Use `getFullYear()`, `getMonth()`, etc., to extract parts
 * ➤ Use `setFullYear()`, `setDate()`, etc., to modify
 * ➤ Months are 0-indexed (0 = Jan, 11 = Dec)
 */
