import React, { useState } from "react";
import "./CounterApp.css"; // Your custom styles

const CounterApp = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);


  return (
    <div className="container">
      <div className="counter-content">
        <h1 className="counter-title">React Counter</h1>
        <p className="counter-dispplay">Count: {count}</p>
        <div className="button-group">
          <button className="counter-inc-btn" onClick={increment}>
            Increment
          </button>
          <button className="counter-dec-btn" onClick={decrement}>
            Decrement
          </button>
          <button className="counter-reset-btn" onClick={reset}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default CounterApp;
