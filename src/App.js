import { BrowserRouter, Routes, Route } from "react-router-dom";
import Intro from "./Intro/Intro";
import Login from "./Login/Login";
import Survey from "./Survey/Survey";
import Header from "./Components/Header";

import "./App.css";

function App(){
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Intro />}></Route>
                    <Route path="/login" element={<Login />}></Route>
                    <Route path="/survey" element={<><Header /> <Survey /></>}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;