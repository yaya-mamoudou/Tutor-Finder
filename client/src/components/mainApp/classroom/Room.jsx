import React, { useContext, useState, useEffect } from 'react';
import './classroom.css';
import { useHistory } from 'react-router-dom';
import imgtry from '../../assets/img/1.jpg';
import AuthContext from '../../../context/auth/AuthContext';

function Room({ room, e }) {
  const authContext = useContext(AuthContext);

  const {
    classMessaging,
    createAClassMessage,
    getClassMsg,
    getClassMessages,
  } = authContext;

  const history = useHistory();
  const navigateTo = () => history.push('/Classchat');

  const chatting = async () => {
    try {
      console.log('good');
      let ID = await e._id;
      getClassMsg({ ID });
      console.log(ID);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      onClick={chatting}
      className="rooms"
      style={{
        backgroundImage: `url("${e.bg}")`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        cursor: 'pointer',
      }}
    >
      <h3>Course Name : {e.className} </h3>
      <h4>Course ID : {e.classCode} </h4>

      <div className="cousetitle">{e.title}</div>
      <div
        className="d-flex rounded-circle justify-content-center align-items-center bg-light"
        style={{ width: 53, height: 53 }}
      >
        <img
          className="rounded-circle"
          src={imgtry}
          width="50"
          height="50"
          alt=""
        />
      </div>
      <span className="h4 ml-3 font-weight-bold align-self-center">
        {e.tutorName}
      </span>
    </div>
  );
}

export default Room;
