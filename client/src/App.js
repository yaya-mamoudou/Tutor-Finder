// import './App.css';
// import MainApp from './components/mainApp/MainApp';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import LandingPage from './components/landingPage/LandingPage';
// import AuthState from './context/auth/AuthState';
// import Registerlogin from './components/RegisLog/Registerlogin';
// import UserProfile from './components/mainApp/Profile/Profile';
// import Login from './components/login/Login';
// import PrivateRoute from './components/PrivateRouting/PrivateRoute';
// import TutorState from './context/tutors/TutorState';
// import Home from './components/mainApp/home/Home';
// import Chat from './components/mainApp/chat/Chat';
// import Classroom from './components/mainApp/classroom/Classroom';

// function App() {
//   return (
//     <Router>
//       <AuthState>
//         <TutorState>
//           <Switch>
//             <Route exact path="/" component={LandingPage} />
//             {/* <PrivateRoute path="/home" exact component={Home} />
//             <PrivateRoute path="/chat" component={Chat} />
//             <PrivateRoute path="/classroom" component={Classroom} /> */}
//             <Route exact path="/login" component={Login} />
//             <Route exact path="/" component={LandingPage} />
//             <Route exact path="/register" component={Registerlogin} />
//             <PrivateRoute exact path="/profile" component={UserProfile} />
//             <PrivateRoute
//               exact
//               path="/viewalltutors"
//               component={ViewAllTutors}
//             />
//           </Switch>
//         </TutorState>
//       </AuthState>
//     </Router>
//   );
// }

// export default App;

import './App.css';
import ViewAllTutors from './components/ViewAllTutors/ViewAllTutors';

import MainApp from './components/mainApp/MainApp';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPage from './components/landingPage/LandingPage';
import AuthState from './context/auth/AuthState';
import Registerlogin from './components/RegisLog/Registerlogin';
import UserProfile from './components/mainApp/Profile/Profile';
import Login from './components/login/Login';
import PrivateRoute from './components/PrivateRouting/PrivateRoute';
function App() {
  return (
    <Router>
      <AuthState>
        <div className="App">
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/login" component={Login} />
            <PrivateRoute exact path="/mainapp" component={MainApp} />
            <Route exact path="/register" component={Registerlogin} />
            <MainApp />
          </Switch>
        </div>
      </AuthState>
    </Router>
  );
}

export default App;
