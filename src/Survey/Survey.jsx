import React, {useState} from 'react'
import {movieDummy} from "../movieDummy";
import { personDummy } from '../personDummy';
import Movie from './Movie';
import Person from './Person';

import './Survey.css';

export default function Survey(){
    const [state, setState] = useState(true);

    return(
        <div>
            <div className='menuBar-wrap'>
                <div className='menuBar'>
                    <ul>
                        <li className={state === true ? 'movieTab' : 'hiddenTab'} onClick={() => setState(true)}>영화</li>
                        <li className={state === false ? 'personTab' : 'hiddenTab'} onClick={() => setState(false)}>감독/배우</li>
                    </ul>
                </div>
            </div>
            {state && <div className='survey-movie'>
                {movieDummy.results.map((item) => {
                    return(
                        <Movie 
                            title={item.title}
                            poster_path={item.poster_path}
                            vote_average={item.vote_average}
                        />
                    );
                })}
            </div>}
            {!state && <div className='survey-person'>
                {personDummy.results.map((item) => {
                    return(
                        <Person 
                            name={item.name}
                            profile_path={item.profile_path}
                        />
                    );
                })}
            </div>}
        </div>
    );
}