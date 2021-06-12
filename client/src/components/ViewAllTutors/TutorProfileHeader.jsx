import React, { useEffect, useState, createRef } from "react";

// console.log(Object.is(activePath, "/tut/profile"));
export default function TutorProfileHeader({ status, setref }) {
  const [statusUser, setstatusUser] = useState("");
  const headerRef = createRef();

  useEffect(async () => {
    let activePath = await window.location.pathname;
    await setstatusUser(activePath);
  }, []);

  // useEffect(async () => {
  //   if ((await headerRef.current) && headerRef.current.clientHeight) {
  //     setref(headerRef.current.clientHeight);
  //   } else {
  //   }
  // }, [headerRef]);

  return statusUser === "/tut/profile" ? (
    <div ref={headerRef} className="d-flex mb-4">
      <p className="h3">Profile</p>
      <div className="ml-auto">
        <i class="far fa-comment-dots fa-2x"></i>
      </div>
    </div>
  ) : (
    statusUser === "/profile" && (
      <div ref={headerRef} className="d-flex mb-4">
        <p className="h3">Profile</p>
        <div className="ml-auto">
          <i class="far fa-edit fa-2x"></i>
        </div>
      </div>
    )
  );
}
