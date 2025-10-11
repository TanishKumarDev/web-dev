import React, { useState } from "react";
import DashboardHeader from "./components/DashboardHeader";
import MovieList from "./components/MovieList";
import Modal from "./components/Modal";
import AddMovieForm from "./components/AddMovieForm";

const App = () => {
  const [movies, setMovies] = useState([
    { id: 1, title: "Inception", rating: 9 },
    { id: 2, title: "Interstellar", rating: 8.5 },
  ]);

  const [isModalOpen, setModalOpen] = useState(false);

  const addMovie = (movie) => {
    setMovies([...movies, { ...movie, id: Date.now() }]);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-5">
      <DashboardHeader onAdd={() => setModalOpen(true)} />
      <MovieList movies={movies} />
      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
        <AddMovieForm
          addMovie={addMovie}
          closeModal={() => setModalOpen(false)}
        />
      </Modal>
    </div>
  );
};

export default App;
