import './MovieM.css';
import starMain from '../assets/starMain.svg';


const IMG_BASE_URL = "https://image.tmdb.org/t/p/w1280/";


function MovieM({title, poster_path, vote_average}) {
  const genres = '액션';

  return (
    <>
      <div className='main-movie-box'>
        <img className='poster-main' src={IMG_BASE_URL + poster_path} alt='poster'></img>
        <h3>{title}</h3>
        <h4>{genres}</h4>
        <div className='rate-info'><img className='star-image' src={starMain} />{vote_average}</div>
      </div>
    </>
  );
}

export default MovieM;