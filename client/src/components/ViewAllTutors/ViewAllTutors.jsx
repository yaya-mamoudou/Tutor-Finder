import React, { useContext, useEffect, useState } from 'react';
// import TutorsContext from '../../context/tutors/TutorContext';
import AuthContext from '../../context/auth/AuthContext';
import TutProofile from './TutorProfile';
import { Link } from 'react-router-dom';

const ViewAllTutorProfilePage = (props) => {
  const [data, setData] = useState();
  const [aTutData, setATutData] = useState();

  const authContext = useContext(AuthContext);
  const {
    allTutor,
    ViewAllTutors,
    loadUser,
    viewTutProfiles,
    tutData,
  } = authContext;

  useEffect(async () => {
    loadUser();
    ViewAllTutors();
  }, []);

  useEffect(async () => {
    try {
      await setData(allTutor.user);
    } catch (err) {
      console.error(err);
    }
  }, [allTutor]);

  return (
    <div>
      <h2 className="display-3">All Tutors</h2>
      {typeof data === 'object' &&
        data.map((tut) => (
          <div className="d-flex  " key={tut.email}>
            <div className="bg-dark w-25 m-3 ">
              <h5 className="text-white">{tut.username}</h5>
              <h5 className="text-white">{tut.email}</h5>
              <h5 className="text-white">{tut.gender}</h5>
              <h5 className="text-white">{tut.speciality}</h5>
              <Link
                to={{
                  pathname: '/tut/profile',
                  myData: {
                    aTutData: tut,
                  },
                }}
              >
                <button className="btn btn-primary p-3  m-4">
                  View Profile
                </button>
              </Link>
            </div>
          </div>
        ))}

      <div></div>
    </div>
  );
};

export default ViewAllTutorProfilePage;
