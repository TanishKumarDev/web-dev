import MovieItem from "./MovieItem";

const MovieList = ({ movies, filterRating }) => {
  const filteredMovies = movies.filter(
    (movie) => !filterRating || movie.rating >= filterRating
  );

  if (!filteredMovies.length)
    return <p className="text-center text-gray-500">No movies found</p>;

  return (
    <ul className="p-6 bg-white rounded-xl shadow space-y-2 mt-4">
      {filteredMovies.map((movie, index) => (
        <MovieItem key={index} movie={movie} />
      ))}
    </ul>
  );
};

export default MovieList;
