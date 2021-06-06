import React, { useContext } from 'react';
import AuthContext from '../../context/auth/AuthContext';
import './tutProfile.css';

function App(props) {
  const authContext = useContext(AuthContext);
  let userD = props.location.myData.aTutData;
  // console.log(userD.status);
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
          <div className="row3 row m-5">
            <div className="search-wrapper ">
              <input type="search" placeholder="Leave your review..." />
            </div>
            <br />
            <div className="bt pt-3">
              <input className="btn btn-warning " type="button" value="send" />
            </div>
          </div>
          <div className="m-5 row row3 ">
            <h3>Reviews</h3>
            <div className="row">
              <div class="review">
                <div class="r">
                  <div>
                    <p></p>
                  </div>
                  <div class="icons">
                    <span>
                      <i class="fa fa-star"></i>
                    </span>
                    <span>
                      <i class="fa fa-star"></i>
                    </span>
                    <span>
                      <i class="fa fa-star"></i>
                    </span>
                    <span>
                      <i class="fa fa-star"></i>
                    </span>
                    <span>
                      <i class="fa fa-star"></i>
                    </span>
                  </div>
                </div>
                <div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
                    ipsum error, accusantium harum temporibus necessitatibus
                    dicta dolores? Dolor ad ut ullam, quia, nihil quae labore
                    libero, similique iusto rem nemo.
                  </p>
                </div>
              </div>
              <div class="review">
                <div class="r">
                  <div>
                    <p></p>
                  </div>
                  <div class="icons">
                    <span>
                      <i class="fa fa-star"></i>
                    </span>
                    <span>
                      <i class="fa fa-star"></i>
                    </span>
                    <span>
                      <i class="fa fa-star"></i>
                    </span>
                    <span>
                      <i class="fa fa-star"></i>
                    </span>
                    <span>
                      <i class="fa fa-star"></i>
                    </span>
                  </div>
                </div>
                <div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
                    ipsum error, accusantium harum temporibus necessitatibus
                    dicta dolores? Dolor ad ut ullam, quia, nihil quae labore
                    libero, similique iusto rem nemo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
