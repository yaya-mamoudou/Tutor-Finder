import React from "react";

export default function Menu({ _toggleMenu }) {
  return (
    <div
      onClick={() => _toggleMenu()}
      className="menu text-white d-flex h4 align-items-center justify-content-center"
    >
      <i className="fas fa-bars"></i>
    </div>
  );
}
