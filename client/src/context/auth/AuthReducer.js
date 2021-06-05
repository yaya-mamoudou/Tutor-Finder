export default (state, action) => {
  switch (action.type) {
    default:
      return state;
    case 'USER_LOADED':
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        error: null,
        user: action.payload,
      };
    case 'REGISTER_SUCCESS':
      localStorage.setItem('token', action.payload.token);
      console.log(action.payload.token);
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        loading: false,
        error: null,
      };
    case 'REGISTER_FAIL':
      localStorage.removeItem('token');
      return {
        ...state,
        isAuthenticated: false,
        loading: true,
        token: null,
        user: null,
        error: action.payload,
      };
  }
};
