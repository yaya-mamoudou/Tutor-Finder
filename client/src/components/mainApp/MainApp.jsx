import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "./mainApp.css";

import SideNav from "./sideNav/SideNav";
import Home from "./home/Home";
import Chat from "./chat/Chat";
import Classroom from "./classroom/Classroom";
import Profile from "./Profile/Profile";
import PrivateRoute from "../PrivateRouting/PrivateRoute";
const Navbar = () => {
  return (
    <Router>
      <div className="main">
        <SideNav />
        <div className="body">
          <Switch>
            <PrivateRoute exact path="/mainapp/home" component={Home} />
            <Route exact path="/mainapp/chat" component={Chat} />
            <Route exact path="/mainapp/classroom" component={Classroom} />
            <Route exact path="/mainapp/profile" component={Profile} />
            <Redirect exact from="/mainapp" to="/mainapp/home" />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default Navbar;
