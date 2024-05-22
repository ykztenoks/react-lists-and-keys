import { useState } from "react";
import moviesArray from "../movies-data.json";
import MovieCard from "./MovieCard";

import { v4 as uuid } from "uuid";

export default function MovieList() {
  const [movies, setMovies] = useState(moviesArray);
  let uniqueId = uuid();
  console.log(uniqueId);
  const handleDelete = (id) => {
    let updatedMovies = movies.filter((movie) => movie._id !== id);

    setMovies(updatedMovies);
  };

  return (
    <div>
      <h2>Movie List</h2>
      {movies.map((movie) => {
        return (
          <MovieCard
            movie={movie}
            handleDelete={handleDelete}
            key={movie._id}
          />
        );
      })}
    </div>
  );
}
