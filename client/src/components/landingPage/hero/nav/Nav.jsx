import React from "react";
import Logo from "../../logo/Logo";
import NavElements from "../nav/navElements/NavElements";

export default function Nav() {
  return (
    <div className="nav d-flex p-3 row ">
      <Logo />
      <NavElements />
    </div>
  );
}
