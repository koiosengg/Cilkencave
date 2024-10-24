import React from "react";
import ValidationImg from "../../assets/Semiconductor_Chip_Design/Validation and Certification-min.jpeg";

function Validation() {
  return (
    <div className="homeContainer homeDelivering">
      <div className="homeDeliveringLeft">
        <div className="homeContainerHeading">
          <p>
            Validation &<br /> Certification
          </p>
          <div className="homeContainerHeadingH2">
            <h2>Bug Free Designs</h2>
          </div>
        </div>
        <div className="homeDeliveringContent">
          <p className="homeDeliveringContentPara">
            As part of our Post-Silicon Validation (PSV) services, Cilk n Cave
            develops comprehensive High-level Test Plans, reviewed by design
            engineers for accuracy. We craft algorithms for test flow design and
            code, applying software validation techniques to streamline
            schedules and enhance coverage. <br /> Our expertise spans the
            entire silicon realization process, offering a broad range of
            validation services aimed at reducing cost and time while ensuring
            functional coverage. We provide certification marks tailored to meet
            diverse needs, including IPs for AI applications, such as
            specialized DSPs that boost computing efficiency through parallel
            data processing.
          </p>
        </div>
      </div>
      <div className="homeDeliveringRight">
        <img src={ValidationImg} className="homeDeliveringRightMain"></img>
        <div className="homeDeliveringRightContent">
          <h3>Empowering Innovation</h3>
          <p>
            Our advanced solutions help industries grow and adapt to new
            technologies.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Validation;
