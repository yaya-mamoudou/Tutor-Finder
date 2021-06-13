import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./mainApp.css";
import SideNav from "./sideNav/SideNav";
import Chat from "./ChatPannel/Chat";
import Home from "../ViewAllTutors/ViewAllTutors";
import Classroom from "./classroom/MainClassEntry";
import Profile from "./Profile/Profile";
import PrivateRoute from "../PrivateRouting/PrivateRoute";
import TutorIndProfile from "../ViewAllTutors/TutorProfile";
import ViewTutors from "./ViewTutors/ViewTutors";
const Navbar = () => {
  return (
    <div className="main">
      <SideNav />

      <div className="mybody">
        <Switch>
          <PrivateRoute path="/home" exact component={ViewTutors} />
          <PrivateRoute exact path="/chat" component={Chat} />
          <PrivateRoute exact path="/classroom" component={Classroom} />
          <PrivateRoute exact path="/profile" component={Profile} />
          <PrivateRoute exact path="/tut/profile" component={TutorIndProfile} />
        </Switch>
      </div>
    </div>
  );
};

export default Navbar;
