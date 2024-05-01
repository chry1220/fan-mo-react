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
            We care about your well-being. <a href="#">OpenSea</a>
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
          <img src={release1} alt="release" />
          {/* <div className="ellipse pink"></div> */}
        </div>
      </div>
      <div className="release blue">
        <div className="card-container">
          <Card
            image={release2}
            series="Gloop Series"
            title="Purple Man"
            price={3.95}
            tag="1094"
            time={2}
          />
          {/* <div className="ellipse orange"></div> */}
        </div>
        <div className="content">
          <h2 className="title">Connectivity at Your Fingertips</h2>
          <p className="description">
          Stay connected to all your devices with a comprehensive range of ports, including HDMI, DisplayPort, and USB-C. Whether you're gaming, streaming, or working, the VisionX Pro has you covered. <a href="#">OpenSea</a>
          </p>
          <p className="description">50% of proceeds go to charity.</p>
          <a href="#" className="link">
            Check them out <BsArrowRight />
          </a>
        </div>
      </div>
    </div>
  );
}
