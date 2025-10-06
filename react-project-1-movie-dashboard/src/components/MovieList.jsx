import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ movies }) => {
  if (movies.length === 0) return <p className="text-gray-600">No movies yet.</p>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {movies.map(({ id, title, rating }) => (
        <MovieCard key={id} title={title} rating={rating} />
      ))}
    </div>
  );
};

export default MovieList;
