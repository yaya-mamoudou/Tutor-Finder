import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ClassroomHomeHeader from './classroomComponent/ClassroomHomeHeader';
import AuthContext from '../../../context/auth/AuthContext';
import CreateClassroom from './CreateClassroom';
import './myclassroom.css';

import imgtry from '../../assets/img/1.jpg';
import img1 from '../../assets/classImages/img1.png';
import img2 from '../../assets/classImages/img2.png';
import img3 from '../../assets/classImages/img3.png';
import img4 from '../../assets/classImages/img4.png';
import img5 from '../../assets/classImages/img5.png';
import img6 from '../../assets/classImages/img6.png';
import MyModal from '../../myModal/Modal';
import ClassDetails from './ClassDetails';

export default function MainClassEntry() {
  const classPics = [img1, img2, img3, img4, img5, img6];
  const authContext = useContext(AuthContext);
  const {
    isAdd,
    participants,
    myCreatedClass,
    allMyClasses,
    clearFilter,
    user,
    filtered,
    loadUser,
    getLearnersClassroom,
    learnerClass,
  } = authContext;

  const [myClasses, setMyClasses] = useState([]);
  const [aLearnersClass, setALearnersClass] = useState([]);

  const [alreadySet, setalreadySet] = useState(0);
  const [loggedUser, setloggedUser] = useState(undefined);
  const [handleModal, sethandleModal] = useState('none');
  const [modalData, setmodalData] = useState({});

  const [classModalstate, setclassModalstate] = useState('none');

  useEffect(async () => {
    loadUser();
  }, []);

  let theID = user && user._id;

  useEffect(() => {
    loadUser();
  }, []);

  useEffect(() => {
    setloggedUser(user);
  }, [user]);

  useEffect(() => {
    if (myClasses.length > 0) {
      setalreadySet(1);
    }
  }, [myClasses]);

  useEffect(async () => {
    try {
      user && getLearnersClassroom(user._id);
    } catch (err) {
      console.log(err);
    }
  }, [theID]);

  useEffect(async () => {
    await setALearnersClass(learnerClass);
  }, [learnerClass]);

  useEffect(async () => {
    try {
      await myCreatedClass();

      if (alreadySet === 0) {
        if (Object(allMyClasses).hasOwnProperty('classroom')) {
          new Promise(async (resolve, reject) => {
            await setalreadySet(1);

            let temp = [...allMyClasses.classroom];
            temp.map(
              (singleClass) =>
                (singleClass.bg = classPics[Math.floor(Math.random() * 7)])
            );
            resolve(temp);
          }).then(async (newClasses) => await setMyClasses(newClasses));
        } else {
          console.log('no');
        }
      }
    } catch (err) {
      console.log(err);
    }
  }, [allMyClasses]);

  const classroomModaltoggle = () => {
    if (classModalstate === 'flex') {
      setclassModalstate('none');
    } else {
      setclassModalstate('flex');
    }
  };

  const createClass = () => {
    console.log('class created');
    classroomModaltoggle();
  };

  const viewParticipants = () => {};
  const toggleModal = (index = 'null') => {
    if (handleModal === 'flex') {
      sethandleModal('none');
    } else {
      if (index !== 'null') {
        new Promise((resolve, reject) => {
          resolve(myClasses[index]);
        })
          .then(async (data) => await setmodalData(data))
          .then(() => sethandleModal('flex'));
      } else {
        sethandleModal('flex');
      }
    }
    console.log('clicked');
  };
  return (
    <div className="p-4">
      {/* <MyModal
        modalHeader={'Create new class'}
        toggleModal={classroomModaltoggle}
        modalStatus={classModalstate}
        component={<CreateClassroom />}
        header_bg={''}
      /> */}

      {/* {user && user.status === 'learner' ? (
        <div>
          {typeof aLearnersClass === 'object' &&
            aLearnersClass.map((learnerClass) => (
              <div>
                <h2>{learnerClass.classCode}</h2>
              </div>
            ))}
        </div>
      ) : (
        <div>
          <h3>alice</h3>
        </div>
      )} */}

      <MyModal
        modalHeader={'Create new class'}
        toggleModal={classroomModaltoggle}
        modalStatus={classModalstate}
        component={<CreateClassroom />}
        header_bg={''}
      />
      <MyModal
        component={<ClassDetails data={modalData} />}
        modalStatus={handleModal}
        modalHeader={'Class detail'}
        toggleModal={toggleModal}
      />
      <ClassroomHomeHeader
        createClass={createClass}
        showCreateClassroom={
          Object(loggedUser).hasOwnProperty('status') && loggedUser.status
        }
        viewParticipants={viewParticipants}
        toggleModal={toggleModal}
      />
      <div className="w-100 d-flex mt-5" style={{ flexWrap: 'wrap' }}>
        {myClasses.map((e, index) => {
          return (
            <Link
              className="classroomCard text-white rounded m-3"
              style={{
                backgroundImage: `url("${e.bg}")`,
                backgroundSize: 'cover',
              }}
              key={index}
              to="/Classchat"
            >
              <div className="w-100 h-100">
                <div
                  className="rounded px-4 pt-4"
                  style={{
                    backgroundColor: 'rgba(0,0,0,0.5)',
                    width: '100%',
                    height: '100%',
                    position: 'relative',
                  }}
                >
                  <div className="w-100 d-flex position-relative">
                    <div
                      className="pr-2"
                      style={{ width: '90%', textOverflow: 'wrap' }}
                    >
                      <p className="h2 font-weight-bold">
                        Course ID: {e.classCode}
                      </p>
                    </div>

                    <div className="bg-dark" onClick={() => toggleModal(index)}>
                      <i
                        style={{ position: 'absolute', right: 0, top: '.5rem' }}
                        class="far fa-eye eyIcon"
                      ></i>
                    </div>
                  </div>

                  <p className="h4 mt-5 font-weight-bold">
                    Title: {e.className}
                  </p>

                  <div
                    style={{ position: 'absolute', bottom: '1rem' }}
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
            </Link>
          );
        })}
      </div>
    </div>
  );
}
