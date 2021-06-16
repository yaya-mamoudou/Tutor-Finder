import React from 'react'
import {Button} from 'react-bootstrap'
import {Plus } from 'react-bootstrap-icons';
function ButtonAddPart({ createClass }) {
    return (
        <div >
  <Button variant="outline-success" className='mb-2 px-3' onClick={() => createClass()} > Add Participants
  <Plus  size={40} />
  </Button>

  </div>
    )
}

export default ButtonAddPart
