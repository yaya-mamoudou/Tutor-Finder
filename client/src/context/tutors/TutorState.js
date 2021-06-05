import React, { useReducer } from 'react';
import TutorReducer from './TutorReducer';
import TutorContext from './TutorContext';
import axios from 'axios';
const TutorState = (props) => {
  const initialState = {
    tutors: null,
  };
  const [state, dispatch] = useReducer(TutorReducer, initialState);

  //view all tutors
  const ViewAllTutors = async () => {
    try {
      const res = await axios.get('/athena/tutors/viewAllTutors');
      dispatch({
        type: 'VIEW_ALL_TUTORS',
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: 'FAIL',
        payload: err.response.data.msg,
      });
    }
  };
  return (
    <TutorContext.Provider
      value={{
        tutors: state.tutors,
        ViewAllTutors,
      }}
    >
      {props.children}
    </TutorContext.Provider>
  );
};

export default TutorState;
