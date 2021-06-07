import React from 'react';
// import Card from './Card/Card';
import { Button } from 'react-bootstrap';
import CreateClassroom from './CreateClassroom';
function MainClassEntry() {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <div>
      <Button variant="danger p-3" onClick={() => setModalShow(true)}>
        Create A New Class
      </Button>

      <CreateClassroom show={modalShow} onHide={() => setModalShow(false)} />
    </div>
  );
}

export default MainClassEntry;
