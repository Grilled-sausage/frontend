  import React from "react";
import mainLogo from "../assets/mainLogo.svg";
import kakaoLogin from "../assets/kakaoLogin.svg";
import appleLogin from "../assets/appleLogin.svg";
import naverLogin from "../assets/naverLogin.svg";

import { KAKAO_AUTH_URL } from "../Components/OAuth";

import "./Login.css";

function Login() {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div className="login-container">
      <img className="login-logo" src={mainLogo} />
      <h1 className="login-title">로그인</h1>

      <form onSubmit={handleSubmit} className="login-form">
        <h3>이메일</h3>
        <input></input>
        <h3>비밀번호</h3>
        <input type="password"></input>
        <button id="fake-login">로그인</button>
      </form>
      
      

      <div className="login-social">
        <span>소셜 로그인</span>
        <ul className="login-icons">
          <li>
            <button onClick={() => window.location.replace(KAKAO_AUTH_URL)}>
              <img src={kakaoLogin} />
            </button>
          </li>
          <li><img src={appleLogin} /></li>
          <li><img src={naverLogin} /></li>
        </ul >
      </div>
    </div >
  );
}

export default Login;