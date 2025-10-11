import { useState, useRef, useId } from "react";

const AddMovieForm = ({ addMovie }) => {
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState("");
  const inputRef = useRef(null);
  const idTitle = useId();
  const idRating = useId();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !rating) return;
    addMovie({ title, rating });
    setTitle("");
    setRating("");
    inputRef.current.focus();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-6 bg-white dark:bg-gray-800 rounded-b-xl shadow-md space-y-4"
    >
      {/* Movie Title */}
      <div>
        <label
          htmlFor={idTitle}
          className="block font-medium mb-1 text-gray-800 dark:text-gray-200"
        >
          Movie Title
        </label>
        <input
          id={idTitle}
          ref={inputRef}
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter movie title"
          className="w-full border border-gray-400 dark:border-gray-300 px-4 py-2 rounded-md
                     bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100
                     focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
        />
      </div>

      {/* Rating */}
      <div>
        <label
          htmlFor={idRating}
          className="block font-medium mb-1 text-gray-800 dark:text-gray-200"
        >
          Rating (1-5)
        </label>
        <input
          id={idRating}
          type="number"
          min="1"
          max="5"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          placeholder="Enter rating"
          className="w-full border border-gray-400 dark:border-gray-300 px-4 py-2 rounded-md
                     bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100
                     focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-blue-500 dark:bg-blue-600 text-white px-4 py-2 rounded-md
                   hover:bg-blue-600 dark:hover:bg-blue-700 transition-colors"
      >
        Add Movie
      </button>
    </form>
  );
};

export default AddMovieForm;
