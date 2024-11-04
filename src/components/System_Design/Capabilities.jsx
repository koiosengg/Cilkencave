import React from "react";
import CapabilitiesImg from "../../assets/System_Design/CapabilitiesImg.png";

function Capabilities() {
  return (
    <div className="homeContainer homeDelivering">
      <div className="homeDeliveringLeft">
        <div className="homeContainerHeading">
          <p>Our Capabilities</p>
        </div>
        <div className="homeDeliveringContent">
          <p className="homeDeliveringContentPara">
            At Cilckencave, we design, develop and innovate to deliver results
            for our local and global clients from Industry 4.0/IIoT, Automotive
            & Mobility, Connectivity & Networking, Aerospace & Defense and
            Healthcare segments. We help customer to speed up time-to-market and
            deliver complex tasks in the areas of design engineering, System
            Software, Embedded FW/SW and Hardware.
          </p>
        </div>
        <img
          src={CapabilitiesImg}
          alt="Cilkencave Capabilities"
          className="productCapabilitiesImg"
        ></img>
      </div>
    </div>
  );
}

export default Capabilities;
