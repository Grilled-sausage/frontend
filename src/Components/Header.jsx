import React from 'react'
import mainLogo from "./logo.svg";

import "./Header.css";

export default function Header(){
    return(
        <div className='header-container'>
            <div className='header-wrap'>
                <div className='header-top-wrap'>
                    <img className="logo" src={mainLogo}/>
                    <ul>
                        <li className='header-center'>
                            평가하기
                        </li>
                        <li className='header-right'>
                            완료
                        </li>
                    </ul>
                </div>
            </div>
            {/* <div className='header-bottom-wrap'>
                <div className='menuBar'>
                    <ul>
                        <li className='movieTab'>영화</li>
                        <li className='personTab'>감독/배우</li>
                    </ul>
                </div>
            </div> */}
        </div>
    );
}