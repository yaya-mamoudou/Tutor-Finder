// // import axios from 'axios';

// // const setAthenaToken = (token) => {
// //   if (token) {
// //     axios.defaults.headers.common['athena-token'] = token;
// //   } else {
// //     delete axios.defaults.headers.common['athena-token'];
// //   }
// // };

// // export default setAthenaToken;

import axios from 'axios';

const setAuthToken = (token) => {
  if (token) {
    axios.defaults.headers.common['athena-token'] = token;
  } else {
    delete axios.defaults.headers.common['athena-token'];
  }
};

export default setAuthToken;
