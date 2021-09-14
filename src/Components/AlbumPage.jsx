import React from 'react'
import Sections from './Sections'
import AlbumCover from './SharedComp/AlbumCover'
import TopBar from './TopBarComp/TopBar'
import { withRouter } from 'react-router'
import { useState, useEffect } from 'react'
import AlbumMiddleSection from './AlbumMiddleSection'
import TrackHeader from './TrackHeader'
import './albumPage.css'

function AlbumPage(props) {
    const [currentTrackList, setCurrenTrackList] = useState('')

    useEffect(()=> props.setpathName(props.location.pathname),[])
    return (
        <main className="container-fluid p-0 m-0">
            <TopBar></TopBar>
            <AlbumCover getTrackList={setCurrenTrackList} currentAlbumID={props.match.params.albumID}></AlbumCover>
            <AlbumMiddleSection></AlbumMiddleSection>
            <TrackHeader currentAlbumID={props.match.params.albumID}></TrackHeader>
            <Sections setCurrentMusic={props.setCurrentMusic} sectionTitle="Chill"></Sections>
            <Sections setCurrentMusic={props.setCurrentMusic} sectionTitle="Summer"></Sections>
            <Sections setCurrentMusic={props.setCurrentMusic} sectionTitle="Party"></Sections>
            <Sections setCurrentMusic={props.setCurrentMusic} sectionTitle="Weekend"></Sections>
        </main>
    )
}

export default withRouter(AlbumPage)
