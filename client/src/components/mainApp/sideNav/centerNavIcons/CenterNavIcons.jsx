import React, { useState, useEffect } from "react";
import NavIcons from "../navIcons/NavIcons";
import { Link } from "react-router-dom";
let activePath = window.location.pathname;

let icons;

const setActivePath = (active) => {
  icons = [
    {
      icon: "fas fa-home",
      label: "Home",
      link: "/home",
      key: 0,
      className: active === "/home" ? "iconBoxColor" : "iconBox",
    },
    {
      icon: "far fa-comment-dots",
      label: "Chat message",
      className: active === "/chat" ? "iconBoxColor" : "iconBox",
      link: "/chat",
      key: 1,
    },
    {
      icon: "fas fa-book",
      label: "Classroom",
      className: active === "/classroom" ? "iconBoxColor" : "iconBox",
      link: "/classroom",
      key: 2,
    },
    {
      icon: "fas fa-user",
      label: "Profile",
      className: active === "/profile" ? "iconBoxColor" : "iconBox",
      link: "/profile",
      key: 3,
    },
  ];
};

export default function CenterNavIcons() {
  const [icon, setIcon] = useState([]);

  useEffect(async () => {
    await setActivePath(activePath);
    await setIcon(icons);
    return async () => {};
  }, []);

  const _setFocus = async (id) => {
    let temp = await [...icon];
    await temp.map((icon) => {
      return icon.key === id
        ? (icon.className = "iconBoxColor")
        : (icon.className = "iconBox");
    });
    setIcon(temp);
  };

  const _iconList = icon.map((icon) => {
    return (
      <Link key={icon.key} to={icon.link}>
        <NavIcons
          id={icon.key}
          _setFocus={_setFocus}
          className={icon.className}
          icon={icon.icon}
          label={icon.label}
        />
      </Link>
    );
  });

  return (
    <div className="iconsInCenter d-flex flex-column pt-3">
      {icon.length > 0 && _iconList}
    </div>
  );
}
