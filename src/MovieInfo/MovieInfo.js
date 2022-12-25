import './MovieInfo.css';
import { useState } from 'react';
import ouya from '../assets/ouya.png';
import { movieDummy } from '../movieDummy';
import { personDummy } from "../personDummy";
import StarRate from '../Components/StarRate';
import bookmarkDefault from '../assets/bookmarkDefault.svg';
import bookmarkDefaultHover from '../assets/bookmarkDefaultHover.svg';
import bookmarkSelected from '../assets/bookmarkSelected.svg';
import bookmarkSelectedHover from '../assets/bookmarkSelectedHover.svg';
import { hover } from '@testing-library/user-event/dist/hover';

const IMG_BASE_URL = "https://image.tmdb.org/t/p/w1280/";

function MovieInfo({}) {
  const [bookmarkState, setBookmarkState] = useState(false);
  const [hoverState, setHoverState] = useState(true);

  function handleBookmarkState (){
    if (bookmarkState === false && hoverState === false){
      return bookmarkDefault;
    } else if (bookmarkState === false && hoverState === true) {
      return bookmarkDefaultHover;
    } else if (bookmarkState === true && hoverState === false) {
      return bookmarkSelected;
    } else {
      return bookmarkSelectedHover;
    }
  }



  return (
    <div className='info-body'>
      {/* 포스터 */}
      <img className='info-poster'
        src={ouya}
      >
      
      </img>
      {/* 별점 */}
      <StarRate />

      {/* 보고 싶어요 */}
      <img className='info-bookmark'
        src={handleBookmarkState()}
        onClick={() => setBookmarkState(!bookmarkState)}
        onMouseOver={() => setHoverState(!hoverState)}
        onMouseLeave={() => setHoverState(!hoverState)}
      />
      
      {/* 제목 */}
      <h3>스파이더맨: 노 웨이 홈</h3>
      
      {/* 제작년도, 장르, 국가, 상영시간 */}
      
      {/* 나의 별점 */}
      
      {/* 네이버 별점 */}
      
      {/* 줄거리 */}
      
      {/* 감독 / 출연 */}
    </div>
  );
}

export default MovieInfo;