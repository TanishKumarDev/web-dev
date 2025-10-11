import { useState } from "react";

function Main() {
  const [inputValue, setInputValue] = useState("");

  const buttons = [
    "C", "/", "*",
    "7", "8", "9", "-",
    "4", "5", "6", "+",
    "1", "2", "3",
    "0", "00", ".", "="
  ];

  const handleClick = (value) => {
    if (value === "C") {
      setInputValue("");
    } else if (value === "=") {
      try {
        setInputValue(eval(inputValue)); // simple calculation
      } catch {
        setInputValue("Error");
      }
    } else {
      setInputValue(inputValue + value);
    }
  };

  return (
    <div className="max-w-sm mx-auto mt-10">
      <input
        type="text"
        className="w-full p-4 text-2xl text-gray-700 bg-gray-100 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-gray-600"
        value={inputValue}
        readOnly
      />

      <div className="grid grid-cols-4 gap-2">
        {buttons.map((btn) => (
          <button
            key={btn}
            onClick={() => handleClick(btn)}
            className="p-4 text-xl bg-gray-200 rounded-lg hover:bg-gray-300"
          >
            {btn}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Main;
