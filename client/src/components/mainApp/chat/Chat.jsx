import React, { useContext, useState, useEffect, useRef } from "react";
import Conversation from "./Conversation";
// import Message from './Message';
import AuthContext from "../../../context/auth/AuthContext";
import axios from "axios";
import { format } from "timeago.js";
import yaya1 from "../../assets/yaya1.jpg";
import "./Message.css";
import { io } from "socket.io-client";

export default function Chat() {
  const PF = "http://localhost:5000/images/";

  const authContext = useContext(AuthContext);
  const {
    user,
    getConversation,
    conversation,
    loadUser,
    getMsg,
    myMsg,
    anewMsg,
    createMessage,
  } = authContext;
  const [myConv, setMyConv] = useState();
  const [currentChat, setCurrentChat] = useState();
  const [addedMsg, setAddedMsg] = useState();
  const [conversationId, setconversationId] = useState("");
  const socket = useRef();
  const [tryIt, setTryIt] = useState();
  const [arrivalMessage, setArrivalMessage] = useState(null);

  const [newMsg, setNewMsg] = useState({
    text: "",
  });
  const { text } = newMsg;
  //starts here
  useEffect(() => {
    socket.current = io("ws://localhost:8900");
    socket.current.on("getMessage", (data) => {
      setArrivalMessage({
        // sender: data.senderId,
        text: data.text,
        createdAt: Date.now(),
      });
    });
  }, []);

  useEffect(() => {
    arrivalMessage &&
      currentChat?.members.includes(arrivalMessage.sender) &&
      setTryIt((prev) => [...prev, arrivalMessage]);
  }, [arrivalMessage, currentChat]);

  useEffect(() => {
    arrivalMessage &&
      currentChat?.members.includes(arrivalMessage.sender) &&
      setTryIt((prev) => [...prev, arrivalMessage]);
  }, [arrivalMessage, currentChat]);

  useEffect(() => {
    socket.current.emit("addUser", user && user._id);
    socket.current.on("getUsers", (users) => {});
  }, [user]);
  //ends

  // initial
  useEffect(async () => {
    await setTryIt(myMsg.message);
  }, [myMsg.message]);

  const onChange = (e) =>
    setNewMsg({ ...newMsg, [e.target.name]: e.target.value });

  const clicked = async (conv) => {
    localStorage.setItem("conv_id", conv._id);
    setconversationId(conv._id);
    setCurrentChat(conv);
  };

  useEffect(async () => {
    let anID = await localStorage.getItem("conv_id");
    getMsg(anID);
  }, [anewMsg, localStorage.getItem("conv_id")]);

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

  const onSubmit = async (e) => {
    e.preventDefault();
    createMessage({ text, conversationId });
    setNewMsg({
      text: "",
    });

    const receiverId = currentChat.members.find(
      (member) => member !== user._id
    );

    console.log(receiverId);
    socket.current.emit("sendMessage", {
      // senderId: user && user._id,
      receiverId,
      text,
    });
  };

  return (
    <>
      <div className="d-flex w-100">
        <div className=" ml-5  pl-5 w-25">
          {typeof myConv === "object" &&
            myConv.map((conv) => (
              <div
                onClick={() => clicked(conv)}
                style={{
                  cursor: "pointer",
                }}
                key={conv.username}
              >
                <Conversation conv={conv} currentUser={user} />
              </div>
            ))}
        </div>

        <div className=" ml-5  pl-5 w-100">
          {typeof currentChat === "undefined" ? (
            <h1>Open a conversation to start a chat</h1>
          ) : (
            <div>
              {typeof tryIt === "object" &&
                tryIt.map((m) => (
                  <div>
                    <div
                      className={
                        m.sender === user._id ? "message mine" : "message"
                      }
                    >
                      <div className=" m-5 ">
                        <img
                          src={
                            m.sender === user._id
                              ? user.profilePic === ""
                                ? "http://www.iconarchive.com/download/i102645/graphicloads/flat-finance/person.ico"
                                : PF + user.profilePic
                              : "message"
                          }
                          width="60px"
                          height="60px"
                          alt=""
                          className="rounded-circle"
                        />
                        <div
                          className=" p-3 mt-4 txt text.white "
                          style={{ maxWidth: "600px", borderRadius: "21px" }}
                        >
                          {m.text}
                        </div>
                        <p className="h5 pt-3"> {format(m.createdAt)} </p>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          )}

          <div className="w-100">
            <form onSubmit={onSubmit}>
              <textarea
                type="text"
                name="text"
                value={text}
                onChange={onChange}
                required
                placeholder="enter your message"
                className="m-3 p-5 w-75"
              ></textarea>
              <br />
              <button className="btn btn-danger p-4" type="submit">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
