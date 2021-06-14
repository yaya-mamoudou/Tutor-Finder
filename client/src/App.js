import './App.css';
import MainApp from './components/mainApp/MainApp';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPage from './components/landingPage/LandingPage';
import AuthState from './context/auth/AuthState';
import RegLog from './components/RegisLog/RegLog';
import UserProfile from './components/mainApp/Profile/Profile';
import Log from './components/RegisLog/Log';
import PrivateRoute from './components/PrivateRouting/PrivateRoute';
import TutorState from './context/tutors/TutorState';
import TutorProfile from './components/mainApp/ViewTutors/ViewTutors';
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
                <Route exact path="/login" component={Log} />
                <Route exact path="/register" component={RegLog} />
                <PrivateRoute exact path="/mainapp" component={MainApp} />
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
