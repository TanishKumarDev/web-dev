const MovieItem = ({ movie }) => (
  <li className="border-b py-2 flex justify-between">
    <span>{movie.title}</span>
    <span>{movie.rating}/5</span>
  </li>
);

export default MovieItem;
