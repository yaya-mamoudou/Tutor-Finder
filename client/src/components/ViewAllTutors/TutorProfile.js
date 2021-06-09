import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../../context/auth/AuthContext';
import './tutProfile.css';
import CreateReview from './reviews/Review';
import AllReviews from './ViewAllReviews/AllReviews';
import { useLocation } from 'react-router';

function App(props) {
  const authContext = useContext(AuthContext);

  const { ikeep, iStore, tutData } = authContext;

  const username = localStorage.getItem('username');
  const bio = localStorage.getItem('bio');
  const status = localStorage.getItem('status');
  const email = localStorage.getItem('email');
  const gender = localStorage.getItem('gender');
  const speciality = localStorage.getItem('speciality');
  const location = localStorage.getItem('location');
  const id = localStorage.getItem('id');

  return (
    <div className="main-content ">
      <div className="header">
        <p>Tutor Profile</p>
        <div className="user-wrapper ">
          <a href="#" className="fa fa-wechat"></a>
          <img src="img/1.jpg" alt="" width="30px" height="30px" />
        </div>
      </div>
      <div className="row myDiv ">
        <div className="col-md-3  mymainRow ">
          <div className="myRow">
            <div className="profile mt-5 ml-4 ">
              <div>
                <div className="">
                  <img src="img/1.jpg" alt="" width="90px" height="90px" />
                </div>
                <div className="">
                  <h3> {username} </h3>
                  <small>{speciality}</small>
                </div>
              </div>
              <div className=" location">
                <h5>Location</h5>
                <h4>{location}</h4>
                <p className="rat">Ratings</p>
                <p>
                  <span className="ratings">4.5</span>
                  <span>
                    <i className="fa fa-star"></i>
                  </span>
                  <span>
                    <i className="fa fa-star"></i>
                  </span>
                  <span>
                    <i className="fa fa-star"></i>
                  </span>
                  <span>
                    <i className="fa fa-star"></i>
                  </span>
                  <span>
                    <i className="fa fa-star"></i>
                  </span>
                </p>
                <br />
                <h5>About Me</h5>
                <p>{bio}</p>
              </div>
            </div>
          </div>
          <div className="row2 mt-5 ml-4 p-5 ">
            <p>
              <span>Telephone: </span>677842536
            </p>
            <p>
              <span>email: </span>
              {email}
            </p>
            <p>
              <span>social Media links</span>
            </p>
            <a href="#" className="fab fa-facebook fa-2x"></a>
            <a href="#" className="fab fa-twitter fa-2x"></a>
          </div>
        </div>

        <div className="col-md-6">
          <CreateReview tut_id={id} />

          <div className="m-5 row row3 ">
            <h3>Reviews</h3>
            <AllReviews tut_id={id} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
