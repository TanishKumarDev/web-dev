import React, { useState } from 'react';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import './App.css';

function App() {
  const [expenses, setExpenses] = useState([]);

  // 🔢 Add expense form
  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  
    // 🔢 Delete expense list 
  const deleteExpense = (id) => {
    setExpenses(expenses.filter(exp => exp.id !== id));
  };

  // 🔢 Total expense 
  const totalExpense = expenses.reduce((sum, item) => sum + item.amount, 0);

  return (
    <div className="App">
      <h1>💸 Expense Tracker</h1>
      <ExpenseForm onAddExpense={addExpense} />
      <ExpenseList items={expenses} onDelete={deleteExpense} />

      {/* 🔻 Total Expense Display */}
      <div className="total">Total: ₹{totalExpense.toFixed(2)}</div>
    </div>
  );
}

export default App;
