import React from 'react'
import './classroom.css'
import { useHistory } from "react-router-dom";
import imgtry from "../../assets/img/1.jpg";

function Room({room,e}) {
    const history = useHistory();
    const navigateTo = () => history.push('/Classchat');
     //  backgroundImage: `url("${e.bg}")` {e.classCode} {e.className}
    // <img
    //                   className="rounded-circle"
    //                   src={imgtry}
    //                   width="50"
    //                   height="50"
    //                   alt=""
    //                 />
//     <span className="h4 ml-3 font-weight-bold align-self-center">
//     {e.tutorName}
//   </span>
    return (
        
            <div className="rooms"  style={{
                backgroundImage: `url("${e.bg}")`,
            backgroundPosition:'center',
            backgroundRepeat:'no-repeat',
            backgroundSize:'cover'
            }}>

         <h3>Course Name : {e.classname} </h3>
         <h4>Course ID : {e.className} </h4>
         <div className='cousetitle'>
             {e.title}
         </div>
         <div
                    className="d-flex rounded-circle justify-content-center align-items-center bg-light"
                    style={{ width: 53, height: 53 }}
                  >
                    <img
                      className="rounded-circle"
                      src={imgtry}
                      width="50"
                      height="50"
                      alt=""
                    />
                  </div>
                  <span className="h4 ml-3 font-weight-bold align-self-center">
                    {e.tutorName}
                  </span>
</div> 
        
    )
}

export default Room
