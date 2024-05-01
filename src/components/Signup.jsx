import React from "react";
import signup from "../assets/signup.png";
export default function Signup() {
  return (
    <div className="signup">
      <div className="container">
        <div className="content">
          <p className="sub-title">Launching Soon</p>
          <h1 className="title">Transform your workspace</h1>
          <p className="description">
          Transform your world. Experience the VisionX Pro difference today!
          Visit our website or authorized retailers to learn more.
          </p>
          <button>Sign Up</button>
        </div>
        <div className="image-container">
          <div className="image">
            <img src={signup} alt="home image" />
          </div>
          <div className="ellipse-container">
            <div className="ellipse green"></div>
            <div className="ellipse blue"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
