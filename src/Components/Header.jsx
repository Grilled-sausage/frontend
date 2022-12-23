import React from 'react'
import mainLogo from "./logo.svg";
import { Link } from "react-router-dom";

import "./Header.css";

export default function Header() {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-logo">
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
    </>
  );

}