import React from 'react'
import PlayerBar from './PlayerBar'
import PlayerControls from './PlayerControls'
import { useEffect, useState } from 'react';

function Player() {
    const [currentMusicLength, setCurrentMusicLength ] = useState(0)
    const [musicDuration, setMusicDuration ] = useState(0)
    const [musicCurrentTime, setMusicCurrentTime ] = useState(0)
    return (
        <div id="footer-player" className="d-flex flex-column justify-content-center align-items-center px-2">
            <PlayerControls currentMusicLength={currentMusicLength} setCurrentMusicLength={setCurrentMusicLength} musicDuration={musicDuration} setMusicDuration={setMusicDuration} musicCurrentTime={musicCurrentTime} setMusicCurrentTime={setMusicCurrentTime}></PlayerControls>
            <PlayerBar currentMusicLength={currentMusicLength} setCurrentMusicLength={setCurrentMusicLength} musicDuration={musicDuration} setMusicDuration={setMusicDuration} musicCurrentTime={musicCurrentTime} setMusicCurrentTime={setMusicCurrentTime}></PlayerBar>     
        </div>
    )
}

export default Player
