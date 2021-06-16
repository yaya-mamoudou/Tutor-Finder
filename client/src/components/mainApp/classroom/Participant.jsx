import React,{useEffect} from 'react'
import { Button} from 'react-bootstrap';
import ClassUser from './ClassUser';

function Participant(props) {
    const participantData = props.myData;
    useEffect(async () => {
      console.log('received ' + props.myData);
    }, []);
  
    return (
       <div>
           <h4>Users</h4>
    {typeof props.participantData === 'object' &&
            props.participantData.map((user) => <ClassUser user={user} />)}
<Button variant='danger' className='btn btn-lg px-4 py-3 ml-4  btn-danger'  onClick={props.onHide}>Save</Button>
       </div>
        
    )
}

export default Participant
