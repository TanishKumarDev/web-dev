## 🧠 Goal of the Project

A minimal React app with:

✅ A centered screen
✅ A toggle button saying:

* **Dark Mode ON** (with 🌙 icon)
* **Light Mode ON** (with ☀️ icon)
  ✅ Background + text color changes as per the mode
  ✅ No page reload, everything dynamic

## 📸 Preview
demo: https://theme-toggle-react.vercel.app/
---

## ✅ Tools & Concepts Used

| Concept               | Use                           |
| --------------------- | ----------------------------- |
| `useState`            | Toggle light/dark mode        |
| Conditional Rendering | Change icon & text            |
| Basic CSS             | Center layout & change themes |
| Vite                  | Fast, lightweight React setup |

---

## 📁 Folder Structure

```
src/
├── components/
│   └── ThemeToggle.jsx
├── App.jsx
├── index.css
```

---

## 🔧 Setup Using Vite (Recommended)

```bash
npm create vite@latest theme-toggle --template react
cd theme-toggle
npm install
npm run dev
```

---

## 🔗 `src/components/ThemeToggle.jsx`

```jsx
import React, { useState } from "react";
import "./ThemeToggle.css";

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <div className={darkMode ? "container dark" : "container light"}>
      <button className="toggle-btn" onClick={toggleTheme}>
        {darkMode ? "🌙 Dark Mode ON" : "☀️ Light Mode ON"}
      </button>
    </div>
  );
};

export default ThemeToggle;
```

---

## 💄 `src/components/ThemeToggle.css`

```css
.container {
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background 0.3s ease, color 0.3s ease;
}

.light {
  background-color: #f0f0f0;
  color: #222;
}

.dark {
  background-color: #121212;
  color: #eee;
}

.toggle-btn {
  padding: 1rem 2rem;
  font-size: 1.5rem;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  background-color: inherit;
  color: inherit;
  border: 2px solid currentColor;
  transition: transform 0.2s ease;
}

.toggle-btn:hover {
  transform: scale(1.05);
}
```

---

## 🧱 `src/App.jsx`

```jsx
import ThemeToggle from "./components/ThemeToggle";

function App() {
  return <ThemeToggle />;
}

export default App;
```

---

## 🎨 `src/index.css` (optional reset)

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
```

---

## 🧠 Why This Structure?

* **`ThemeToggle.jsx`**: Only handles the toggle logic & display.
* **CSS file**: Only UI, no logic here.
* `App.jsx`: Just renders the component — clean separation.

---

## 📚 What You Learn Here

| Topic              | What You Learn              |
| ------------------ | --------------------------- |
| `useState`         | Managing dynamic state      |
| Component design   | One job = one component     |
| Dynamic classes    | Using ternary `className`   |
| Conditional render | Different UI for each state |
| Styling            | Responsive & clean toggle   |

---
