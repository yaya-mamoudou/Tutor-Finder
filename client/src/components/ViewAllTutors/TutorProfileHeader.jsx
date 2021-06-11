import React from "react";

export default function TutorProfileHeader() {
  return (
    <div className="d-flex mb-4">
      <p className="h3">Profile</p>
      <div className="ml-auto">
        <i class="far fa-edit text-warning fa-2x"></i>
        <i class="far fa-comment-dots text-info fa-2x"></i>
      </div>
    </div>
  );
}
