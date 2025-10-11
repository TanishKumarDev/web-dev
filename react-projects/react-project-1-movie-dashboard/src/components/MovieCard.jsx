import React from "react";

const MovieCard = ({ title, rating }) => {
  return (
    <div className="bg-white p-4 rounded shadow hover:shadow-lg transition">
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="text-gray-600">Rating: {rating}/10</p>
    </div>
  );
};

export default MovieCard;
