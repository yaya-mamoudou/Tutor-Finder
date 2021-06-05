import React from 'react';
import { useContext } from 'react';
import TutorsContext from '../../context/tutors/TutorContext';

function ViewAllTutors() {
  const tutorContext = useContext(TutorsContext);
  const { tutors } = tutorContext;
  return (
    <div>
      {tutors.map((tutor) => {
        return <h1>hi {tutor.name} </h1>;
      })}
    </div>
  );
}

export default ViewAllTutors;
