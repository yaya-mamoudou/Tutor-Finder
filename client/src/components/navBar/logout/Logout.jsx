import React from "react";

export default function Logout({ _logout }) {
  return (
    <div className="d-flex">
      <div
        onClick={() => _logout()}
        className="logout text-warning d-flex justify-content-center align-items-center h4 mb-5"
      >
        <i className="icon fas fa-sign-out-alt"></i>
      </div>
      <div className="label mb-5">
        <span className="text-warning">Profile</span>
      </div>
    </div>
  );
}
