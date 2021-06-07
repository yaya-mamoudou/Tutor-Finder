import React, { useState, useContext, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { Plus } from 'react-bootstrap-icons';
import Participant from './Participant';
import ClassContext from '../../../context/classroom/ClassContext';
import AuthContext from '../../../context/auth/AuthContext';

// import './class.css'
function CreateClassroom(props) {
  const authContext = useContext(AuthContext);
  const {
    isAdd,
    participants,
    storePaticipant,
    storePDATA,
    addToClass,
  } = authContext;

  const [modalShow, setModalShow] = useState(false);
  const [classData, setclassData] = useState({
    coursename: '',
    coursecode: '',
    // particip: [storePDATA],
  });

  const { coursename, coursecode, particip } = classData;

  // const [members, setmembers] = useState();

  const handleChange = (e) => {
    setclassData({ ...classData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // addToClass({ coursename, coursecode, particip });
    console.log(
      'name :' + coursename,
      'code :' + coursecode,
      'members :' + storePDATA
    );

    setclassData({
      coursename: '',
      coursecode: '',
    });
  };

  const addParticipants = () => {
    setModalShow(true);
  };
  return (
    <div className="body">
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Create Classroom
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={(e) => handleSubmit(e)}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Course Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Course Title"
                name="coursename"
                value={coursename}
                onChange={(e) => handleChange(e)}
              />
              <Form.Text className="text-muted">
                We'll share your course to anyone that needs it.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Course Code</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Course Code"
                name="coursecode"
                value={coursecode}
                onChange={(e) => handleChange(e)}
              />
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Button variant="outline-success" onClick={addParticipants}>
                {' '}
                Add Participants
                <Plus size={40} />
              </Button>
              <Participant
                show={modalShow}
                onHide={() => setModalShow(false)}
              />
            </Form.Group>

            <Button style={{ margin: '1em' }} variant="info" type="submit">
              Edit
            </Button>
            <Button variant="danger" type="submit">
              Create Class
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={props.onHide}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default CreateClassroom;
