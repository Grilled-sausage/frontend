import MovieM from "../Components/MovieM";
import { movieDummy } from "../movieDummy";
import goMain from "../assets/goMain.svg";
import './More.css';
import { Link } from "react-router-dom";
import React from 'react';

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

function More({ genre }) {

  return (
    <>
      <div>
        <div className="more-info">
          <Link to="/main">
            <img src={goMain} />
          </Link>
        </div>
        <h2 className="more-genre">전체</h2>
      </div>

      <div style={boxStyle}>
        {movieDummy.results.map((item) => {
          return (
            <MovieM
              title={item.title}
              poster_path={item.poster_path}
              vote_average={item.vote_average}
            />
          );
        })}
      </div>
    </>
  );
}

export default More;