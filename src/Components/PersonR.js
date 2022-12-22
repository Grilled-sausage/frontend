import './PersonR.css';
import Heart from './Heart';

const IMG_BASE_URL = "https://image.tmdb.org/t/p/w1280/";

function PersonR({name, profile_path}) {
  const role = '배우';

  return (
    <>
      <div className='personBox'>
        <img src={IMG_BASE_URL + profile_path} alt='person'></img>
        <Heart />
        <h3>{name}</h3>
        <h4>{role}</h4>        
      </div>
    </>
  );
}

export default PersonR;