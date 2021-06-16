import React, { useState, useContext, useEffect } from "react";
import { BsListTask } from "react-icons/bs";
import ClassChat from "./ClassChat";
import Classfooter from "./Classfooter";
import { useHistory } from "react-router-dom";
import AuthContext from "../../../context/auth/AuthContext";
import "./classroom.css";
import Room from "./Room";

import imgtry from "../../assets/img/1.jpg";

import img1 from "../../assets/classImages/img1.png";
import img2 from "../../assets/classImages/img2.png";
import img3 from "../../assets/classImages/img3.png";
import img4 from "../../assets/classImages/img4.png";
import img5 from "../../assets/classImages/img5.png";
import img6 from "../../assets/classImages/img6.png";

function ClassRoom() {
  const classPics = [img1, img2, img3, img4, img5];
  const history = useHistory();
  const navigateTo = () => history.push("/Classchat");
  const authContext = useContext(AuthContext);
  const [myClasses, setMyClasses] = useState([]);
  const [alreadySet, setalreadySet] = useState(0);
  const { isAdd, participants, myCreatedClass, allMyClasses } = authContext;

  useEffect(() => {
    if (myClasses.length > 0) {
      // console.log(myClasses);
      setalreadySet(1);
    }
  }, [myClasses]);
  useEffect(async () => {
    try {
      await myCreatedClass();

      if (alreadySet === 0) {
        if (Object(allMyClasses).hasOwnProperty("classroom")) {
          new Promise(async (resolve, reject) => {
            await setalreadySet(1);

            let temp = [...allMyClasses.classroom];
            temp.map(
              (singleClass) =>
                (singleClass.bg = classPics[Math.floor(Math.random() * 7)])
            );
            console.log(temp);
            resolve(temp);
          }).then(async (newClasses) => await setMyClasses(newClasses));
          // console.log(allMyClasses);
        } else {
          console.log("no");
        }
      }
    } catch (err) {
      console.log(err);
    }
  }, [allMyClasses]);
  return (
    <div className="" style={{ width: "100%" }}>
      <div className="back">
        <div className="classes">
          <div className="tutor">
          <h4> <span className='tutorName' >tutoring</span>/tutored</h4>
          </div>
          <div className="w-100 d-flex mt-5" style={{ flexWrap: "wrap" }}>
            {myClasses.map((e, index) => (
              <Room e={e} key={index} />
            ))}
          </div>
        </div>
        <div className="contener">
          <div className="classcont">
            <div className="top">
              <div className="about">
                <p className="subject">Basics of english language</p>
                <p className="teacher">Tutor: Mr Colins More</p>
              </div>
              <div className="task">
                <p className="thread">New Thread</p>
                <BsListTask size={20} style={{cursor:'pointer'}}/>
              </div>
            </div>
            <div className="chats">
              <ClassChat />
              <ClassChat />
              <ClassChat />
              <ClassChat />
            </div>
          </div>
          <Classfooter />
        </div>
      </div>
    </div>
  );
}

export default ClassRoom;
