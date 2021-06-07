import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../../context/auth/AuthContext';
import './tutProfile.css';
import CreateReview from './reviews/Review';
import AllReviews from './ViewAllReviews/AllReviews';
function App(props) {
  const authContext = useContext(AuthContext);
  const { ikeep, iStore } = authContext;
  // const [userD, setUserD] = useState();
  // //  const [userDa, setUserDa] = useState();

  // // const call = async () => {
  // //   try {
  // //   } catch (error) {
  // //     console.log(error);
  // //   }
  // // };

  // // useEffect(async () => {
  // //   await call();
  // //   await setUserD(userD);
  // // }, []);

  let userD = props.location.myData.aTutData;

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
                  <h3> {userD.username} </h3>
                  <small>{userD.speciality}</small>
                </div>
              </div>
              <div className=" location">
                <h5>Location</h5>
                <h4>{userD.location}</h4>
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
                <p>{userD.bio}</p>
              </div>
            </div>
          </div>
          <div className="row2 mt-5 ml-4 p-5 ">
            <p>
              <span>Telephone: </span>677842536
            </p>
            <p>
              <span>email: </span>
              {userD.email}
            </p>
            <p>
              <span>social Media links</span>
            </p>
            <a href="#" className="fa fa-facebook"></a>
            <a href="#" className="fa fa-twitter"></a>
          </div>
        </div>

        <div className="col-md-6">
          <CreateReview tut_id={userD._id} />

          <div className="m-5 row row3 ">
            <h3>Reviews</h3>
            <AllReviews tut_id={userD._id} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
