import React from "react";
import nav from "./Navbar.module.css";
const Navbar = () => {
  return (
    <div className={nav.main}>
      <div className={nav.iconContainer}>
        <div className={nav.icon}></div>
        <div className={nav.icon}></div>
        <div className={nav.icon}></div>
        <div className={nav.icon}></div>
      </div>
    </div>
  );
};

export default Navbar;
