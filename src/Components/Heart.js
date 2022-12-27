import { useState } from "react";
import React from 'react';

const defaultColor = '#8A8A8A';
const clickedColor = '#DB6D4B';

function Heart ({func, flag}) {
  
  const [active, setActive] = useState(flag);
  const handleClick = () => {
    if((active) === true){
      if((flag) === true){
        if(window.confirm("몰봐!! 해당 배우/감독 좋아요를 취소할래요?")){
          func(active);
        }
      }
      else{
        setActive((current) => !current);
        func(active);
      }
    }
    else{
      setActive((current) => !current);
      func(active);
    }
  };

  return (
    <button
      onClick={handleClick}
    >
      <svg fill={active ? clickedColor : defaultColor} width="30" height="25" viewBox="0 0 30 25">
        <path d="M15 25C14.8027 25.0012 14.6069 24.9641 14.4243 24.8909C14.2416 24.8176 14.0753 24.7098 13.9352 24.5735L2.28169 13.132C0.819943 11.6837 0 9.72837 0 7.6907C0 5.65302 0.819943 3.69768 2.28169 2.24937C3.75491 0.808903 5.75049 0 7.83096 0C9.91143 0 11.907 0.808903 13.3802 2.24937L15 3.83765L16.6198 2.24937C18.0931 0.808903 20.0886 0 22.1691 0C24.2496 0 26.2451 0.808903 27.7183 2.24937C29.1801 3.69768 30 5.65304 30 7.6907C30 9.72836 29.1801 11.6837 27.7183 13.132L16.0649 24.5735C15.9248 24.7098 15.7585 24.8176 15.5758 24.8908C15.3931 24.9641 15.1974 25.0011 15 25L15 25Z"/>
      </svg>
    </button>
  );
}

export default Heart;