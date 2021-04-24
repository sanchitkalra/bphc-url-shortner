import React from 'react'
import { Link } from 'react-router-dom'

function LinkForward () {
    return(
        <p>Oops, that page wasn't found on this server, go the <Link to='/dashboard'>Dashboard</Link> maybe?</p>
    )
}

export default LinkForward