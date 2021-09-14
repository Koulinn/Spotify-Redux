import React from 'react'
import PlayerBar from './PlayerBar'
import PlayerControls from './PlayerControls'

function Player() {
    return (
        <div id="footer-player" className="d-flex flex-column justify-content-center align-items-center px-2">
            <PlayerControls></PlayerControls>
            <PlayerBar></PlayerBar>     
        </div>
    )
}

export default Player
