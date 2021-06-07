import AuthContext from './AuthContext';
import AuthReducer from './AuthReducer';
import axios from 'axios';
import setAuthToken from '../../header/globalHeader';
import React, { useReducer } from 'react';

const AuthState = (props) => {
  const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    loading: true,
    user: null,
    error: null,
    dataStore: null,
    allTutor: null,
    tutData: null,
    ikeep: null,
    participants: [],
    storePDATA: [],
  };
  const [state, dispatch] = useReducer(AuthReducer, initialState);

  //load user
  const loadUser = async () => {
    setAuthToken(localStorage.token);
    try {
      const res = await axios.get('/athena/auth/loadUser');
      dispatch({
        type: 'USER_LOADED',
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: 'FAIL',
        payload: err.response.data.msg,
      });
    }
  };

  //register user
  const register = async (formData) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    try {
      const res = await axios.post('/athena/auth', formData, config);
      dispatch({
        type: 'REGISTER_SUCCESS',
        payload: res.data,
      });
      loadUser();
    } catch (err) {
      dispatch({
        type: 'FAIL',
        payload: err.response.data.msg,
      });
    }
  };

  //login
  const login = async (formData) => {
    const config = {
      header: {
        'Content-Type': 'application/json',
      },
    };
    try {
      const res = await axios.post('/athena/login', formData, config);
      dispatch({
        type: 'LOGIN_SUCCESS',
        payload: res.data,
      });
      loadUser();
    } catch (err) {
      dispatch({
        type: 'FAIL',
        payload: err.response.data.msg,
      });
    }
  };

  //view all tutors
  const ViewAllTutors = async () => {
    try {
      const res = await axios.get('/athena/tutors/viewAllTutors');

      await dispatch({
        type: 'VIEW_ALL_TUTORS',
        payload: await res.data,
      });
    } catch (err) {
      // dispatch({
      //   type: 'FAIL',
      //   payload: err.response.msg,
      // });
      console.log(err.message);
    }
  };

  //logout
  const logout = async () => {
    dispatch({
      type: 'LOGOUT',
    });
  };

  //store data
  const store = (data) => {
    dispatch({
      type: 'STORE_SUCCESS',
      payload: data,
    });
  };
  const reset = () => {
    dispatch({
      type: 'STORE_RESET',
    });
    loadUser();
  };

  //edit profile
  const editProfile = async (userData) => {
    const config = {
      header: {
        'Content-Type': 'application/json',
      },
    };
    try {
      const res = await axios.put(
        `/athena/auth/update/${userData._id}`,
        userData,
        config
      );
      dispatch({
        type: 'UPDATE_PROFILE',
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: 'FAIL',
        payload: err.response.data.msg,
      });
    }
  };

  //view a tutors profile
  const viewTutProfiles = async (tut) => {
    try {
      // const res = await axios.get(`view/profile/tutors/${tut._id}`);
      dispatch({
        type: 'VIEW_A_TUTOR',
        payload: tut,
      });
      // console.log('tutor data :' + tut);

      loadUser();
    } catch (err) {
      dispatch({
        type: 'FAIL',
        payload: err.response.data.msg,
      });
    }
  };

  //keep data
  const iStore = async (userD) => {
    try {
      dispatch({
        type: 'I_STORE',
        payload: userD,
      });
    } catch (error) {
      console.log(error);
    }
  };
  const isAdd = async () => {
    setAuthToken(localStorage.token);
    try {
      const res = await axios.get('athena/auth/all/users');
      dispatch({
        type: 'VIEW_ALL_PARTICIPANTS',
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
  const storePaticipant = async (userID) => {
    try {
      dispatch({
        type: 'STORE_PARTICIPANT',
        payload: userID,
      });
    } catch (error) {}
  };
  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        loading: state.loading,
        user: state.user,
        dataStore: state.dataStore,
        isAuth: state.isAuth,
        allTutor: state.allTutor,
        tutData: state.tutData,
        ikeep: state.ikeep,
        participants: state.participants,
        storePDATA: state.storePDATA,
        iStore,
        editProfile,
        register,
        loadUser,
        ViewAllTutors,
        login,
        logout,
        store,
        reset,
        isAdd,
        viewTutProfiles,
        storePaticipant,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
