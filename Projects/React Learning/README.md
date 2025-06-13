# ⚛️ React + Vite Playground

This is a personal learning playground built using **React** and **Vite** with **component-based project structure**.  
Each small project is isolated in its own folder under `src/components/` for modular learning and reusability.

---

## 🚀 Tech Stack

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [ESLint](https://eslint.org/) with basic rules
- [JSX + CSS Modules] (per component)
- [HMR (Hot Module Replacement)] via Vite

---

## 📁 Folder Structure

```

📦 src/
├── App.jsx
├── index.css
├── main.jsx
├── assets/
├── components/
│   ├── ThemeToggle/
│   │   ├── ThemeToggle.jsx
│   │   ├── ThemeToggle.css
│   │   └── readme.md
│   └── ToggleText/
│       ├── ToggleText.jsx
│       ├── ToggleText.css
│       └── readme.md

````

Each project folder inside `components/` contains:
- `.jsx`: The component logic
- `.css`: The styling (scoped)
- `readme.md`: Explanation of how it works and what it teaches

---

## 🧠 Learning Objectives

- Build UI in modular way using components.
- Understand and apply core React hooks: `useState`, `useEffect`, `useRef`, `useCallback`.
- Learn state lifting and component communication.
- Practice building small, functional projects like:
  - Theme toggle
  - Password generator
  - Toggle text display

---

## ✅ Getting Started

1. **Install dependencies**
   ```bash
   npm install
````

2. **Run the development server**

   ```bash
   npm run dev
   ```

3. **Open in Browser**
   Navigate to `http://localhost:5173` to see it live.

---

## 📦 Available Scripts

* `npm run dev` → Start dev server
* `npm run build` → Production build
* `npm run preview` → Preview production build

---

## 📚 Future Plans

* Add more components like:

  * Counter
  * Stopwatch
  * Accordion
  * Todo App
* Introduce Routing (`react-router-dom`)
* Use `Context API` for theme switching
* Add GitHub deploy (GH Pages or Vercel)
* Start building full-stack apps (MERN stack)

---

## 🧰 Dev Setup

* Editor: VS Code
* Extensions recommended:

  * ESLint
  * Prettier
  * React Snippets
  * Tailwind CSS IntelliSense (optional)

---

## 📖 Reference Links

* [Vite Docs](https://vitejs.dev/)
* [React Docs](https://react.dev/)
* [ESLint](https://eslint.org/)
* [MDN JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

---

> 🧠 *Learning one small project at a time builds long-term mastery.*
> Keep pushing, Tanish! 🔥
