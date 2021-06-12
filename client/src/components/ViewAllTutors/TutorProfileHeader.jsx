import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../context/auth/AuthContext';
import AuthState from '../../context/auth/AuthContext';

<<<<<<< HEAD
export default function TutorProfileHeader({ status }) {
  const authContext = useContext(AuthContext);
  const { createConversation, loadUser, user } = authContext;
=======
// console.log(Object.is(activePath, "/tut/profile"));
export default function TutorProfileHeader({ status, handleModal }) {
  const [statusUser, setstatusUser] = useState("");
>>>>>>> b3aad5058b71258c0ade603c6876332560b1b898

  const [statusUser, setstatusUser] = useState('');
  useEffect(async () => {
    let activePath = await window.location.pathname;
    await setstatusUser(activePath);
    loadUser();
  }, []);

  const receiverID = localStorage.getItem('id');

  const openConversation = async () => {
    let senderID = await user._id;
    createConversation({ senderID, receiverID });
  };

  return statusUser === '/tut/profile' ? (
    <div className="d-flex mb-4">
      <p className="h3">Profile</p>
      <div className="ml-auto">
        <Link to="/chat" onClick={openConversation}>
          <i class="far fa-comment-dots fa-2x"></i>
        </Link>
      </div>
    </div>
  ) : (
    statusUser === '/profile' && (
      <div className="d-flex mb-4">
        <p className="h3">Profile</p>
        <div onClick={() => handleModal()} className="ml-auto">
          <i class="far fa-edit fa-2x"></i>
        </div>
      </div>
    )
  );
}
