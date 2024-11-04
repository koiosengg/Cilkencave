import React from "react";
import DivImg from "../../assets/Semiconductor_Chip_Design/DivImg.png";

function Expertise() {
  return (
    <div className="homeContainer homeDelivering">
      <div className="homeDeliveringLeft">
        <div className="homeContainerHeading">
          <p>Silicon Engineering</p>
        </div>
        <img
          src={DivImg}
          alt="Cilkencave emiconductor Chip Design"
          className="SemiconductorDivImg"
        ></img>
      </div>
    </div>
  );
}

export default Expertise;
