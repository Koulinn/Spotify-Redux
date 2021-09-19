import React from 'react'
import { connect } from 'react-redux'
import { pauseMusic, playMusic } from '../../redux/actions/index.js'
import { useRef } from 'react'
import { ActionCreators } from 'redux-undo';
import { useEffect, useState } from 'react';


const mapStateToProps = (state) => state

const mapDispatchToProps = (dispatch) => ({
  pauseMusic: () => dispatch(pauseMusic()),
  playMusic: () => dispatch(playMusic()),
  undoCurrentMusic: () => dispatch(ActionCreators.undo()),
  redoCurrentMusic: () => dispatch(ActionCreators.redo())

})


function PlayerControls({
  redoCurrentMusic,
  pauseMusic,
  undoCurrentMusic,
  playMusic,
  setCurrentMusicLength,
  setMusicDuration,
  setMusicCurrentTime,
  ...props
}) {
  const intervalRef = useRef();


  const audioRef = useRef(new Audio(props.playerReducer.present.player.current.preview));
  const isPaused = props.playerReducer.present.player.paused
  const currentMusic = props.playerReducer.present.player.current.preview

  useEffect(() => {
    audioRef.current.src = props.playerReducer.present.player.current.preview
    isPaused ? audioRef.current.pause() : audioRef.current.play()
    isPaused ? clearInterval(intervalRef.current) : musicTimer()
    if (!isPaused){
      setTimeout(() => {
        setMusicDuration(audioRef.current.duration.toFixed())
      }, 300);
    }
  },
  [isPaused, currentMusic]
  )
  
  const musicTimer = () => {
    
    intervalRef.current = setInterval(() => {
      setCurrentMusicLength(parseInt((audioRef.current.currentTime/ audioRef.current.duration)*100));
      setMusicCurrentTime(parseFloat((audioRef.current.currentTime/60).toFixed(2)))
    }, [300]);

  }


  return (
    <div id="player-controls" className="d-flex justify-content-center align-items-center">
      <div id="player-suffle-musics" className="icon-target-area mr-2">
        <svg role="img" height="16" width="16" viewBox="0 0 16 16">
          <path
            d="M4.5 6.8l.7-.8C4.1 4.7 2.5 4 .9 4v1c1.3 0 2.6.6 3.5 1.6l.1.2zm7.5 4.7c-1.2 0-2.3-.5-3.2-1.3l-.6.8c1 1 2.4 1.5 3.8 1.5V14l3.5-2-3.5-2v1.5zm0-6V7l3.5-2L12 3v1.5c-1.6 0-3.2.7-4.2 2l-3.4 3.9c-.9 1-2.2 1.6-3.5 1.6v1c1.6 0 3.2-.7 4.2-2l3.4-3.9c.9-1 2.2-1.6 3.5-1.6z">
          </path>
        </svg>
      </div>
      <div id="player-previous-music" className="icon-target-area mx-2" onClick={() => undoCurrentMusic()}>
        <svg role="img" height="16" width="16" viewBox="0 0 16 16">
          <path d="M13 2.5L5 7.119V3H3v10h2V8.881l8 4.619z"></path>
        </svg>
      </div>
      {isPaused ? <div id="player-play-music" className="play-button d-flex justify-content-center align-items-center mx-2"
        onClick={() => {
          // audioRef.current.src = props.playerReducer.present.player.current.preview
          // audioRef.current.play()
          playMusic()
        }}
      >
        <svg id="play-Icon" role="img" height="16" width="16" viewBox="0 0 16 16">
          <path d="M4.018 14L14.41 8 4.018 2z"></path>
        </svg>
      </div> :
        <div id="player-pause-music" className="d-flex justify-content-center align-items-center mx-2 p-2 " style={{ backgroundColor: 'white', borderRadius: '50%' }}
          onClick={() => {
            // audioRef.current.pause()
            pauseMusic()
          }}
        >
          <svg role="img" height="16" width="16" viewBox="0 0 16 16"><path fill="none" d="M0 0h16v16H0z"></path><path d="M3 2h3v12H3zm7 0h3v12h-3z"></path></svg>
        </div>
      }

      <div id="player-next-music" className="icon-target-area mx-2"
        onClick={() => {
          redoCurrentMusic()
        }}
      >


        <svg role="img" height="16" width="16" viewBox="0 0 16 16">
          <path d="M11 3v4.119L3 2.5v11l8-4.619V13h2V3z"></path>
        </svg>
      </div>
      <div id="player-repeat-music" className="icon-target-area ml-2">
        <svg role="img" height="16" width="16" viewBox="0 0 16 16">
          <path
            d="M5.5 5H10v1.5l3.5-2-3.5-2V4H5.5C3 4 1 6 1 8.5c0 .6.1 1.2.4 1.8l.9-.5C2.1 9.4 2 9 2 8.5 2 6.6 3.6 5 5.5 5zm9.1 1.7l-.9.5c.2.4.3.8.3 1.3 0 1.9-1.6 3.5-3.5 3.5H6v-1.5l-3.5 2 3.5 2V13h4.5C13 13 15 11 15 8.5c0-.6-.1-1.2-.4-1.8z">
          </path>
        </svg>
      </div>

    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(PlayerControls)
