# Expense Tracker App

Welcome to the Expense Tracker App! This is a simple app where you can add and manage your daily expenses.

### Project Demo

![Preview Image](public/preview.png)

### Step 1: JavaScript Logic

```javascript
// Plain JS Logic: Expense Add Logic

let expenses = [];

function addExpense(title, amount) {
  expenses.push({ title, amount });
  console.log(expenses);
}

addExpense("Tea", 10);
addExpense("Coffee", 20);
