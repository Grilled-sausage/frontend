import './MainContainer.css';
import React, { Component } from 'react';
import { movieDummy } from '../movieDummy';
import MovieM from './MovieM';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

function MainContainer({genre}) {
  return (
    <>
      <div className='main-container'>
        <div className='main-container-header'>
          <div className='main-container-genre'><h2>{genre}</h2></div>
          <div className='more-contents'><a>+더보기</a></div>
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
                    poster_path={item.poster_path}
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