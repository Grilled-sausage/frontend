import './PersonR.css';
import Heart from './Heart';
import React from 'react';

const IMG_BASE_URL = "https://image.tmdb.org/t/p/w1280/";

function PersonR({name, type, profile_path}) {

  return (
    <>
      <div className='personBox'>
        <img src={profile_path} alt='person'></img>
        <Heart />
        <h3>{name}</h3>
        <h4>{type}</h4>        
      </div>
    </>
  );
}

export default PersonR;