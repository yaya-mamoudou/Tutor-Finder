import React from 'react'
import logis from '../img/log.svg'
import regist from '../img/register.svg'
import './Reg.css'
function RegLog() {

  return (
    <div className='main-tablet'>
      <div className="tablet">
            <div className="left-tablet">
              <div className="tablet-txt">
              <h1>Create an Account</h1>
              <div className="txt">
              <p className=" text-muted mb-0 ">Sign up and discover great tutors and fascinating lessons!</p>
              </div>
                
              </div>
            <img src={regist} alt="" className="img-fluid"/>
            </div>
            <div className="right-tablet">
              <form>
              <div className="row">     
      <div className="input-group col-lg-6 mb-4">
          <div className="input-group-prepend">
              <span className="input-group-text bg-white px-4 border-md border-right-0">
                  <i className="fa fa-user text-muted"></i>
              </span>
          </div>
          <input id="firstName" type="text" name="firstname" placeholder="First Name" className="form-control bg-white border-left-0 border-md"/>
      </div>
      </div>
              </form>
            </div>
      </div>
    </div>

  )
}

export default RegLog
