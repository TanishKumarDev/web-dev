
//  1. Predefined Color List
const colors = [
  "#FF5733",       // Bright Orange
  "#33FF57",       // Neon Green
  "#3357FF",       // Bright Blue
  "#F1C40F",       // Yellow
  "#8E44AD",       // Purple
  "#2ECC71",       // Mint Green
  "#3498DB",       // Sky Blue
  "#FF33A6",       // Pink
  "#FF8C00",       // Dark Orange
  "teal",          // Named Color
  "tomato",        // Named Color
  "rebeccapurple", // Named Color
];


//  2. Get DOM Elements
const flipBtn = document.getElementById("flipBtn");       // Button to trigger color change
const colorCode = document.getElementById("colorCode");   // Element to display current color code


// ==========================
//  3. Load Color from LocalStorage on Page Load
// ==========================
window.addEventListener("DOMContentLoaded", () => {
  const savedColor = localStorage.getItem("bgColor"); // Retrieve previously saved color (if any)

  if (savedColor) {
    document.body.style.backgroundColor = savedColor; // Set background
    colorCode.textContent = savedColor;               // Show saved color in text
  }
});


//  4. Handle Button Click: Change Color
flipBtn.addEventListener("click", () => {
  // Step 1: Generate a random index based on color array length
  const randomIndex = Math.floor(Math.random() * colors.length);

  // Step 2: Get color at that index
  const selectedColr = colors[randomIndex];

  // Step 3: Apply color to background
  document.body.style.backgroundColor = selectedColr;

  // Step 4: Show color code in UI
  colorCode.textContent = selectedColr;

  // Step 5: Save the selected color in localStorage
  localStorage.setItem("bgColor", selectedColr);
});
