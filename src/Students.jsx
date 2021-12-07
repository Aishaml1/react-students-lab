import React from 'react'
import Scores from './Scores'
import './index.css';

const student = (props) => {
    return (
        <>
            <div className='StudentsContainer'>
                <h1 style={{ color: "blue" }} >{props.name}</h1>
                <p>{props.bio}</p>
            </div>
            <Scores
                scores={props.scores}
            />
        </>
    )
}

export default student