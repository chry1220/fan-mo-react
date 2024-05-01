import React from "react";
import home from "../assets/home.png";
export default function Home() {
  return (
    <div className="home">
      <div className="container">
        <div className="content">
        <div className="image">
            <img src={home} alt="home image" />
          </div>
          <div className="ellipse-container">
            <div className="ellipse blue"></div>
            <div className="ellipse green"></div>
          </div>
        </div>
        <div className="image-container">
          <p className="sub-title">Launching Soon</p>
          <h1 className="title">Crystal-Clear Display</h1>
          <p className="description">
            Immerse yourself in lifelike images with our ultra-HD 4K resolution. 
            Every detail pops with breathtaking clarity, making your favorite movies, games, 
            and projects come alive like never before.
          </p>
          <button>Sign Up</button>
        </div>
      </div>
    </div>
  );
}
