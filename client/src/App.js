import './App.css';
import MainApp from './components/mainApp/MainApp';
import LandingPage from './components/landingPage/LandingPage';
import AuthState from './context/auth/AuthState';
function App() {
  return (
    <AuthState>
      <div className="App">
        {/* <MainApp /> */}
        <LandingPage />
      </div>
    </AuthState>
  );
}

export default App;
