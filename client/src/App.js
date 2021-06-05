import './App.css';
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
          {/* <MainApp /> */}
          <Route exact path="/" component={LandingPage} />
          <Switch>
            <Route exact path="/register" component={Registerlogin} />
            <PrivateRoute exact path="/profile" component={UserProfile} />
            <Route exact path="/login" component={Login} />
          </Switch>
        </div>
      </AuthState>
    </Router>
  );
}

export default App;
