import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './mainApp.css';

import SideNav from './sideNav/SideNav';
import Home from './home/Home';
import Chat from './chat/Chat';
import Classroom from './classroom/Classroom';
import Profile from './Profile/Profile';
import PrivateRoute from '../PrivateRouting/PrivateRoute';
const Navbar = () => {
  return (
    <Router>
      <div className="main">
        {/* <SideNav /> */}
        <PrivateRoute path="/sidenav" exact component={SideNav} />

        <div className="body">
          <Switch>
            <PrivateRoute path="/home" exact component={Home} />
            <PrivateRoute path="/chat" component={Chat} />
            <PrivateRoute path="/classroom" component={Classroom} />
            <PrivateRoute path="/profile" component={Profile} />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default Navbar;
