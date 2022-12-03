import { useState } from "react";
import { Link } from "react-router-dom";
import introLogo from "./intro-logo.svg";

import "./Intro.css"

function Intro(){
    return (
        <div>
            <div className="header">
                <ul>
                    <li className="login-li">
                        <Link className="login-link" to="/login">
                            <span>로그인</span>
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="body">
                <img className="logo" src={introLogo}/>
            </div>
        </div>
    );
}

export default Intro;