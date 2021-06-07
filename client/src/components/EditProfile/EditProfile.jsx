import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../../context/auth/AuthContext';

function EditProfile(props) {
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

  const [info, setInfo] = useState({
    username: '',
    email: '',
    password: '',
    speciality: '',
    gender: '',
    bio: '',
    location: '',
    tel: '',
    status: 'learner',
  });
  const [toggle, setToggle] = useState(0);
  const {
    username,
    email,
    password,
    speciality,
    gender,
    bio,
    status,
    location,
    tel,
  } = info;
  const onChange = (e) => setInfo({ ...info, [e.target.name]: e.target.value });

  const [toBeEdited, setToBeEdited] = useState();
  let userD;
  //   useEffect(async () => {
  //     loadUser();
  //   }, []);
  //   useEffect(async () => {
  //     loadUser();
  //     store(user);
  //     {
  //       dataStore && setInfo(dataStore);
  //     }
  //   }, [user]);

  const editMyProfile = () => {
    console.log('hey');
  };
  return (
    <div>
      <form>
        <div>
          <h5>My Status</h5>
          <input
            id="status"
            type="text"
            name="status"
            value={(user && user.status) || (user && user.user.status)}
            className="mb-3"
          />
        </div>
        <div>
          <label htmlFor="name">Name</label>
          <br />
          <input
            id="name"
            type="text"
            name="username"
            value={username}
            onChange={onChange}
            className="mb-3"
          />
        </div>
        <div>
          <label htmlFor="email">Email Address</label>
          <br />

          <input
            id="email"
            type="email"
            name="email"
            value={email}
            onChange={onChange}
            className="mb-3"
          />
        </div>
        {user && user.status === 'tutor' ? user.speciality : null}

        <div>
          <h5>gender</h5>
          <input
            id="status"
            type="text"
            name="status"
            value={gender}
            className="mb-3"
          />
        </div>
        <textarea
          id="bio"
          type="text"
          name="bio"
          value={bio}
          onChange={onChange}
          className="mb-3"
        />
        {toggle ? (
          <button className="btn btn-primary p-3" onClick={editMyProfile}>
            save Changes
          </button>
        ) : null}
        {toggle ? (
          <button
            className="btn btn-primary p-3 m-3"
            onClick={() => {
              reset();
              setInfo({
                username: '',
                email: '',
                password: '',
                speciality: '',
                gender: '',
                bio: '',
                status: 'learner',
              });
            }}
          >
            Clear
          </button>
        ) : null}
      </form>
    </div>
  );
}

export default EditProfile;
