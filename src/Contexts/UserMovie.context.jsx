import { createContext, useEffect, useState } from "react";

export const userMovieContext = createContext();

export const UserMovieProvider = ({ children }) => {
  const [userMovie, setUserMovie] = useState(() => {
    const storedUserMovie = sessionStorage.getItem("userMovie");
    return storedUserMovie ? JSON.parse(storedUserMovie) : {};
  });
  const value = { userMovie, setUserMovie };
  console.log(userMovie);

  useEffect(() => {
    sessionStorage.setItem("userMovie", JSON.stringify(userMovie));
  }, [userMovie]);
  return (
    <userMovieContext.Provider value={value}>
      {children}
    </userMovieContext.Provider>
  );
};
