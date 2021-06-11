import React, { useContext, useState, useEffect } from 'react';
import defaultImage from '../../assets/default.png';
import AuthContext from '../../../context/auth/AuthContext';

function Conversation({ conv, currentUser }) {
  const authContext = useContext(AuthContext);
  const { user, getConversation, conversation, loadUser } = authContext;
  const [myConv, setMyConv] = useState([]);

  useEffect(() => {
    loadUser();
  }, []);

  return (
    <div className="m-5">
      <div className="d-flex m-3 ">
        <img src={defaultImage} width="70px" height="70px" alt="" />
        <p className="h3 m-4">
          {conv.members.map((m) => (
            <div> {m._id === user._id ? null : <div>{m.username}</div>} </div>
          ))}
        </p>
      </div>
    </div>
  );
}

export default Conversation;
