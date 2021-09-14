import React from 'react'
import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import MainPage from './MainPage'
import PlayerBottom from './playerComps/PlayerBottom'
import AlbumPage from './AlbumPage'
import ArtistPage from './ArtistPage'
import SideBar from './SideBar/SideBar'
import { useState, useEffect } from 'react'
import Search from './TopBarComp/Search'

function Home(props) {
    const [pathName, setpathName] = useState(window.location.pathname)
    const [currentMusic, setCurrentMusic] = useState(false)
    return (
        <Container id="allContentWrapper" className={pathName.includes('album') ? "p-0 d-flex BGAlbumPage" : "p-0 d-flex homeBG"} fluid>

            <Router>
                <SideBar></SideBar>

                <Route path="/" exact render={(routerProps) => <MainPage {...routerProps} setCurrentMusic={setCurrentMusic} setpathName={setpathName}></MainPage>}></Route>
                <Route path="/albumPage/:albumID" exact render={(routerProps) => <AlbumPage setCurrentMusic={setCurrentMusic} {...routerProps} setpathName={setpathName}></AlbumPage>}></Route>
                <Route path="/artistPage/" exact render={(routerProps) => <ArtistPage setCurrentMusic={setCurrentMusic} {...routerProps} setpathName={setpathName}></ArtistPage>}></Route>
                <Route path="/search" exact render={(routerProps) => <Search {...routerProps} setCurrentMusic={setCurrentMusic} setpathName={setpathName}></Search>}></Route>

                <PlayerBottom currentMusic={currentMusic}></PlayerBottom>
            </Router>

        </Container >
    );
}

export default Home