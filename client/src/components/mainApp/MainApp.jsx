import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './mainApp.css';

import SideNav from './sideNav/SideNav';
// import Home from './home/Home';
import Chat from './chat/Chat';
import Home from '../ViewAllTutors/ViewAllTutors';
import Classroom from './classroom/Classroom';
import Profile from './Profile/Profile';
import PrivateRoute from '../PrivateRouting/PrivateRoute';
import TutorIndProfile from '../ViewAllTutors/TutorProfile';
import EditProfile from '../EditProfile/EditProfile';

const Navbar = () => {
  return (
    <div className="main">
      <SideNav />
      {/* <PrivateRoute path="/sidenav" exact component={SideNav} /> */}

      <div className="body">
        <Switch>
          <PrivateRoute path="/home" exact component={Home} />
          <PrivateRoute exact path="/chat" component={Chat} />
          <PrivateRoute exact path="/classroom" component={Classroom} />
          <PrivateRoute exact path="/profile" component={Profile} />
          <PrivateRoute exact path="/tut/profile" component={TutorIndProfile} />
          <PrivateRoute exact path="/edit/profile" component={EditProfile} />
        </Switch>
      </div>
    </div>
  );
};

export default Navbar;
