import React, { useState } from "react";

const AddMovieForm = ({ addMovie, closeModal }) => {
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !rating) return;
    addMovie({ title, rating: parseFloat(rating) });
    closeModal();
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <input
        type="text"
        placeholder="Movie Title"
        className="border p-2 rounded"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="number"
        placeholder="Rating"
        className="border p-2 rounded"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
      />
      <button
        type="submit"
        className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
      >
        Add Movie
      </button>
    </form>
  );
};

export default AddMovieForm;
