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
import TutorState from './context/tutors/TutorState';
import TutorProfile from './components/ViewAllTutors/ViewAllTutors';
import TutorIndProfile from './components/ViewAllTutors/TutorProfile';
import ReviewState from './context/reviews/ReviewState';
import ClassroomState from './context/classroom/ClassState';

function App() {
  return (
    <Router>
      <AuthState>
        <ReviewState>
          <ClassroomState>
            <TutorState>
              <Switch>
                <Route exact path="/" component={LandingPage} />
                <Route exact path="/login" component={Login} />
                <PrivateRoute exact path="/mainapp" component={MainApp} />
                <Route exact path="/register" component={Registerlogin} />
                <PrivateRoute
                  exact
                  path="/ViewTutorProfile"
                  component={TutorProfile}
                />

                <MainApp />
              </Switch>
            </TutorState>
          </ClassroomState>
        </ReviewState>
      </AuthState>
    </Router>
  );
}

export default App;
