import React from "react";
import { useState } from "react";
import WantWatch from "./WantWatch";
import LikedActor from "./LikedActor";
import LikedDirector from "./LikedDirector";

import './Mypage.css';
import Rated from "./Rated";


function Mypage() {
  const [state, setState] = useState(0);
  return (
    <div className="mypage-body">
      <div className='sidebar'>
        <div className='menu'>
          <ul>
            <li className={state === 0 ? 'showPage' : 'hiddenPage'} onClick={() => setState(0)}>평가한 작품</li>
            <li className={state === 1 ? 'showPage' : 'hiddenPage'} onClick={() => setState(1)}>보고 싶어요</li>
            <li className={state === 2 ? 'showPage' : 'hiddenPage'} onClick={() => setState(2)}>좋아요한 배우</li>
            <li className={state === 3 ? 'showPage' : 'hiddenPage'} onClick={() => setState(3)}>좋아요한 감독</li>
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
  );
}


export default Mypage;