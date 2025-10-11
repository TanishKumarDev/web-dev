import React, { useState } from "react";

const Counter = () => {
  // 1. Create state variable
  const [count, setCount] = useState(0);

  // 2. Handler functions
  const increment = () => setCount(prev => prev + 1);
  const decrement = () => setCount(prev => prev - 1);
  const reset = () => setCount(0);

  // 3. JSX + Tailwind styling
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <h1 className="text-3xl font-semibold mb-6 text-gray-800">React Counter</h1>

      <div className="bg-white p-6 rounded-2xl shadow-md flex flex-col items-center">
        <p className="text-5xl font-bold mb-6 text-blue-600">{count}</p>

        <div className="flex gap-4">
          <button
            onClick={decrement}
            className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
          >
            -
          </button>

          <button
            onClick={reset}
            className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition"
          >
            Reset
          </button>

          <button
            onClick={increment}
            className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
