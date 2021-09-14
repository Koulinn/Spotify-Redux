import React from 'react'

function SideControl() {
  return (
    <div id="footer-side-controls" className="d-flex justify-content-end align-items-center">
      <div id="footer-side-controls-wrapper" className="d-flex justify-content-end align-items-center">

        <div id="queue" className="icon-target-area mx-1">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M8.5 8L5.5 9.73205V6.26795L8.5 8Z" fill="white" />
            <line x1="11" y1="8" x2="19" y2="8" stroke="white" />
            <line x1="5.5" y1="12.5" x2="19" y2="12.5" stroke="white" />
            <line x1="5.5" y1="16.5" x2="19" y2="16.5" stroke="white" />
          </svg>
        </div>
        {/* Problem here need to change icon */}
        <div id="pairingDevice" className="icon-target-area mx-1">
          <svg src="http://www.w3.org/2000/svg" version="1.1"
            viewBox="0 0 470 470" enableBackground="new 0 0 470 470">
            <g>
              <path
                d="M253.5,306.444c4.143,0,7.5-3.358,7.5-7.5s-3.357-7.5-7.5-7.5H16.113c-0.593,0-1.113-0.521-1.113-1.114V16.114   C15,15.521,15.521,15,16.113,15h361.773c0.593,0,1.113,0.521,1.113,1.114v132.001c0,4.142,3.357,7.5,7.5,7.5s7.5-3.358,7.5-7.5   V16.114C394,7.229,386.771,0,377.887,0H16.113C7.229,0,0,7.229,0,16.114V290.33c0,8.885,7.229,16.114,16.113,16.114h135.193v45.295   h-57.67c-4.143,0-7.5,3.358-7.5,7.5s3.357,7.5,7.5,7.5H253.5c4.143,0,7.5-3.358,7.5-7.5s-3.357-7.5-7.5-7.5h-10.807v-45.295H253.5z    M227.693,351.739h-61.387v-45.295h61.387V351.739z" />
              <path
                d="m253.5,240.614h-216c-4.143,0-7.5,3.358-7.5,7.5s3.357,7.5 7.5,7.5h216c4.143,0 7.5-3.358 7.5-7.5s-3.357-7.5-7.5-7.5z" />
              <path
                d="m453.887,170.614h-161.774c-8.885,0-16.113,7.229-16.113,16.114v267.159c0,8.885 7.229,16.114 16.113,16.114h161.773c8.885,0 16.113-7.229 16.113-16.114v-267.159c0.001-8.886-7.228-16.114-16.112-16.114zm-162.887,45h164v179.386h-164v-179.386zm1.113-30h161.773c0.593,0 1.113,0.521 1.113,1.114v13.886h-163.999v-13.886c0-0.594 0.521-1.114 1.113-1.114zm161.774,269.386h-161.774c-0.593,0-1.113-0.521-1.113-1.114v-43.886h164v43.886c0,0.593-0.521,1.114-1.113,1.114z" />
              <path
                d="m388,425h-30c-4.143,0-7.5,3.358-7.5,7.5s3.357,7.5 7.5,7.5h30c4.143,0 7.5-3.358 7.5-7.5s-3.357-7.5-7.5-7.5z" />
            </g>
          </svg>
        </div>

        <div id="volumeMute-icon">
          <div className="icon-target-area">
            <svg role="presentation" height="16" width="16" aria-label="Volume medium" id="volume-icon"
              viewBox="0 0 16 16">
              <path
                d="M0 11.032v-6h2.802l5.198-3v12l-5.198-3H0zm7 1.27v-8.54l-3.929 2.27H1v4h2.071L7 12.302zm4.464-2.314q.401-.925.401-1.956 0-1.032-.4-1.957-.402-.924-1.124-1.623L11 3.69q.873.834 1.369 1.957.496 1.123.496 2.385 0 1.262-.496 2.385-.496 1.123-1.369 1.956l-.659-.762q.722-.698 1.123-1.623z">
              </path>
            </svg>
          </div>
        </div>

        <div id="volume-bar-outer-wrapper" className="d-flex">
          <div id="decrease-vol-BTN"></div>
          <div id="volume-bar-wrapper">
            <div id="volume-progress-bar"></div>
          </div>
          <div id="increase-vol-BTN"></div>

        </div>

      </div>

    </div>
  )
}

export default SideControl
