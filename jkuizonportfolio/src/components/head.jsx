import React from "react";
import "./head.css";
import profile from "../../src/img/header-profile2.jpg";
import arrow from "../../src/img/down-arrow.png";

const head = () => {
  return (
    <div className="box">
      <div className="flexhead">
        <img className = "profilepic"src={profile} alt="Profile pic"></img>
          <div className="introduction">
              <h2>Hi!</h2>
              <div className="name">
              <h1>I'm Joshua</h1>
              <p>Computer Science student</p>
              </div>
          </div>
        </div>
        <div className="position">
          <img className="down-arrow" src = {arrow} alt= "down arrow icon"></img>
        </div>
    </div>
  )
}

export default head