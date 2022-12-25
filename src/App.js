import { BrowserRouter, Routes, Route } from "react-router-dom";
import Intro from "./Intro/Intro";
import Login from "./Login/Login";
import Survey from "./Survey/Survey";
import Header from "./Components/Header";
import Main from "./Main/Main";
import Mypage from "./Mypage/Mypage";
import More from "./Main/More";
import MovieInfo from "./MovieInfo/MovieInfo";

import "./App.css";
import MainHeader from "./Components/MainHeader";
import Rated from "./Mypage/Rated";

function App(){
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Intro />}></Route>
                    <Route path="/login" element={<Login />}></Route>
                    <Route path="/survey" element={<><Header /> <Survey /></>}></Route>
                    <Route path="/main" element={<><MainHeader /><Main /></>}></Route>
                    <Route path="/main/more" element={<><MainHeader /><More /></>}></Route>
                    <Route path="/mypage" element={<><MainHeader /><Mypage /></>}></Route>
                    <Route path="/movie-info" element={<><MainHeader /><MovieInfo /></>}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;