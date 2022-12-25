import './MainHeader.css';
import mainLogo from "../Components/logo.svg";
import search from '../assets/search.svg';
import myPage from '../assets/myPage.svg';
import { Link } from 'react-router-dom';
import React, { useState } from 'react'

// 메인페이지, 더보기페이지, 작품정보페이지, 마이페이지 공통헤더
function MainHeader() {

  return (
    <>
      <div className='navbar-container'>
        <nav className="navbar">
          <div className="navbar-helper">
          </div>

          <div className="main-navbar-logo">
            <Link to="/main">
              <img src={mainLogo} alt="logo" />
            </Link>
          </div>
          <ul className="navbar-menu">
            <form>
              <input
                id='search-bar'
                type="search"
                name="search"
                pattern=".*\S.*"
                placeholder="제목, 배우, 감독을 검색하세요"
                autoComplete="off"
                required
              />
              <button className="search-btn" type="submit">
                <img
                  id='search-icon'
                  src={search}
                  alt="search" />
              </button>
            </form>
            <li className='icon-list'>
              <Link to="/mypage">
                <img id='mypage-icon' src={myPage} alt="myPage" />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default MainHeader;