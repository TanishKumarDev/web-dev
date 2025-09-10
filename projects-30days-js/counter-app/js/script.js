const counterDisplay = document.getElementById("counter");
const incrementBtn = document.getElementById("increment");
const decrementBtn = document.getElementById("decrement");
const resetBtn = document.getElementById("reset");
const count = document.getElementById("count");
const message = document.getElementById("message");

let counter = Number(localStorage.getItem("counterValue")) || 0;

function updateCounter() {
  count.textContent = counter;
  localStorage.setItem("counterValue", counter);

  if (counter > 18) {
    message.textContent = "You are an adult!";
  } else {
    message.textContent = ""; // Clear if not
  }
}
incrementBtn.addEventListener("click", () => {
  counter++;
  updateCounter();
});
decrementBtn.addEventListener("click", () => {
  counter--;
  updateCounter();
});
resetBtn.addEventListener("click", () => {
  counter = 0;
  localStorage.removeItem("counterValue");
  updateCounter();
});

// Load saved value on page refresh
updateCounter();
