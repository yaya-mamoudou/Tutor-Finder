import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './mainApp.css';

import SideNav from './sideNav/SideNav';
import Home from '../ViewAllTutors/ViewAllTutors';
import Chat from './chat/Chat';
import Classroom from './classroom/Classroom';
import Profile from './Profile/Profile';
import PrivateRoute from '../PrivateRouting/PrivateRoute';
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
        </Switch>
      </div>
    </div>
  );
};

export default Navbar;
