
// 📌 1. Get all the elements from DOM
const billInput = document.querySelector('#billAmount');
const tipInput = document.querySelector('#tipPercentage');
const calculateBtn = document.querySelector('#calculateBtn');
const tipOutput = document.querySelector('#tipAmount');
const totalOutput = document.querySelector('#totalAmount');
const errorBox = document.querySelector('#error');
const resetBtn = document.querySelector('#resetBtn');

// 📌 Load saved data from localStorage on page load
window.addEventListener('DOMContentLoaded', () => {
  const savedBill = localStorage.getItem('bill');
  const savedTip = localStorage.getItem('tip');

  if (savedBill && savedTip) {
    billInput.value = savedBill;
    tipInput.value = savedTip;
    calculate(); // Auto calculate with saved values
  }
});

// 📌 2. Add Event Listener to Button
calculateBtn.addEventListener('click', () => {
  // STEP 1: Read and convert values
  const billValue = Number(billInput.value);
  const tipValue = Number(tipInput.value);

  // STEP 2: Validate
  if (billValue <= 0 || tipValue < 0 || isNaN(billValue) || isNaN(tipValue)) {
    errorBox.textContent = '⚠️ Please enter valid positive numbers!';
    tipOutput.textContent = 'Tip: ₹0.00';
    totalOutput.textContent = 'Total: ₹0.00';
    return;
  }

  // STEP 3: Clear error if valid
  errorBox.textContent = '';

   // Save to localStorage
  localStorage.setItem('bill', billValue);
  localStorage.setItem('tip', tipValue);

  // STEP 4: Calculate
  const tipAmount = billValue * (tipValue / 100);
  const totalAmount = billValue + tipAmount;

  // STEP 5: Show result - always format numbers to 2 decimal places
  tipOutput.textContent = `Tip: ₹${tipAmount.toFixed(2)}`;
  totalOutput.textContent = `Total: ₹${totalAmount.toFixed(2)}`;
});

// 📌 3. Add Reset Button Functionality
resetBtn.addEventListener('click', () => {
  // Clear input fields
  billInput.value = '';
  tipInput.value = '';

  // Clear result outputs
  tipOutput.textContent = 'Tip: ₹0.00';
  totalOutput.textContent = 'Total: ₹0.00';

  // Clear error message if any
  errorBox.textContent = '';

  // Remove stored values from localStorage
  localStorage.removeItem('bill');
  localStorage.removeItem('tip');
});
