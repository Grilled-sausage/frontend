import { useState } from "react";
import { Link } from "react-router-dom";
import introLogo from "./intro-logo.svg";
import React from 'react';
import introLogin from '../assets/introLogo.svg';

import "./Intro.css"

function Intro() {
  return (
    <div className="container">
      <div className="body">
        <img className="logo" src={introLogo} />
        <div className="intro-title">
          <h2>당신을 위한 영화 추천 및 평가 사이트 </h2>
        </div>
        <Link className="login-link" to="/login">
          <img src={introLogin} />
        </Link>
      </div>
    </div>
  );
}

export default Intro;