import React from 'react'
import { Accordion, Card, Button } from 'react-bootstrap'

function AccordionBody({accordionEvent, playLists, playlistName, ...props}) {
    return (
        <Card>
            <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey={accordionEvent +1}>
                    {playlistName}
                   
                </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey={accordionEvent +1}>
                
                <ul className="text-dark playListMenu mt-3">{playLists[playlistName].map((music, i)=> <li>{music.title}</li>)}</ul>
                
               
            </Accordion.Collapse>
        </Card>
    )
}

export default AccordionBody
