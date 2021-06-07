import React, { useReducer } from 'react';
import ClassReducer from './ClassReducer';
import ClassContext from './ClassContext';
import axios from 'axios';
import setAuthToken from '../../header/globalHeader';

const ClassroomState = (props) => {
  const initialState = {
    classroom: [],
  };
  const [state, dispatch] = useReducer(ClassReducer, initialState);

  //view all learners
  const onAdd = async () => {
    setAuthToken(localStorage.token);
    try {
      const res = await axios.get('/athena/auth/all/learners');
      dispatch({
        type: 'VIEW_PARTICIPANTS',
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <ClassContext.Provider
      value={{
        classroom: state.tutors,
        onAdd,
      }}
    >
      {props.children}
    </ClassContext.Provider>
  );
};

export default ClassroomState;
