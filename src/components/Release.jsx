import React from "react";
import { BsArrowRight } from "react-icons/bs";
import release1 from "../assets/release1.png";
import release2 from "../assets/release2.png";
import Card from "./Card";

export default function Release() {
  return (
    <div className="releases">
      <div className="release lightblue">
        <div className="content">
          <h2 className="title">Eye Care Technology</h2>
          <p className="description">
            We care about your well-being.
          </p>
          <p className="description">
            That's why the VisionX Pro comes equipped with advanced eye care technology, including blue light filters and flicker-free performance, to reduce eye strain and fatigue during extended use.
          </p>
          <p className="description">50% of proceeds go to charity.</p>
          <a href="#" className="link">
            Check them out <BsArrowRight />
          </a>
        </div>
        <div className="image">
          <img src={release2} alt="release" />
          {/* <div className="ellipse pink"></div> */}
        </div>
      </div>
    </div>
  );
}
