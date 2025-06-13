# 🧠 Show/Hide Text React App

A beginner-friendly React app that demonstrates how to show or hide text using a simple toggle button. Great for learning state management and conditional rendering in React.

---

## 📸 Preview
demo: [Show/Hide Text Demo](https://show-hide-text-react.vercel.app/)

---

## ✅ Tools & Concepts Used

| Concept               | Use                                |
| --------------------- | ---------------------------------- |
| `useState`            | Toggle between showing/hiding text |
| Conditional Rendering | Show text only if state is true    |
| Basic CSS             | Style button and layout            |
| Component-based       | Structured and reusable component  |
| Vite                  | Fast, lightweight React setup      |

---

## 🧱 Goal of the Project

A minimal component that:

✅ Renders a button
✅ Toggles the text `"Hello Tanish! 😄"` on button click
✅ All interactions happen dynamically — no page reload
✅ Keeps structure clean and modular

---

## 📁 Folder Structure

```
src/
├── components/
│   └── ToggleText/
│       ├── ToggleText.jsx
│       └── ToggleText.css
├── App.jsx
└── index.css
```

---

## 🔧 Setup Instructions (Using Vite)

```bash
npm create vite@latest show-hide-text --template react
cd show-hide-text
npm install
npm run dev
```

---

## 🔗 `src/components/ToggleText/ToggleText.jsx`

```jsx
import React, { useState } from "react";
import "./ToggleText.css";

const ToggleText = () => {
  const [showText, setShowText] = useState(false);

  const handleToggle = () => {
    setShowText(!showText);
  };

  return (
    <div className="toggle-box">
      <button onClick={handleToggle}>
        {showText ? "Hide Text" : "Show Text"}
      </button>

      {showText && <p>Hello Tanish! 😄</p>}
    </div>
  );
};

export default ToggleText;
```

---

## 💄 `src/components/ToggleText/ToggleText.css`

```css
.toggle-box {
  background-color: #f0f0f0;
  padding: 1rem;
  border-radius: 8px;
  width: 300px;
  margin: auto;
}

.toggle-box button {
  padding: 0.5rem 1rem;
  font-size: 1rem;
  margin-bottom: 1rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.toggle-box p {
  font-size: 1.2rem;
  color: #333;
}
```

---

## 🧱 `src/App.jsx`

```jsx
import React from "react";
import ToggleText from "./components/ToggleText/ToggleText";

const App = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <ToggleText />
    </div>
  );
};

export default App;
```

---

## 🎨 `src/index.css` (Optional Reset)

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
```

---

## 🧠 Why This Structure?

| File/Folder              | Purpose                                     |
| ------------------------ | ------------------------------------------- |
| `ToggleText.jsx`         | Logic and JSX rendering of toggle behavior  |
| `ToggleText.css`         | Component-scoped styling                    |
| `App.jsx`                | App container that renders the component    |
| `components/ToggleText/` | Clean modular folder for reusable UI pieces |

---

## 📚 What I Learn

| Topic              | Concept                                     |
| ------------------ | ------------------------------------------- |
| `useState`         | Manage internal state in React              |
| Conditional Render | Show/hide elements dynamically              |
| Component Design   | Single responsibility component             |
| CSS Styling        | Basic styling for buttons and layout        |
| Folder Structure   | Production-level React project organization |

---
