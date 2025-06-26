// ==========================================
// 1. Inline HTML Event (NOT recommended)
// ==========================================
// Handled in HTML like: <button onclick="sayHi()">Click Me</button>
function sayHi() {
  alert("Hello Tanish!");
}

// ==========================================
// 2. Best Practice: addEventListener()
// ==========================================
const btn = document.getElementById("btn");
btn.addEventListener("click", () => {
  alert("Button clicked!");
});

// ==========================================
// 3. Arrow vs Normal Function in Events
// ==========================================
btn.addEventListener("click", function () {
  console.log("Normal function triggered");
});

btn.addEventListener("click", () => {
  console.log("Arrow function triggered");
});

// ==========================================
// 4. Accessing Event Object
// ==========================================
btn.addEventListener("click", function (event) {
  console.log("Event type:", event.type);       // click
  console.log("Clicked element:", event.target); // <button>
});

// ==========================================
// 5. Multiple Events on One Element
// ==========================================
const box = document.getElementById("box");

box.addEventListener("mouseover", () => {
  console.log("Mouse entered the box");
});
box.addEventListener("mouseout", () => {
  console.log("Mouse left the box");
});

// ==========================================
// 6. Keyboard Events
// ==========================================
document.addEventListener("keydown", (e) => {
  console.log("Key pressed:", e.key); // logs pressed key
});

// ==========================================
// 7. Form Submit Event
// ==========================================
const form = document.getElementById("loginForm");

form.addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent page reload
  console.log("Form submitted!");
});

// ==========================================
// 8. Input Change Event
// ==========================================
const input = document.querySelector("input");

input.addEventListener("change", () => {
  console.log("Input changed to:", input.value);
});

// ==========================================
// 9. Event Delegation Example
// ==========================================
const list = document.getElementById("list");

list.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    alert("Clicked item: " + e.target.textContent);
  }
});

// ==========================================
// 10. Remove Event Listener
// ==========================================
function greet() {
  alert("Hello Again!");
}
btn.addEventListener("click", greet);
// Later: remove
btn.removeEventListener("click", greet);

// ==========================================
// 11. Page Load Event
// ==========================================
window.addEventListener("load", () => {
  console.log("Page loaded completely");
});

// ==========================================
// 12. Scroll Event
// ==========================================
window.addEventListener("scroll", () => {
  console.log("User is scrolling the page");
});

// ==========================================
// Bonus: Custom Event
// ==========================================
const myEvent = new Event("customTanishEvent");

document.addEventListener("customTanishEvent", () => {
  console.log("🔥 Custom Event Triggered!");
});

// Trigger it:
document.dispatchEvent(myEvent);
