import React from 'react';
import { useState } from 'react';
import { useContext, useEffect } from 'react';
// import TutorsContext from '../../context/tutors/TutorContext';
import AuthContext from '../../context/auth/AuthContext';

function ViewAllTutors() {
  const [data, setData] = useState();
  const authContext = useContext(AuthContext);
  const { allTutor, ViewAllTutors, loadUser } = authContext;

  useEffect(() => {
    loadUser();
    ViewAllTutors();
  }, []);

  useEffect(async () => {
    try {
      await setData(allTutor.user);
      await console.log(allTutor);
    } catch (err) {
      console.error(err);
    }
  }, [allTutor]);

  return (
    <div>
      <h2 className="display-3">All Tutors</h2>

      {typeof data === 'object' &&
        data.map((tut) => (
          <div className="d-flex ">
            <div className="bg-dark w-25 m-3 ">
              <h5 className="text-white">{tut.username}</h5>
              <h5 className="text-white">{tut.email}</h5>
              <h5 className="text-white">{tut.gender}</h5>
              <h5 className="text-white">{tut.speciality}</h5>
            </div>
          </div>
        ))}
    </div>
  );
}

export default ViewAllTutors;
