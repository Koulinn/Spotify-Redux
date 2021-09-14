import React from 'react'

function PlayerBar() {
    return (
        <div id="track-bar" className="d-flex justify-content-between w-100 align-items-center pt-2">
          <div className="timeInitial pr-2">
            <span className="mod-font-size-small">0:00</span>
          </div>
          <div className="bar-outer-wrapper">
            <div id="progress-bar-wrapper">
              <div id="progress-bar"></div>
              <div className="progress-bar-indicator"></div>
            </div>
          </div>
          <div className="timeRemaining pl-2">
            <span className="mod-font-size-small">3:48</span>
          </div>
        </div>
    )
}

export default PlayerBar
