import React, { useEffect, useState } from "react";

// console.log(Object.is(activePath, "/tut/profile"));
export default function TutorProfileHeader({ status, handleModal }) {
  const [statusUser, setstatusUser] = useState("");

  useEffect(async () => {
    let activePath = await window.location.pathname;
    await setstatusUser(activePath);
  }, []);

  return statusUser === "/tut/profile" ? (
    <div className="d-flex mb-4">
      <p className="h3">Profile</p>
      <div className="ml-auto">
        <i class="far fa-comment-dots fa-2x"></i>
      </div>
    </div>
  ) : (
    statusUser === "/profile" && (
      <div className="d-flex mb-4">
        <p className="h3">Profile</p>
        <div onClick={() => handleModal()} className="ml-auto">
          <i class="far fa-edit fa-2x"></i>
        </div>
      </div>
    )
  );
}
