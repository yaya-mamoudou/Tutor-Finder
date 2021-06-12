import React from 'react'
import Chatlist from './Chatlist'
import Searchbar from './Searchbar'
import {ArrowLeftSquare, Search, ThreeDotsVertical , Paperclip, SymmetryHorizontal} from 'react-bootstrap-icons'
function InfoChat() {
    return (
        <div className='infochat'>
                <div className="info-header">
                    <ArrowLeftSquare size={36} />
                    <h1>Chat</h1>
                </div>
                <div className='info-person'>
                    <div className="avatar-contain">
                    <div className='avatar'>
                    <img className='avatar-img' src="http://www.iconarchive.com/download/i102645/graphicloads/flat-finance/person.ico"/>
                  </div>
                    </div>
                  <div className="person-name">
                      <h2>Vifieh Ruth</h2>
                  </div>
                </div>
                <div className="chat-list">
                    <Searchbar/>
                 <div className='chatlinks'>
                 <Chatlist />

                 </div>
                  </div>
            </div>
    )
}

export default InfoChat
