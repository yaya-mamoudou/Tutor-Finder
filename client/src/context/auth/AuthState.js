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
  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        loading: state.loading,
        user: state.user,
        dataStore: state.dataStore,
        isAuth: state.isAuth,
        editProfile,
        register,
        loadUser,
        login,
        logout,
        store,
        reset,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
