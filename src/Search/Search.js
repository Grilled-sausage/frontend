import MainHeader from "../Components/MainHeader";
import MovieM from "../Components/MovieM";
import React, { useState, useEffect } from 'react';
import { SERVER_URL } from '../Components/Server';
import axios from 'axios';
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
  fontFamily: "'IBM Plex Sans KR', monospace"
}

const noResultStyle = {
  fontSize: "60px",
  color: "#D8E3E5",
  fontFamily: "'IBM Plex Sans KR', monospace",
  textAlign: "center",
  paddingTop: "100px"
}

function Search() {
  const location = useLocation();
  const keyword = location.state.keyword;

  const [movies, setMovies] = useState([]);
  const [length, setLength] = useState(1);

  useEffect(() => {
    axios.get(`${SERVER_URL}/api/content/search?keyword=${keyword}`, {
      headers: {
        Authorization: localStorage.getItem("Authorization")
      }
    }).then((res) => {
      setMovies(res.data);
      setLength(res.data.length);
    })
  }, [keyword]);

  return (
    <>
      <MainHeader />
      <div>
        <h2 style={resultStyle}>"{keyword}" 의 검색결과</h2>
      </div>

      <div style={boxStyle}>
        {movies.map((item) => {
          return (
            <MovieM
              title={item.name}
              poster_path={item.image}
              genres={item.genreList}
              id={item.id}
            />
          );
        })}
      </div>
      <div style={length === 0 ? noResultStyle : {display: "none"}}>검색된 결과가 없습니다.</div>
    </>
  );
}

export default Search;