import React from 'react'
import { Accordion, Card, Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import { addMusicToPlaylist } from '../../actions/playListReducer-Actions'
import { useState } from 'react'


const reduxStateToProps = state => state
const DispatchsToProps = (dispatch) => ({
    addMusicToReduxPlayList: (payload) => dispatch(addMusicToPlaylist(payload))
})

function PlayListMenu({ playLists, show, setShow, ...props }) {



    const getPlayLists = () => {
        const playListStoreKeys = Object.keys(playLists)
        const playListKeys = playListStoreKeys.filter(key => Array.isArray(playLists[key]))
        return playListKeys ? playListKeys : []
    }


    return (
        <ul className={show ? "playListMenu" : 'd-none'}>
            {getPlayLists().map((playListName, i) =>
                <li key={i} className={'playListMenu my-3'}> {playListName}</li>
            )}
        </ul>
    )
}

export default connect(reduxStateToProps, DispatchsToProps)(PlayListMenu)