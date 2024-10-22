import React from "react";
import CapabilitiesImg from "../../assets/System_Design/CapabilitiesImg.png";

function Capabilities() {
  return (
    <div className="homeContainer productCapabilities">
      <div className="homeContainerHeading">
        <p>Our Capabilities</p>
        <div className="homeContainerHeadingH2">
          <h2>System Design Competencies</h2>
        </div>
      </div>
      <img src={CapabilitiesImg} className="productCapabilitiesImg"></img>
    </div>
  );
}

export default Capabilities;
