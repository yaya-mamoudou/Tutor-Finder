import React, { createRef } from "react";
import "./Navbar.css";
import NavIcons from "./NavIcons";

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

  return (
    <div className="main">
      <div ref={menu} className="sideNav reduced ">
        <div className="navContainer justify-content-between">
          <div
            onClick={() => _toggleMenu()}
            className="menu text-white d-flex h4 align-items-center justify-content-center"
          >
            <i className="fas fa-bars"></i>
          </div>
          <div className="iconsInCenter d-flex flex-column pt-3">
            {/* //Home icon andlabel view 
            // 
            //
            //
            */}
            <NavIcons
              className={"iconBoxColor"}
              icon={"fas fa-home"}
              label={"Home"}
            />

            <NavIcons
              className={"iconBox"}
              icon={"far fa-comment-dots"}
              label={"Chat message"}
            />

            <NavIcons
              className={"iconBox"}
              icon={"fas fa-book"}
              label={"Classroom"}
            />

            <NavIcons
              className={"iconBox"}
              icon={"far fa-user"}
              label={"Profile"}
            />
          </div>

          <div className="d-flex">
            <div
              onClick={() => _iconFocus()}
              className="logout text-warning d-flex justify-content-center align-items-center h4 mb-5"
            >
              <i className="icon fas fa-sign-out-alt"></i>
            </div>
            <div className="label mb-5">
              <span className="text-warning">Profile</span>
            </div>
          </div>
        </div>
      </div>

      <div className="body bg-warning"></div>
    </div>
  );
};

export default Navbar;
