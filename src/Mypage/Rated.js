import MovieM from "../Components/MovieM";
import { movieDummy } from "../movieDummy";


function Rated() {
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
        />
      );
    })}
    </div>
  );
}

export default Rated;