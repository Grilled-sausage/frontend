import './MovieR.css';
import React from 'react';
import StarRate from './StarRate';

function MovieR({title, poster_path, id, func}) {
  const setRating = (rating) => {
    func({movieId: id, movieRating: rating});
  }

  return (
    <>
      <div className='movieBox'>
        <img src={poster_path} alt='poster'></img>
        <h3>{title}</h3>
        <StarRate size={30} func={setRating} />
      </div>
    </>
  );
}

export default MovieR;