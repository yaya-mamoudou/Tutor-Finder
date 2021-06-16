import React from 'react'
import {FiMoreVertical} from 'react-icons/fi'
import './classroom.css'
function ClassChat() {
    return (
        <div>
             <div className="chat">
                    <div className="up_box">
                        <div className="up">
                            <div className="person">
                                <img src="http://www.iconarchive.com/download/i102645/graphicloads/flat-finance/person.ico"/>
                                <div className="txt-2">
                                    <p>Mr Donfack R</p>
                                    <p>Apr 30,2020</p>
                                </div>
                            </div>
                         <FiMoreVertical size={20} />
                        </div>
                        <div className="middle">
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam voluptate voluptatum
                                voluptatibus voluptatem dignissimos blanditiis? Exercitationem, quo. Quaerat voluptatum,
                                officia, harum voluptas adipisci, ipsum dolores aspernatur deleniti impedit est qui?
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod debitis atque laudantium iste
                                veniam deserunt, veritatis, repellat aliquid earum consectetur natus optio! Quidem
                                explicabo, ullam culpa ratione accusamus itaque ea.
                            </p>
                        </div>
                    </div>
                    </div>
        </div>
    )
}

export default ClassChat
