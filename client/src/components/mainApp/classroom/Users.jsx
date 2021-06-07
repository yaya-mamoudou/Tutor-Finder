import React, { useState, useEffect, useContext } from 'react';
import './user.css';
import { Plus } from 'react-bootstrap-icons';
// import { } from 'react-bootstrap-icons';
import { Button } from 'react-bootstrap';
import images from '../../assets/classroom/images.jpg';
import AuthContext from '../../../context/auth/AuthContext';

function Users({ user }) {
  const [count, setCount] = useState(0);

  const authContext = useContext(AuthContext);
  const { isAdd, participants, storePaticipant } = authContext;

  useEffect(async () => {
    isAdd();
  }, []);

  const [data, setData] = useState();

  var check;
  if (count > 0) {
    check = <h5>Added</h5>;
  } else {
    check = <h5>Add</h5>;
  }

  useEffect(async () => {
    try {
      await setData(participants.getUser);
    } catch (err) {
      console.error(err);
    }
  }, [participants]);

  const [patis, setPati] = useState();

  const counter = (user) => {
    setCount(1);
    // console.log(user);
    storePaticipant(user);
  };

  return (
    <div className="pack p-3">
      <div className="informing">
        <div className="avatar">
          <img src={images} className="pix" alt="" />
        </div>
        <div className="username">{user.username}</div>
      </div>
      <Button
        variant="outline-info"
        className="press"
        onClick={() => counter(user._id)}
      >
        {check} <Plus size={30} />
      </Button>
    </div>
  );
}

export default Users;
