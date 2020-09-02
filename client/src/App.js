import React, { useState, useEffect } from "react";
import axios from "axios";

import MovieList from "./Movies/MovieList";
import Movie from "./Movies/Movie";

import SavedList from "./Movies/SavedList";
import { Switch, Route } from "react-router-dom";

const App = () => {
  const [saved, setSaved] = useState([]); // Stretch: the ids of "saved" movies
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const getMovies = () => {
      axios
        .get("http://localhost:5000/api/movies")
        .then((response) => {
          setMovieList(response.data);
        })
        .catch((error) => {
          console.error("Server Error", error);
        });
    };
    getMovies();
  }, []);

  const addToSavedList = (id) => {
    // This is stretch. Prevent the same movie from being "saved" more than once
  };

  console.log(movieList);
  return (
    <div>
      <SavedList
        list={
          [
            /* This is stretch */
          ]
        }
      />
      <Switch>
        {/* Using the render atttribute fo the "/" path, I can render the component while passing down 
            the props from the Route component, and passing down my own custom props. */}
        <Route
          exact
          path="/"
          render={(props) => <MovieList {...props} movies={movieList} />}
        />
        <Route
          exact
          path="/movies/:id"
          render={(props) => <Movie {...props} />}
        />
      </Switch>
    </div>
  );
};

export default App;
