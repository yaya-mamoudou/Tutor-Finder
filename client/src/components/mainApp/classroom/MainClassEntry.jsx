import React, { useContext, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import ClassroomHomeHeader from "./classroomComponent/ClassroomHomeHeader";
import AuthContext from "../../../context/auth/AuthContext";
import CreateClassroom from "./CreateClassroom";
import "./myclassroom.css";

import imgtry from "../../assets/img/1.jpg";

import img1 from "../../assets/classImages/img1.png";
import img2 from "../../assets/classImages/img2.png";
import img3 from "../../assets/classImages/img3.png";
import img4 from "../../assets/classImages/img4.png";
import img5 from "../../assets/classImages/img5.png";
import img6 from "../../assets/classImages/img6.png";
import MyModal from "../../myModal/Modal";
import ClassDetails from "./ClassDetails";

export default function MainClassEntry() {
  const classPics = [img1, img2, img3, img4, img5, img6];
  const history = useHistory();
  const navigateTo = () => history.push('/Classchat');
  const authContext = useContext(AuthContext);
  const { isAdd, participants, myCreatedClass, allMyClasses } = authContext;

  const [myClasses, setMyClasses] = useState([]);
  const [alreadySet, setalreadySet] = useState(0);
  const [store, setStore] = useState();

  const [handleModal, sethandleModal] = useState("none");
  const [modalData, setmodalData] = useState({});

  const [classModalstate, setclassModalstate] = useState('none');

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

  const classroomModaltoggle =()=>{
    if(classModalstate === 'flex'){
      setclassModalstate('none')
    }
    else{
      setclassModalstate('flex')
    }
  }

  const createClass = ()=>{
    console.log('class created');
    classroomModaltoggle();

  }

  const toggleModal = (index = "null") => {
    if (handleModal === "flex") {
      sethandleModal("none");
    } else {
      if (index !== "null") {
        new Promise((resolve, reject) => {
          resolve(myClasses[index]);
        })
          .then(async (data) => await setmodalData(data))
          .then(() => sethandleModal("flex"));
      } else {
        sethandleModal("flex");
      }
    }
    console.log("clicked");
  };

  return (
    <div className="p-4">
      <MyModal 
      modalHeader={'Create new class'}
      toggleModal={classroomModaltoggle}
      modalStatus = {classModalstate}
      component={<CreateClassroom/>}
      header_bg = {''}
      />
   
      <MyModal
        component={<ClassDetails data={modalData} />}
        modalStatus={handleModal}
        modalHeader={"Class detail"}
        toggleModal={toggleModal}
      />
      <ClassroomHomeHeader
        createClass={createClass}
      />
      <div className="w-100 d-flex mt-5" style={{ flexWrap: "wrap" }}>
        {myClasses.map((e, index) => {
          return (

            <div
              className="classroomCard text-white rounded m-3"
              style={{
                backgroundImage: `url("${e.bg}")`,
                backgroundSize: "cover",
              }}
              onClick={ navigateTo }
            >
              <div
                className="rounded px-4 pt-4"
                style={{
                  backgroundColor: "rgba(0,0,0,0.5)",
                  width: "100%",
                  height: "100%",
                  position: "relative",
                }}
              >
                <div className="w-100 d-flex position-relative">
                  <div
                    className="pr-2"
                    style={{ width: "90%", textOverflow: "wrap" }}
                  >
                    <p className="h2 font-weight-bold">
                      Course ID: {e.classCode}
                    </p>
                  </div>

                  <div className="bg-dark" onClick={() => toggleModal(index)}>
                    <i
                      style={{ position: "absolute", right: 0, top: ".5rem" }}
                      class="far fa-eye eyIcon"
                    ></i>
                  </div>
                </div>

                <p className="h4 mt-5 font-weight-bold">Title: {e.className}</p>

                <div
                  style={{ position: "absolute", bottom: "1rem" }}
                  className="d-flex align-items-end"
                >
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
              </div>
            </div>
         
          );
        })}
      </div>
    </div>
  );
}

// import React, { useContext, useState, useEffect } from "react";
// // import Card from './Card/Card';
// import AuthContext from "../../../context/auth/AuthContext";
// import ClassUser from "./ClassUser";
// import Modal from "react-bootstrap/Modal";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { Button } from "react-bootstrap";
// import CreateClassroom from "./CreateClassroom";
// // import ClassParticipant from './ClassParticipant';
// import { Link } from "react-router-dom";
// function MainClassEntry() {
//   const authContext = useContext(AuthContext);
//   const { isAdd, participants, myCreatedClass, allMyClasses } = authContext;

//   const [myClasses, setMyClasses] = useState();
//   const [modalShow, setModalShow] = React.useState(false);
//   const [modalShow1, setModalShow1] = React.useState(false);
//   const [store, setStore] = useState();

//   useEffect(() => {
//     myCreatedClass();
//   }, [allMyClasses]);
//   useEffect(async () => {
//     try {
//       await setMyClasses(allMyClasses.classroom);
//     } catch (err) {
//       console.log(err);
//     }
//   }, [allMyClasses]);

//   const myfunc = async (thenewData) => {
//     try {
//       setModalShow1(true);
//       await setStore(thenewData.participants);
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   return (
//     <div>
//       <Button variant="danger p-3" onClick={() => setModalShow(true)}>
//         Create A New Class
//       </Button>

//       <CreateClassroom show={modalShow} onHide={() => setModalShow(false)} />
//       <div>
//         {typeof myClasses === "object" &&
//           myClasses.map((data) => (
//             <div className="bg-secondary p-5 m-3 ">
//               <h5 className="ml-5">Course Name</h5>
//               <h5 className="text-info ml-5"> {data.className} </h5>
//               <h5 className="ml-5">Course Code</h5>
//               <h5 className="text-info ml-5 "> {data.classCode} </h5>
//               <h5 className="ml-5">Tutors Name</h5>
//               <h5 className="text-info ml-5 "> {data.tutorName} </h5>
//               <Button variant="danger p-3" onClick={() => myfunc(data)}>
//                 view Paticipants
//               </Button>
//               <div show={modalShow1} onHide={() => setModalShow1(false)}></div>
//             </div>
//           ))}
//         <div>
//           <Modal
//             // {...props}
//             show={modalShow1}
//             onHide={() => setModalShow1(false)}
//             modalShow
//             size="md"
//             aria-labelledby="contained-modal-title-vcenter"
//             centered
//           >
//             <Modal.Header closeButton>
//               <Modal.Title
//                 id="contained-modal-title-vcenter"
//                 className="p-5 m-5"
//               >
//                 All Participants
//               </Modal.Title>
//             </Modal.Header>
//             <Modal.Body>
//               <h4></h4>
//               {typeof store === "object" &&
//                 store.map((user) => <ClassUser user={user} />)}
//             </Modal.Body>
//             <Modal.Footer>
//               <Button variant="danger" onClick={() => setModalShow1(false)}>
//                 Save
//               </Button>
//             </Modal.Footer>
//           </Modal>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default MainClassEntry;
