import MovieM from "../Components/MovieM";
import goMain from "../assets/goMain.svg";
import './More.css';
import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import { SERVER_URL } from '../Components/Server';
import axios from 'axios';
import { useLocation } from "react-router-dom";
import MainHeader from "../Components/MainHeader";

const boxStyle = {
  width: "70%",
  marginTop: "50px",
  margin: "0",
  backgroundColor: "#1d1d1d",
  display: "grid",
  marginLeft: "auto",
  marginRight: "auto",
  gridTemplateColumns: "repeat(auto-fill, minmax(255px, 1fr)",
  placeItems: "center",
  paddingTop: "70px"
};

function More() {
  const location = useLocation();
  const genreName = location.state.genre;

  const [movies, setMovies] = useState([]);
  let check = 0;

  useEffect(() => {
    axios.get(`${SERVER_URL}/api/content/main`, {
      headers: {
        Authorization: localStorage.getItem("Authorization")
      }
    }).then((res) => {
      setMovies(res.data);
    })
  }, []);

  return (
    <>
      <MainHeader />
      <div>
        <div className="more-info">
          <Link to="/main">
            <img src={goMain} />
          </Link>
        </div>
        <h2 className="more-genre">{genreName}</h2>
      </div>

      <div style={boxStyle}>
        {movies.map((item) => {
          if(item.genre === genreName || genreName === '전체'){
            if(check > 19 && check < 50){
              return (
                <MovieM
                  title={item.name}
                  poster_path={item.image}
                  genres={item.genreList}
                  id={item.id}
                />
              );
            }
            check += 1;
          }
        })}
      </div>
    </>
  );
}

export default More;