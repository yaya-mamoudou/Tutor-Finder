import React, { useContext, useState, useEffect } from 'react';
import Conversation from './Conversation';
import Message from './Message';
import AuthContext from '../../../context/auth/AuthContext';
import axios from 'axios';

export default function Chat() {
  const authContext = useContext(AuthContext);
  const {
    user,
    getConversation,
    conversation,
    loadUser,
    getMsg,
    myMsg,
  } = authContext;
  const [myConv, setMyConv] = useState();
  const [currentChat, setCurrentChat] = useState();
  const [tryIt, setTryIt] = useState();
  const [msg, setMsg] = useState();

  const clicked = (id) => {
    getMsg(id);
  };

  useEffect(() => {
    loadUser();
  }, []);

  useEffect(async () => {
    try {
      user && getConversation(user._id);
    } catch (error) {
      console.log(error);
    }
  }, [user, conversation]);

  useEffect(async () => {
    setMyConv(conversation.conv);
  }, [conversation.conv]);

  useEffect(async () => {
    setTryIt(myMsg.message);
  }, [myMsg.message]);

  return (
    <>
      <div className="d-flex">
        <div className=" ml-5  pl-5 w-25">
          {typeof myConv === 'object' &&
            myConv.map((conv) => (
              <div onClick={() => clicked(conv._id)} key={conv.username}>
                <Conversation conv={conv} currentUser={user} />
              </div>
            ))}
        </div>

        <div className=" ml-5  pl-5 w-100">
          {currentChat ? (
            <span>Open a conversation to start a chat</span>
          ) : (
            <div>
              {typeof tryIt === 'object' &&
                tryIt.map((m) => (
                  <Message message={m} mine={m.sender === user._id} />
                ))}
            </div>
          )}
          <div className="w-100">
            <textarea
              placeholder="enter your message"
              className="m-3 p-5 w-75"
            ></textarea>
            <br />
            <button className="btn btn-danger p-4">Send</button>
          </div>
        </div>
      </div>
    </>
  );
}
