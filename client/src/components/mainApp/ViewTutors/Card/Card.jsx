import React from "react";
import { Link } from "react-router-dom";
import LinesEllipsis from "react-lines-ellipsis";
import "./card.css";
const PF = "http://localhost:5000/images/";

function Card({ tut }) {
  const clickHandle = (tut) => {
    localStorage.setItem("id", tut._id);
    localStorage.setItem("tel", tut.tel);
    localStorage.setItem("username", tut.username);
    localStorage.setItem("bio", tut.bio);
    localStorage.setItem("status", tut.status);
    localStorage.setItem("email", tut.email);
    localStorage.setItem("gender", tut.gender);
    localStorage.setItem("speciality", tut.speciality);
    localStorage.setItem("location", tut.location);
    localStorage.setItem("profilePic", tut.profilePic);
  };
  return (
    <div className="case">
      <div className="avail">
        <div className="able">available</div>
        <div className="price">
          <h2>$55/hr</h2>
        </div>
      </div>
      <div className="logo">
        <img
          src={
            tut.profilePic === ""
              ? "http://www.iconarchive.com/download/i102645/graphicloads/flat-finance/person.ico"
              : PF + tut.profilePic
          }
          className="pic"
          alt=""
        />
      </div>
      <div className="nom">
        <h2>{tut.username} </h2>
        <p className="pro">{tut.email}</p>
      </div>
      <div className="box">
        {tut.speciality.split(",").map((e) => (
          <div className="props3">{e}</div>
        ))}

        <div className="props4">+1</div>
      </div>
      <div className="bio">
        <LinesEllipsis
          className="pro1"
          text={tut.bio}
          maxLine="2"
          ellipsis="..."
          trimRight
          basedOn="letters"
        />
      </div>
      <footer>
        <Link
          className="view-box"
          onClick={() => clickHandle(tut)}
          to={{
            pathname: "/tut/profile",
          }}
        >
          <button className="h3 viewProfileBtn">VIEW PROFILE</button>
        </Link>
      </footer>
    </div>
  );
}

export default Card;
