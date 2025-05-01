import React, { useState } from 'react';

function ExpenseForm({ onAddExpense }) {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');

  // ✅ Ye function tab call hota hai jab form submit hota hai. e.preventDefault() form ka default refresh behavior rokta hai.
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // ✅ Input validation
    const numAmount = parseFloat(amount);

    if (!title || !amount || numAmount <= 0) {
      alert("Please enter valid title and amount > 0");
      return;
    }

    const newExpense = {
      id: Date.now(),
      title,
      amount: numAmount,
      category
    };

    onAddExpense(newExpense);
    setTitle('');
    setAmount('');
    setCategory('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Expense Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="">Select Category</option>
        <option value="Food">Food</option>
        <option value="Travel">Travel</option>
        <option value="Shopping">Shopping</option>
      </select>
      <button type="submit">Add Expense</button>
    </form>
  );
}

export default ExpenseForm;
