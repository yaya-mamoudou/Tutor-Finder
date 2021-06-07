export default (state, action) => {
  switch (action.type) {
    default:
      return state;
    case 'VIEW_PARTICIPANTS':
      // console.log('here are the participants' + action.payload);

      return {
        ...state,
        classroom: action.payload,
      };
    case 'FAIL':
      return {
        ...state,
        tutors: null,
      };
  }
};
