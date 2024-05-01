import React from "react";
import clients1 from "../assets/clients1.png";
import clients2 from "../assets/clients2.png";
import clients3 from "../assets/clients3.png";
import clients4 from "../assets/clients4.png";
import clients5 from "../assets/clients5.png";

export default function Clients() {
  const data = [clients1, clients2, clients3, clients4, clients5];
  return (
    <div className="client-container">
      <div className="head">
        <h1>We Design,< br /> We Create</h1>
        {/* <div>
          <p>That's why the VisionX Pro comes equipped with advanced eye care technology, including blue light filters and flicker-free performance, to reduce eye strain and fatigue during extended use.</p>
        </div> */}
      </div>
    </div>
  );
}
