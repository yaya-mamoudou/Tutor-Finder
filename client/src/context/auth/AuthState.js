import AuthContext from './AuthContext';
import AuthReducer from './AuthReducer';
import React, { useState, useReducer } from 'react';

const AuthState = (props) => {
  const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: false,
    loading: true,
    user: null,
    error: null,
  };
  const [state, dispatch] = useReducer(initialState, AuthReducer);

  return <AuthContext.Provider>{props.children}</AuthContext.Provider>;
};

export default AuthState;
