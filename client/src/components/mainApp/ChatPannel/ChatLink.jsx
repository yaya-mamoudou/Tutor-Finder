import React from 'react'
import './chat.css'
function ChatLink() {
    return (
        <div>
             <div className="chat link">
                <div className="me">
                    <img src="http://www.iconarchive.com/download/i102645/graphicloads/flat-finance/person.ico"/>
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
        </div>
    )
}

export default ChatLink
