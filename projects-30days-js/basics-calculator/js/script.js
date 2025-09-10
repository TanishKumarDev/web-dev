// script.js
// Select DOM elements
const calculator = document.getElementById('calculator');
const display = document.getElementById('display');

// State variables
let currentInput = '0';
let previousInput = '';
let operator = null;

// Update display
function updateDisplay() {
  display.textContent = currentInput;
}

// Handle calculations
function calculate() {
  const num1 = parseFloat(previousInput);
  const num2 = parseFloat(currentInput);
  if (isNaN(num1) || isNaN(num2)) return;

  let result;
  switch (operator) {
    case 'add':
      result = num1 + num2;
      break;
    case 'subtract':
      result = num1 - num2;
      break;
    case 'multiply':
      result = num1 * num2;
      break;
    case 'divide':
      if (num2 === 0) {
        currentInput = 'Error';
        updateDisplay();
        return;
      }
      result = num1 / num2;
      break;
    default:
      return;
  }
  currentInput = result.toString();
  previousInput = '';
  operator = null;
  updateDisplay();
}

// Handle button clicks using delegation
calculator.addEventListener('click', (event) => {
  const target = event.target;
  if (!target.matches('button')) return;

  const number = target.dataset.number;
  const action = target.dataset.action;
  const op = target.dataset.operator;

  if (number) {
    if (currentInput === '0' || currentInput === 'Error') {
      currentInput = number;
    } else {
      currentInput += number;
    }
    updateDisplay();
  } else if (op) {
    if (currentInput !== 'Error') {
      previousInput = currentInput;
      currentInput = '0';
      operator = op;
    }
  } else if (action === 'equals') {
    if (operator && previousInput !== '') {
      calculate();
    }
  } else if (action === 'clear') {
    currentInput = '0';
    previousInput = '';
    operator = null;
    updateDisplay();
  }
});

// Initialize display
updateDisplay();