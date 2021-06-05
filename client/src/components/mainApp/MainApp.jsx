import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './mainApp.css';

import SideNav from './sideNav/SideNav';
import Home from './home/Home';
import Chat from './chat/Chat';
import Classroom from './classroom/Classroom';
import Profile from './Profile/Profile';

const Navbar = () => {
  return (
    <Router>
      <div className="main">
        <SideNav />
        <div className="body">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/chat" component={Chat} />
            <Route path="/classroom" component={Classroom} />
            <Route path="/profile" component={Profile} />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default Navbar;
