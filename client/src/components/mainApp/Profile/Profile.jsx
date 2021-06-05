import React from 'react';
import { useContext, useEffect } from 'react';
import AuthContext from '../../../context/auth/AuthContext';

function Profile() {
  const authContext = useContext(AuthContext);
  const { user, isAuthenticated, loadUser, logout } = authContext;

  useEffect(() => {
    loadUser();
    //eslint-disable-next-line
  }, []);

  const onLogout = () => {
    logout();
  };
  return (
    <div>
      <div className="d-flex space-between">
        <h1>Welcome {user && user.username} </h1>
        <h5 onClick={onLogout}>
          <a href="#">logout</a>
        </h5>
      </div>
    </div>
  );
}

export default Profile;
