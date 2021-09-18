import React from 'react'
import { connect } from 'react-redux'
import { Modal, Button, Form } from 'react-bootstrap'
import { useState } from 'react'
import { createPlayList, removeNewPlayListAlert } from '../../actions/playListReducer-Actions'



const reduxStateToProps = state => state
const DispatchsToProps = (dispatch) => ({
    createPlayListToDispatch: (payload) => dispatch(createPlayList(payload)),
    removeAlert: ()=>dispatch(removeNewPlayListAlert())

})


function ModalPlaylist({ show, handleClose, createPlayListToDispatch, removeAlert, ...props }) {
    const [playListName, setPlayListName] = useState('')

    const sendNewPlayListToStore = () => {
        createPlayListToDispatch(playListName)
        handleClose()
        setTimeout(()=>removeAlert(),3000)

    }

    return (
        <Modal show={show} onHide={handleClose} style={{ zIndex: 10000 }}>
            <Modal.Header closeButton>
                <Modal.Title>Create a playlist</Modal.Title>
            </Modal.Header>
            <Modal.Body>Woohoo, you're creating a playlist!!!</Modal.Body>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>New playlist name:</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter playlist name"
                            onChange={(e) => {
                                setPlayListName(e.target.value)
                            }} 
                        />
                        <Form.Text className="text-muted">
                            Tip: Be cold add a creative name
                        </Form.Text>
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button type='submit' variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={(e) => sendNewPlayListToStore()}>
                    Create playlist
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default connect(reduxStateToProps,DispatchsToProps)(ModalPlaylist)
