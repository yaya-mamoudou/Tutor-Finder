import React from "react";

export default function LeaveReview() {
  return (
    <div style={{ minHeight: "27%" }} className="bg-white mb-3 rounded p-4">
      <span className="d-flex">
        <textarea
          type="text"
          className="inputStyle mb-3"
          placeholder="Leave your review..."
        />
        <div style={{ width: "20%" }} className="d-flex align-items-start">
          <p style={{ maxWidth: "50%" }}>Rate me:</p>
          <select style={{ maxWidth: "50%" }} name="rating" id="cars">
            <option value="5">&#128519;</option>
            <option value="2.5">&#128529;</option>
            <option value="1">&#128530;</option>
          </select>
        </div>
      </span>

      <button className="btn btn-warning btn-lg p-1 text-white reviewBtn">
        Send{" "}
        <span>
          <i class="far fa-paper-plane"></i>
        </span>
      </button>
    </div>
  );
}
