import React, { useState, useEffect } from "react";

/**
 * Concept Focus:
 * - useState (state management)
 * - Conditional Rendering
 * - Event Handling
 * - useEffect (side effect for persistence)
 */

const ColorToggler = () => {
  // STEP 1: Define state (reactive variable)
  const [isDarkMode, setIsDarkMode] = useState(false);

  // STEP 2: Optional - load user preference
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDarkMode(true);
    }
  }, []);

  // STEP 3: Whenever theme changes, store it
  useEffect(() => {
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  // STEP 4: Handler function
  const toggleMode = () => {
    setIsDarkMode((prev) => !prev); // toggle between true and false
  };

  // STEP 5: Conditional styling (Tailwind)
  const bgClass = isDarkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black";

  return (
    <div className={`h-screen flex flex-col items-center justify-center transition-all duration-500 ${bgClass}`}>
      <h1 className="text-4xl font-bold mb-6">
        {isDarkMode ? "Dark Mode 🌙" : "Light Mode ☀️"}
      </h1>

      <button
        onClick={toggleMode}
        className={`px-6 py-3 rounded-xl text-lg font-medium transition-all duration-300 shadow-md ${
          isDarkMode
            ? "bg-gray-200 text-black hover:bg-gray-300"
            : "bg-gray-800 text-white hover:bg-gray-700"
        }`}
      >
        Toggle Theme
      </button>
    </div>
  );
};

export default ColorToggler;
