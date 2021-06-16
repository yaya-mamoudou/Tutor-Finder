import React, { useState,useContext, useEffect } from 'react'
import {Link} from 'react-router-dom'
import {Button} from 'react-bootstrap'
import logis from '../img/log.svg'
import AuthContext from '../../context/auth/AuthContext';
import './log.css'
function Log(props) {
    const authContext = useContext(AuthContext);
    const { login, isAuthenticated, store } = authContext;
  
    useEffect(() => {
      if (isAuthenticated) {
        props.history.push('/home');
      }
    }, [isAuthenticated, props.history]);
  
    const [user, setUser] = useState({
      email: '',
      password: '',
    });
  
    const {
      email,
      password,
  
      status,
    } = user;
  
    const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });
  
    const onSubmit = (e) => {
      e.preventDefault();
      // store(user);
  
      login({ email, password });
    };
    useEffect(()=>{
    },[])
  return (
    <div className='main-tablet'>
      <div className="tablet">
            <div className="left-tablet">
              <div className="hold">
              <div className="tablet-txt">
              <h1>Log In Account</h1>
              <div className="txt-1">
              <p className=" text-muted mb-0 ">Sign in and discover great tutors and fascinating lessons!</p>
              </div>
              <div className="img-fluid">
              <img src={logis} alt="" className='img1'/>
              </div>
              </div>
              </div>
      
            </div>
            <div className="right-tablet">
              <div className='pad-form'>
              <div className="role">
                  <h3>Trust & Experience</h3>
                  <p>Sign in to Athena</p>
                </div>
              <form onSubmit={onSubmit}>
              <div className="row">

      <div class="input-group col-lg-12 mb-4">
            <div class="input-group-prepend">
              <span class="input-group-text bg-white px-4 border-md border-right-0">
                <i class="fa fa-envelope text-muted"></i>
              </span>
            </div>
            <input id="email" type="email" value={email}
            onChange={onChange}name="email" placeholder="Email Address" class="form-control bg-white border-left-0 border-md"/>
          </div>
          <div class="input-group col-lg-6 mb-4">
            <div class="input-group-prepend">
              <span class="input-group-text bg-white px-4 border-md border-right-0">
                <i class="fa fa-lock text-muted"></i>
              </span>
            </div>
            <input id="password" type="password"  value={password}
            onChange={onChange}name="password" placeholder="Password" class="form-control bg-white border-left-0 border-md"/>
          </div>
         
          <div class="form-group col-lg-12 mx-auto mb-0">
            <input class="btn btn-danger btn-block py-2 font-weight-bold" type='submit' value='Sign Into account' />
          </div>
          <p className="social-text">Or Sign up with social platforms</p>
          <div className="social-media">
                <a href="#!" className="social-icon">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#!" className="social-icon">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#!" className="social-icon">
                  <i className="fab fa-google"></i>
                </a>
                <a href="#!" className="social-icon">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                </div>
                <p className='parag' >Sign in and discover tutors that suits your learning abilities!<Link to="/register">Register</Link></p>
             </div>
              </form>
              </div>
             
            </div>
      </div>
    </div>

  )
}

export default Log
