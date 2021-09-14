import React, {useEffect} from 'react'
import Sections from './Sections'
import TopBar from './TopBarComp/TopBar'

export default function MainPage(props) {

    useEffect(()=> props.setpathName(props.location.pathname))
    return (
        <main className="container-fluid p-0 m-0">
            <TopBar></TopBar>
            <Sections setCurrentMusic={props.setCurrentMusic} sectionTitle="Chill"></Sections>
            <Sections setCurrentMusic={props.setCurrentMusic} sectionTitle="Summer"></Sections>
            <Sections setCurrentMusic={props.setCurrentMusic} sectionTitle="Party"></Sections>
            <Sections setCurrentMusic={props.setCurrentMusic} sectionTitle="Weekend"></Sections>
        </main>
    )
}
