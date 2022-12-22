import React, {useState} from 'react'
import MovieRBox from '../Components/MovieRBox';
import PersonRBox from '../Components/PersonRBox';

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
            {state && <MovieRBox />}
            {!state && <PersonRBox />}
        </div>
    );
}