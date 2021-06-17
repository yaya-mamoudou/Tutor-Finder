import React, { useEffect, useState } from 'react'
import Chatlist from './Chatlist'
import Searchbar from './Searchbar'
import {Button} from 'react-bootstrap'
import {ArrowLeftSquare} from 'react-bootstrap-icons'

function InfoChat() {
    
    return (
        <div className='infochat'>
                <div className="info-header">
                    <ArrowLeftSquare  className='arrow' size={36} />
                  <div className="bar">
                      <Button  variant='none' style={{width:'175px', height:'65px'}} ><i className='fas fa-bars'style={{width:'80px', height:'45px',marginLeft:'2em'}}></i></Button>
                      </div>  
                      <div className="topnav" id="myTopnav">
  <a href="#home" class="active">Home</a>
  <a href="#news">News</a>
  <a href="#contact">Contact</a>
  <a href="#about">About</a>
  {/* <a href="javascript:void(0);" className="icon" onclick="myFunction()">
    <i class="fa fa-bars"></i>
  </a> */}
</div>
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
