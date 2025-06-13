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
