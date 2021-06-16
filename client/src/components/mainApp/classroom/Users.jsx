import React,{useState }from 'react'
import './user.css'
import {Plus } from 'react-bootstrap-icons';
// import { } from 'react-bootstrap-icons';
import { Button} from 'react-bootstrap';
import images from "../img/images.jpg"
function Users() {
  const [count,setCount]=useState(0);
  var check;
  if (count > 0){
    check= <h5>Added</h5>;
   }
   else{
   check = <h5>Add</h5>;
   }
console.log(count)
//     const nameChange=()=>{
//     count ++;
//         if (count > 0){
//             check= <h4>Added</h4>;
//            }
//            else{
//            check = <h4>Add</h4>;
//            }
// console.log(count)
//     }
    return (
        <div className="pack d-flex">
            <div className='bg-danger' style={{width:50,height:50,display:'flex',justifyContent:'center',alignItems:'center'}}>
                <img src={images} width='48' height='48' alt="" />
            </div>
            <button className='btn btn-warning' variant='outline-success'>Yaya</button>
            {/* <Button variant='outline-success' conClick={()=>setCount(1)}>{check}  <Plus  size={30} /></Button> */}
        </div>
    )
}

export default Users
