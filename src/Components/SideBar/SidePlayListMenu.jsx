import React from 'react'
import { connect } from 'react-redux'
import { playListsReducer } from '../../reducers/playList-reducer'
import { withRouter } from 'react-router'
import { useEffect, useState } from 'react'
import ModalPlaylist from './ModalPlaylist'
import { Alert } from 'react-bootstrap'

const reduxStateToProps = state => state


function SidePlayListMenu({ playLists, ...props }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  return (
    <div className="sub-menu">
      {playLists.isNewPlayList ?
        <Alert variant="success">
          New playlist added successfully!
        </Alert>
        : ''
      }
      <ul className="nav-menu d-flex flex-column mb-0 p-0">
        <li className="d-flex align-items-center w-100">
          <button type="button" className="d-flex align-items-center w-100 p-2" onClick={handleShow}>
            <div className="square d-flex align-items-center justify-content-center p-0 mx-3">
              <svg role="img" height="12" width="12" viewBox="0 0 16 16">
                <path d="M14 7H9V2H7v5H2v2h5v5h2V9h5z"></path>
                <path fill="none" d="M0 0h16v16H0z"></path>
              </svg>
            </div>
            <span> Create Playlist</span>
          </button>
        </li>

        <li className="d-flex align-items-center w-100">
          <button type="button" className="d-flex align-items-center w-100 p-2">
            <div className="square d-flex align-items-center justify-content-center p-0 mx-3">
              <svg role="img" height="12" width="12" viewBox="0 0 16 16">
                <path fill="none" d="M0 0h16v16H0z"></path>
                <path
                  d="M13.797 2.727a4.057 4.057 0 00-5.488-.253.558.558 0 01-.31.112.531.531 0 01-.311-.112 4.054 4.054 0 00-5.487.253c-.77.77-1.194 1.794-1.194 2.883s.424 2.113 1.168 2.855l4.462 5.223a1.791 1.791 0 002.726 0l4.435-5.195a4.052 4.052 0 001.195-2.883 4.057 4.057 0 00-1.196-2.883z">
                </path>
              </svg>
            </div>
            <span>Liked Songs</span>
          </button>
        </li>
      </ul>
      <ModalPlaylist show={show} handleClose={handleClose} />
    </div>
  )
}

export default connect(reduxStateToProps)(withRouter(SidePlayListMenu))
