import React, { useContext, useEffect, useState } from 'react';
import images from '../../assets/classroom/images.jpg';
import AuthContext from '../../../context/auth/AuthContext';
import './user.css';

function ClassUser({ parti }) {
  const authContext = useContext(AuthContext);
  const { storePaticipant, storePDATA } = authContext;

  const added = async () => {
    try {
      let PID = await parti._id;
      storePaticipant(PID);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="pack p-3">
      <div className="informing">
        <div className="avatar">
          <img src={images} className="pix" alt="" />
        </div>
        <div className="username">{parti.username}</div>
        <button
          className="btn btn-warning p-5 "
          variant="outline-success"
          onClick={added}
        >
          Add
        </button>
      </div>
    </div>
  );
}

export default ClassUser;
