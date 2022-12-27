import React from 'react'
import mainLogo from "./logo.svg";
import { Link } from "react-router-dom";

import "./Header.css";

export default function Header() {
  return (
    <>
      <div className='navbar-container'>
        <nav className="intro-navbar">
          <div className="navbar-helper">
            <img src={mainLogo} alt="logo" />
          </div>

          <div className="navbar-title">
            평가하기
          </div>

          <div className="navbar-submit">
            <Link className="main-link" to="/main">
              완료
            </Link>
          </div>
        </nav>
      </div>
    </>
  );

}