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
      localStorage.removeItem('conv_id');

      return {
        ...state,
        isAuthenticated: false,
        loading: true,
        token: null,
        conversation: [],
        myMsg: [],
        user: null,
        error: action.pay,
        dataStore: null,
        allTutor: null,
        tutData: null,
        ikeep: null,
        participants: [],
        storePDATA: [],
        classroom: null,
        allMyClasses: null,
        myMsg: [],
        anewMsg: [],
        conversation: [],
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
      // console.log('data here' + action.payload + 'aki');

      return {
        ...state,
        allTutor: action.payload,
        loading: false,
        isAuthenticated: true,
      };
    case 'VIEW_A_TUTOR':
      console.log(action.payload);
      return {
        ...state,
        ...action.payload,
        tutData: action.payload,
        loading: false,
        isAuthenticated: true,
      };
    case 'I_STORE':
      return {
        ...state,
        ikeep: action.payload,
      };
    case 'VIEW_ALL_PARTICIPANTS':
      return {
        ...state,
        participants: action.payload,
      };
    case 'STORE_PARTICIPANT':
      return {
        ...state,
        storePDATA: [action.payload, ...state.storePDATA],
      };
    case 'CREATE_CLASSROOM':
      return {
        ...state,
        classroom: action.payload,
      };
    case 'VIEW_MY_CREATED_CLASSES':
      return {
        ...state,
        allMyClasses: action.payload,
      };
    case 'GET_CONVERSATION':
      return {
        ...state,
        conversation: action.payload,
      };
    case 'GET_MESSAGE':
      return {
        ...state,
        myMsg: action.payload,
      };
    case 'CREATE_MESSAGE':
      return {
        ...state,
        anewMsg: action.payload,
      };

    case 'CREATE_CONVERSATION':
      return {
        ...state,
        addConversation: action.payload,
      };
  }
};
