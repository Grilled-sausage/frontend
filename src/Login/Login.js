import { useState } from "react";
import { Link } from "react-router-dom";
import mainLogo from "./logo.svg";
import kakaoLogin from "./kakao-login.png";

import "./Login.css";

function Login(){
    return (
        <div>
            <div className="header">
                <ul>
                    <li className="logo-li">
                        <img className="logo" src={mainLogo}/>
                    </li>
                </ul>
            </div>
            <div className="body">
                <button>
                    <img className="kakao-img" src={kakaoLogin}/>
                </button>
            </div>
        </div>
    );
}

export default Login;