import './PersonR.css';
import Heart from './Heart';
import React from 'react';

function PersonR({name, type, profile_path, id, func}) {
  const setHeart = (heart) => {
    func({personId: id, heart: heart});
  }

  return (
    <>
      <div className='personBox'>
        <img src={profile_path} alt='person'></img>
        <Heart func={setHeart} />
        <h3>{name}</h3>
        <h4>{type}</h4>        
      </div>
    </>
  );
}

export default PersonR;