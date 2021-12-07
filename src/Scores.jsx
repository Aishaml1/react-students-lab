import React from 'react'

const Score = (props) => {
    const scores = props.scores.map((ele, index) => {
        return (
        <div className = 'ScoreContainer'>
        <p> <b> Date: </b> {ele.date} <b> Score: </b> {ele.score}</p>
      </div>
        )
    })

    return (
        <div>
            {scores}
        </div>
    )
}

export default Score