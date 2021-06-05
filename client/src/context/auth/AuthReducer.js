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
    case 'LOGIN_SUCCESS':
      localStorage.setItem('token', action.payload.token);

      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        loading: false,
        error: null,
      };
    case 'FAIL':
    case 'LOGOUT':
      localStorage.removeItem('token');

      return {
        ...state,
        isAuthenticated: false,
        loading: true,
        token: null,
        user: null,
        error: action.payload,
      };
    case 'STORE_SUCCESS':
      return {
        ...state,
        isAuthenticated: true,
        dataStore: action.payload,
      };
    case 'STORE_RESET':
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        error: null,
        dataStore: null,
      };
    case 'UPDATE_PROFILE':
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
        loading: false,
        error: null,
      };
    case 'VIEW_ALL_TUTORS':
      return {
        ...state,
        allTutor: action.payload,
        loading: false,
        isAuthenticated: true,
      };
  }
};
