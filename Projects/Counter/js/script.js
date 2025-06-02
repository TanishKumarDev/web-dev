// Key Concept: document.querySelectorAll()
// Select all buttons with any class for event handling
const buttons = document.querySelectorAll('button');

// Initialize counter value
let counter = 0;

// Key Concept: textContent
// Select the counter display element and set initial value
const counterValue = document.getElementById('counterValue');
counterValue.textContent = counter;

// Key Concept: forEach()
// Loop through each button to attach event listeners
buttons.forEach(button => {
    // Key Concept: addEventListener()
    // Add click event listener to each button
    button.addEventListener('click', function (event) {
        // Key Concept: currentTarget property
        // Get the clicked button element
        const clickedButton = event.currentTarget;

        // Key Concept: classList
        // Check the classList of the clicked button to determine action
        if (clickedButton.classList.contains('decrease')) {
            counter--;
        } else if (clickedButton.classList.contains('reset')) {
            counter = 0;
        } else if (clickedButton.classList.contains('increase')) {
            counter++;
        }

        // Update the displayed counter value
        counterValue.textContent = counter;
    });
});

// Thinking Process:
// 1. Objective: Build a counter app with buttons to increase, decrease, and reset a number.
// 2. Structure:
//    - HTML: A title, a div for the counter value, and three buttons (decrease, reset, increase).
//    - CSS: Center the content, style buttons with distinct colors, and add hover effects.
//    - JS: Track a counter variable, update it based on button clicks, and display the value.
// 3. Key Concepts Applied:
//    - document.querySelectorAll(): Select all buttons dynamically.
//    - forEach(): Iterate over the buttons to attach event listeners efficiently.
//    - addEventListener(): Listen for click events on each button.
//    - currentTarget property: Identify which button was clicked within the event handler.
//    - classList: Check the class of the clicked button to determine the action (increase, decrease, or reset).
//    - textContent: Update the displayed counter value dynamically.
// 4. Logic Flow:
//    - Initialize a counter variable to 0.
//    - Select all buttons using querySelectorAll and the display element with getElementById.
//    - Use forEach to loop through buttons and add a click event listener to each.
//    - On click, use currentTarget to get the clicked button, check its classList for the action.
//    - Update the counter: decrease (-1), reset (0), or increase (+1).
//    - Update the display with textContent to show the new counter value.
// 5. Styling: Use flexbox for centering, distinct button colors, and smooth hover transitions.
