import MovieR from "./MovieR";
import {movieDummy} from "../movieDummy";

function MovieRBox() {
  return (
    <>
      <div
        style={{
          width: "70%",
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
        {movieDummy.results.map((item) => {
          return (
            <MovieR
              title={item.title}
              poster_path={item.poster_path}
            />
          );
        })}
      </div>
    </>
  )
}

export default MovieRBox;