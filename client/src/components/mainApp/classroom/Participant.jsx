import React from 'react'
import { Modal, Button} from 'react-bootstrap';
import Users from './Users';
function Participant(props) {
    return (
        <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
           Add Participants
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Users</h4>
         <Users />
         <Users />
         <Users />
         <Users />
        </Modal.Body>
        <Modal.Footer>
          <Button variant='danger' onClick={props.onHide}>Save</Button>
        </Modal.Footer>
      </Modal>
    )
}

export default Participant
