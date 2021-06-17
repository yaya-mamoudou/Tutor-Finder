import React from 'react'
import {  GrSend} from 'react-icons/gr'

import './classroom.css'
function Classfooter() {
    return (
        <div className="chatFooter">
        <div className="typebar">
            <input type='text' placeholder='Type your message' />
                <GrSend size={30} style={{cursor:'pointer'}}/>
        </div>
    </div>
    )
}

export default Classfooter
