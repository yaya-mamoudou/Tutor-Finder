import React, { useContext, useState, useEffect } from 'react';
import defaultImage from '../../assets/default.png';
import AuthContext from '../../../context/auth/AuthContext';

function Conversation({ conv, currentUser }) {
  const authContext = useContext(AuthContext);
  const { user, getConversation, conversation, loadUser } = authContext;
  const [myConv, setMyConv] = useState([]);
  const PF = 'http://localhost:5000/images/';

  useEffect(() => {
    loadUser();
  }, []);

  return (
    <div className="m-5">
      <div className="d-flex m-3 ">
        <p className="h3 m-4">
          {conv.members.map((m) => (
            <div>
              {m._id === user._id ? null : <div>{m.username}</div>}
              {m._id === user._id ? null : (
                <div>
                  <img
                    width="70px"
                    src={
                      m.profilePic === ''
                        ? 'http://www.iconarchive.com/download/i102645/graphicloads/flat-finance/person.ico'
                        : PF + m.profilePic
                    }
                    height="70px"
                    alt=""
                  />
                </div>
              )}
            </div>
          ))}
        </p>
      </div>
    </div>
  );
}

export default Conversation;
