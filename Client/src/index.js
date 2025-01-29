import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import { SearchMovieProvider } from "./Contexts/SearchMovie.context";
import { UserMovieProvider } from "./Contexts/UserMovie.context";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <SearchMovieProvider>
      <UserMovieProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </UserMovieProvider>
    </SearchMovieProvider>
  </React.StrictMode>
);
