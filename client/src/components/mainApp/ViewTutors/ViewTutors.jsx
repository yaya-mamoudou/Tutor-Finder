import React, { useState, useEffect, useContext ,useRef} from 'react';
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
  const { clearFilter, user, filtered, filterClasses } = authContext;

  const { clearReview } = reviewContext;
  const {
    allTutor,
    ViewAllTutors,
    loadUser,
    viewTutProfiles,
    tutData,
    iStore,
    myCreatedClass,
  } = authContext;
  useEffect(async () => {
    loadUser();
    ViewAllTutors();
    clearReview();
    myCreatedClass();
  }, []);
  const text = useRef("");
  useEffect(() => {
    if (filtered === null) {
      text.current.value = "";
    }
  });

  const onChange = (e) => {
    if (text.current.value !== "") {
      filterClasses(e.target.value);
    } else {
      clearFilter();
    }
  };
  useEffect(async () => {
    try {
      await setData(allTutor.user);
    } catch (err) {
      console.error(err);
    }
  }, [allTutor]);

  return (
    <div className="alltutors">
      <div className="fish-roll">
      <div className="head-alltutor">All Tutors</div>
      <div className="classroom_search d-flex mt-5 pl-4 pr-3 py-2">
        <form className="search_tutor">
          <input
            ref={text}
            type="text"
            placeholder="Search tutor"
            style={{ backgroundColor: "transparent" }}
            className="w-100 border-0 pr-3"
            onChange={onChange}
          />
        </form>
        <i class="fas view fa-search align-self-center"></i>
      </div>
      </div>
      {typeof data === 'object' &&
        data.map((tut) => (
          <Card className="d-flex  " key={tut.email} tut={tut} />
        ))}
    </div>
  );
}

export default ViewTutors;
