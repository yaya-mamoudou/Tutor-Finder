import React, { useState, useEffect, useContext } from 'react';
import Card from './Card/Card';
import './viewtutors.css';
// import AuthContext from '../../context/auth/AuthContext';
import AuthContext from '../../../context/auth/AuthContext';
import ReviewContext from '../../../context/reviews/ReviewContext';
import { Link } from 'react-router-dom';

function ViewTutors(props) {
  const [data, setData] = useState();
  const [aTutData, setATutData] = useState();

  const authContext = useContext(AuthContext);
  const reviewContext = useContext(ReviewContext);
  const { clearReview } = reviewContext;
  const {
    allTutor,
    ViewAllTutors,
    loadUser,
    viewTutProfiles,
    tutData,
    iStore,
    myCreatedClass,
    IcreateClass,
  } = authContext;
  useEffect(async () => {
    loadUser();
    ViewAllTutors();
    clearReview();
    myCreatedClass();
    IcreateClass();
  }, []);

  useEffect(async () => {
    try {
      await setData(allTutor.user);
    } catch (err) {
      console.error(err);
    }
  }, [allTutor]);

  return (
    <div className="alltutors">
      <div className="txt-alltutor">All Tutors</div>
      {typeof data === 'object' &&
        data.map((tut) => (
          <Card className="d-flex  " key={tut.email} tut={tut} />
        ))}
    </div>
  );
}

export default ViewTutors;
