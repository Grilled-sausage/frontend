import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Intro from "./Intro/Intro";
import Login from "./Login/Login";

function App(){
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Intro />}></Route>
                    <Route path="/login" element={<Login />}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;