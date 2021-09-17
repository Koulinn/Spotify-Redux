import React from 'react'
import { connect } from 'react-redux'
import TopBar from '../TopBarComp/TopBar'
import { Accordion, Card, Button } from 'react-bootstrap'


const reduxStateToProps = state => state

function PlayListPage(props ) {
    console.log(props, 'playlist page')

    const getPlayLists = () => {
        const playListStoreKeys = Object.keys(props.playLists)
        return playListStoreKeys ? playListStoreKeys : []
    }
    return (
        <main className="container-fluid p-0 m-0">
            <TopBar />
            <Accordion className="mt-5 px-4" defaultActiveKey="0">
                {getPlayLists().length > 0? getPlayLists().map((playList, i) =>
                    <Card>
                        <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                {playList}
                            </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body>Hello! I'm the body</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                ) : <h6 className="">create </h6>}

            </Accordion>
        </main>
    )
}

export default connect(reduxStateToProps)(PlayListPage)

