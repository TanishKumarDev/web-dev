// Step 1: Select all required elements from the DOM
const colorBox = document.getElementById("colorBox");  // The square box
const colorCode = document.getElementById("colorCode"); // The text showing HEX value
const generateBtn = document.getElementById("generateBtn"); // The button

// Step 2: Add click event listener to the button
generateBtn.addEventListener("click", () => {

  // Step 3: Generate a random color in HEX format
  // Math.random() gives a random number between 0 and 1
  // Multiply by 16777215 (which is FFFFFF in decimal)
  // Convert to HEX string using toString(16)
  let randomColor = Math.floor(Math.random() * 16777215).toString(16);

  // Step 4: Ensure the color has 6 digits by padding (in case of short HEX)
  randomColor = "#" + randomColor.padStart(6, "0");

  // Step 5: Apply the generated color to the color box
  colorBox.style.backgroundColor = randomColor;

  // Step 6: Update the color code text
  colorCode.textContent = randomColor;

  // Step 7: Log to console (for debugging / learning)
  console.log("Generated Color:", randomColor);
});
