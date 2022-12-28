import React from "react";
import { useState } from "react";
import WantWatch from "./WantWatch";
import LikedActor from "./LikedActor";
import LikedDirector from "./LikedDirector";
import MainHeader from "../Components/MainHeader";
import axios from "axios";
import { SERVER_URL } from "../Components/Server";

import './Mypage.css';
import Rated from "./Rated";


function Mypage() {
  const [state, setState] = useState(0);
  const onUnregister = () => {
    axios.delete(`${SERVER_URL}/api/user/info`, {
      headers: {
        Authorization: localStorage.getItem("Authorization")
      }
    }).then((res) => {
      localStorage.removeItem("Authorization");
      window.location.replace('/');
    }).catch((Error) => {window.alert("작품과 배우/감독에 대한 평가가 없어야 탈퇴할 수 있습니다.")})
  }

  const onLogout = () => {
    if(window.confirm("로그아웃 하시겠습니까?")){
      localStorage.removeItem("Authorization");
      window.location.replace('/');
    }
  }

  return (
    <>
      <MainHeader />
      <div className="mypage-body">
        <div className='sidebar'>
          <div className='menu'>
            <ul>
              <li className={state === 0 ? 'showPage' : 'hiddenPage'} onClick={() => setState(0)}>평가한 작품</li>
              <li className={state === 1 ? 'showPage' : 'hiddenPage'} onClick={() => setState(1)}>보고 싶어요</li>
              <li className={state === 2 ? 'showPage' : 'hiddenPage'} onClick={() => setState(2)}>좋아요한 배우</li>
              <li className={state === 3 ? 'showPage' : 'hiddenPage'} onClick={() => setState(3)}>좋아요한 감독</li>
              <li style= {{fontSize: "20px", color: "#ffa500"}} onClick={onLogout}>로그아웃</li>
              <li style= {{fontSize: "20px", color: "#ffa500"}} onClick={onUnregister}>회원탈퇴</li>
            </ul>
          </div>
        </div>
        <div className="center">
          {state === 0 && <Rated />}
          {state === 1 && <WantWatch />}
          {state === 2 && <LikedActor />}
          {state === 3 && <LikedDirector />}
        </div>
      </div>
    </>
  );
}


export default Mypage;