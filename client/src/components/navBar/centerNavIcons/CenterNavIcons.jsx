import React from "react";
import NavIcons from "../navIcons/NavIcons";

export default function CenterNavIcons() {
  return (
    <div className="iconsInCenter d-flex flex-column pt-3">
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

      <NavIcons className={"iconBox"} icon={"far fa-user"} label={"Profile"} />
    </div>
  );
}
