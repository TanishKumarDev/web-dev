import { useState } from "react";

function generateId() {
  return Math.floor(Math.random() * 10);
}

function Todo() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const handleSubmit = () => {
    setTodos((todos) =>
      todos.concat({
        text: input,
        id: generateId(),
      })
    );
    setInput("");
  };

  const removeTodo = (id) =>
    setTodos((todos) => todos.filter((t) => t.id !== id));

  return (
    <div className="container p-6 mx-auto max-w-md">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="New Todo"
        className="bg-gray-100 p-2 rounded-lg w-full"
      />

      <button
        onClick={handleSubmit}
        className="bg-blue-500 text-white p-2 rounded-lg w-full mt-4"
      >
        Submit
      </button>

      <ul className="todos-list mt-6">
        {todos.map(({ text, id }) => (
          <li key={id} className="todo flex items-center justify-between mb-4">
            <span className="text-lg">{text}</span>
            <button
              className="bg-red-500 text-white p-2 rounded-lg"
              onClick={() => removeTodo(id)}
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
