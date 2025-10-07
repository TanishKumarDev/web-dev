import React, { useState } from "react";

/**
 * Concepts used:
 * - useState (UI + Input State)
 * - Conditional Rendering
 * - Event Handling
 * - Controlled Components
 * - Tailwind Transitions
 */

const SearchBar = () => {
  // 1. Track whether search bar is open or not
  const [isOpen, setIsOpen] = useState(false);

  // 2. Track user input text
  const [query, setQuery] = useState("");

  // 3. Handler for toggling
  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  // 4. Input change handler
  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  // 5. Optional: handle blur (click outside)
  const handleBlur = () => {
    if (query.trim() === "") setIsOpen(false);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      {/* Container with shadow and smooth transition */}
      <div
        className={`flex items-center bg-white border border-gray-300 rounded-full shadow-md transition-all duration-300 ${
          isOpen ? "w-72 px-4" : "w-12 px-2"
        }`}
      >
        {/* Conditional Rendering - Input visible only if isOpen true */}
        {isOpen && (
          <input
            type="text"
            value={query}
            onChange={handleInputChange}
            onBlur={handleBlur}
            placeholder="Search..."
            className="flex-1 px-2 py-2 outline-none text-gray-700"
          />
        )}

        {/* Search Icon - Always visible */}
        <button
          onClick={handleToggle}
          className="p-2 text-gray-600 hover:text-gray-900 transition"
        >
          🔍
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
