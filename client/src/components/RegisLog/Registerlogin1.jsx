import React, { useState, useContext, useEffect } from 'react';
import './register.css';
import AuthContext from '../../context/auth/AuthContext';
import { Link } from 'react-router-dom';

function Registerlogin(props) {
  const authContext = useContext(AuthContext);
  const { register, isAuthenticated, store } = authContext;

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push('/mainapp');
    }
  }, [isAuthenticated, props.history]);

  const [user, setUser] = useState({
    username: '',
    email: '',
    password: '',
    password2: '',
    speciality: '',
    gender: '',
    bio: '',
    status: 'learner',
    location: '',
    tel: '',
  });

  const {
    username,
    email,
    password,
    password2,
    speciality,
    gender,
    bio,
    status,
    location,
    tel,
  } = user;

  const onChange = (e) => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    // store(user);
    register({
      username,
      email,
      password,
      speciality,
      gender,
      bio,
      status,
      location,
      tel,
    });
  };
  return (
    <div>
      <h3>
        Account <span>Register</span>
      </h3>
      <form onSubmit={onSubmit}>
        <div>
          <h5>Who Are you?</h5>
          <input
            type="radio"
            name="status"
            value="tutor"
            onChange={onChange}
            className="m-3"
          />
          Tutor
          <input
            type="radio"
            name="status"
            value="learner"
            onChange={onChange}
            className="m-3"
          />
          Learner
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
            required
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
            required
            className="mb-3"
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <br />

          <input
            id="password"
            type="password"
            name="password"
            value={password}
            onChange={onChange}
            required
            minLength="6"
            className="mb-3"
          />
        </div>
        <div>
          <label htmlFor="password2">Confirm Password</label>
          <br />

          <input
            id="password2"
            type="password"
            name="password2"
            value={password2}
            onChange={onChange}
            required
            minLength="6"
            className="mb-3"
          />
        </div>
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
        <div>
          <label htmlFor="name">Telephon Number</label>
          <br />
          <input
            id="name"
            type="text"
            name="tel"
            value={tel}
            onChange={onChange}
            className="mb-3"
          />
        </div>

        <div>
          <label htmlFor="name">location</label>
          <br />
          <input
            id="name"
            type="text"
            name="location"
            value={location}
            onChange={onChange}
            className="mb-3"
          />
        </div>
        <div>
          <h5>gender</h5>
          <input type="radio" name="gender" value="male" onChange={onChange} />
          Male
          <input
            type="radio"
            name="gender"
            value="female"
            onChange={onChange}
          />
          FeMale
        </div>
        <div>
          <label htmlFor="bio">Bio</label>
          <br />
          <textarea
            id="bio"
            type=""
            name="bio"
            value={bio}
            onChange={onChange}
            required
            className="mb-3"
          />
        </div>
        <input type="submit" value="Register" />
      </form>
      <h2>
        Already Have an account ? <Link to="/login">Login</Link>
      </h2>
    </div>
  );
}

export default Registerlogin;
