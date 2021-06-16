import React, { useState } from 'react';
//import {Plus } from 'react-bootstrap-icons';
import { Button, Form } from 'react-bootstrap';
import MyModal from '../../myModal/Modal';
import Participant from './Participant';
import ButtonAddPart from './ButtonAddPart';
// import './class.css'
function CreateClassroom() {
  const [validated, setValidated] = useState(false);
  const [classData, setclassData] = useState({
    coursename: '',
    coursecode: '',
  });
  const [classModalstate, setclassModalstate] = useState('none');
  const classroomModaltoggle = () => {
    if (classModalstate === 'flex') {
      setclassModalstate('none');
    } else {
      setclassModalstate('flex');
    }
  };
  const createClass = () => {
    console.log('class created');
    classroomModaltoggle();
  };
  const { coursename, coursecode } = classData;
  const handleChange = (e) => {
    setclassData({ ...classData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }
    setValidated(true);
    setclassData({
      coursename: '',
      coursecode: '',
    });
  };

  return (
    <div className="body p-4">
      <MyModal
        modalHeader={'Add Participants'}
        toggleModal={classroomModaltoggle}
        modalStatus={classModalstate}
        component={<Participant />}
        header_bg={''}
      />
      <Form noValidate  validated={validated} onSubmit={(e) => handleSubmit(e)}>
        <Form.Group className="mb-4" controlId="formBasicEmail">
          <Form.Label className="mb-2">Course Name</Form.Label>
          <Form.Control
            className="px-4"
            type="text"
            required
            placeholder="Enter Course Title"
            name="coursename"
            value={coursename}
            onChange={(e) => handleChange(e)}
          />
           <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
              Please Enter Course Name
            </Form.Control.Feedback>
         
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label className="mb-2">Course Code</Form.Label>
          <Form.Control
            className="mb-4 px-4"
            type="text"
            required
            placeholder="Enter Course Code"
            name="coursecode"
            value={coursecode}
            onChange={(e) => handleChange(e)}
          />
          <Form.Control.Feedback type="invalid">
              Please Enter Course Code
            </Form.Control.Feedback>
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
          <div className="d-flex justify-content-between">
            <ButtonAddPart createClass={createClass} />
            <Button
              className="btn btn-lg px-4  btn-danger"
              variant="danger"
              type="submit"
            >
              Create Class
            </Button>
          </div>
        </Form.Group>
      </Form>
    </div>
  );
}

export default CreateClassroom;
