import { useState } from "react";
import { Link } from "react-router-dom";
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
                <Link className="survey-link" to="/survey">
                    <button onClick={() => window.open(KAKAO_AUTH_URL, '_blank' ,"width=430,height=500,location=no,status=no,scrollbars=yes")}>
                        <img className="kakao-img" src={kakaoLogin}/>
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default Login;