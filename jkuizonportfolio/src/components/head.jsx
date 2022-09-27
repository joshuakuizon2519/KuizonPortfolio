import React from "react";
import "./head.css";
import profile from "../../src/img/header_profile.jpg";

const head = () => {
  return (
    <div className="box">
        <img className = "profilepic"src={profile} alt="Profile"></img>
        <div className="introduction">
            <h2>Hi!</h2>
            <div className="name">
            <h1>I'm Joshua</h1>
            <p>Computer Science student</p>
            </div>

        </div>
    </div>
  )
}

export default head