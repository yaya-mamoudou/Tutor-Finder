import React from 'react'

function Chatlist() {
    return (
        <div className="list">
                     <div className="me">
                           <div className='avatar-chat'>
                           <img className='avatar-pic' src="http://www.iconarchive.com/download/i102645/graphicloads/flat-finance/person.ico"/>
                           </div>
                           <div>
                        <p className="title">Fodjo Frank</p>
                        <p className="ts">09:45</p>
                    </div>
                </div>
                <div className="preview">
                    <p className="bdg">10</p>
                    <p>Yoo.. boy, hafa? Where is my money?</p>
                </div>
                     </div>

    )
}

export default Chatlist
