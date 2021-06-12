import React from 'react'
import { Paperclip, SymmetryHorizontal} from 'react-bootstrap-icons'
import './chat.css'
function Chatfooter() {
    return (
        <div className="chatFooter">
        <div className="typebar">
            <input type='text' placeholder='Type your message' />
                <Paperclip size={30} />
                <SymmetryHorizontal size={30} />
        </div>
    </div>
    )
}

export default Chatfooter
