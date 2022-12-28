import './MainContainer.css';
import React, { useState, useEffect } from 'react';
import { SERVER_URL } from '../Components/Server';
import axios from 'axios';
import MovieM from './MovieM';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import { Link } from 'react-router-dom';



function MainContainer({genre}) {
  const [movies, setMovies] = useState([]);
  let check = 0;

  useEffect(() => {
    axios.get(`${SERVER_URL}/api/content/main`, {
      headers: {
        Authorization: localStorage.getItem("Authorization")
      }
    }).then((res) => {
      setMovies(res.data);
    })
  }, []);


  return (
    <>
      <div className='main-container'>
        <div className='main-container-header'>
          <div className='main-container-genre'><h2>{genre}</h2></div>
          <div className='more-contents'>
            <Link to={`/main/more/${genre}`} state={{ genre: genre}} style={{textDecoration: "none", color: "white"}}>
              +더보기
            </Link>
          </div>
        </div>
        <div className='main-slider'>
          <Slider
            dots={false}
            slidesToShow={6}
            slidesToScroll={6}
          >
            {movies.map((item) => {
              if(item.genre === genre || genre === '전체'){
                if(check < 20){
                  check += 1;
                  return (
                    <MovieM
                      title={item.name}
                      poster_path={item.image}
                      genres={item.genreList}
                      id={item.id}
                    />
                  );
                }
              }
            })}
          </Slider>
        </div>
      </div>
    </>
  );
}

export default MainContainer;