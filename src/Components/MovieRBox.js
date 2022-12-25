import React, { useState, useEffect} from "react";
import MovieR from "./MovieR";
import { SERVER_URL } from '../Components/Server';
import axios from 'axios';


function MovieRBox() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axios.get(`${SERVER_URL}/api/content/survey/movie`, {
      headers: {
          Authorization: localStorage.getItem("Authorization")
      }
    }).then((res) => {
      setMovies(res.data);
    })
  }, []);

  return (
    <>
      <div
        style={{
          width: "80%",
          marginTop: "100px",
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
            <MovieR
              title={item.name}
              poster_path={item.image}
            />
          );
        })}
      </div>
    </>
  )
}

export default MovieRBox;
