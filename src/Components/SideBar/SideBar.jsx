import React from 'react'
import MainLogo from '../MainLogo'
import MenuSideBar from './MenuSideBar'
import SidePlayListMenu from './SidePlayListMenu'
import SideFavouriteSongsList from'./SideFavouriteSongsList'

export default function SideBar() {
    return (
        <nav id="nav-sideBar" className="d-flex flex-column mod-navBar">
            <MainLogo></MainLogo>
            <MenuSideBar></MenuSideBar>
            <hr></hr>
            <SidePlayListMenu></SidePlayListMenu>
            <SideFavouriteSongsList></SideFavouriteSongsList> 
        </nav>
    )
}
