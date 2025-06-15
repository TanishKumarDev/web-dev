# 🔢 React Counter App

A simple beginner-friendly React component that allows users to **increment**, **decrement**, and **reset** a counter. This mini project is perfect for learning core React concepts like state management, event handling, and clean component structuring with scoped CSS.

---

## 🎯 Project Motive

The goal of this mini project is to:

* Understand how React functional components work
* Learn to manage values using `useState`
* Practice handling user events (e.g., button clicks)
* Build confidence with layout and styling using Flexbox
* Structure and style a React component cleanly

---

## 🚀 Features

* Count display that updates in real-time
* Three buttons to:

  * ✅ Increment
  * 🔽 Decrement
  * 🔄 Reset
* Fully centered responsive layout
* Styled using scoped CSS for modular design
* Smooth user experience with interactive feedback

---

## ⚙️ Tech Stack

* [React](https://reactjs.org/)
* [Vite](https://vitejs.dev/)
* JavaScript (ES6+)
* Pure CSS (component-scoped)

---

## 🧠 How the Logic Works

### 1. **Component Structure**

We have a single functional component called `CounterApp` that contains:

* A count state
* Three functions for manipulating the count
* UI to display count and buttons

---

### 2. **State Initialization**

```js
const [count, setCount] = useState(0);
```

* The `count` state holds the current value of the counter
* Initialized with `0`

---

### 3. **Update Functions**

```js
const increment = () => setCount(count + 1);
const decrement = () => setCount(count - 1);
const reset = () => setCount(0);
```

Each function updates the `count` state using `setCount`.

---

### 4. **Event Handling**

Each button has an `onClick` event:

```jsx
<button onClick={increment}>Increment</button>
```

Clicking a button calls the respective function to update the count.

---

### 5. **Layout and Styling**

* The outer `.container` centers the entire UI using Flexbox.
* `.counter-content` is the card-like box with content centered vertically and horizontally.
* Buttons are grouped and spaced using Flexbox and styled for better UX.

---

## 🧾 Code Overview

### 🔸 `CounterApp.jsx`

```jsx
import React, { useState } from 'react';
import './CounterApp.css';

const CounterApp = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div className='container'>
      <div className='counter-content'>
        <h1 className='counter-title'>React Counter</h1>
        <p className='counter-display'>Count: {count}</p>
        <div className="button-group">
          <button className='counter-inc-btn' onClick={increment}>Increment</button>
          <button className='counter-dec-btn' onClick={decrement}>Decrement</button>
          <button className='counter-reset-btn' onClick={reset}>Reset</button>
        </div>
      </div>
    </div>
  );
};

export default CounterApp;
```

---

### 🔸 `CounterApp.css`

```css
/* Main wrapper */
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #014c6b;
}

/* Content box */
.counter-content {
  background: #beb8b8;
  padding: 3rem;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

/* Title */
.counter-title {
  font-size: 2rem;
  color: #333;
}

/* Count display */
.counter-display {
  font-size: 1.8rem;
  color: #222;
}

/* Button group */
.button-group {
  display: flex;
  gap: 1rem;
}

/* Common button styling */
button {
  padding: 10px 20px;
  font-size: 1rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.3s ease;
}

/* Increment button */
.counter-inc-btn {
  background-color: #28a745;
  color: white;
}
.counter-inc-btn:hover {
  background-color: #218838;
}

/* Decrement button */
.counter-dec-btn {
  background-color: #dc3545;
  color: white;
}
.counter-dec-btn:hover {
  background-color: #c82333;
}

/* Reset button */
.counter-reset-btn {
  background-color: #ffc107;
  color: #333;
}
.counter-reset-btn:hover {
  background-color: #e0a800;
}
```

---

## 🔮 Future Improvements (try)

* Prevent count from going below zero
* Add max/min limits
* Animate the count change
* Add toast or alert for reset
* Persist count with `localStorage`
* Make it reusable via props

---

## 🙌 Contribution

This is a learning-focused project. Feel free to fork, enhance, or remix it to add animations, themes, accessibility, or advanced state management.

---

## 📚 Learnings

* React functional components
* `useState` for simple state
* Event handling (`onClick`)
* Conditional rendering & UI updates
* Flexbox layout and UI structure
* Clean CSS structuring

---

## 📎 License

Licensed under the MIT License.
Feel free to modify and use it with attribution.
See the [LICENSE](../../../LICENSE)) file for details.

---

> Made with ❤️ while learning React – one project at a time.
