import { BrowserRouter, Routes, Route } from "react-router-dom";
import Intro from "./Intro/Intro";
import Login from "./Login/Login";
import Survey from "./Survey/Survey";
import Header from "./Components/Header";
import Kakao from "./Login/Kakao";
import Main from "./Main/Main";
import Mypage from "./Mypage/Mypage";
import More from "./Main/More";
import MovieInfo from "./MovieInfo/MovieInfo";
import Search from "./Search/Search";

import "./App.css";
import React from 'react';

import ScrollToTop from "./Components/ScrollToTop";

function App(){
    return (
        <div className="App">
            <BrowserRouter>
                <ScrollToTop />
                <Routes>
                    <Route path="/" element={<Intro />}></Route>
                    <Route path="/login" element={<Login />}></Route>
                    <Route path="/survey" element={<><Header /> <Survey /></>}></Route>
                    <Route path="/oauth/callback/kakao" element={<Kakao />}></Route>
                    <Route path="/main" element={<><Main /></>}></Route>
                    <Route path="/main/more/*" element={<><More /></>}></Route>
                    <Route path="/mypage" element={<><Mypage /></>}></Route>
                    <Route path="/movie-info/*" element={<><MovieInfo /></>}></Route>
                    <Route path="/search/*" element={<><Search /></>}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;