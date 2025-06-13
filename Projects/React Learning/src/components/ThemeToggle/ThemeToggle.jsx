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
