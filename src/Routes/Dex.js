import React from 'react'
import { withRouter } from 'react-router-dom'

function Dex(props) {

    const handleClick = () => {
        props.history.push('/replays')
    }

    return (
        <div>
            <h1>Pokedex</h1>
            <button onClick={handleClick}>replays</button>
        </div>
    )
}

export default withRouter(Dex)