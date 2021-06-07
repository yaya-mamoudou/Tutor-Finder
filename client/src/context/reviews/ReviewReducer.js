export default (state, action) => {
  switch (action.type) {
    default:
      return state;
    case 'VIEW_ALL_TUTORS':
      return {
        ...state,
        tutors: action.payload,
      };
    case 'FAIL':
      return {
        ...state,
        tutors: null,
      };
    case 'ADD_REVIEW':
      console.log('in payload' + action.payload);
      return {
        ...state,
        reviews: action.payload,
      };
    case 'GET_MY_REVIEWS':
      return {
        ...state,
        myReview: action.payload,
      };
    case 'GET_A_TUTS_REVIEWS':
      return {
        ...state,
        aTutsReview: action.payload,
      };
    case 'CLEAR':
      return {
        reviews: null,
        myReview: null,
        aTutsReview: null,
      };
  }
};
