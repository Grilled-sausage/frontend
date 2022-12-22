import React from "react";

const IMG_BASE_URL = "https://image.tmdb.org/t/p/w1280/";

export default function Person({name, profile_path}){
    return(
        <div className="person-container">
            <img src={IMG_BASE_URL + profile_path} alt="인물사진" />
            <div className="person-info">
                <h4>{name}</h4>
            </div>
        </div>
    );
}