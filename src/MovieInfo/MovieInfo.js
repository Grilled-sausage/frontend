import './MovieInfo.css';
import { useState } from 'react';
import React from 'react';
import MainHeader from '../Components/MainHeader';
import ouya from '../assets/ouya.png';
import starMain from '../assets/starMain.svg';
import StarRate from '../Components/StarRate';
import bookmarkDefault from '../assets/bookmarkDefault.svg';
import bookmarkDefaultHover from '../assets/bookmarkDefaultHover.svg';
import bookmarkSelected from '../assets/bookmarkSelected.svg';
import bookmarkSelectedHover from '../assets/bookmarkSelectedHover.svg';

function MovieInfo({ }) {
  const [bookmarkState, setBookmarkState] = useState(false);
  const [hoverState, setHoverState] = useState(false);

  function handleBookmarkState() {
    if (bookmarkState === false && hoverState === false) {
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
    <>
      <MainHeader />
      <div className='info-body'>
        <div className='info-detail-box'>
          {/* 포스터 */}
          <img className='info-poster'
            src={ouya}
          ></img>
          <div className='info-center'>
            {/* 별점 */}
            <div className='info-rating'><StarRate size={40} /></div>

            {/* 보고 싶어요 */}
            <img className='info-bookmark'
              src={handleBookmarkState()}
              onClick={() => setBookmarkState(!bookmarkState)}
              onMouseOver={() => setHoverState(!hoverState)}
              onMouseLeave={() => setHoverState(!hoverState)}
            />

            {/* 제목 */}
            <h3 className='info-title'>스파이더맨: 노 웨이 홈</h3>

            {/* 제작년도, 장르, 국가, 상영시간 */}
            <h4 className='info-details'>2021·액션/모험/판타지·미국·148분</h4>

            {/* 나의 별점 */}
            <div className='info-molva-rating'>Molva 별점  <img src={starMain} /> <span style={{ color: '#C86749' }}>5.0</span></div>

            {/* 네이버 별점 */}
            <div className='info-naver-rating'>네이버 별점  <img src={starMain} /> <span style={{ color: '#C86749' }}>4.5</span></div>
          </div>
        </div>
        {/* 줄거리 */}
        <div className='info-summary'>
          <h2>기본 정보</h2>
          <p>‘미스테리오’의 계략으로 세상에 정체가 탄로난 스파이더맨 ‘피터 파커’는 하루 아침에 평범한 일상을 잃게 된다. 문제를 해결하기 위해 ‘닥터 스트레인지’를 찾아가 도움을 청하지만 뜻하지 않게 멀티버스가 열리면서 각기 다른 차원의 불청객들이 나타난다. ‘닥터 옥토퍼스’를 비롯해 스파이더맨에게 깊은 원한을 가진 숙적들의 강력한 공격에 ‘피터 파커’는 사상 최악의 위기를 맞게 되는데…</p>
        </div>
        {/* 감독 / 출연 */}
        <div className='info-filmmaker'>
          <h2>감독 / 출연</h2>
          <div className='info-filmmaker-contents'>
            {/* map으로 바꿔야 함 */}
            <ul>
              <li>
                <img src={ouya}></img>
                <h4>김민근</h4>
                <h5>감독</h5>
              </li>
              <li>
                <img src={ouya}></img>
                <h4>김민근</h4>
                <h5>감독</h5>
              </li><li>
                <img src={ouya}></img>
                <h4>김민근</h4>
                <h5>감독</h5>
              </li><li>
                <img src={ouya}></img>
                <h4>김민근</h4>
                <h5>감독</h5>
              </li><li>
                <img src={ouya}></img>
                <h4>김민근</h4>
                <h5>감독</h5>
              </li><li>
                <img src={ouya}></img>
                <h4>김민근</h4>
                <h5>감독</h5>
              </li><li>
                <img src={ouya}></img>
                <h4>김민근</h4>
                <h5>감독</h5>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default MovieInfo;