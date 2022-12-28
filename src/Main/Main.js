import './Main.css';
import React from 'react';
import MainHeader from '../Components/MainHeader';
import MainContainer from '../Components/MainContainer';

function Main() {
  return (
    <>
    <MainHeader />
    <div className='main-body'>
      <MainContainer 
        genre={'전체'}
      />
      <MainContainer 
        genre={'액션'}
      />
      <MainContainer 
        genre={'로맨스'}
      />
      <MainContainer 
        genre={'스릴러'}
      />
      <MainContainer 
        genre={'판타지'}
      />
      <MainContainer 
        genre={'sf'}
      />
      <MainContainer 
        genre={'드라마'}
      />
      <MainContainer 
        genre={'가족'}
      />
      <MainContainer 
        genre={'코미디'}
      />
      <MainContainer 
        genre={'범죄'}
      />
    </div>
    </>
  );
}

export default Main;