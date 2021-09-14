import React from 'react'
import MusicStats from './MusicStats'
import Player from './Player'
import SideControl from './SideControl'

export default function PlayerBottom({currentMusic}) {
    return (
        <footer id="footer" className="d-flex justify-content-between">
           
            <MusicStats currentMusic={currentMusic}></MusicStats>
            <Player currentMusic={currentMusic}></Player>
            <SideControl></SideControl>
            
        </footer>
    )
}
