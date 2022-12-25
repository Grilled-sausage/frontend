import './MovieR.css';
import StarRate from './StarRate';

function MovieR({title, poster_path}) {

  return (
    <>
      <div className='movieBox'>
        <img src={poster_path} alt='poster'></img>
        <h3>{title}</h3>
        <StarRate />
      </div>
    </>
  );
}

export default MovieR;