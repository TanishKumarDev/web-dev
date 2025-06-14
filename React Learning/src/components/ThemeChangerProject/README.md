# 🎨 React Theme Changer

A simple beginner-friendly React component that toggles between **Dark Mode** and **Light Mode**. This project helps understand core React concepts like state, conditional rendering, and dynamic class names, while also reinforcing clean styling practices using scoped CSS.

---

## 🎯 Project Motive

The goal of this mini project is to:

* Practice React functional components and hooks
* Use `useState` to manage UI themes
* Learn dynamic CSS class switching in JSX
* Create responsive and user-friendly UI
* Keep styles isolated and scalable

---

## 🚀 Features

* Toggle between Light Mode and Dark Mode
* Button and background color update based on theme
* Smooth color transition effects
* Fully responsive layout using flexbox
* Clean and component-scoped CSS

---

## ⚙️ Tech Stack

* [React](https://reactjs.org/)
* [Vite](https://vitejs.dev/)
* JavaScript (ES6+)
* CSS Modules / Component CSS

---

## 🧠 How the Logic Works

### 1. **Component Structure**

A functional component called `ThemeChangerProject` contains the state and rendering logic.

### 2. **State Initialization**

```js
const [isDark, setIsDark] = useState(false);
```

* The `isDark` state controls whether the app is in dark mode or not.
* Initially set to `false`, meaning Light Mode is the default.

### 3. **Toggle Function**

```js
const toggleTheme = () => {
  setIsDark(prev => !prev);
};
```

* Each button click flips the theme between dark and light.

### 4. **Dynamic Classes**

```jsx
<div className={`theme-container ${isDark ? 'dark' : 'light'}`}>
```

* CSS class dynamically changes based on `isDark` state.
* Styles defined separately for `.light` and `.dark`.

### 5. **Scoped CSS**

* Component styles are defined in `ThemeChangerProject.css`
* CSS is fully scoped to avoid any global interference

---

## 🧾 Code Overview

### 🔸 `ThemeChangerProject.jsx`

```jsx
import React from 'react';
import './ThemeChangerProject.css';

const ThemeChangerProject = () => {
  const [isDark, setIsDark] = React.useState(false);

  const toggleTheme = () => {
    setIsDark(prev => !prev);
  };

  return (
    <div className={`theme-container ${isDark ? 'dark' : 'light'}`}>
      <div className="content">
        <h2>{isDark ? "🌙 Dark Mode" : "☀️ Light Mode"}</h2>
        <button onClick={toggleTheme}>Toggle Theme</button>
      </div>
    </div>
  );
};

export default ThemeChangerProject;
```

---

### 🔸 `ThemeChangerProject.css`

```css
.theme-container {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  transition: background-color 0.3s ease, color 0.3s ease;
}

/* Light Mode */
.theme-container.light {
  background-color: #ffffff;
  color: #1a1a1a;
}
.theme-container.light button {
  background-color: #007bff;
  color: #fff;
}
.theme-container.light button:hover {
  background-color: #0056b3;
}

/* Dark Mode */
.theme-container.dark {
  background-color: #1a1a1a;
  color: #f0f0f0;
}
.theme-container.dark button {
  background-color: #f0f0f0;
  color: #1a1a1a;
}
.theme-container.dark button:hover {
  background-color: #cccccc;
}

/* Button Base */
button {
  margin-top: 1.5rem;
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.2s ease, color 0.2s ease;
}
```

---

## 🔮 Future Improvements (try)

* Save theme preference to `localStorage`
* Auto-detect system theme preference
* Convert theme logic to a reusable custom hook
* Add animation or icon transitions
* Integrate Tailwind for cleaner class management

---

## 🙌 Contribution

This project is built as part of learning React step-by-step.
Feel free to fork it and try your own versions — new features, better styles, even theme persistence!

---

## 📚 Learnings

* React functional components
* `useState` hook
* Conditional rendering
* Dynamic styling via state
* Scoped CSS best practices
* Flexbox layout and transitions

---

## 📎 License

This project is licensed under the MIT License.
Feel free to use, modify, or share it with proper attribution.
See the [LICENSE](../../../../LICENSE) file for details.

---

> Made with 💙 while learning React – one project at a time.

---
