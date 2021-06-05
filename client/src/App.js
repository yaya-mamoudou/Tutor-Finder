import './App.css';
import MainApp from './components/mainApp/MainApp';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPage from './components/landingPage/LandingPage';
import AuthState from './context/auth/AuthState';
import Registerlogin from './components/RegisLog/Registerlogin';
function App() {
  return (
    <Router>
      <AuthState>
        <div className="App">
          {/* <MainApp /> */}
          <Route exact path="/" component={LandingPage} />
          <Switch>
            <Route exact path="/register" component={Registerlogin} />
          </Switch>
        </div>
      </AuthState>
    </Router>
  );
}

export default App;
