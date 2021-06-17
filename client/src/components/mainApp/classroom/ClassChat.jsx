import React, { useContext, useState, useEffect } from 'react';
import { FiMoreVertical } from 'react-icons/fi';
import './classroom.css';
import AuthContext from '../../../context/auth/AuthContext';

function ClassChat() {
  const authContext = useContext(AuthContext);

  const {
    classMessaging,
    createAClassMessage,
    getClassMsg,
    getClassMessages,
  } = authContext;

  useEffect(async () => {
    try {
      let conversationId = await localStorage.getItem('CLASSID');
      getClassMsg(conversationId);
    } catch (error) {
      console.log(error);
    }
  }, [localStorage.getItem('CLASSID')]);

  const [storeChat, setStoreChat] = useState();

  useEffect(async () => {
    setStoreChat(getClassMessages.message);
  }, [getClassMessages.message]);
  return (
    <div>
      {typeof storeChat === 'object' &&
        storeChat.map((chatData) => (
          <div>
            <h2> {chatData.text} </h2>
          </div>
        ))}
    </div>
  );
}

export default ClassChat;
