// =============================================
// 1. WHAT IS JAVASCRIPT?
// =============================================

/*
 * JavaScript (JS) is a high-level, interpreted programming language primarily used to add interactivity and logic to web pages.
 * It is one of the core technologies of the web, alongside HTML and CSS.
 * 
 * ============================
 * 1. What is JavaScript?
 * ============================
 * 
 * - JavaScript is a **dynamically typed**, **prototype-based**, **multi-paradigm** language.
 * - It runs on the **client-side** (browser) and **server-side** (Node.js).
 * - Originally designed for simple web scripting, it now powers full-scale applications.
 * - JS engines (like V8 in Chrome) interpret and execute code directly in the browser.
 *
 * ============================
 * 2. Key Characteristics
 * ============================
 * - **Dynamically Typed**: Variables are not bound to a specific type. Type is determined at runtime.
 *     let x = 5;       // x is a number
 *     x = "Hello";     // now x is a string
 *
 * - **Interpreted Language**: JS runs line-by-line in real-time, without pre-compilation.
 *
 * - **Single-threaded & Event-driven**: Uses a **call stack** and **event loop** to handle async tasks efficiently.
 *
 * - **Prototype-based OOP**: Unlike classical OOP (Java/C++), JavaScript uses **prototypes** for inheritance.
 *
 * - **First-class functions**: Functions can be assigned to variables, passed as arguments, and returned from other functions.
 *
 * - **Runs in Browsers**: No setup needed — every modern browser has a built-in JavaScript engine.
 * 
 * ============================
 * 3. Common Uses of JavaScript
 * ============================
 * - DOM Manipulation: Dynamically update content, styles, and structure.
 * - Event Handling: Respond to user actions like clicks, input, form submission.
 * - AJAX & Fetch: Load data from servers without reloading the page.
 * - Form Validation: Check user input before submitting.
 * - Frontend Frameworks: React, Angular, Vue, etc.
 * - Backend: Express.js (Node.js), API development.
 * - Storage: LocalStorage, SessionStorage, Cookies.
 */

function showDateTime() {
    let currentDate = new Date(); // Creates a Date object
    let dateString = `Current Date and Time: ${currentDate}`; // String with template literal
    console.log(dateString); // Outputs current date/time, e.g., Current Date and Time: Sun Jun 08 2025 12:57:00 GMT+0530
    return dateString; // Return for potential DOM use
  }
  
  console.log("Calling showDateTime():");
  showDateTime();
  
  // Browser Example (commented out for non-DOM environment):
  /*
  document.getElementById("demo").innerHTML = showDateTime();
  */
  
  // =============================================
  // 2. WHY STUDY JAVASCRIPT?
  // =============================================
  
  /*
   * JavaScript is one of three core web technologies:
   * - HTML: Defines content (e.g., text, images)
   * - CSS: Specifies layout and styling
   * - JavaScript: Programs behavior (e.g., interactivity, dynamic updates)
   * 
   * It's essential for web developers to create dynamic, user-friendly websites.
   * Strings are frequently used in JavaScript for text manipulation, such as displaying
   * user input or updating DOM content.
   * 
   * Example: Create a simple greeting using strings and JavaScript.
   */
  
  let userName = "Alice"; // String data type
  let greeting = "Welcome, " + userName + "!"; // String concatenation
  console.log(greeting); // Welcome, Alice!
  
  // Using template literals (modern, ES6)
  let modernGreeting = `Welcome, ${userName}! Learn JavaScript!`;
  console.log(modernGreeting); // Welcome, Alice! Learn JavaScript!
  
  // =============================================
  // 3. LEARNING APPROACH
  // =============================================
  
  /*
   * The W3Schools tutorial emphasizes learning through:
   * - Examples: Clarify concepts better than text alone
   * - "Try it Yourself" Editor: Edit and run code to see results
   * - Exercises and Quizzes: Test knowledge (e.g., variable syntax question)
   * - Sequential Learning: Follow the menu for structured progress
   * 
   * Example: Demonstrate variable assignment (from tutorial exercise).
   * Question: What is the correct syntax for assigning a value to a variable?
   * Options: x : 5, x = 5, x == 5, x -> 5
   * Correct Answer: x = 5
   */
  
  let x = 5; // Correct assignment syntax
  console.log("Correct variable assignment: x =", x); // x = 5
  
  // Incorrect syntax examples (commented to avoid errors):
  // let x : 5; // Invalid, colon not used for assignment
  // let x == 5; // Comparison, not assignment
  // let x -> 5; // Invalid syntax in JavaScript
  
  // String-related variable example
  let site = "W3Schools";
  console.log("String variable:", site); // W3Schools
  
  // =============================================
  // 4. PRACTICAL ASPECTS
  // =============================================
  
  /*
   * - Availability: JavaScript is built into all modern browsers (computers, tablets, smartphones).
   * - Free to Use: No download or licensing required.
   * - Certifications: W3Schools offers a JavaScript certificate to validate skills.
   * - Progress Tracking: Free W3Schools account to track tutorials, exercises, and goals.
   * - References: Comprehensive JavaScript reference for properties, methods, and events.
   * 
   * Example: Simulate a browser-based interaction using strings.
   */
  
  function displayMessage(message) {
    let formattedMessage = message.toUpperCase(); // String method
    console.log("Formatted message:", formattedMessage);
    // In a browser, this could update the DOM:
    // document.getElementById("demo").innerHTML = formattedMessage;
  }
  
  displayMessage("learn javascript"); // Formatted message: LEARN JAVASCRIPT
  
  // =============================================
  // 5. CONNECTION TO STRINGS
  // =============================================
  
  /*
   * Strings are a core JavaScript data type, used extensively in web development:
   * - Displaying text (e.g., user greetings, alerts)
   * - Manipulating user input (e.g., trimming, formatting)
   * - Updating DOM content (e.g., innerHTML)
   * - Concatenation and template literals for dynamic text
   * 
   * Example: Combine strings with event simulation to mimic tutorial interactivity.
   */
  
  function simulateClickEvent(message) {
    let eventMessage = `Button clicked! Displaying: ${message}`; // String with template literal
    console.log(eventMessage);
    return eventMessage;
  }
  
  simulateClickEvent("My First JavaScript"); // Button clicked! Displaying: My First JavaScript
  
  // Example with string methods
  let input = "  JavaScript Tutorial  ";
  let trimmed = input.trim();
  let upper = trimmed.toUpperCase();
  console.log("Processed input:", upper); // JAVASCRIPT TUTORIAL
  
  // =============================================
  // 6. EXERCISE EXAMPLE
  // =============================================
  
  /*
   * Tutorial exercise: Assigning a value to a variable.
   * Correct syntax: x = 5
   * Demonstrate with a string-related example.
   */
  
  let answer = "JavaScript";
  console.log("Assigned string:", answer); // JavaScript
  
  // Incorrect usage for comparison
  let wrongComparison = answer == "JavaScript"; // Comparison, not assignment
  console.log("Comparison (==):", wrongComparison); // true (but not an assignment)
  
  // =============================================
  // 7. PRACTICAL DEMO: STRING IN INTERACTIVE CONTEXT
  // =============================================
  
  /*
   * Simulate a "Try it Yourself" example with strings and a mock event.
   * Combines string manipulation with a basic event-like interaction.
   */
  
  function tryItYourself(input) {
    let result = `You entered: ${input.trim().toLowerCase()}`; // Process input string
    console.log(result);
    return result;
  }
  
  tryItYourself("  Learn JavaScript  "); // You entered: learn javascript