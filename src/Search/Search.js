import React from "react";
import MainHeader from "../Components/MainHeader";
import MovieM from "../Components/MovieM";
import { movieDummy } from "../movieDummy";
import { useLocation } from "react-router-dom";


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
  paddingTop: "40px"
};

const resultStyle = {
  paddingTop: "190px",
  paddingLeft: "calc(15% + 40px)",
  fontSize: "30px",
  fontWeight: "900",
  color: "#D8E3E5",
  fontFamily: "'IBM Plex Mono', monospace"
}

function Search() {
  const location = useLocation();
  const keyword = location.state.keyword;
  
  return (
    <>
      <MainHeader />
      <div>
        <h2 style={resultStyle}>"{keyword}" 의 검색결과</h2>
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

export default Search;