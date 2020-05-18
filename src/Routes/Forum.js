import React, {useEffect} from 'react'
import {withRouter} from 'react-router-dom'

function Forum(props) {

    useEffect(() => {
        console.log(window.location.pathname.slice(5))
    })

    const handleClick = () => {
        props.history.push('/')
    }

    return (
        <div>
            <h2>Forum</h2>
            <button onClick={handleClick}>homepage</button>
        </div>
    )
}

export default withRouter(Forum)