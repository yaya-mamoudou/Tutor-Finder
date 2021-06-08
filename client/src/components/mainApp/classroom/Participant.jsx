import React, { useState, useEffect, useContext } from 'react';
import { Modal, Button } from 'react-bootstrap';
import Users from './Users';
import ClassContext from '../../../context/classroom/ClassContext';
import AuthContext from '../../../context/auth/AuthContext';

function Participant(props) {
  const authContext = useContext(AuthContext);
  const { isAdd, participants, myCreatedClass, allMyClasses } = authContext;
  const [data, setData] = useState();

  useEffect(async () => {
    isAdd();
    myCreatedClass();
  }, [allMyClasses]);

  useEffect(async () => {
    try {
      await setData(participants.getUser);
    } catch (err) {
      console.error(err);
    }
  }, [participants]);
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
        <h4></h4>
        {typeof data === 'object' &&
          data.map((user) => (
            <div>
              <br />
              <Users user={user} />
            </div>
          ))}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={props.onHide}>
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default Participant;
