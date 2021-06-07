// import React, { Fragment } from 'react';
// import { useState } from 'react';
// import { useContext, useEffect } from 'react';
// import AuthContext from '../../../context/auth/AuthContext';

// function Profile() {
//   const authContext = useContext(AuthContext);
//   const {
//     user,
//     isAuthenticated,
//     loadUser,
//     logout,
//     store,
//     dataStore,
//     reset,
//     editProfile,
//   } = authContext;

//   const [info, setInfo] = useState({
//     username: '',
//     email: '',
//     password: '',
//     speciality: '',
//     gender: '',
//     bio: '',
//     status: 'learner',
//   });
//   const [toggle, setToggle] = useState(0);
//   const { username, email, password, speciality, gender, bio, status } = info;
//   const onChange = (e) => setInfo({ ...info, [e.target.name]: e.target.value });

//   useEffect(() => {
//     loadUser();
//     // eslint-disable-next-line
//   }, []);

//   useEffect(() => {
//     if (dataStore !== null) {
//       setInfo(dataStore);
//     } else {
//       setInfo({
//         username: '',
//         email: '',
//         password: '',
//         speciality: '',
//         gender: '',
//         bio: '',
//         status: '',
//       });
//     }
//     //eslint-disable-next-line
//   }, [authContext, dataStore]);

//   const onLogout = () => {
//     logout();
//   };

//   const editMyProfile = (e) => {
//     e.preventDefault();
//     editProfile(info);
//     reset();
//     setInfo({
//       username: '',
//       email: '',

//       password: '',
//       speciality: '',
//       gender: '',
//       bio: '',
//       status: '',
//     });
//     setToggle(0);
//   };
//   const data = (
//     <Fragment>
//       <h4>speciality</h4>
//       <h4 className="pb-5"> {user && user.speciality} </h4>
//     </Fragment>
//   );
//   const onEdit = () => {
//     store(user);
//     setToggle(1);
//   };
//   let spe = (
//     <Fragment>
//       <div>
//         <label htmlFor="name">Speciality</label>
//         <br />
//         <input
//           id="name"
//           type="text"
//           name="speciality"
//           value={speciality}
//           onChange={onChange}
//           className="mb-3"
//         />
//       </div>
//     </Fragment>
//   );
//   return (
//     <div className="d-flex">
//       <div>
//         <div className="d-flex space-between">
//           <h1>
//             Welcome {(user && user.username) || (user && user.user.username)}
//           </h1>
//           <h5 onClick={onLogout}>
//             <a href="#">logout</a>
//           </h5>
//         </div>
//         <h2 className="p-2">Your info</h2>
//         <div>
//           <h4>email</h4>
//           <h4 className="pb-5">
//             {' '}
//             {(user && user.email) || (user && user.user.email)}{' '}
//           </h4>

//           <h4>gender</h4>
//           <h4 className="pb-5">
//             {' '}
//             {(user && user.gender) || (user && user.user.gender)}{' '}
//           </h4>
//           {user && user.status === 'tutor' ? data : null}
//           <h4>bio</h4>
//           <h4 className="pb-5">
//             {' '}
//             {(user && user.bio) || (user && user.user.bio)}{' '}
//           </h4>
//         </div>
//         <button className="btn btn-warning p-3" onClick={onEdit}>
//           Edit Profile
//         </button>
//       </div>
//       <div>
//         <form>
//           <div>
//             <h5>My Status</h5>
//             <input
//               id="status"
//               type="text"
//               name="status"
//               value={(user && user.status) || (user && user.user.status)}
//               className="mb-3"
//             />
//           </div>
//           <div>
//             <label htmlFor="name">Name</label>
//             <br />
//             <input
//               id="name"
//               type="text"
//               name="username"
//               value={username}
//               onChange={onChange}
//               className="mb-3"
//             />
//           </div>
//           <div>
//             <label htmlFor="email">Email Address</label>
//             <br />

//             <input
//               id="email"
//               type="email"
//               name="email"
//               value={email}
//               onChange={onChange}
//               className="mb-3"
//             />
//           </div>
//           {user && user.status === 'tutor' ? spe : null}

//           <div>
//             <h5>gender</h5>
//             <input
//               id="status"
//               type="text"
//               name="status"
//               value={user && user.gender}
//               className="mb-3"
//             />
//           </div>
//           <textarea
//             id="bio"
//             type="text"
//             name="bio"
//             value={bio}
//             onChange={onChange}
//             className="mb-3"
//           />
//           {toggle ? (
//             <button className="btn btn-primary p-3" onClick={editMyProfile}>
//               save Changes
//             </button>
//           ) : null}
//           {toggle ? (
//             <button
//               className="btn btn-primary p-3 m-3"
//               onClick={() => {
//                 reset();
//                 setInfo({
//                   username: '',
//                   email: '',
//                   password: '',
//                   speciality: '',
//                   gender: '',
//                   bio: '',
//                   status: 'learner',
//                 });
//               }}
//             >
//               Clear
//             </button>
//           ) : null}
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Profile;

import React, { useContext, useState, useEffect } from 'react';
import AuthContext from '../../../context/auth/AuthContext';
import { Link } from 'react-router-dom';
import './profile.css';

function App() {
  const authContext = useContext(AuthContext);
  const {
    user,
    isAuthenticated,
    loadUser,
    logout,
    store,
    dataStore,
    reset,
    editProfile,
  } = authContext;

  useEffect(() => {
    loadUser();
  }, []);

  // console.log('this is my data ' + user.username);
  return (
    <div className="main-content ">
      <div className="header">
        <p>Profile</p>
        <div className="user-wrapper ">
          <Link
            onClick={() => {
              store(user);
            }}
            to={{
              pathname: '/edit/profile',
              myData: {
                data: user,
              },
            }}
          >
            <i class="fas fa-edit fa-2x"></i>
          </Link>

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
                  <h3> {user && user.username} </h3>
                  <small>
                    {user && user.status === 'tutor' ? user.speciality : null}
                  </small>
                </div>
              </div>
              <div className=" location">
                <h5>Location</h5>
                <h4>{user && user.location} </h4>
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
                <p>{user && user.bio}</p>
              </div>
            </div>
          </div>
          <div className="row2 mt-5 ml-4 p-5 ">
            <p>
              <span>Telephone: </span>677842536
            </p>
            <p>
              <span>email: </span>
              {user && user.email}
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
