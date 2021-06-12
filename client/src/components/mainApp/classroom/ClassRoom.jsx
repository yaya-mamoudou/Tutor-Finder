import React,{useState} from 'react'
import ClassChat from './ClassChat'
import Classfooter from './Classfooter';
import './classroom.css'
import Room from './Room'
function ClassRoom() {
    const [Salle, setSalle] = useState({
        data:[{
            id:'1',
            classname:'English',
            classcode:'ENG101',
            title:'Basics of English',
            picture:'../img/im1.png'
        },
        {
            id:'2',
            classname:'French',
            classcode:'FRE101',
            title:'Parlons Francais',
            picture:'../img/img2.png'
        },
        {
            id:'3',
            classname:'Physics',
            classcode:'PHY203',
            title:'Fundamentals of Physics',
            picture:'../img/img3.png'
        }]
    });
    const {data} = Salle;
    return (
        <div>
             <div className="back">
                 <div className='classes'>
                    <div className='tutor'>
                            <h4>tutoring/tutored</h4>
                    </div>
                  {
                      data.map((room)=><Room  room={room} key={room.id} />)
                  }
                 </div>
        <div className="contener">
           <div className="classcont">
           <div className="top">
                <div className="about">
                    <p className="subject">Basics of english language</p>
                    <p className="teacher">Tutor: Mr Colins More</p>
                </div>
                <div className="task">
                    <p className="thread">New Thread</p>
                    <i className="material-icons w3-small add">list_alt</i>
                </div>
            </div>
            <div className="chats">
               <ClassChat />
               <ClassChat />
               <ClassChat />
            </div>
         
           </div>
           <Classfooter/>
        </div>
    </div>
        </div>
    )
}

export default ClassRoom
