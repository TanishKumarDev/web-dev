import { useState } from "react";
import DashboardHeader from "./components/DashboardHeader";
import AddMovieForm from "./components/AddMovieForm";
import MovieList from "./components/MovieList";
import Filter from "./components/Filter";
import useLocalStorage from "./hooks/useLocalStorage";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [filterRating, setFilterRating] = useState("");
  const [theme, setTheme] = useLocalStorage("theme", "light");

  const addMovie = (movie) => setMovies([...movies, movie]);
  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  return (
    <div className={theme === "light" ? "bg-gray-100 min-h-screen" : "bg-gray-900 min-h-screen text-white"}>
      <div className="max-w-md mx-auto py-10">
        <DashboardHeader theme={theme} toggleTheme={toggleTheme} />
        <AddMovieForm addMovie={addMovie} />
        <Filter filterRating={filterRating} setFilterRating={setFilterRating} />
        <MovieList movies={movies} filterRating={filterRating} />
      </div>
    </div>
  );
};

export default App;
