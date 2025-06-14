# 🌀 React Text Toggler

A simple beginner-friendly React component that toggles between two pieces of text and updates both the heading and a button based on a boolean state.  
This project is designed to help understand React fundamentals like state, events, and conditional rendering.

---

## 🎯 Project Motive

The goal of this mini project is to:

- Learn how React functional components work
- Understand how to use the `useState` hook
- Practice event handling with `onClick`
- Implement conditional rendering in JSX
- Learn how class-based conditional styling works
- Boost confidence in component-based architecture

---

## 🚀 Features

- State-based toggle using a button
- Text updates in a heading (`<h1>`) and styling updates on button
- Clean UI separation with CSS
- React best practices followed

---

## ⚙️ Tech Stack

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/) – blazing fast dev environment
- JavaScript (ES6+)

---

## 🧠 How the Logic Works

### 1. **Component Structure**
A simple functional component: `TextToggler`.

### 2. **State Initialization**
```js
const [isTextOne, setIsTextOne] = useState(true);
This state tracks which text and button style to show.

3. Toggle Function
js
Copy code
const toggleText = () => {
  setIsTextOne(!isTextOne);
};
Flips the state on every click.

4. Conditional Rendering
jsx
Copy code
<h1>{isTextOne ? "This is true" : "This is false"}</h1>
The <h1> tag displays a message based on state.

jsx
Copy code
<div className={`text-toggler-button ${isTextOne ? 'true-state' : 'false-state'}`}>
The div (styled like a button) gets a class conditionally to reflect the current state via CSS.

💡 Note: The <div> doesn't have any magic. It just renders a class name based on the boolean condition. It doesn’t do anything on its own—CSS handles the styling.

🧾 Code Overview
🔸 TextToggler.jsx
jsx
Copy code
import React from 'react';
import './TextToggler.css'; // Import custom styles

const TextToggler = () => {
  const [isTextOne, setIsTextOne] = React.useState(true);

  const toggleText = () => {
    setIsTextOne(!isTextOne);
  };

  return (
    <div className="text-toggler-wrapper">
      <h1>{isTextOne ? "This is true" : "This is false"}</h1>

      <div
        className={`text-toggler-button ${isTextOne ? 'true-state' : 'false-state'}`}
        onClick={toggleText}
      >
        Toggle State
      </div>
    </div>
  );
};

export default TextToggler;

🔸 App.jsx
jsx
Copy code
import React from 'react';
import TextToggler from './components/TextToggler/TextToggler';
import './App.css';

function App() {
  return (
    <div className="App">
      <TextToggler />
    </div>
  );
}

export default App;
🎨 Example CSS (TextToggler.css)
css
Copy code
.text-toggler-wrapper {
  text-align: center;
  padding: 2rem;
}

.text-toggler-button {
  margin-top: 1rem;
  padding: 10px 20px;
  border-radius: 6px;
  cursor: pointer;
  color: white;
  display: inline-block;
  transition: background-color 0.3s ease;
}

.true-state {
  background-color: green;
}

.false-state {
  background-color: red;
}
🔮 Future Improvements (Try These)
Use a <button> element instead of a <div> for accessibility

Animate the text transitions

Pass text values via props for reusability

Add unit tests using React Testing Library or Vitest

📚 Learnings
Functional components with React

useState for state management

JSX conditional rendering

Event handling with onClick

Dynamically applying classes in React

Separation of concerns: logic in JS, styles in CSS

📎 License
This project is licensed under the MIT License.
Feel free to use, modify, or share it with proper attribution.
See the LICENSE file for details.

Made with 💙 while learning React step-by-step