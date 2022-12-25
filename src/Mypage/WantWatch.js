import MovieM from "../Components/MovieM";
import { movieDummy } from "../movieDummy";
import React from 'react';


function WantWatch() {
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
  );
}

export default WantWatch;