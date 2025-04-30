import React from 'react';

function ExpenseItem({ title, amount, id, onDelete }) {
  return (
    <li>
      <strong>{title}</strong> - ₹{amount}
      <button onClick={() => onDelete(id)}> x </button>
    </li>
  );
}

export default ExpenseItem;
