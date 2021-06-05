import React, { useReducer } from 'react';
import TutorReducer from './TutorReducer';
import TutorContext from './TutorContext';

const TutorState = (props) => {
  const initialState = {
    tutors: [
      {
        name: 'alice',
      },
      {
        name: 'yaya',
      },
      {
        name: 'frank',
      },
    ],
  };
  const [state, dispatch] = useReducer(TutorReducer, initialState);
  return (
    <TutorContext.Provider
      value={{
        tutors: state.tutors,
      }}
    >
      {props.children}
    </TutorContext.Provider>
  );
};

export default TutorState;
