import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import { SearchMovieProvider } from "./Contexts/SearchMovie.context";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <SearchMovieProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </SearchMovieProvider>
  </React.StrictMode>
);
