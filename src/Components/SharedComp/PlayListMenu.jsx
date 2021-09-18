import React from 'react'
import { Accordion, Card, Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import { addMusicToPlaylist, removeNewPlayListAlert } from '../../redux/actions/playListReducer-Actions'
import { useState } from 'react'


const reduxStateToProps = state => state
const DispatchsToProps = (dispatch) => ({
    addMusicToReduxPlayList: (payload) => dispatch(addMusicToPlaylist(payload)),
    removeAlert: ()=>dispatch(removeNewPlayListAlert())

})

function PlayListMenu({ playLists, show, setShow, track, addMusicToReduxPlayList, removeAlert, ...props }) {



    const getPlayLists = () => {
        const playListStoreKeys = Object.keys(playLists)
        const playListKeys = playListStoreKeys.filter(key => Array.isArray(playLists[key]))
        return playListKeys ? playListKeys : []
    }

    const callActionFromDispatchs = (playListName) =>{
        addMusicToReduxPlayList({
            playListName: playListName,
            newMusic: track
        })
        setTimeout(()=>removeAlert(),3000)


    }


    return (
        <ul className={show ? "playListMenu" : 'd-none'}>
            {getPlayLists().map((playListName, i) =>
                <li key={i} className={'playListMenu my-3'} onClick={()=>callActionFromDispatchs(playListName)}> {playListName}</li>
            )}
        </ul>
    )
}

export default connect(reduxStateToProps, DispatchsToProps)(PlayListMenu)