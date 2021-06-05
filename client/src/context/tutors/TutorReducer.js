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
  }
};
