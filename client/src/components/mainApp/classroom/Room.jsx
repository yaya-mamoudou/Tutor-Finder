import React from 'react'
import './classroom.css'
function Room({room}) {
    return (
        
            <div className="rooms"  style={{
                backgroundImage: `url(${room.picture})`,
            backgroundPosition:'center',
            backgroundRepeat:'no-repeat',
            backgroundSize:'cover'
            }}>

         <h3>Course Name : {room.classname} </h3>
         <h4>Course ID : {room.classcode} </h4>
         <div className='cousetitle'>
             {room.title}
         </div>
</div> 
        
    )
}

export default Room
