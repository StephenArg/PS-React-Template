import React, {useEffect} from 'react'
import {withRouter} from 'react-router-dom'

function Replays(props) {

    useEffect(() => {
        
    })

    const handleClick = () => {
        props.history.push('/forum')
    }

    return (
        <div>
            <h2>Replays</h2>
            <button onClick={handleClick}>forum</button>
        </div>
    )
}

export default withRouter(Replays)