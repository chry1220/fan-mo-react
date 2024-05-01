import React from "react";
import eth1 from "../assets/eth1.png";
import eth2 from "../assets/eth2.png";

export default function Like() {
  return (
    <div className="like">
      <div className="container">
        <div className="content">
          <div className="image">
            <img src={eth1} alt="eth1"  width={50} height={50}/>
          </div>
          <h2 className="title">Experience the Future of Visual Excellence</h2>
          <p className="description">
          Upgrade to the VisionX Pro today and revolutionize the way you see the world.
          </p>
          <p className="description">
          It's time to indulge in uncompromising quality and unparalleled performance. Don't settle for anything less than perfection.
          </p>
        </div>
        <div className="content">
          <div className="image">
            <img src={eth2} alt="eth2" width={50} height={50}/>
          </div>
          <h2 className="title">Limited Time Offer</h2>
          <p className="description">
          For a limited time only, enjoy special discounts and exclusive offers on the VisionX Pro
          </p>
          <p className="description">
          Don't miss out on this opportunity to elevate your viewing experience to new heights!
          </p>
        </div>
      </div>
    </div>
  );
}
