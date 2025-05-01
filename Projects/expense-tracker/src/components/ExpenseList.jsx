import React from 'react';

function ExpenseList({ items, onDelete }) {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          <span>{item.title} - ₹{item.amount}</span>
          {item.category && <span className="category">{item.category}</span>}
          <button onClick={() => onDelete(item.id)}>❌</button>
        </li>
      ))}
    </ul>
  );
}

export default ExpenseList;
