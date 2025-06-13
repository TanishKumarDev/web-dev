import React, { useState } from "react";
import "./ColorBox.css"; // ✅ Import the CSS

const colors = [
  "#1e1e1e", // Almost black
  "#2c3e50", // Dark blue-gray
  "#34495e", // Midnight blue
  "#3b3b3b", // Soft black
  "#4b0082", // Indigo
  "#2f4f4f", // Dark slate gray
  "#0f3057", // Deep navy
  "#2c2c54", // Dark purple-ish
];

const ColorBox = () => {
  const [bgColor, setBgColor] = useState("black");

  const handleClick = () => {
    const randomIndex = Math.floor(Math.random() * colors.length);
    const randomColor = colors[randomIndex];
    setBgColor(randomColor);
  };

  return (
    <div className="color-box" style={{ backgroundColor: bgColor }}>
      <h1 className="header">Random Color</h1>
      <h2 className="current-color">Current Color: {bgColor.toUpperCase()}</h2>
      <button className="btn" onClick={handleClick}>
        Change Color
      </button>
    </div>
  );
};

export default ColorBox;
