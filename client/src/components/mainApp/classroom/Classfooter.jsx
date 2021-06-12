import React from 'react'
import { Paperclip, SymmetryHorizontal} from 'react-bootstrap-icons'
import './classroom.css'
function Classfooter() {
    return (
        <div className="chatFooter">
        <div className="typebar">
            <input type='text' placeholder='Type your message' />
                <SymmetryHorizontal size={30} />
        </div>
    </div>
    )
}

export default Classfooter
