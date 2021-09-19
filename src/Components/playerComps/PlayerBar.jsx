import React from 'react'
import { useEffect, useState } from 'react';
import { connect } from 'react-redux'

const mapStateToProps = (state) => state

function PlayerBar({currentMusicLength, musicDuration, musicCurrentTime}) {

  return (
    <div id="track-bar" className="d-flex justify-content-between w-100 align-items-center pt-2">
      <div className="timeInitial pr-2 d-flex align-items-center">
        <span className="mod-font-size-small">{isNaN(musicCurrentTime)? '0:00' : musicCurrentTime}</span>
      </div>
      <div className="bar-outer-wrapper">
        <div class="slidecontainer d-flex align-items-center">
          <input type="range" min="1" max="100" value={currentMusicLength} class="slider" id="myRange"/>
        </div>
      </div>
      <div className="timeRemaining pl-2 d-flex align-items-center">
        <span className="mod-font-size-small"> 0:{musicDuration}</span>
      </div>
    </div>
  )
}

export default connect(mapStateToProps)(PlayerBar)
