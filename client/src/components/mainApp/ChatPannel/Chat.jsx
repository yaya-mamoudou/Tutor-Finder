import React from 'react'
import './chat.css'
import InfoChat from './InfoChat'
import ViewChat from './ViewChat'
function Chat() {
    console.log('this is the width ' + window.innerWidth);
    
    return (
        <div className='globe-scope'  >
            
            <InfoChat />
           <ViewChat/>
        </div>
    )
}

export default Chat
