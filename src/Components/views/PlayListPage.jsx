import React from 'react'
import { connect } from 'react-redux'
import TopBar from '../TopBarComp/TopBar'
import { Accordion, Card, Button } from 'react-bootstrap'
import AccordionBody from '../SharedComp/AccordionBody'


const reduxStateToProps = state => state

function PlayListPage({ playLists, ...props }) {
    console.log(props, 'playlist page')

    const getPlayLists = () => {
        const playListStoreKeys = Object.keys(playLists)
        const playListKeys = playListStoreKeys.filter(key => Array.isArray(playLists[key]))
        return playListKeys ? playListKeys : []
    }
    return (
        <main className="container-fluid p-0 m-0">
            <TopBar />
            <Accordion className="mt-5 px-4" defaultActiveKey="0">
                {getPlayLists().length > 0 ? getPlayLists().map((playList, i) =>
                    <AccordionBody key={i} accordionEvent={i} playlistName={playList} playLists={playLists} {...props}/>
                ) : <h6 className="">create </h6>}

            </Accordion>
        </main>
    )
}

export default connect(reduxStateToProps)(PlayListPage)

