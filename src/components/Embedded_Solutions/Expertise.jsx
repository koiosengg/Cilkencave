import React from 'react'
import DivImg from "../../assets/Embedded_Solutions/DivImg.png";

function Expertise() {
  return (
    <div className="homeContainer homeDelivering">
      <div className="homeDeliveringLeft">
        <div className="homeContainerHeading">
          <p>Embedded Solutions Expertise</p>
          <div className="homeContainerHeadingH2">
            <h2>Design to Development across the verticals</h2>
          </div>
        </div>
        <div className="homeDeliveringContent">
          <p className="homeDeliveringContentPara">
            We accelerate the R&D cycle and drives new product development. Our
            portfolio includes system architecture as well as design,
            development, product validation, and testing for Embedded Solutions
            across a variety of hardware platforms.
          </p>
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

export default Expertise
