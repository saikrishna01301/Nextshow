import { createContext, useState } from "react";
import MOVIES from "../assets/movies.json";

export const moviesContext = createContext({ movies: MOVIES });

export const MoviesProvider = ({ children }) => {
  const [movies, setMovies] = useState(MOVIES);
  const value = { movies, setMovies };
  return (
    <moviesContext.Provider value={value}>{children}</moviesContext.Provider>
  );
};
