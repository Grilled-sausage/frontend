import React from "react";
import mainLogo from "./logo.svg";
import kakaoLogin from "./kakao-login.png";
import { KAKAO_AUTH_URL } from "../Components/OAuth";

import "./Login.css";

function Login(){
    return (
        <div className="container">
            <div className="header">
                <ul>
                    <li className="logo-li">
                        <img className="logo" src={mainLogo}/>
                    </li>
                </ul>
            </div>
            <div className="body">
                <button onClick={() => window.location.replace(KAKAO_AUTH_URL)}>
                    <img className="kakao-img" src={kakaoLogin}/>
                </button>
            </div>
        </div>
    );
}

export default Login;