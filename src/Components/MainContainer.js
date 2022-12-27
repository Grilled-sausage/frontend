import './MainContainer.css';
import React, { Component } from 'react';
import { movieDummy } from '../movieDummy';
import MovieM from './MovieM';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import { Link } from 'react-router-dom';

const IMG_BASE_URL = "https://image.tmdb.org/t/p/w1280/";


function MainContainer({genre}) {
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
            {movieDummy.results.map((item) => {
              return (
                  <MovieM
                    title={item.title}
                    poster_path={IMG_BASE_URL + item.poster_path}
                    vote_average={item.vote_average}
                  />
              );
            })}
          </Slider>
        </div>
      </div>
    </>
  );
}

export default MainContainer;