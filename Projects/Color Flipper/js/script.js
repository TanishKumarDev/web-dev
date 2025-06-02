// Key Concept: Arrays
// An array to store a list of colors (hex codes and named colors)
const colors = [
    '#FF0000', // Red
    '#00FF00', // Green
    '#0000FF', // Blue
    '#FFFF00', // Yellow
    '#FF00FF', // Magenta
    '#00FFFF', // Cyan
    '#FFA500', // Orange
    '#800080', // Purple
    '#008000', // Dark Green
    '#FFC0CB'  // Pink
];

// Key Concept: document.getElementById()
// Select the button and color display elements by their IDs
const flipButton = document.getElementById('flipButton');
const colorDisplay = document.getElementById('colorDisplay');

// Reusable function to change color
function changeColor() {
    const randomIndex = Math.floor(Math.random() * colors.length);
    const randomColor = colors[randomIndex];
    document.body.style.backgroundColor = randomColor;
    colorDisplay.textContent = `Current color: ${randomColor}`;
    // Store the current color in localStorage
    localStorage.setItem('currentColor', randomColor);
}

// Function to restore the last color on page load
function restoreLastColor() {
    const savedColor = localStorage.getItem('currentColor');
    if (savedColor) {
        document.body.style.backgroundColor = savedColor;
        colorDisplay.textContent = `Current color: ${savedColor}`;
    } else {
        // If no saved color exists, generate a new one
        changeColor();
    }
}

// Manual change on button click
flipButton.addEventListener('click', changeColor);

// Restore the last color when the page loads
restoreLastColor();

// Auto change every 3 seconds (3000 ms)
setInterval(changeColor, 3000);

// Thinking Process:
// 1. Objective: Create a simple app that changes the background color randomly when a button is clicked.
// 2. Structure:
//    - HTML: A title, a div to display the current color, and a button to trigger the change.
//    - CSS: Center the content, style the button, and add a smooth transition for the background color.
//    - JS: Use an array of colors, pick a random one, and apply it to the background.
// 3. Key Concepts Applied:
//    - arrays: Store multiple color values.
//    - document.getElementById(): Access the button and display elements.
//    - document.querySelector(): Could be used as an alternative to select elements (not used here for simplicity).
//    - addEventListener(): Listen for button clicks to trigger the color flip.
//    - document.body.style.backgroundColor: Dynamically change the background color.
//    - Math.random(): Generate a random number between 0 and 1.
//    - Math.floor(): Convert the random number to an integer for array indexing.
//    - array.length: Get the size of the colors array to ensure valid random indices.
// 4. Logic Flow:
//    - Define an array of colors (mix of named colors and hex codes).
//    - Select the button and display elements.
//    - On button click, generate a random index using Math.random() and Math.floor().
//    - Use the random index to pick a color from the array.
//    - Apply the color to the background and update the display text.
// 5. Styling: Use CSS for a clean, centered layout and a smooth color transition.
