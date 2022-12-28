import './MovieInfo.css';
import React, { useState, useEffect, useRef } from 'react';
import { SERVER_URL } from '../Components/Server';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import MainHeader from '../Components/MainHeader';
import ouya from '../assets/ouya.png';
import starMain from '../assets/starMain.svg';
import StarRate from '../Components/StarRate';
import bookmarkDefault from '../assets/bookmarkDefault.svg';
import bookmarkDefaultHover from '../assets/bookmarkDefaultHover.svg';
import bookmarkSelected from '../assets/bookmarkSelected.svg';
import bookmarkSelectedHover from '../assets/bookmarkSelectedHover.svg';

function MovieInfo({ }) {
  const location = useLocation();
  const movieId = location.state.movieId;

  const [movie, setMovie] = useState({});
  const [rating, setRating] = useState({});
  const [change, setChange] = useState(false);
  const [bookmarkState, setBookmarkState] = useState(false);
  const [checkPost, setCheckPost] = useState();
  const [hoverState, setHoverState] = useState(false);

  useEffect(() => {
    axios.get(`${SERVER_URL}/api/content/${movieId}`, {
      headers: {
        Authorization: localStorage.getItem("Authorization")
      }
    }).then((res) => {
      setMovie(res.data);
      if(bookmarkState !== res.data.isReserved){
        setCheckPost(0);
      }
      else{
        setCheckPost(1);
      }
      setBookmarkState(res.data.isReserved);
      console.log(res.data);
    })
  }, [change]);

  const useDidMountEffect = (func, deps) => {
    const didMount = useRef(false);

    useEffect(() => {
        if (didMount.current) func();
        else didMount.current = true;
    }, deps);
  }
  
  // 별점 처리
  useDidMountEffect(() => {
    if(rating === 0){
      axios.delete(`${SERVER_URL}/api/rating/movie`, {
        data: movieId,
        headers: {
          Authorization: localStorage.getItem("Authorization"),
          "Content-Type": 'application/json'
        }
      }).then((res) => {
        console.log(res.data);
        setChange((current) => !current);
      })
    }
    else{
      axios.post(`${SERVER_URL}/api/rating/movie`, {movieId: `${movieId}`, movieRating: `${rating}`}, {
        headers: {
          Authorization: localStorage.getItem("Authorization")
        }
      }).then((res) => {
        console.log(res.data);
        setChange((current) => !current);
      })
    }
  }, [rating]);

  // 보고싶어요 처리
  useDidMountEffect(() => {
    if(bookmarkState === false){
      axios.delete(`${SERVER_URL}/api/reservation/movie`, {
        data: movieId,
        headers: {
          Authorization: localStorage.getItem("Authorization"),
          "Content-Type": 'application/json'
        }
      }).then((res) => {
        console.log(res.data);
      })
    }
    else{
      if(checkPost === 1){
        axios.post(`${SERVER_URL}/api/reservation/movie`, movieId , {
          headers: {
            Authorization: localStorage.getItem("Authorization"),
            "Content-Type": 'application/json'
          }
        }).then((res) => {
          console.log(res.data);
        })
      }
      else{
        setCheckPost(1);
      }
    }
  }, [bookmarkState]);


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
            src={movie.image}
          ></img>
          <div className='info-center'>
            {/* 별점 */}
            <div className='info-rating'><StarRate size={40} func={setRating} myRating={movie.myRating}/></div>

            {/* 보고 싶어요 */}
            <img className='info-bookmark'
              src={handleBookmarkState()}
              onClick={() => setBookmarkState((current) => !current)}
              onMouseOver={() => setHoverState((current) => !current)}
              onMouseLeave={() => setHoverState((current) => !current)}
            />

            {/* 제목 */}
            <h3 className='info-title'>{movie.name}</h3>

            {/* 제작년도, 장르, 국가, 상영시간 */}
            <h4 className='info-details'>{`${movie.year}·${movie.genreList}·${movie.nation}·${movie.runTime}분`}</h4>

            {/* 나의 별점 */}
            <div className='info-molva-rating'>Molva 별점  <img src={starMain} /> <span style={{ color: '#C86749' }}>{movie.reviewRating}</span></div>

            {/* 네이버 별점 */}
            <div className='info-naver-rating'>네이버 별점  <img src={starMain} /> <span style={{ color: '#C86749' }}>{movie.naverRating}</span></div>
          </div>
        </div>
        {/* 줄거리 */}
        <div className='info-summary'>
          <h2>기본 정보</h2>
          <p>{movie.story}</p>
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