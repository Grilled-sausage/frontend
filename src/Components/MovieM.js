import './MovieM.css';
import starMain from '../assets/starMain.svg';
import { Link } from 'react-router-dom';
import React from 'react';


const IMG_BASE_URL = "https://image.tmdb.org/t/p/w1280/";


function MovieM({ title, poster_path, genres, vote_average }) {

  return (
    <>
      <div className='main-movie-box'>
        <Link to='/movie-info' style={{textDecoration: "none"}}>
          <img className='poster-main' src={IMG_BASE_URL + poster_path} alt='poster'></img>
          <h3>{title}</h3>
          <h4>{genres}</h4>
          <div className='rate-info'><img className='star-image' src={starMain} />{vote_average}</div>
        </Link>
      </div>
    </>
  );
}

export default MovieM;