import React from "react";

export default function LeaveReview() {
  return (
    <div style={{ minHeight: "27%" }} className="bg-white mb-3 rounded p-4">
      <input
        type="text"
        className="inputStyle mb-3"
        placeholder="Leave your review..."
      />
      <br />
      <button className="btn btn-warning btn-lg p-1 text-white reviewBtn">
        Send{" "}
        <span>
          <i class="far fa-paper-plane"></i>
        </span>
      </button>
    </div>
  );
}
