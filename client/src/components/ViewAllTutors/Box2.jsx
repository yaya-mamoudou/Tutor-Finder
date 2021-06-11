import React from "react";

export default function Box2() {
  const email = localStorage.getItem("email");

  return (
    <div className="bg-white mt-3 rounded p-4" style={{ height: "35%" }}>
      <div>
        <div className="mb-3">
          <p className="text-secondary ">Telephone:</p>
        </div>
        <div className="mb-3">
          <p className="text-secondary">Email:</p>
          <p>{email}</p>
        </div>
        <div>
          <p className="text-secondary mb-2 font-weight-bold">
            Social email Handles
          </p>
          <div className="d-flex">
            <i
              style={{ color: "green" }}
              className="fab fa-whatsapp mr-2 fa-2x"
            ></i>
            <i
              style={{ color: "green" }}
              class="fab fa-facebook fa-2x mr-2 rounded-circle"
            ></i>
            <i class="fab fa-twitter fa-2x mr-2  rounded-circle"></i>

            <i class="fab fa-github fa-2x"></i>
          </div>
        </div>
      </div>
    </div>
  );
}
