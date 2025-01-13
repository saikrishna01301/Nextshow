import { createContext, useState } from "react";

export const SearchMovieContext = createContext();

export const SearchMovieProvider = ({ children }) => {
  const [searchMovie, setSearchMovie] = useState("");
  const value = { searchMovie, setSearchMovie };
  return (
    <SearchMovieContext.Provider value={value}>
      {children}
    </SearchMovieContext.Provider>
  );
};
