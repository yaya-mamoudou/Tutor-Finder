import React from 'react'
import { ThreeDotsVertical } from 'react-bootstrap-icons'
import Chatfooter from './Chatfooter'
import MsgRcd from './MsgRcd'
import MsgSent from './MsgSent'
import './chat.css'
function Viewchat() {
    return (
        <div className='viewchat'>
                <div className="chatbox">
                    <div className="chatHeader">
                    <div className="me">
                           <div className='avatar-chat'>
                           <img className='avatar-pic' src="http://www.iconarchive.com/download/i102645/graphicloads/flat-finance/person.ico"/>
                           </div>
                           <div className='list-name'>
                        <p className="title">Fodjo Frank</p>
                    </div>
                </div>
                <div className='more'>
                    <ThreeDotsVertical size={30}/>
                </div>
                    </div>
                    <div className="chatBody">
                    <div className="messages-date"></div>
                        <div className="messages">
                       <div className="messages-recieved">
                          <MsgRcd/>
                           </div>
                           <div className="messages-sent">
                           <MsgSent/>
                          </div>
                        </div>
                       <Chatfooter/>
                    </div>
                  
                </div>
            </div>
    )
}

export default Viewchat
