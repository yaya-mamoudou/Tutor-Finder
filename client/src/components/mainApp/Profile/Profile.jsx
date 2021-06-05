import React, { Fragment } from 'react';
import { useState } from 'react';
import { useContext, useEffect } from 'react';
import AuthContext from '../../../context/auth/AuthContext';

function Profile() {
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
    status: 'learner',
  });
  const [toggle, setToggle] = useState(0);
  const { username, email, password, speciality, gender, bio, status } = info;
  const onChange = (e) => setInfo({ ...info, [e.target.name]: e.target.value });

  useEffect(() => {
    loadUser();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (dataStore !== null) {
      setInfo(dataStore);
    } else {
      setInfo({
        username: '',
        email: '',
        password: '',
        speciality: '',
        gender: '',
        bio: '',
        status: '',
      });
    }
    //eslint-disable-next-line
  }, [authContext, dataStore]);

  const onLogout = () => {
    logout();
  };

  const editMyProfile = (e) => {
    e.preventDefault();
    editProfile(info);
    reset();
    setInfo({
      username: '',
      email: '',
      password: '',
      speciality: '',
      gender: '',
      bio: '',
      status: '',
    });
    setToggle(0);
  };
  const data = (
    <Fragment>
      <h4>speciality</h4>
      <h4 className="pb-5"> {user && user.speciality} </h4>
    </Fragment>
  );
  const onEdit = () => {
    store(user);
    setToggle(1);
  };
  let spe = (
    <Fragment>
      <div>
        <label htmlFor="name">Speciality</label>
        <br />
        <input
          id="name"
          type="text"
          name="speciality"
          value={speciality}
          onChange={onChange}
          className="mb-3"
        />
      </div>
    </Fragment>
  );
  return (
    <div className="d-flex">
      <div>
        <div className="d-flex space-between">
          <h1>
            Welcome {(user && user.username) || (user && user.user.username)}
          </h1>
          <h5 onClick={onLogout}>
            <a href="#">logout</a>
          </h5>
        </div>
        <h2 className="p-2">Your info</h2>
        <div>
          <h4>email</h4>
          <h4 className="pb-5">
            {' '}
            {(user && user.email) || (user && user.user.email)}{' '}
          </h4>

          <h4>gender</h4>
          <h4 className="pb-5">
            {' '}
            {(user && user.gender) || (user && user.user.gender)}{' '}
          </h4>
          {user && user.status === 'tutor' ? data : null}
          <h4>bio</h4>
          <h4 className="pb-5">
            {' '}
            {(user && user.bio) || (user && user.user.bio)}{' '}
          </h4>
        </div>
        <button className="btn btn-warning p-3" onClick={onEdit}>
          Edit Profile
        </button>
      </div>
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
          {user && user.status === 'tutor' ? spe : null}

          <div>
            <h5>gender</h5>
            <input
              id="status"
              type="text"
              name="status"
              value={user && user.gender}
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
    </div>
  );
}

export default Profile;
