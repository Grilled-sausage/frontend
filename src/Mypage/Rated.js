import MovieM from "../Components/MovieM";
import React, { useState, useEffect } from 'react';
import { SERVER_URL } from '../Components/Server';
import axios from 'axios';

function Rated() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(`${SERVER_URL}/api/rating/movie`, {
      headers: {
        Authorization: localStorage.getItem("Authorization")
      }
    }).then((res) => {
      setMovies(res.data);
      console.log(res.data);
    })
  }, []);

  return (
  <div
    style={{
      width: "80%",
      marginTop: "50px",
      margin: "0",
      backgroundColor: "#1d1d1d",
      display: "grid",
      marginLeft: "auto",
      marginRight: "auto",
      gridTemplateColumns: "repeat(auto-fill, minmax(255px, 1fr)",
      placeItems: "center",
    }}
  >
    {movies.map((item) => {
      return (
        <MovieM
          title={item.name}
          poster_path={item.image}
          genres={item.genreList}
          vote_average={item.rating}
          id={item.id}
        />
      );
    })}
    </div>
  );
}

export default Rated;