import React, { createRef } from "react";
import CenterNavIcons from "./centerNavIcons/CenterNavIcons";
import Logout from "./logout/Logout";
import Menu from "./menu/Menu";
import "./Navbar.css";

const menu = createRef();

const Navbar = () => {
  const _toggleMenu = () => {
    const reduced = menu.current.className.includes("reduced");
    console.log(menu.current.className);
    if (reduced) {
      menu.current.className = menu.current.className.replace(
        "reduced",
        "expanded"
      );
    } else {
      menu.current.className = menu.current.className.replace(
        "expanded",
        "reduced"
      );
    }
    console.log(menu.current.className);
  };

  const _iconFocus = () => {};
  const _logout = () => {};

  return (
    <div className="main">
      <div ref={menu} className="sideNav reduced ">
        <div className="navContainer justify-content-between">
          <Menu _toggleMenu={_toggleMenu} />
          <CenterNavIcons _iconFocus={_iconFocus} />
          <Logout _logout={_logout} />
        </div>
      </div>
      {/* <div className="body bg-warning"></div> */}
    </div>
  );
};

export default Navbar;
