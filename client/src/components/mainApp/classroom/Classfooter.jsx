import React, { useContext, useState, useEffect } from 'react';
import { GrSend } from 'react-icons/gr';
import AuthContext from '../../../context/auth/AuthContext';
import './classroom.css';

function Classfooter() {
  const authContext = useContext(AuthContext);
  const [newMsg, setNewMsg] = useState({
    text: '',
  });
  const { text } = newMsg;

  const onChange = (e) =>
    setNewMsg({ ...newMsg, [e.target.name]: e.target.value });

  const {
    classMessaging,
    createAClassMessage,
    getClassMsg,
    getClassMessages,
  } = authContext;

  const addChatData = async (e) => {
    try {
      e.preventDefault();
      let conversationId = await localStorage.getItem('CLASSID');
      createAClassMessage({ text, conversationId });
      setNewMsg({ text: '' });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={addChatData}>
      <div className="chatFooter">
        <div className="typebar">
          <input
            type="text"
            placeholder="Type your message"
            name="text"
            value={text}
            onChange={onChange}
            required
          />
          <button className="send-btn " type="submit">
            <GrSend size={30} style={{ cursor: 'pointer' }} />
          </button>
        </div>
      </div>
    </form>
  );
}

export default Classfooter;
